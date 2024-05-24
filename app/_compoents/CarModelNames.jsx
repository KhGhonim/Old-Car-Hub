"use client";

import Image from "next/image";
import { carDatabase } from "../db/CardModelNamesdb";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CarModelNames() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div>
      <section className="bg-[--background-color] text-white h-full  flex justify-center items-center flex-row md:flex-col shadow-xl ">
        <div className="mx-auto max-w-screen-xl px-4 py-32  ">
          <div className="mx-auto  text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Cars Model
            </h1>

            <p className="mx-auto  m-10 max-w-xl sm:text-xl/relaxed text-[--text-color] mb-9">
              Choose your car model!
            </p>

            <div
              ref={ref}
              className="mt-9 flex justify-center items-center gap-20 flex-wrap max-md:flex-col "
            >
              {carDatabase.map((item) => {
                return (
                  <motion.article
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    key={item.link}
                    className="group flex flex-col justify-between items-center scale-105 transition-all hover:scale-100 "
                  >
                    <Link href={item.link}>
                      <Image
                        alt={item.name}
                        src={item.Image}
                        width={250}
                        height={250}
                        priority={true}
                        className=" rounded-lg object-contain "
                      />

                      <h2 className="  pt-8 text-[--text-color]  font-bold">
                        {item.name}
                      </h2>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
