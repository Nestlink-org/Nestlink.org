import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
    <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html> 
  );
}
