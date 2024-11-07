import React, { useEffect } from "react";
import { formatNumber } from "../utils/FormatString";

export default function CartCard({
  img_uri,
  title,
  quantity,
  specs,
  price,
  stock, // Receive stock prop
  updateQuantity,
  remove,
}) {
  useEffect(() => {
    console.log(stock, "sdjhsdj");
  }, []);

  return (
    <div className="md:flex items-center py-8 border-t border-gray-200">
      <div className="w-1/4">
        <img
          src={img_uri}
          alt={title}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-3/4 w-full">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800">
            {title}
          </p>
          <select
            className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
            value={quantity}
            onChange={(e) => {
              const selectedQuantity = parseInt(e.target.value, 10);
              if (selectedQuantity <= stock) {
                updateQuantity(selectedQuantity);
              }
            }}
          >
            {[...Array(stock)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        {specs?.slice(0, 3)?.map((item, index) => (
          <p key={index} className="text-xs leading-3 text-gray-600 pt-2">
            {item?.label}: {item?.value}
          </p>
        ))}
        <div className="flex items-center justify-between pt-5 pr-6">
          <div className="flex items-center">
            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
              Add to favorites
            </p>
            <p
              onClick={remove}
              className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
            >
              Remove
            </p>
          </div>
          <p className="text-base font-black leading-none text-gray-800">
            ₦{formatNumber(price)}
          </p>
        </div>
      </div>
    </div>
  );
}
