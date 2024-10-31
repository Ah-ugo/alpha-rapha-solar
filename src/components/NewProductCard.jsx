import React, { useState } from "react";
import { formatNumber, truncateString } from "../utils/FormatString";

export default function NewProductCard({
  category,
  title,
  descr,
  rating,
  review,
  img,
  id,
  price,
  onClick,
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div class="max-w-full">
      <div class="w-full max-w-full aspect-square">
        <img
          src={img}
          onClick={() => openModal(img)}
          alt="cream image"
          class="w-full h-full rounded-xl object-cover"
        />
      </div>
      <div class="mt-5 flex items-center justify-between">
        <a href={`/detail/${id}`} class="">
          <h6 class="font-medium text-xl leading-8 text-black mb-2">
            {truncateString(title, 17)}
          </h6>
          <h6 class="font-semibold text-xl leading-8 text-indigo-600">
            N{formatNumber(price)}
          </h6>
        </a>
        {/* <button class="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
          <svg
            class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
              stroke=""
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>
        </button> */}
        <button
          onClick={onClick}
          className="w-auto bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Add to Cart
        </button>
      </div>
      {/* The Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black z-[1000000000000] bg-opacity-75 w-full flex items-center justify-center">
          <div className="relative bg-white rounded-lg max-w-full mx-auto h-screen">
            <span
              className="absolute top-4 right-4 text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </span>
            <img
              src={selectedImage}
              alt="Selected"
              className="modal-content w-full rounded-md"
            />
            {/* <div className="text-center text-gray-500 mt-4">{caption}</div> */}
          </div>
        </div>
      )}
    </div>
  );
}
