export {
  DEFAULT_LOCALE,
  LOCALES,
  isLocale,
  type Locale,
} from "./config";
export { getDictionary, type Dictionary } from "./get-dictionary";
export {
  homeHref,
  localeFromPathname,
  localePath,
  localePrefix,
  switchLocalePath,
} from "./paths";
export { getLocalizedMenuTabs, getLocalizedTabLabel } from "./menu";
