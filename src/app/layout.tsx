import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ParticlesCursor } from "@/components/particles-cursor";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  icons: {
    icon: "/round_ananya.png",
    shortcut: "/round_ananya.png",
    apple: "/round_ananya.png",
  },
  openGraph: {
    title: "Ananya V Hegde – Full-Stack Developer",
    description:
      "Portfolio of Ananya – React/Next.js developer with experience in scalable web/mobile apps.",
    url: "https://ananyavhegde.vercel.app",
    siteName: "Ananya's Portfolio",
    images: [
      {
        url: "/preview.png", // ✅ must be relative or full absolute URL
        width: 1200,
        height: 630,
        alt: "Preview of Ananya's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.description,
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
  <ThemeProvider>
          <TooltipProvider delayDuration={0}>
            <ParticlesCursor />
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
