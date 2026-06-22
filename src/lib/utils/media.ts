/** Breakpoints aligned with HF-001 grid */
export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
} as const;

export function isMobileViewport(width: number): boolean {
  return width < breakpoints.mobile;
}
