//import "./globals.css?v=1.0.6";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: "Webora Lab | Web & App Development Company",
  description: "Webora Lab is a modern web and app development company delivering fast, responsive, and scalable digital solutions using modern technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${interTight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
