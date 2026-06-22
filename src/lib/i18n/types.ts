export type NavItem = {
  label: string;
  href: string;
  sectionId: string;
};

export type HighlightItem = {
  id: string;
  index: string;
  title: string;
  description: string;
  href: string;
};

export type GalleryItemCopy = {
  imageKey: string;
  caption: string;
};

export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    skipLink: string;
  };
  nav: {
    items: NavItem[];
    cta: { label: string; href: string };
    menuOpen: string;
    menuClose: string;
    mainLabel: string;
    mobileLabel: string;
  };
  banner: {
    closedSunday: string;
    openWeekday: string;
    closedWeekday: string;
    openWeekend: string;
    closedWeekend: string;
    hoursShort: string;
  };
  hero: {
    location: string;
    subtitle: string;
    tagline: string;
    menu: string;
    reserve: string;
  };
  welcome: {
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  highlights: {
    items: HighlightItem[];
    more: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    open: string;
    close: string;
    prev: string;
    next: string;
    dialog: string;
    items: GalleryItemCopy[];
  };
  menu: {
    title: string;
    subtitle: string;
    searchLabel: string;
    searchPlaceholder: string;
    popular: string;
    popularHint: string;
    popularOpen: string;
    noResults: string;
    popularBadge: string;
    categoriesLabel: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    contact: string;
    hours: string;
    call: string;
    mapTitle: string;
    directions: string;
    whatsapp: string;
    hoursWeekdays: string;
    hoursWeekend: string;
  };
  footer: {
    privacy: string;
    terms: string;
    call: string;
    rights: string;
  };
  mobileBar: {
    label: string;
    menu: string;
    call: string;
    email: string;
    route: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
  locale: {
    switchToEn: string;
    switchToDe: string;
    current: string;
  };
  whatsapp: {
    message: string;
    ariaLabel: string;
  };
  legal: {
    privacyTitle: string;
    privacyBody: string;
    termsTitle: string;
    termsBody: string;
  };
};
