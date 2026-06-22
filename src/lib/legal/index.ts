import type { Locale } from "@/lib/i18n";
import { privacyDe } from "./privacy-de";
import { privacyEn } from "./privacy-en";
import { termsDe } from "./terms-de";
import { termsEn } from "./terms-en";
import type { LegalDocumentContent } from "./types";

export type { LegalDocumentContent, LegalSection } from "./types";

export function getPrivacyContent(locale: Locale): LegalDocumentContent {
  return locale === "en" ? privacyEn : privacyDe;
}

export function getTermsContent(locale: Locale): LegalDocumentContent {
  return locale === "en" ? termsEn : termsDe;
}
