import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const soraMono = Sora({
  variable: "--font-sora-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klinik 24/7",
  description: "Your one-stop clinic for all medical needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${soraMono.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
