import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmokeCursor } from "@/components/effects/SmokeCursor";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        {children}
        <SmokeCursor />
      </LocaleProvider>
    </ThemeProvider>
  );
}
