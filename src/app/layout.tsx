import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'sonner';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat } from 'next/font/google'


export const metadata: Metadata = {
  title: "Karan.Dev",
  description: "Karan's personal website",
};

const mont = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.className} antialiased`}
      >
        <Analytics />
        <SpeedInsights />
                <Toaster />


        {children}
      </body>
    </html>
  );
}
