"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("en");
  const router = useRouter();

  // Handle language change
  const handleLanguageChange = (lang) => {
    setActiveLanguage(lang);
    localStorage.setItem("language", lang);
    router.replace(`/${lang}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setActiveLanguage(savedLanguage);
  }, [router]);

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    // If the click is outside the modal, close it
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Globe Icon */}
      <button
        className="flex items-center space-x-2 px-4 py-2  rounded-md "
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaGlobe className="text-xl text-white hover:text-gray-200" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 text-[--globe] bg-[--text-color-Model] border rounded-md shadow-md">
          <div
            className="flex items-center justify-between px-4 py-2 cursor-pointer "
            onClick={() => handleLanguageChange("en")}
          >
            <span>English</span>
            {activeLanguage === "en" && <span>✔️</span>}
          </div>
          <div
            className="flex items-center justify-between px-4 py-2 cursor-pointer "
            onClick={() => handleLanguageChange("ar")}
          >
            <span>العربية</span>
            {activeLanguage === "ar" && <span>✔️</span>}
          </div>
        </div>
      )}
    </div>
  );
}
