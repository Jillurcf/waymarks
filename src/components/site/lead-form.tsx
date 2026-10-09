"use client";

import * as React from "react";
import { ArrowRight, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contactForm } from "@/lib/content/contact";
import { bookCallHref, site } from "@/lib/content/site";

/**
 * Lead form (FR-12 / BR-3).
 *
 * Static-export safe: there is no server runtime, so the form POSTs JSON to a
 * static-compatible provider configured through `NEXT_PUBLIC_FORM_ENDPOINT`
 * (see .env.example). Until that endpoint exists it composes a prefilled
 * `mailto:` instead, so the flow never dead-ends. Either way the user gets a
 * success or error state announced through a polite live region, and every
 * field validates before anything is sent.
 *
 * Submission shape (SRS §7): `{ name, email, company, service, budget, message, _honeypot }`.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim() ?? "";

/** 15s cap so a slow provider degrades to the error state, never a hang. */
const TIMEOUT_MS = 15_000;

type Values = Record<string, string>;
type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: Values = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
  _honeypot: "",
};

// Deliberately permissive: the only job is catching typos, not policing the
// RFC. Real deliverability is proven by the reply, not by this regex.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = contactForm.errors.name;
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = contactForm.errors.email;
  }
  if (values.message.trim().length < 10) errors.message = contactForm.errors.message;
  return errors;
}

/** Compose the fallback mailto: from the submitted values (SRS §6). */
function mailtoHref(values: Values): string {
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company || "—"}`,
    `Service needed: ${values.service || "—"}`,
    `Budget range: ${values.budget || "—"}`,
    "",
    values.message,
  ].join("\n");

  return `mailto:${site.email}?subject=${encodeURIComponent(
    `Project enquiry — ${values.name.trim()}`,
  )}&body=${encodeURIComponent(body)}`;
}

/** Inputs sit on white/5 with a white/10 border; focus moves to primary. */
const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors duration-200 placeholder:text-white/40 focus:border-waymarks-primary focus-visible:border-waymarks-primary disabled:opacity-60";

function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-semibold text-white"
    >
      {children}
      {optional && (
        <span className="ml-2 text-xs font-normal text-muted-foreground">
          Optional
        </span>
      )}
    </label>
  );
}

export function LeadForm() {
  const [values, setValues] = React.useState<Values>(EMPTY);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const statusRef = React.useRef<HTMLParagraphElement>(null);

  const submitting = status === "submitting";

  function update(field: keyof Values) {
    return (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      // Clear a field's error as soon as it is edited, so the form stops
      // shouting while the visitor is fixing it.
      setErrors((current) => {
        if (!(field in current)) return current;
        const next = { ...current };
        delete next[field as keyof Errors];
        return next;
      });
    };
  }

  // Move focus to the status region so success/failure is announced as well as
  // rendered (NFR-2: ARIA where needed).
  React.useEffect(() => {
    if (status === "success" || status === "error") statusRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      return;
    }

    // Honeypot filled → a bot. Report success and send nothing, so the bot gets
    // no signal about why it failed.
    if (values._honeypot) {
      setValues(EMPTY);
      setStatus("success");
      return;
    }

    setStatus("submitting");

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      service: values.service,
      budget: values.budget,
      message: values.message.trim(),
      _honeypot: "",
    };

    // No provider configured yet: hand the enquiry to the visitor's mail client
    // rather than dropping it (architecture.md §Static export rules).
    if (!ENDPOINT) {
      window.location.href = mailtoHref(values);
      setStatus("success");
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`Form endpoint responded ${response.status}`);
      setValues(EMPTY);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timer);
    }
  }

  const done = status === "success";

  return (
    <div className="rounded-3xl max-w-xl border border-white/10 bg-card p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {contactForm.title}
      </h2>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
        {contactForm.intro}
      </p>

      {done ? (
        <div
          ref={statusRef}
          role="status"
          aria-live="polite"
          tabIndex={-1}
          className="mt-8 rounded-2xl border border-waymarks-accent/40 bg-waymarks-accent/10 p-6 outline-none"
        >
          <p className="text-lg font-bold text-white">{contactForm.successTitle}</p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {contactForm.successBody}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm font-semibold text-waymarks-accent underline-offset-4 hover:text-waymarks-primary hover:underline"
          >
            {contactForm.mailtoFallbackLabel}
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="contact-name">{contactForm.fields.name.label}</Label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete={contactForm.fields.name.autoComplete}
                placeholder={contactForm.fields.name.placeholder}
                value={values.name}
                onChange={update("name")}
                disabled={submitting}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={cn(fieldClass, errors.name && "border-destructive")}
              />
              {errors.name && (
                <p id="contact-name-error" className="mt-2 text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="contact-email">{contactForm.fields.email.label}</Label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete={contactForm.fields.email.autoComplete}
                placeholder={contactForm.fields.email.placeholder}
                value={values.email}
                onChange={update("email")}
                disabled={submitting}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={cn(fieldClass, errors.email && "border-destructive")}
              />
              {errors.email && (
                <p id="contact-email-error" className="mt-2 text-sm text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="contact-company" optional>
                {contactForm.fields.company.label}
              </Label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete={contactForm.fields.company.autoComplete}
                placeholder={contactForm.fields.company.placeholder}
                value={values.company}
                onChange={update("company")}
                disabled={submitting}
                className={fieldClass}
              />
            </div>

            <div>
              <Label htmlFor="contact-service" optional>
                {contactForm.fields.service.label}
              </Label>
              <select
                id="contact-service"
                name="service"
                value={values.service}
                onChange={update("service")}
                disabled={submitting}
                className={cn(fieldClass, "appearance-none")}
              >
                <option value="">{contactForm.fields.service.placeholder}</option>
                {contactForm.serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
                <option value={contactForm.notSureService}>
                  {contactForm.notSureService}
                </option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="contact-budget" optional>
              {contactForm.budgetLabel}
            </Label>
            <select
              id="contact-budget"
              name="budget"
              value={values.budget}
              onChange={update("budget")}
              disabled={submitting}
              className={cn(fieldClass, "appearance-none")}
            >
              <option value="">{contactForm.budgetPlaceholder}</option>
              {contactForm.budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="contact-message">{contactForm.fields.message.label}</Label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder={contactForm.fields.message.placeholder}
              value={values.message}
              onChange={update("message")}
              disabled={submitting}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "contact-message-error contact-privacy" : "contact-privacy"
              }
              className={cn(
                fieldClass,
                "resize-y",
                errors.message && "border-destructive",
              )}
            />
            {errors.message && (
              <p id="contact-message-error" className="mt-2 text-sm text-destructive">
                {errors.message}
              </p>
            )}
            <p id="contact-privacy" className="mt-2 text-xs text-muted-foreground">
              {contactForm.privacyNote}
            </p>
          </div>

          {/* Honeypot: off-screen, not display-none, so bots still fill it. */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
            <label htmlFor="contact-website">{contactForm.honeypotLabel}</label>
            <input
              id="contact-website"
              name="_honeypot"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values._honeypot}
              onChange={update("_honeypot")}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              disabled={submitting}
              className="waymarks-cta-gradient h-12 w-full gap-2 rounded-full px-8 text-base font-semibold text-waymarks-dark hover:-translate-y-0.5"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  {contactForm.sendingLabel}
                </>
              ) : (
                <>
                  {contactForm.submitLabel}
                  <Send className="size-4" aria-hidden="true" />
                </>
              )}
            </Button>

            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-muted-foreground">
              <span>{contactForm.preferTalk}</span>
              <a
                href={bookCallHref}
                className="waymarks-gradient-text inline-flex items-center gap-1 font-semibold transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {contactForm.bookCallLabel}
                <ArrowRight className="size-4 text-waymarks-accent" aria-hidden="true" />
              </a>
            </p>

            <p
              ref={statusRef}
              role="status"
              aria-live="polite"
              tabIndex={-1}
              className={cn(
                "text-sm outline-none",
                status === "error" ? "text-destructive" : "sr-only",
              )}
            >
              {status === "error" ? contactForm.errorBody : ""}
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
