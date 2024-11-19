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
import useFetchCarsData from "../../hooks/FetchData";
import { motion } from "framer-motion";

export default function page() {
  const [selectedTab, setSelectedTab] = useState("electric");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { data, loading } = useFetchCarsData();

  const faqData = [
    {
      question: "How long does it take to charge an electric car?",
      answer:
        "Charging times vary depending on the battery size and charger type. A full charge can take anywhere from 30 minutes with a fast charger to 8-12 hours with a home charger.",
    },
    {
      question: "Are eco-friendly cars more expensive to maintain?",
      answer:
        "Generally, eco-friendly cars have lower maintenance costs due to fewer moving parts and no need for oil changes. However, battery replacement can be costly for older electric vehicles.",
    },
    {
      question: "What's the difference between a hybrid and a plug-in hybrid?",
      answer:
        "A hybrid uses both a gasoline engine and an electric motor, while a plug-in hybrid has a larger battery that can be charged externally, allowing for longer electric-only driving ranges.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Eco-Friendly Cars</h1>
        {/* Why Choose Eco-Friendly Section */}
        <section
          id="cars"
          className="mb-12 bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Why Choose Eco-Friendly?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaLeaf className="w-6 h-6 text-green-600 mr-3" />
              <span>
                Reduce your carbon footprint and combat climate change
              </span>
            </li>
            <li className="flex items-center">
              <FaLeaf className="w-6 h-6 text-green-600 mr-3" />
              <span>Save money on fuel costs and maintenance</span>
            </li>
            <li className="flex items-center">
              <FaLeaf className="w-6 h-6 text-green-600 mr-3" />
              <span>
                Enjoy tax incentives and rebates for eco-friendly vehicles
              </span>
            </li>
            <li className="flex items-center">
              <FaLeaf className="w-6 h-6 text-green-600 mr-3" />
              <span>
                Experience cutting-edge technology and smooth, quiet rides
              </span>
            </li>
          </ul>
        </section>

        {/* Featured Cars Tabs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Featured Eco-Friendly Cars
          </h2>
          <div className="tabs">
            <button
              className={`px-4 py-2 rounded-tl-xl rounded-bl-xl ${
                selectedTab === "electric"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedTab("electric")}
            >
              Electric
            </button>
            <button
              className={`px-4 py-2 rounded-tr-xl rounded-br-xl ${
                selectedTab === "hybrid"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedTab("hybrid")}
            >
              Hybrid
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
                  .map((car) => (
                    <div
                      key={car.id}
                      className="card shadow-lg rounded-lg overflow-hidden bg-white"
                    >
                      <img
                        src={`${car.image}`}
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
                            <span>Range:</span>
                            <span>{car.range}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Charging Time:</span>
                            <span>{car.handling}</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-6">
                        <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
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
                      <img
                        src={`${car.image}`}
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
                            <span>Range:</span>
                            <span>{car.range}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Charging Time:</span>
                            <span>{car.handling}</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-6">
                        <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                          Learn More
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
            Environmental Impact
          </h2>
          <div className="bg-white shadow-2xl rounded-lg p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CO2 Emissions Reduction */}
              <motion.div
                className="space-y-6"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  CO2 Emissions Reduction
                </h3>
                <p className="text-lg mb-6 text-gray-600">
                  Switching to an eco-friendly car can significantly reduce your
                  carbon footprint. Here's a comparison of annual CO2 emissions:
                </p>
                <div className="space-y-6">
                  {[
                    {
                      label: "Gasoline Car",
                      value: 100,
                      color: "bg-red-500",
                      text: "11,435 lbs CO2/year",
                    },
                    {
                      label: "Hybrid Car",
                      value: 55,
                      color: "bg-yellow-500",
                      text: "6,258 lbs CO2/year",
                    },
                    {
                      label: "Electric Car",
                      value: 25,
                      color: "bg-green-500",
                      text: "2,879 lbs CO2/year",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ delay: 0.5 * index, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between mb-2 text-gray-700">
                        <span className="font-medium">{item.label}</span>
                        <span>{item.text}</span>
                      </div>
                      <motion.div
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
                className="space-y-6"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Benefits Over Time
                </h3>
                <p className="text-lg mb-6 text-gray-600">
                  The positive impact of eco-friendly cars compounds over time.
                  Here's what you can achieve in 5 years:
                </p>
                <motion.ul
                  className="space-y-4"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {[
                    {
                      icon: <FaBolt />,
                      text: "Save up to 2,500 gallons of gasoline",
                      color: "text-yellow-500",
                    },
                    {
                      icon: <FaLeaf />,
                      text: "Reduce CO2 emissions by up to 42,000 lbs",
                      color: "text-green-500",
                    },
                    {
                      icon: <FaBatteryFull />,
                      text: "Decrease dependency on fossil fuels",
                      color: "text-blue-500",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ delay: 0.3 * index, duration: 0.6 }}
                      viewport={{ once: true }}
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
            Eco-Friendly Car Buying Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Consider Your Needs Card */}
            <motion.div
              className="bg-white shadow-xl rounded-lg"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} // Only animate once when it comes into view
            >
              <div className="p-6">
                <h3 className="flex items-center text-xs md:text-sm lg:text-lg font-semibold mb-4 text-primary">
                  <FaBolt className="mr-2 h-6 w-6 text-yellow-500" />
                  Consider Your Needs
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-gray-600">
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Daily commute distance
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Charging availability at home/work
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    Local climate conditions
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Cargo and passenger capacity requirements
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            {/* Understand the Technology Card */}
            <motion.div
              className="bg-white shadow-xl rounded-lg"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} // Only animate once when it comes into view
            >
              <div className="p-6">
                <h3 className="flex items-center text-xs md:text-sm lg:text-lg font-semibold mb-4 text-primary">
                  <FaBatteryFull className="mr-2 h-6 w-6 text-blue-500" />
                  Understand the Technology
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-gray-600">
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Battery capacity and range
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Charging times and compatibility
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    Regenerative braking systems
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Energy efficiency ratings
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            {/* Evaluate Long-Term Benefits Card */}
            <motion.div
              className="bg-white shadow-xl rounded-lg"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} // Only animate once when it comes into view
            >
              <div className="p-6">
                <h3 className="flex items-center text-xs md:text-sm lg:text-lg font-semibold mb-4 text-primary">
                  <FaLeaf className="mr-2 h-6 w-6 text-green-500" />
                  Evaluate Long-Term Benefits
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-gray-600">
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Fuel cost savings over time
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Lower maintenance requirements
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    Tax incentives and rebates
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Environmental impact reduction
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs  */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
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
              <h2 className="text-2xl font-bold mb-4">Ready to Go Green?</h2>
              <p className="mb-6">
                Explore our selection of eco-friendly cars and take the first
                step towards sustainable transportation.
              </p>
              <Link href="#cars" passHref>
                <p className="inline-flex items-center bg-emerald-500 text-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-emerald-600 transition-colors">
                  Browse Eco-Friendly Cars
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
