import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Allura,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});
const allura = Allura({

  subsets:["latin"],

  weight:["400"],

  variable:"--font-script",

});
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Арсен & Согдиана",
  description: "Свадебное приглашение",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
 className={`
 ${cormorant.variable}
 ${manrope.variable}
${allura.variable}
 antialiased
 `}
>
        {children}
      </body>
    </html>
  );
}