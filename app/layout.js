import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./_compoents/Footer";
import Navbar from "./_compoents/Navbar";
import { StoreProvider } from "../Redux/StoreProvider";

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
        <body className={inter.className}>
          <StoreProvider>
            <Navbar />
            {children}
            <Footer />
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
