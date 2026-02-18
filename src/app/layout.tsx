import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "MOLEVENT.TECH — System Architecture Interface",
    template: "%s | MOLEVENT.TECH",
  },
  description:
    "Molevent Tech — We build digital systems, architecture, and interfaces. Web development, AI & LLM solutions, cloud architecture, telemedicine, and mental health platforms. Based in Chiang Mai, operating globally. Established 2026.",
  keywords: [
    "Molevent Tech",
    "web development",
    "system architecture",
    "AI solutions",
    "LLM",
    "RAG",
    "cloud architecture",
    "telemedicine",
    "mental health app",
    "UI/UX design",
    "Chiang Mai",
    "Thailand",
    "software company",
  ],
  authors: [{ name: "Molevent Tech", url: "https://molevent.tech" }],
  creator: "Molevent Tech",
  publisher: "Molevent Tech",
  metadataBase: new URL("https://molevent.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://molevent.tech",
    siteName: "MOLEVENT.TECH",
    title: "MOLEVENT.TECH — System Architecture Interface",
    description:
      "We build digital systems, architecture, and interfaces. Web development, AI & LLM, cloud architecture, telemedicine, and more. Based in Chiang Mai, operating globally.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MOLEVENT.TECH — System. Architecture. Interface.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOLEVENT.TECH — System Architecture Interface",
    description:
      "We build digital systems, architecture, and interfaces. Web development, AI & LLM, cloud architecture, telemedicine, and more.",
    images: ["/og-image.svg"],
    creator: "@moleventtech",
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-display`}
      >
        {children}
      </body>
    </html>
  );
}
