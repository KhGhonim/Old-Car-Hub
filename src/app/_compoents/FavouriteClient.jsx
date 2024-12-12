"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function FavouriteClient() {
  
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-14 max-sm:py-12 sm:px-6 m-4 lg:px-8 h-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          ref={ref}
          id="PrimaryClient"
          className="grid grid-cols-1 lg:h-screen lg:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            ref={ref}
            className="relative z-10 lg:py-16"
          >
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="/images/chevrolet-corvette-bmw.jpg"
                className="absolute inset-0 h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="relative flex items-center bg-gray-300">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-300"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                {t("ourPrimaryClientChevrolet")}
              </h2>

              <p className="mt-4 text-gray-600">{t("loremIpsum")}</p>

              <a
                href="#"
                className="mt-8 inline-block rounded border bg-[--buttons-color] hover:bg-[--buttons-color-hovered] px-12 py-3 text-sm font-medium text-[--text-color]  focus:outline-none focus:ring"
              >
                {t("getInTouch")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
