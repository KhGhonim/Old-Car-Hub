"use client";

import { useState } from "react";

export default function CarCart({ data }) {
  const [Selector, setSelector] = useState(null);
  console.log(Selector);
  return (
    <div className="w-full ">
      <div className="p-6 bg-[--background-color] text-[--text-color]">
        <h2 className="text-2xl font-bold mb-4">Car Cart Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
          <div className="border border-border w-full h-full rounded-lg p-4  ">
            <img
              src={data.image}
              alt={data.name}
              className="w-full md:h-80 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
            <p className="text-muted-foreground mb-4">{data.description}</p>

            <div className="mt-4">
              <label
                htmlFor="car-category"
                className="block text-muted-foreground mb-2"
                style={{ fontWeight: "bold" }}
              >
                Select Car Category:
              </label>
              <select
                id="car-category"
                className="w-full p-2 border border-border rounded-lg bg-[--background-color] "
                onChange={(e) => setSelector(e.target.value)}
              >
                {/* Add car categories here */}
                {data.categories.map((category, index) => (
                  <option key={index} value={category.type}>
                    {category.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <button className="bg-black text-white hover:bg-black/80 px-4 py-2 rounded-lg w-full">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="border border-border w-full h-full rounded-lg p-4  ">
            <h3 className="text-xl font-semibold mb-2">
              Additional Information
            </h3>
            <p className="text-muted-foreground mb-4">{data.description}</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4">
              <li className="font-bold">
                Car Model {data.categories[0].type}:{" "}
                <span className="text-red-500">With a Price Range : </span>{" "}
                <span className="font-extrabold">
                  Starting from {data.categories[0].priceRange}
                </span>
                , Advanced features, sleek design.
              </li>
              <li className="font-bold">
                Car Model {data.categories[1].type}:{" "}
                <span className="text-red-500">With a Price Range : </span>{" "}
                <span>Starting from {data.categories[1].priceRange}</span>,
                Compact, efficient, perfect for city driving.
              </li>
              <li className="font-bold">
                Car Model {data.categories[2].type}:{" "}
                <span className="text-red-500">With a Price Range : </span>{" "}
                <span>Starting from {data.categories[2].priceRange}</span>, high
                Luxury, premium features, ultimate comfort.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Choose the car that best suits your needs and add it to your cart.
              Enjoy a seamless shopping experience with our user-friendly
              interface.
            </p>
            <div className="border-t border-border my-4 text-center">
              <h4 className="text-lg font-semibold my-2">Daily Rent </h4>
              <p className="text-lg text-green-300 font-bold">
                {data.dailyRent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
