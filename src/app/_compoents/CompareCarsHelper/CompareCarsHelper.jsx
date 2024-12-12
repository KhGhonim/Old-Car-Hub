"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function CompareCarsHelper({params: {locale}}) {
  setRequestLocale(locale);
  const t = useTranslations();

  const [openAccordion, setOpenAccordion] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <section className="mb-12">
    <h2 className="text-2xl font-bold mb-4">{t('decisionHelper')}</h2>

    {/* Card */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="bg-gray-100 p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">{t('whichCarIsRightForYou')}</h3>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <p className="mb-4 text-xs">
          {t('considerTheseFactors')}
        </p>
        <div className="space-y-2">
          {[
            {
              question:
               t('budget'),
              answer:
               t('considerSettingABudget'),
            },
            {
              question:
               t('fuelEfficiency'),
              answer:
               t("Fuelefficiencycansaveyourmoney"),
            },
            {
              question: t('performanceText'),
              answer:
              t("If performance is key"),
            },
            {
              question:
               t('featuresText'),
              answer:
              t("Make a list of must-have"),
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              {/* Accordion Header */}
              <div
                className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-100"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-base font-medium">{item.question}</span>
                <span>
                  {openAccordion === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 15l-7-7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </div>
              {/* Accordion Content */}
              {openAccordion === index && (
                <div className="p-3 text-sm text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 border-t border-gray-200 text-center">
        {/* Popover Trigger */}
        <button
          onClick={() => setShowPopover((prev) => !prev)}
          className="border border-gray-300 text-black px-4 py-2 hover:bg-gray-100 rounded transition duration-200"
        >
          {t('needMoreHelp')}
        </button>

        {/* Popover Content */}
        {showPopover && (
          <div
            ref={ref}
            className="absolute mt-2 w-96 text-center bg-white shadow-lg rounded-lg p-4 z-20 left-1/2 transform -translate-x-1/2"
          >
            <h3 className="font-semibold mb-2">{t('carBuyingTips')}</h3>
            <ul className="space-y-1">
              {[
                 t("researchCompare"),
                t("considerLongTerm"),
                t("testDrive"),
                 t("checkIncentives"),
              ].map((tip, index) => (
                <li
                  className="text-xs list-inside list-disc md:text-sm text-start"
                  key={index}
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </section>
  );
}
