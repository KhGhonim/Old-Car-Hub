import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations();
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/HearoSectionBG.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-10 lg:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6">
          {t("discoverYourDreamCar")}
        </h1>
        <p className="text-lg sm:text-2xl font-semibold  text-gray-300 max-w-2xl mb-10">
          {t("fromLuxuryToSports")}
        </p>
        <div className="flex space-x-4">
          <Link className="bg-[--buttons-color] hover:bg-[--buttons-color-hovered] text-white font-bold py-1 px-5 md:py-3 md:px-5 lg:py-3 lg:px-8 rounded-full text-sm md:text-lg  transition duration-300 ease-in-out transform hover:scale-105" href={"/search"}>
            {t("browseCars")}
          </Link>
          <Link className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-1 px-5 md:py-3 md:px-5 lg:py-3 lg:px-8 rounded-full text-sm md:text-lg transition duration-300 ease-in-out transform hover:scale-105" href={"/compare"}>
            {t("carComparison")}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
