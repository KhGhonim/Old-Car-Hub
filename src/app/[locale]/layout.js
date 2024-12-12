import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "app/_compoents/Footer";
import Navbar from "app/_compoents/Navbar";
import { StoreProvider } from "../../Redux/StoreProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "i18n/routing";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khaled Ghonim CarHub's Site",
  description: "Website desgined and published by Khaled Ghonim",
  icons: {
    icon: "/images/KGlogo.png",
  },
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <ClerkProvider>
      <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <body className={inter.className}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <StoreProvider>
              <Navbar />
              {children}
              <Footer />
            </StoreProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
