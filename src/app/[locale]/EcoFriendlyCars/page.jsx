"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaArrowRight,
  FaBatteryFull,
  FaBolt,
  FaInfoCircle,
  FaLeaf,
  FaSpinner,
} from "react-icons/fa";
import { motion } from "framer-motion";
import useFetchCarsData from "hooks/FetchData";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";

export default function page() {
  const [selectedTab, setSelectedTab] = useState("electric");
  const [openIndex, setOpenIndex] = useState(null);
  const LocaleActive = useLocale();
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { data, loading } = useFetchCarsData();

  const t = useTranslations();

  const faqData = [
    {
      question: t("howLongDoesItTakeToCharge"),
      answer: t("loremIpsum"),
    },
    {
      question: t("areEcoFriendlyCarsMoreExpensive"),
      answer: t("loremIpsum2"),
    },
    {
      question: t("whatIsTheDifferenceBetweenHybrid"),
      answer: t("loremIpsum3"),
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">{t("ecoFriendlyCarsTitle")}</h1>
        {/* Why Choose Eco-Friendly Section */}
        <section
          id="cars"
          className="mb-12 bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            {t("whyChooseEcoFriendly")}
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaLeaf className="w-6 h-6 text-green-600 mr-3" />
              <span>{t("reduceYourCarbonFootprint")}</span>
            </li>
            <li className="flex items-center">
              <FaLeaf className="w-6 h-6 text-green-600 mr-3" />
              <span>{t("saveMoneyOnFuelCosts")}</span>
            </li>
            <li className="flex items-center">
              <FaLeaf className="w-6 h-6 text-green-600 mr-3" />
              <span>{t("enjoyTaxIncentives")}</span>
            </li>
            <li className="flex items-center">
              <FaLeaf className="w-6 h-6 text-green-600 mr-3" />
              <span>{t("experienceCuttingEdgeTechnology")}</span>
            </li>
          </ul>
        </section>

        {/* Featured Cars Tabs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {t("featuredEcoFriendlyCars")}
          </h2>
          <div className="tabs">
            <button
              className={`px-4 py-2 ${
                LocaleActive === "en"
                  ? "rounded-tl-xl rounded-bl-xl"
                  : "rounded-tr-xl rounded-br-xl"
              } ${
                selectedTab === "electric"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedTab("electric")}
            >
              {t("electric")}
            </button>
            <button
              className={`px-4 py-2 ${
                LocaleActive === "en"
                  ? "rounded-tr-xl rounded-br-xl"
                  : "rounded-tl-xl rounded-bl-xl"
              }  ${
                selectedTab === "hybrid"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedTab("hybrid")}
            >
              {t("Hybrid")}
            </button>
          </div>

          {/* Electric Cars */}
          {loading ? (
            <div className="flex w-full h-full items-center justify-center">
              <FaSpinner className="animate-spin" />
            </div>
          ) : (
            selectedTab === "electric" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {data
                  .filter((car) => car.electric === true)
                  .map((car) => {
                    console.log(car);
                    return (
                      <div
                        key={car.id}
                        className="card shadow-lg rounded-lg overflow-hidden bg-white"
                      >
                        <Image
                          src={`${car.image}`}
                          width={350}
                          height={200}
                          quality={100}
                          alt={car.name}
                          className="w-full h-44 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold">{car.name}</h3>
                          <p className="text-lg font-bold text-green-600">
                            ${car.rent}
                          </p>
                          <div className="space-y-2 mt-4">
                            <div className="flex justify-between">
                              <span>{t("range")}</span>
                              <span>{t(car.range)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t("chargingTime")}</span>
                              <span>{t(car.handling)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="px-6 pb-6">
                          <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                            {t("learnMore")}
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )
          )}

          {/* Hybrid Cars */}
          {loading ? (
            <div className="flex w-full h-full items-center justify-center">
              <FaSpinner className="animate-spin" />
            </div>
          ) : (
            selectedTab === "hybrid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {data
                  .filter((car) => car.hybrid === true)
                  .map((car) => (
                    <div
                      key={car.id}
                      className="card shadow-lg rounded-lg overflow-hidden bg-white"
                    >
                      <Image
                        src={`${car.image}`}
                        width={350}
                        height={200}
                        quality={100}
                        alt={car.name}
                        loading="lazy"
                        className="w-full h-44 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold">{car.name}</h3>
                        <p className="text-lg font-bold text-green-600">
                          ${car.rent}
                        </p>
                        <div className="space-y-2 mt-4">
                          <div className="flex justify-between">
                            <span>{t("range")}</span>
                            <span>{t(car.range)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{t("chargingTime")}</span>
                            <span>{t(car.handling)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-6">
                        <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                          {t("learnMore")}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )
          )}
        </section>

        {/* Environmental Impact  */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-primary">
            {t("environmentalImpact")}
          </h2>
          <div className="bg-white shadow-2xl rounded-lg p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CO2 Emissions Reduction */}
              <motion.div
                // @ts-ignore
                className="space-y-6"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {t("co2EmissionsReduction")}
                </h3>
                <p className="text-lg mb-6 text-gray-600">
                  {t("switchingToAnEcoFriendlyCar")}
                </p>
                <div className="space-y-6">
                  {[
                    {
                      label: t("gasolineCar"),
                      value: 100,
                      color: "bg-red-500",
                      text: t("lbsCO2Year11435"),
                    },
                    {
                      label: t("hybridCar"),
                      value: 55,
                      color: "bg-yellow-500",
                      text: t("lbsCO2Year6258"),
                    },
                    {
                      label: t("electricCar"),
                      value: 25,
                      color: "bg-green-500",
                      text: t("lbsCO2Year2879"),
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ delay: 0.5 * index, duration: 0.8 }}
                      viewport={{ once: true }}
                      // @ts-ignore
                      className="space-y-2"
                    >
                      <div className="flex justify-between mb-2 text-gray-700">
                        <span className="font-medium">{item.label}</span>
                        <span>{item.text}</span>
                      </div>
                      <motion.div
                        // @ts-ignore
                        className="h-2 bg-gray-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{
                          duration: 1.2,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        <div
                          className={`h-full ${item.color} rounded-full`}
                        ></div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits Over Time */}
              <motion.div
                // @ts-ignore
                className="space-y-6"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {t("benefitsOverTime")}
                </h3>
                <p className="text-lg mb-6 text-gray-600">
                  {t("thePositiveImpact")}
                </p>
                <motion.ul
                  // @ts-ignore
                  className="space-y-4"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {[
                    {
                      icon: <FaBolt />,
                      text: t("saveUpToGallonsOfGasoline"),
                      color: "text-yellow-500",
                    },
                    {
                      icon: <FaLeaf />,
                      text: t("reduceCO2EmissionsBy"),
                      color: "text-green-500",
                    },
                    {
                      icon: <FaBatteryFull />,
                      text: t("decreaseDependencyOnFossilFuels"),
                      color: "text-blue-500",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ delay: 0.3 * index, duration: 0.6 }}
                      viewport={{ once: true }}
                      // @ts-ignore
                      className="flex items-start text-lg text-gray-700"
                    >
                      <span
                        className={`mr-4 h-6 w-6 ${item.color} transition-transform transform hover:scale-110`}
                        style={{ marginTop: "2px" }}
                      >
                        {item.icon}
                      </span>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Eco-Friendly CarBuying Guide   */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-primary">
            {t("ecoFriendlyCarBuyingGuide")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Consider Your Needs Card */}
            <motion.div
              // @ts-ignore
              className="bg-white shadow-xl rounded-lg"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} // Only animate once when it comes into view
            >
              <div className="p-6">
                <h3 className="flex items-center text-xs md:text-sm lg:text-lg font-semibold mb-4 text-primary">
                  <FaBolt className="mr-2 h-6 w-6 text-yellow-500" />
                  {t("considerYourNeeds")}
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-gray-600">
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {t("dailyCommuteDistance")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {t("chargingAvailabilityAtHomeWork")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {t("localClimateConditions")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {t("cargoAndPassengerCapacityRequirements")}
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            {/* Understand the Technology Card */}
            <motion.div
              // @ts-ignore
              className="bg-white shadow-xl rounded-lg"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} // Only animate once when it comes into view
            >
              <div className="p-6">
                <h3 className="flex items-center text-xs md:text-sm lg:text-lg font-semibold mb-4 text-primary">
                  <FaBatteryFull className="mr-2 h-6 w-6 text-blue-500" />
                  {t("understandTheTechnology")}
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-gray-600">
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {t("batteryCapacityAndRange")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {t("chargingTimesAndCompatibility")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {t("regenerativeBrakingSystems")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {t("energyEfficiencyRatings")}
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            {/* Evaluate Long-Term Benefits Card */}
            <motion.div
              // @ts-ignore
              className="bg-white shadow-xl rounded-lg"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} // Only animate once when it comes into view
            >
              <div className="p-6">
                <h3 className="flex items-center text-xs md:text-sm lg:text-lg font-semibold mb-4 text-primary">
                  <FaLeaf className="mr-2 h-6 w-6 text-green-500" />
                  {t("evaluateLongTermBenefits")}
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-gray-600">
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {t("fuelCostSavingsOverTime")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {t("lowerMaintenanceRequirements")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {t("taxIncentivesAndRebates")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {t("environmentalImpactReduction")}
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs  */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {t("frequentlyAskedQuestions")}
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg">
                <div
                  className="p-4 flex items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <FaInfoCircle className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold">{faq.question}</span>
                </div>
                {openIndex === index && (
                  <div className="p-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ReadyToGoGreen   */}
        <section>
          <div className="bg-primary text-primary-foreground rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                {" "}
                {t("readyToGoGreen")}
              </h2>
              <p className="mb-6">{t("exploreOurSelection")}</p>
              <Link href="#cars" passHref>
                <p className="inline-flex items-center bg-emerald-500 text-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-emerald-600 transition-colors">
                  {t("browseEcoFriendlyCars")}
                  <FaArrowRight className="ml-2 h-5 w-5" />
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
