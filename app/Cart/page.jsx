"use client";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteItem,
  IncreaseTheNumber,
  LowerTheNumber,
} from "../../Redux/CartSlice";
import { useEffect, useState } from "react";

export default function page() {
  const [PromoCode, setPromoCode] = useState(null);
  const [Total, setTotal] = useState(0);
  const dispatch = useDispatch();
  // @ts-ignore
  const { shopCartInTheArray } = useSelector((state) => state.ShopCart);
  const totalCost = shopCartInTheArray.reduce((acc, item) => {
    const itemTotal = Number(item.dailyRent) * Number(item.quantity);
    return acc + itemTotal;
  }, 0);

  const TotalCostAfterDeduction = totalCost.toFixed(2) - 5.0;

  useEffect(() => {
    if (PromoCode) {
      setTotal(TotalCostAfterDeduction / PromoCode);
    }
  }, [PromoCode]);
  return (
    <div className="w-full  p-8 md:p-12 lg:px-16 lg:py-24 ">
      <div className="container mx-auto p-6 url('/images/HearoSectionBG.png')  bg-center bg-no-repeat">
        {shopCartInTheArray && shopCartInTheArray.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              className="bg-blue-500 text-white hover:bg-blue-500/80 transition-all duration-500 px-4 py-2 rounded-lg"
              href={"/"}
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {/* Items */}
            <div className="bg-white shadow-md rounded-lg p-4 h-full">
              <h2 className="text-lg font-semibold mb-2">
                {shopCartInTheArray.length} Items
              </h2>
              {shopCartInTheArray.map((item, index) => {
                let total = Number(item.price) * Number(item.quantity);
                console.log(total);
                return (
                  <div key={index} className="border-b pb-4 mb-4">
                    <div className="flex justify-between items-center mb-2 text-xs md:text-base">
                      <div className="flex items-center justify-center flex-col lg:flex-row">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mr-2 w-72 h-72 md:w-48 md:h-48 object-contain"
                        />
                        <div className="flex flex-col items-center py-2">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-zinc-500">
                            {item.fuelUsage}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <button
                          onClick={() => {
                            dispatch(LowerTheNumber(item));
                          }}
                          className="bg-zinc-200 p-1 rounded-l"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => {
                            dispatch(IncreaseTheNumber(item));
                          }}
                          className="bg-zinc-200 p-1 rounded-r"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-medium">£{item.dailyRent}</p>
                      <button
                        onClick={() => {
                          dispatch(DeleteItem(item));
                        }}
                        className="text-red-500"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                );
              })}
              <Link href="/" className="text-blue-600 ">
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-md rounded-lg p-4 text-sm md:text-base">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Items</span>
                <span>£{totalCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span> -£5.00</span>
              </div>
              <div className="mb-4">
                <label htmlFor="promo-code" className="block text-sm mb-1">
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo-code"
                  className="border rounded w-full p-2"
                  placeholder="Enter your code"
                  onChange={(eo) => {
                    setPromoCode(eo.target.value);
                  }}
                />
                <button className="bg-gray-500 text-white  hover:bg-gray-500/80 mt-2 p-2 rounded">
                  APPLY
                </button>
              </div>
              <div className="flex justify-between font-bold mb-4">
                <span>Total Cost</span>
                <span>£{PromoCode ? Total : TotalCostAfterDeduction}</span>
              </div>
              <button className="bg-blue-600 text-white hover:bg-blue-700/80 duration-300 transition-all ease-in-out w-full p-2 rounded">
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
