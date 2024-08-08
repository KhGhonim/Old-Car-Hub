"use client";

import { AnimatePresence, motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1.5,
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeInOut" } },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeInOut" } },
};
export default function Product({ result }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={result}
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex justify-between max-sm:justify-center flex-wrap  mt-7 w-screen  p-4 "
      >
        {result && result.length > 0 ? (
          result.map((item, index) => (
            <motion.div variants={childVariants} key={index}>
              {item}
            </motion.div>
          ))
        ) : (
          <section className="bg-slate-200 dark:bg-gray-900 w-screen">
            <div className="container px-6 py-10 mx-auto animate-pulse">
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>

                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>

                <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                </div>
              </div>
            </div>
          </section>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
