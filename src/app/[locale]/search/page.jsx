"use client";
import ProductFilterHeader from "app/_compoents/PrdocutFilter/ProductFilterHeader";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function page({params: {locale}}) {
  setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div className="min-h-screen overflow-hidden bg-[--background-color-Products] ">
      <ProductFilterHeader />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-[--text-color] font-bold mb-8">
          {t("contactUs")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl text-[--text-color] font-semibold mb-4">
              {t("getInTouch")}
            </h2>
            <form className="space-y-6 bg-[--background-color-Products] p-6 rounded-lg shadow-lg">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    {t("firstName")}
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="John"
                    className="mt-2 block w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    {t("lastName")}
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Doe"
                    className="mt-2 block w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="mt-2 block w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700"
                >
                  {t("phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="mt-2 block w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700"
                >
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={4}
                  className="mt-2 block w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t("sendMessage")}
              </motion.button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="p-4 border rounded-lg  text-[--text-color] shadow-sm">
              <h3 className="text-lg text-[--text-color] font-semibold mb-4">
                {t("contactInformation")}
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-bold text-[--text-color]">
                  {t("address")}
                  </span>{" "}
                  </p>
                <p>
                  <span className="font-bold text-[--text-color]">
                   {t("phoneNum")}:
                  </span>{" "}
                  {t("phoneNumValue")}
                  </p>
                <p>
                  <span className="font-bold text-[--text-color]">
                  {t("emailText")}:
                  </span>{" "}
                  {t("emailValue")}
                  </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-4 border rounded-lg shadow-sm text-[--text-color]">
              <h3 className="text-lg  font-semibold mb-4 "> {t("businessHours")}</h3>
              <table className="w-full text-sm text-[--text-color]">
              <tbody>
      <tr>
        <td className="py-2">{t("mondayFriday")}</td>
        <td className="text-right">{t("mondayFridayHours")}</td>
      </tr>
      <tr>
        <td className="py-2">{t("saturday")}</td>
        <td className="text-right">{t("saturdayHours")}</td>
      </tr>
      <tr>
        <td className="py-2">{t("sunday")}</td>
        <td className="text-right">{t("sundayHours")}</td>
      </tr>
    </tbody>
              </table>
            </div>

            {/* Social Media Links */}
            <div className="p-4 border rounded-lg shadow-sm text-[--text-color]">
              <h3 className="text-lg font-semibold mb-4">{t("connectWithUs")}</h3>
              <div className="flex justify-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="/"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaFacebook className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="/"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaTwitter className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="/"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
