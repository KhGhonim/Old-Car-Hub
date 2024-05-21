import React from "react";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[url('/images/HearoSectionBG.png')] bg-cover  bg-top bg-no-repeat h-screen py-8 max-sm:py-16">
      <div className="bg-black/5 mt-5 p-8 md:p-12 lg:px-16 lg:py-24 ">
        <div className="text-start w-80 md:text-center   ">
          <h2 className="text-2xl font-bold  text-[--text-color]  sm:text-3xl md:text-5xl">
            Latest Cars
          </h2>

          <p className="  mt-6 text-[--text-color] text-lg leading-relaxed ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.

          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-[--buttons-color]  hover:bg-[--buttons-color-hovered] px-12 py-3 text-sm font-medium text-[--text-color] transition  "
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
