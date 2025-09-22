import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

// ✅ Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// ✅ Metadata is automatically injected in App Router
export const metadata = {
  title: "Nestlink.org",
  description: "Cutting-edge digital solutions",
  icons: {
    icon: "/DarkLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
