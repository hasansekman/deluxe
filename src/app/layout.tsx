import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { SITE } from "@/lib/constants";
import { AppProviders } from "@/components/providers/AppProviders";
import { ThemeScript } from "@/components/providers/ThemeScript";
import {
  ClassicHeader,
  ClassicFooter,
  OpeningBanner,
  WhatsAppButton,
  MobileActionBar,
  SkipLink,
} from "@/components/classic";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: SITE.shortName,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE.shortName,
  },
  formatDetection: {
    telephone: true,
  },
  icons: {
    icon: "/images/deluxe-logo.png",
    apple: "/images/deluxe-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${dmSerif.variable} h-full`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full bg-bg pb-[3.75rem] font-sans text-text antialiased md:pb-0">
        <AppProviders>
          <SkipLink />
          <OpeningBanner />
          <ClassicHeader />
          <main id="main-content">{children}</main>
          <ClassicFooter />
          <WhatsAppButton />
          <MobileActionBar />
        </AppProviders>
      </body>
    </html>
  );
}
