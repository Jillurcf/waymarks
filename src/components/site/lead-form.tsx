"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { finalCta, formOptions } from "@/lib/content/home";
import { site } from "@/lib/content/site";

// Lead form (Section 14). Static-export compatible:
// 1. If NEXT_PUBLIC_FORM_ENDPOINT is set, POST JSON to the form service
//    (Formspree/Web3Forms — see docs/architecture.md TBD-1).
// 2. Otherwise (and on any failure) fall back to a prefilled mailto link.
// Honeypot field traps bots without any user-visible effect.

const inputClass =
  "h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive";

const labelClass = "mb-1.5 block text-sm font-medium";

const fieldErrorClass =
  "mt-1.5 text-xs text-destructive";

type Errors = Partial<
  Record<"name" | "email" | "message", string>
>;

export function LeadForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = React.useState<Errors>({});
  const honeypotRef = React.useRef<HTMLInputElement>(null);

  function validate(form: FormData) {
    const next: Errors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) {
      next.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "That email doesn't look right — please check it.";
    }
    if (!message) next.message = "Tell us a little about your project.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: pretend success, never process.
    if (honeypotRef.current?.value) {
      setStatus("success");
      form.reset();
      return;
    }

    const next = validate(formData);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      service: String(formData.get("service") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
    };

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
        setStatus("success");
        form.reset();
        return;
      } catch {
        // fall through to mailto fallback
      }
    }

    // Mailto fallback (AC-NFR4-1).
    const subject = encodeURIComponent(
      `Project enquiry from ${payload.name}${payload.company ? ` (${payload.company})` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company || "—"}`,
        `Service: ${payload.service}`,
        `Budget: ${payload.budget}`,
        "",
        payload.message,
      ].join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  const inputProps = (field: keyof Errors) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className={labelClass}>
            Full name <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            className={cn(inputClass, errors.name && "aria-invalid:border-destructive")}
            {...inputProps("name")}
          />
          {errors.name ? (
            <p id="name-error" className={fieldErrorClass}>{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="lead-email" className={labelClass}>
            Work email <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClass}
            {...inputProps("email")}
          />
          {errors.email ? (
            <p id="email-error" className={fieldErrorClass}>{errors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-company" className={labelClass}>
            Company
          </label>
          <input
            id="lead-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Inc"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lead-service" className={labelClass}>
            What do you need help with?
          </label>
          <select id="lead-service" name="service" className={inputClass} defaultValue={formOptions.services[5]}>
            {formOptions.services.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lead-budget" className={labelClass}>
          Project budget
        </label>
        <select id="lead-budget" name="budget" className={inputClass} defaultValue={formOptions.budgets[4]}>
          {formOptions.budgets.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="lead-message" className={labelClass}>
          Tell us about your project <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={5}
          placeholder="What are you building, who is it for, and what does success look like?"
          className={cn(
            inputClass,
            "h-auto min-h-28 resize-y py-2.5",
            errors.message && "aria-invalid:border-destructive",
          )}
          {...inputProps("message")}
        />
        {errors.message ? (
          <p id="message-error" className={fieldErrorClass}>{errors.message}</p>
        ) : null}
      </div>

      {/* Honeypot — hidden from users and screen readers */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div aria-live="polite" className="grid gap-3">
        {status === "success" ? (
          <p
            role="status"
            className="rounded-lg border border-waymark-primary/40 bg-waymark-primary/10 px-4 py-3 text-sm text-waymark-deep"
          >
            <strong>{finalCta.successTitle}</strong> {finalCta.successBody}
          </p>
        ) : null}
        {status === "error" && Object.keys(errors).length > 0 ? (
          <p
            role="alert"
            className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            Please fix the highlighted fields and try again.
          </p>
        ) : null}
        {status === "error" && Object.keys(errors).length === 0 ? (
          <p
            role="alert"
            className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            Something went wrong. You can also email us directly at {site.email}.
          </p>
        ) : null}
        <Button
          type="submit"
          size="lg"
          className="w-full bg-waymark-primary text-foreground hover:bg-waymark-primary/85 sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : finalCta.submitLabel}
        </Button>
      </div>
    </form>
  );
}