"use client";

import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function ComparisonTable(selectedCars, ) {
  const t = useTranslations();

  const [activeTab, setActiveTab] = useState("specifications");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{t("detailedComparison")}</h2>
      <div>
        {/* Tabs Navigation */}
        <div className="flex items-center gap-5 border-b-2 border-gray-200 mb-6">
          {["specifications", "features", "performance"].map((tab) => (
            <h3
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-lg font-semibold capitalize pb-2 cursor-pointer ${
                activeTab === tab
                  ? "border-b-4 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {t(tab)}
            </h3>
          ))}
        </div>

        {activeTab === "specifications" && (
          <table className="w-full text-left border-collapse border border-gray-900">
            <thead>
              <tr>
                <th className="border text-center p-2">{t("specification")}</th>
                <th className="border text-center p-2">
                  {selectedCars?.selectedCars[0]?.name ||
                    `${t("chooseACar")} ${t("toStartTheComparison")}`}
                </th>
                <th className="border text-center p-2">
                  {selectedCars?.selectedCars[1]?.name ||
                    `${t("chooseACar")} ${t("toStartTheComparison")}`}
                </th>
              </tr>
            </thead>
            <tbody>
              {[t("rent"), t("automatic"), t("range"), t("safety")].map((spec, index) => {
                console.log(selectedCars?.selectedCars[0]?.[spec.toLowerCase()])
                console.log(selectedCars?.selectedCars[0])
                return (
                  <tr key={index}>
                    <td className="border text-center p-2 font-medium">
                      {spec}
                    </td>
                    <td className="border text-center p-2">
                      {selectedCars?.selectedCars[0]?.[spec.toLowerCase()] ||
                        "N/A"}
                    </td>
                    <td className="border text-center p-2">
                      {selectedCars?.selectedCars[1]?.[spec.toLowerCase()] ||
                        "N/A"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {activeTab === "features" && (
          <table className="w-full text-left border-collapse border border-gray-900">
            <thead>
              <tr>
                <th className="border text-center p-2">{t("features")}</th>
                <th className="border text-center p-2">
                  {selectedCars?.selectedCars[0]?.name ||
                    `${t("chooseACar")} ${t("toStartTheComparison")}`}
                </th>
                <th className="border text-center p-2">
                  {selectedCars?.selectedCars[1]?.name ||
                    `${t("chooseACar")} ${t("toStartTheComparison")}`}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "Bluetooth",
                "Navigation",
                "Heated Seats",
                "Backup Camera",
                "Back Sensors",
                "Front Sensors",
              ].map((spec, index) => {
                const featureValueForCar1 =
                  selectedCars?.selectedCars[0]?.features?.[spec];
                const featureValueForCar2 =
                  selectedCars?.selectedCars[1]?.features?.[spec];

                return (
                  <tr key={index}>
                    <td className="border text-center p-2 font-medium">
                      {t(spec)}
                    </td>
                    <td className="border text-center p-2 text-xl">
                      {featureValueForCar1 === true ? (
                        <MdDone className="text-green-500" />
                      ) : (
                        <IoIosClose className="text-red-500" />
                      )}
                    </td>
                    <td className="border text-center p-2 text-xl">
                      {featureValueForCar2 === true ? (
                        <MdDone className="text-green-500" />
                      ) : (
                        <IoIosClose className="text-red-500" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {activeTab === "performance" && (
          <table className="w-full text-left border-collapse border border-gray-900">
            <thead>
              <tr>
                <th className="border text-center p-2">{t("performance")}</th>
                <th className="border text-center p-2">
                  {selectedCars?.selectedCars[0]?.name ||
                    `${t("chooseACar")} ${t("toStartTheComparison")}`}
                </th>
                <th className="border text-center p-2">
                  {selectedCars?.selectedCars[1]?.name ||
                    `${t("chooseACar")} ${t("toStartTheComparison")}`}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "acceleration",
                "braking",
                "handling",
              ].map((spec, index) => {
                const featureValueForCar1 =
                  selectedCars?.selectedCars[0]?.[spec.toLowerCase()];
                const featureValueForCar2 =
                  selectedCars?.selectedCars[1]?.[spec.toLowerCase()];

                return (
                  <tr key={index}>
                    <td className="border text-center capitalize p-2 font-medium">
                    {t(spec)}
                    </td>
                    <td className="border text-center p-2 text-xs md:text-sm capitalize lg:text-base">
                      {featureValueForCar1 ||
                        "N/A"}
                    </td>
                    <td className="border text-center p-2 text-xs md:text-basmse capitalize lg:text-base">
                      {featureValueForCar2 ||
                        "N/A"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      
    </section>
  );
}
