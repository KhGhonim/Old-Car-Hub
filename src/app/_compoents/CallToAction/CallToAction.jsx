import Link from "next/link";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function CallToAction({params: {locale}}) {
  setRequestLocale(locale);
  const t = useTranslations();
  return (
    <section className="py-16 bg-gray-50 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t("readyToFindYourPerfectCar")}
        </h2>
        <p className="text-xl mb-8">
          {t("startYourSearchNow")}
        </p>
        <Link
          className="bg-[--buttons-color] hover:bg-[--buttons-color] text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          href={"/search"}
        >
          {t("browseAllCars")}
        </Link>
      </div>
    </section>
  );
}
