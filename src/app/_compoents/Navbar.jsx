"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CiCloudMoon, CiLight, CiMenuBurger, CiShop } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useSelector } from "react-redux";
import { Link } from "i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import { setRequestLocale } from "next-intl/server";
export default function Navbar({ params: { locale } }) {
  setRequestLocale(locale);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [theme, setTheme] = useState("light");
  const dropdownRef = useRef(null);
  // @ts-ignore
  const { shopCartInTheArray } = useSelector((state) => state.ShopCart);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);

      document.documentElement.classList.add(savedTheme);
    } else {
      const defaultTheme = "light";
      localStorage.setItem("theme", defaultTheme);
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const t = useTranslations("");
  const ActiveeLocale = useLocale();

  return (
    <header className="bg-white">
      <div className=" max-w-screen-xl ">
        <div className=" fixed flex h-16 z-40  w-screen items-center justify-between pr-5 pl-5 shadow-lg  bg-[--background-color-Menu]  text-[--text-color]">
          <div className="md:flex md:items-center md:gap-12">
            {ActiveeLocale === "en" ? (
              <Link className="block" href="/">
                <Image
                  src={"/images/logo.png"}
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  alt={"Logo"}
                />
              </Link>
            ) : (
              <Link className="block" href="/">
                <Image
                  src={"/images/ArabicLogo.png"}
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  alt={"Logo"}
                />
              </Link>
            )}
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm ">
                <li className="text-[--nav-color] transition hover:scale-110 p-3 rounded-md cursor-pointer">
                  <Link href="/"> {t("home")} </Link>
                </li>

                <li className="text-[--nav-color] transition hover:scale-110 p-3 rounded-md cursor-pointer">
                  <Link href="/EcoFriendlyCars"> {t("ecoFriendlyCars")} </Link>
                </li>

                <li className="text-[--nav-color] transition  hover:scale-110   p-3 rounded-md cursor-pointer">
                  <Link href="/compare"> {t("carComparison")} </Link>
                </li>

                <li className="text-[--nav-color] transition  hover:scale-110  p-3 rounded-md cursor-pointer">
                  <Link href="/CarSanctuary">{t("carSanctuary")} </Link>
                </li>

                <li className="text-[--nav-color] transition  hover:scale-110  p-3 rounded-md cursor-pointer">
                  <Link href="/search"> {t("carCatalogue")} </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex justify-between items-center gap-4">
            {/* Theme Toggle */}
            <div>
              {theme === "light" ? (
                <button onClick={toggleTheme}>
                  <CiLight size={"30px"} className=" text-white" />
                </button>
              ) : (
                <button>
                  <CiCloudMoon
                    onClick={toggleTheme}
                    size={"30px"}
                    className=" text-white"
                  />
                </button>
              )}
            </div>
            <LanguageSelector />
            {/* Cart Icon */}
            <div className="hidden md:block mx-3 relative">
              <Link href="/Cart">
                <CiShop color="white" size={"30px"} />
              </Link>
              <div className="absolute top-0 right-0 bg-red-500 w-4 h-4 rounded-full text-white text-xs flex justify-center items-center">
                {shopCartInTheArray.length}
              </div>
            </div>

            {/* User Button */}
            <div className="sm:flex  text-white mr-3 ">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            {/* Humburger Icon for max-md screen devices and below */}

            <div className="block relative md:hidden" ref={dropdownRef}>
              <button
                className={`rounded bg-[--buttons-color]  hover:bg-[--buttons-color-hovered]  p-2 text-gray-600 transition hover:text-gray-600/75 `}
                onClick={toggleMenu}
              >
                <CiMenuBurger />
              </button>

              {/* Phone Menu */}
              <div
                className={` ${isMenuVisible ? "block" : "hidden"}  absolute ${
                  ActiveeLocale === "en" ? "top-12 -right-5" : "top-12 -left-5"
                }  w-[250px] md:w-[250px] flex flex-col justify-between border-e rounded-lg shadow-lg bg-[--background-color-Menu] text-gray-500 border-solid border-gray-400`}
              >
                <div className="px-4 py-6 relative">
                  <div
                    className=" absolute top-5 right-4 "
                    onClick={toggleMenu}
                  >
                    <IoMdCloseCircle size={"1.5rem"} />
                  </div>

                  <span className="grid h-10 w-32 place-content-center mx-auto py-6   rounded-lg">
                    <Image
                      src={"/images/logo.png"}
                      width={100}
                      height={100}
                      quality={100}
                      priority={true}
                      alt={"Logo"}
                    />
                  </span>

                  <ul className="mt-6 space-y-1">
                    <li>
                      <Link
                        href="/"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                      >
                        {t("home")}
                      </Link>
                    </li>

                    <li>
                      <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                          <span className="text-sm font-medium">
                            {" "}
                            {t("cars")}{" "}
                          </span>

                          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                            <IoIosArrowUp />
                          </span>
                        </summary>

                        <ul className="mt-2 space-y-1 px-4">
                          <li>
                            <Link
                              href="/search"
                              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                              {t("carCatalogue")}
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/compare"
                              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                              {t("carComparison")}
                            </Link>
                          </li>
                        </ul>
                      </details>
                    </li>

                    <li>
                      <Link
                        href="/CarSanctuary"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        {t("carSanctuary")}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/Cart"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        {t("cart")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
