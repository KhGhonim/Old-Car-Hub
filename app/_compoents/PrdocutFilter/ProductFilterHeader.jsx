"use client";

import { IoIosSearch } from "react-icons/io";
import { FaArrowUp, FaCar } from "react-icons/fa";
import { useState } from "react";
import { cars } from "../../db/CardModelNamesdb";
import Card from "./Card";
import Product from "./Product";

export default function ProductFilterHeader() {
  const [IsitOpened, setIsitOpened] = useState(true);
  const [IsArrowClicked, setIsArrowClicked] = useState(false);
  const [Qurrey, setQurrey] = useState("");
  const ArrowToggle = () => {
    setIsArrowClicked(!IsArrowClicked);
  };
  const ToggleBtn = () => {
    setIsitOpened(!IsitOpened);
    ArrowToggle();
  };

  const SearchedName = cars.filter((item) => {
    return item.name.toLowerCase().indexOf(Qurrey.toLowerCase()) !== -1;
  });

  const FilteredProducts = () => {
    let CarsProducts = cars;

    if (Qurrey) {
      CarsProducts = SearchedName;
    }
    return CarsProducts.map(
      (car) => {
        return  (
          <Card
          name={car.name}
          isAutomatic={car.isAutomatic}
          tireType={car.tireType}
          fuelUsage={car.fuelUsage}
          dailyRent={car.dailyRent}
          key={car.name} // Use a unique identifier
        />
        )
      }
    );
  };
  const result = FilteredProducts();

  return (
    <div className="  ">
      <div className=" p-10">
        <h1 className=" pb-5 font-semibold text-2xl text-[--text-color]">
          Car Catalogue
        </h1>
        <p className=" text-[--text-color]">
          Explore the cars you might like from our partnership brands!
        </p>
      </div>

      <div className=" w-screen h-10 flex justify-around max-md:flex-col max-md:justify-center max-md:items-center max-md:my-5">
        <div className="max-w-3xl h-10 flex ">
          <div className="flex items-center w-80">
            <button className="w-10 h-full flex items-center justify-center bg-gray-200 rounded-l-lg">
              <FaCar />
            </button>
            <input
              type="text"
              id="Search"
              placeholder="Search a Car..."
              className="w-full h-full py-2.5 px-3 border border-gray-200 rounded-none sm:text-sm outline-none"
              onChange={(eo) => {
                setQurrey(eo.target.value);
              }}
            />
            <button className="w-10 h-full flex items-center justify-center bg-[--buttons-color]  hover:bg-[--buttons-color-hovered] transition-all  text-white rounded-r-lg">
              <IoIosSearch />
            </button>
          </div>
        </div>

        <div className="relative flex justify-center flex-row max-md:my-5  ">
          <div
            onClick={ToggleBtn}
            className="group inline-flex items-center overflow-hidden rounded-md border bg-white "
          >
            <button className="border-e px-5 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700">
              Car Catagory
            </button>

            <button className="h-full p-2 bg-[--buttons-color]  hover:bg-[--buttons-color-hovered] transition-all group-open:-rotate-180">
              <FaArrowUp
                className={`${
                  IsArrowClicked ? "rotate-180" : ""
                } transition-transform`}
              />
            </button>
          </div>

          <div
            className={` ${
              IsitOpened ? "hidden" : "block"
            } absolute md:end-0 z-12   mt-12 max-sm:mt-10 w-56 rounded-md border border-gray-100 bg-white shadow-lg`}
            role="menu"
          >
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                role="menuitem"
              >
                BMW
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                role="menuitem"
              >
                Ferrari
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                role="menuitem"
              >
                Merceeds
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                role="menuitem"
              >
                Fiat
              </a>
            </div>
          </div>
        </div>
      </div>

      <Product result={result} />
    </div>
  );
}
