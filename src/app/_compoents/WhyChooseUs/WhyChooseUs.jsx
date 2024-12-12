import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function WhyChooseUs({params: {locale}}) {
  setRequestLocale(locale);
  const t = useTranslations();
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          {t("whyChooseCarHub")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <svg
              className="w-16 h-16 text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h18v18H3z" />
            </svg>
            <h3 className="text-xl font-semibold">{t("wideSelection")}</h3>
            <p className="text-center text-gray-400 mt-2">
              {t("chooseFromAVastCollection")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className="w-16 h-16 text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 8v4m0 0v4m0-4h4m-4 0H8"></path>
            </svg>
            <h3 className="text-xl font-semibold">{t("affordablePrices")}</h3>
            <p className="text-center text-gray-400 mt-2">
              {t("competitivePricingEnsures")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className="w-16 h-16 text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z"></path>
            </svg>
            <h3 className="text-xl font-semibold">{t("trustedService")}</h3>
            <p className="text-center text-gray-400 mt-2">
             {t("weAreCommittedToProviding")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
