//import "./globals.css?v=1.0.6";
import PasswordGate from "@/components/PasswordGate";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal Billing Tool",
  description: "Personal Billing Tool for generating bills quickly and easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${interTight.variable} antialiased`}
      >
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  );
}
