import type { Metadata, Viewport } from "next";
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import i from '@/assets/images/icons/cpp.svg'

const jetBrains_Mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500']
})

export const metadata: Metadata = {
  title: "Shobhit | Portfolio"
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){
  return (
    <html lang="en">
      <body className={jetBrains_Mono.className} style={{maxHeight:'100vh'}}>
        {children}
      </body>
    </html>
  );
}
