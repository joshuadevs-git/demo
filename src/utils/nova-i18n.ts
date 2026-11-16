
import copy from "@data/i18n/nova.json";

export type NovaLocale = "en";

export function getNovaCopy(_locale: NovaLocale = "en") {
  return copy.en;
}

export function getNovaSectionCopy(
  _locale: NovaLocale,
  dataKey?: string
) {
  if (!dataKey) return undefined;

  return getNovaCopy().sections[
    dataKey as keyof typeof copy.en.sections
  ];
}

function withNovaBase(path: string): string {
  const configuredBase = process.env.PUBLIC_BASE_PATH || import.meta.env.BASE_URL;

  const base =
    configuredBase === "/"
      ? ""
      : `/${configuredBase.replace(/^\/+|\/+$/g, "")}`;

  return `${base}${path}` || "/";
}

export function getNovaLocalePath(_locale: NovaLocale = "en"): string {
  return withNovaBase("/");
}

export function getNovaNavigationPath(
  href: string,
  _locale: NovaLocale = "en"
): string {
  if (
    href.startsWith("#") ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  const normalized = href.startsWith("/") ? href : `/${href}`;

  return withNovaBase(normalized);
}
