"use client";
import { FaShoppingBag, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteItem,
  IncreaseTheNumber,
  LowerTheNumber,
} from "../../Redux/CartSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

  const TotalCostAfterDeduction = totalCost > 0 ? totalCost - 5.0 : totalCost;

  useEffect(() => {
    if (PromoCode) {
      setTotal(TotalCostAfterDeduction / PromoCode);
    }
  }, [PromoCode]);

  const HandleDelete = (item) => () => {
    dispatch(DeleteItem(item));
    toast.success("Item Deleted");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Cart Items Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left hidden lg:block py-2 px-4">
                      Product
                    </th>
                    <th className="text-left py-2 px-4">Quantity</th>
                    <th className="text-left py-2 px-4">Price</th>
                    <th className="text-left py-2 px-4">Total</th>
                    <th className="text-left py-2 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {shopCartInTheArray.map((item, index) => {
                    const itemTotal =
                      Number(item.dailyRent) * Number(item.quantity);

                    return (
                      <tr key={index} className="border-t">
                        <td className="py-4 px-4  hidden lg:flex   items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-md w-24 h-16"
                          />
                          <span className="font-medium">{item.name}</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => dispatch(LowerTheNumber(item))}
                              className="bg-gray-200 text-gray-600 px-2 rounded-full"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => dispatch(IncreaseTheNumber(item))}
                              className="bg-gray-200 text-gray-600 px-1 rounded-full"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-4">£{item.dailyRent}</td>
                        <td className="py-4 px-4">£{itemTotal.toFixed(2)}</td>
                        <td className="py-4 px-4">
                          <button
                            onClick={HandleDelete(item)}
                            className="text-red-500"
                          >
                            <FaTrash className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Promo Code Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Have a Promo Code?</h2>
            <div className="flex space-x-2">
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Enter promo code"
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="bg-gray-500 text-white hover:bg-gray-400 p-2 rounded">
                Apply
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="bg-white w-full shadow-md rounded-lg p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">
                Additional Services
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="warranty"
                    className="form-checkbox"
                  />
                  <label htmlFor="warranty">Extended Warranty (+£1999)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="insurance"
                    className="form-checkbox"
                  />
                  <label htmlFor="insurance">Car Insurance Quote</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="financing"
                    className="form-checkbox"
                  />
                  <label htmlFor="financing">Financing Options</label>
                </div>
              </div>
            </div>

            <div className="bg-white w-full shadow-md rounded-lg p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="standard"
                    className="form-checkbox"
                  />
                  <label htmlFor="standard">
                    Standard Shipping (5-7 business days)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="express"
                    className="form-checkbox"
                  />
                  <label htmlFor="express">
                    Express Shipping (2-3 business days)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="overnight"
                    className="form-checkbox"
                  />
                  <label htmlFor="overnight">
                    Overnight Shipping (1 business day)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>£{totalCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{totalCost > 0 ? "-£5.00" : "£0.00"}</span>
              </div>
              <div className="border-t py-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>
                    £{PromoCode ? Total : TotalCostAfterDeduction.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 text-white w-full p-2 rounded mt-4">
              <FaShoppingBag className="mr-2 h-4 w-4 inline-block" /> Proceed to
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
