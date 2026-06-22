import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmokeCursor } from "@/components/effects/SmokeCursor";
import { WelcomeModal } from "@/components/classic/WelcomeModal";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        {children}
        <WelcomeModal />
        <SmokeCursor />
      </LocaleProvider>
    </ThemeProvider>
  );
}
