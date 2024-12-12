"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../../Redux/CartSlice";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

export default function CarCart({ data }) {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const handleAddToCart = () => {
    dispatch(AddToCart({ ...data, selectedCategory }));
    toast.success("Item added to cart");
  };
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <motion.header
        className="flex items-center justify-between mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <a
          href="/"
          className="flex items-center text-[--text-color] text-primary hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
           {t('backToHome')}
        </a>
        <h1 className="text-4xl text-[--text-color] font-extrabold">
          {data.name}
        </h1>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className="grid gap-8 md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        {/* Left Section */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg bg-white"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {/* Car Image */}
          <Image
            src={data.image}
            alt={data.name}
            width={600}
            height={400}
            className="w-full h-72 object-cover"
          />

          {/* Car Details */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{t('carDetails')}</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="text-sm">{t('price')}</p>
                <p className="font-medium">{data.categories[0].priceRange}</p>
              </div>
              <div>
                <p className="text-sm">{t('costPerDay')}</p>
                <p className="font-medium">${data.rent}</p>
              </div>
              <div>
                <p className="text-sm">{t('mileage')}</p>
                <p className="font-medium">{data.fuel}</p>
              </div>
              <div>
                <p className="text-sm">{t('type')}</p>
                <p className="font-medium">{data.automatic}</p>
              </div>
              <div>
                 <p className="text-sm">{t('tire')}</p>
                <p className="font-medium">{data.tire}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h2 className="text-3xl font-bold mb-6">{t('chooseCategory')}</h2>

          {/* Dropdown for Categories */}
          <label htmlFor="car-category" className="block text-sm mb-2">
           {t('selectCarCategory')}
          </label>
          <select
            id="car-category"
            className="w-full p-2 border-none rounded-lg text-gray-800"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">{t('selectCategory')}</option>
            {data.categories.map((category, index) => (
              <option key={index} value={category.type}>
                {category.type} - {category.priceRange}
              </option>
            ))}
          </select>

          {/* Add to Cart Button */}
          <button
            type="button"
            disabled={!selectedCategory}
            onClick={handleAddToCart}
            className={`w-full mt-4 py-3 rounded-lg font-bold transition ${
              selectedCategory
                ? "bg-white text-blue-600 hover:bg-gray-200"
                : "bg-gray-500 cursor-not-allowed"
            }`}
          >
           {t('addToCart')}
          </button>

          {/* Additional Information */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">{t('additionalInformation')}</h3>
            <ul className="list-disc list-inside space-y-2">
              {data.categories.map((category, index) => (
                <li key={index}>
                  <span className="font-semibold">{category.type}:</span> From
                  <span className="font-semibold ml-2">
                    {category.priceRange}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 mx-4">
             <p className="text-sm mb-2">{t('description')}</p>
            <p className="font-medium">{data.description}</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-12 text-center bg-gradient-to-r from-gray-700 to-gray-900 text-white py-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-2">
          {t('scheduleTestDrive')}
        </h2>
        <p className="mb-4">
          {t('bookTestDriveText')}
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          {t('bookTestDriveButton')}
        </button>
      </div>
    </div>
  );
}
