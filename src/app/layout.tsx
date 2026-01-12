import type { Metadata } from "next";
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';

const jetBrains_Mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500']
})

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){
  return (
    <html lang="en">
      <body className={jetBrains_Mono.className}>
        {children}
      </body>
    </html>
  );
}
