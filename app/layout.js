// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Head from "next/head";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Nestlink.org",
  description: "Cutting-edge digital solutions",
  favicon: "/DarkLogo.png", // Your PNG favicon
};

export default function RootLayout({ children, title, favicon }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Page title */}
        <title>{title || metadata.title}</title>

        {/* Meta description */}
        <meta name="description" content={metadata.description} />

        {/* Favicon */}
        <link rel="icon" type="image/png" href={favicon || metadata.favicon} />

        {/* Optional: multiple sizes for better device support */}
        <link rel="icon" type="image/png" sizes="32x32" href={favicon || metadata.favicon} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon || metadata.favicon} />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
