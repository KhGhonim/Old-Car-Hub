"use client";

import { useState } from "react";
import ComparisonTable from "../_compoents/ComparisonTable/ComparisonTable";
import useFetchCarsData from "../../hooks/FetchData";
import Loading from "../loading";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../Redux/CartSlice";
import toast, { Toaster } from "react-hot-toast";
import ComparisonTableHiglighter from "../_compoents/ComparisonTableHiglighter/ComparisonTableHiglighter";
import CompareCarsHelper from "../_compoents/CompareCarsHelper/CompareCarsHelper";

export default function page() {
  const { data, loading } = useFetchCarsData();
  const [selectedCars, setSelectedCars] = useState([]);
  const dispatch = useDispatch();
  let totalToShow = selectedCars.length;
  let selectedCarsNumbers = selectedCars.length - 2;

  const handleCarSelect = (carId) => {
    const car = data.find((car) => car.id === carId);

    if (selectedCars.some((selectedCar) => selectedCar.id === car.id)) {
      setSelectedCars(
        selectedCars.filter((selectedCar) => selectedCar.id !== car.id)
      );
    } else {
      // If the car is not selected, add it
      setSelectedCars([...selectedCars, car]);
    }
  };

  const handleAddToCart = (carId) => {
    dispatch(AddToCart(carId));
    toast.success("Item added to cart");
  };

  if (loading) {
    return <Loading />;
  }
  if (data && data.length > 0) {
    return (
      <div className="min-h-screen  bg-gray-100">
        <Toaster />
        <div className="relative w-full h-[60vh]">
          <img
            src="https://tadvantagegroupprod-com.cdn-convertus.com/uploads/sites/238/2021/10/Inventory-image-scaled.jpg"
            alt="Restaurant Hero"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold drop-shadow-lg">
              Exquisite Cars Awaits
            </h1>
          </div>
        </div>
        {/* Main */}
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Car Comparison</h1>

          {/* Car Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <select
              className="border p-2 w-full md:w-1/2 rounded-md"
              onChange={(e) => handleCarSelect(e.target.value)}
              defaultValue={""}
            >
              <option className="text-xs md:text-sm lg:text-base" disabled value="">
                Choose a Car
              </option>
              {data.map((car, index) => {
                if (!car) return null;
                return (
                  <option className="text-xs md:text-sm lg:text-base" key={index} value={`${car.id}`}>
                    {car.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Quick Comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Quick Comparison</h2>
            {selectedCars.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {selectedCars
                  .slice(selectedCarsNumbers, totalToShow)
                  .map((carId, index) => {
                    if (!carId) return null;
                    return (
                      <div
                        key={index}
                        className="bg-white shadow-2xl rounded-xl p-6 hover:shadow-3xl transition-shadow duration-300 border border-gray-200"
                      >
                        {/* Car Image */}
                        <div className="mb-6 relative">
                          <img
                            src={carId?.image}
                            alt={carId?.name}
                            className="w-full h-full md:h-56 object-cover rounded-t-xl"
                          />
                          <span className="absolute top-4 right-4 bg-black text-white text-sm px-3 py-1 rounded-full">
                            {carId?.automatic}
                          </span>
                        </div>

                        {/* Car Name */}
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                          {carId?.name}
                        </h3>

                        {/* Price */}
                        <p className="text-3xl font-bold text-gray-800 mb-4">
                          ${carId?.rent}
                          <span className="text-base text-gray-500">
                            {" "}
                            / day
                          </span>
                        </p>

                        {/* Features */}
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>
                            <strong>Fuel Usage:</strong> {carId?.fuel}
                          </li>
                          <li>
                            <strong>Acceleration:</strong> {carId?.acceleration}
                          </li>
                          <li>
                            <strong>Range:</strong> {carId?.range}
                          </li>
                        </ul>

                        {/* Action */}
                        <div className="mt-6">
                          <button
                            onClick={() => {
                              handleAddToCart(carId);
                            }}
                            className="w-full py-3 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-gray-700 transition duration-300"
                          >
                            Reserve Now
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="text-red-500">Please select at least two cars to compare</div>
            )}
          </section>

          {/* Detailed Comparison */}
          <ComparisonTable selectedCars={selectedCars} />
          <ComparisonTableHiglighter selectedCars={selectedCars} />
          <CompareCarsHelper />
        </main>
      </div>
    );
  }
}
