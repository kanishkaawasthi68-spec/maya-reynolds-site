import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-heading-src",
});

const body = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body-src",
});

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-src",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Therapy",
  description: "Placeholder, baad me SEO copy se badlenge",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}