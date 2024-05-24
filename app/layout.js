import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khaled Ghonim CarHub's Site",
  description: "Website desgined and published by Khaled Ghonim",
  icons: {
    icon: "/images/KGlogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="auto">

        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
