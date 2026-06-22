"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useTheme, type Theme } from "@/components/providers/ThemeProvider";
import { switchLocalePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const WELCOME_SEEN_KEY = "deluxe-welcome-seen";

const welcomeListeners = new Set<() => void>();

function emitWelcomeChange() {
  welcomeListeners.forEach((listener) => listener());
}

function subscribeWelcome(listener: () => void) {
  welcomeListeners.add(listener);
  return () => welcomeListeners.delete(listener);
}

function getWelcomeOpenSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(WELCOME_SEEN_KEY) !== "1";
  } catch {
    return false;
  }
}

function getWelcomeClosedSnapshot(): boolean {
  return false;
}

function subscribeNoop() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function WelcomeModal() {
  const isClient = useSyncExternalStore(
    subscribeNoop,
    getClientSnapshot,
    getServerSnapshot
  );

  const shouldShow = useSyncExternalStore(
    subscribeWelcome,
    getWelcomeOpenSnapshot,
    getWelcomeClosedSnapshot
  );

  const pathname = usePathname();
  const router = useRouter();
  const { dict, locale } = useLocale();
  const { theme, setTheme } = useTheme();

  const [pendingLocale, setPendingLocale] = useState<Locale>(locale);
  const [pendingTheme, setPendingTheme] = useState<Theme>(theme);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(WELCOME_SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
    emitWelcomeChange();
  }, []);

  const handleContinue = useCallback(() => {
    if (pendingLocale !== locale) {
      router.push(switchLocalePath(pathname, pendingLocale));
    }
    dismiss();
  }, [pendingLocale, locale, pathname, router, dismiss]);

  const selectTheme = useCallback(
    (next: Theme) => {
      setPendingTheme(next);
      setTheme(next);
    },
    [setTheme]
  );

  useEffect(() => {
    if (!shouldShow) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [shouldShow, dismiss]);

  if (!isClient || !shouldShow) return null;

  const copy = dict.welcomeModal;

  return (
    <div
      className="welcome-modal-overlay"
      role="presentation"
      onClick={dismiss}
    >
      <div
        className="welcome-modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <Logo variant="md" />
          <h2
            id="welcome-modal-title"
            className="welcome-modal-title mt-6"
          >
            {copy.title}
          </h2>
          <p className="welcome-modal-subtitle mt-2">{copy.subtitle}</p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <p className="welcome-modal-label">{copy.language}</p>
            <div
              className="welcome-modal-options mt-2"
              role="group"
              aria-label={copy.language}
            >
              <button
                type="button"
                className={cn(
                  "welcome-modal-option",
                  pendingLocale === "de" && "welcome-modal-option-active"
                )}
                aria-pressed={pendingLocale === "de"}
                onClick={() => setPendingLocale("de")}
              >
                Deutsch
              </button>
              <button
                type="button"
                className={cn(
                  "welcome-modal-option",
                  pendingLocale === "en" && "welcome-modal-option-active"
                )}
                aria-pressed={pendingLocale === "en"}
                onClick={() => setPendingLocale("en")}
              >
                English
              </button>
            </div>
          </div>

          <div>
            <p className="welcome-modal-label">{copy.theme}</p>
            <div
              className="welcome-modal-options mt-2"
              role="group"
              aria-label={copy.theme}
            >
              <button
                type="button"
                className={cn(
                  "welcome-modal-option",
                  pendingTheme === "dark" && "welcome-modal-option-active"
                )}
                aria-pressed={pendingTheme === "dark"}
                onClick={() => selectTheme("dark")}
              >
                {copy.dark}
              </button>
              <button
                type="button"
                className={cn(
                  "welcome-modal-option",
                  pendingTheme === "light" && "welcome-modal-option-active"
                )}
                aria-pressed={pendingTheme === "light"}
                onClick={() => selectTheme("light")}
              >
                {copy.light}
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn-primary welcome-modal-continue mt-8 w-full"
          onClick={handleContinue}
        >
          {copy.continue}
        </button>
      </div>
    </div>
  );
}
