import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { formatNumber, truncateString } from "../Pages/FormatString";

const ProductCard2 = ({
  category,
  title,
  descr,
  rating,
  review,
  img_url,
  id,
  price,
}) => {
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
    <div className="max-w-md w-full">
      {/* <a href={`/detail/${id}`}> */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-75"></div>
          <img
            // src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxDb3NtaWMlMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3MjgxNTYwNTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
            src={img_url}
            onClick={() => openModal(img_url)}
            alt="Product Image"
            className="w-full h-64 object-cover object-center relative z-10"
          />
          <div className="absolute top-4 right-4 bg-gray-100 text-xs font-bold px-3 py-2 rounded-full z-20 transform rotate-12">
            {/* NEW */}
            {category}
          </div>
        </div>

        <div className="p-6">
          <a href={`/detail/${id}`}>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
              {/* Cosmic Headphones */}
              {truncateString(title, 17)}
            </h2>
            <p className="text-gray-600 mb-4">
              {/* Experience music like never before with our state-of-the-art Cosmic
            Headphones. Immerse yourself in crystal-clear sound and unparalleled
            comfort. */}
              {truncateString(descr, 35)}
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-indigo-600">
                ₦{formatNumber(price)}
              </span>
              <div className="flex items-center">
                <FaStar className="h-5 w-5 text-yellow-400" />
                <span className="ml-1 text-gray-600">
                  {rating} ({review} reviews)
                </span>
              </div>
            </div>
          </a>
          <button className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Add to Cart
          </button>
        </div>
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
      {/* </a> */}
    </div>
  );
};

export default ProductCard2;
