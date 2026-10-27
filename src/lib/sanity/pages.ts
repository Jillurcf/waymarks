import { fetchSanitySingle, isSanityConfigured } from "./client";
import * as aboutContent from "../content/about";
import * as servicesContent from "../content/services";
import * as blogContent from "../content/blog";
import * as contactContent from "../content/contact";

export async function getAboutContent() {
  if (!isSanityConfigured()) return aboutContent;
  try {
    const query = `*[_type == "aboutPage"][0]`;
    const cmsData = await fetchSanitySingle<Record<string, unknown>>(query);
    if (!cmsData) return aboutContent;
    return { ...aboutContent, ...cmsData };
  } catch {
    return aboutContent;
  }
}

export async function getServicesContent() {
  if (!isSanityConfigured()) return servicesContent;
  try {
    const query = `*[_type == "servicesPage"][0]`;
    const cmsData = await fetchSanitySingle<Record<string, unknown>>(query);
    if (!cmsData) return servicesContent;
    return { ...servicesContent, ...cmsData };
  } catch {
    return servicesContent;
  }
}

export async function getBlogContent() {
  if (!isSanityConfigured()) return blogContent;
  try {
    const query = `*[_type == "blogPage"][0]`;
    const cmsData = await fetchSanitySingle<Record<string, unknown>>(query);
    if (!cmsData) return blogContent;
    return { ...blogContent, ...cmsData };
  } catch {
    return blogContent;
  }
}

export async function getContactContent() {
  if (!isSanityConfigured()) return contactContent;
  try {
    const query = `*[_type == "contactPage"][0]`;
    const cmsData = await fetchSanitySingle<Record<string, unknown>>(query);
    if (!cmsData) return contactContent;
    return { ...contactContent, ...cmsData };
  } catch {
    return contactContent;
  }
}
