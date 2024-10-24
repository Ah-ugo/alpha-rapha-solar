import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { GetProductById } from "../utils/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductOverview = () => {
  const { id } = useParams();
  const [product, setProducts] = useState(null);

  useEffect(() => {
    GetProductById(id).then((rep) => {
      setProducts(rep);
    });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating - fullStars > 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex space-x-1 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {halfStars === 1 && <FaStarHalfAlt />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} />
        ))}
      </div>
    );
  };

  return (
    <div className="mx-auto p-6 mt-16">
      {/* Product Header */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image Carousel */}
        <div className="w-full md:w-1/2">
          <Slider {...settings} className="w-full h-80">
            {" "}
            {/* Adjust height to prevent stacking */}
            {product?.image_urls?.map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: index % 2 === 0 ? 50 : -50, // Slide from bottom for even, top for odd
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                  },
                }}
                className="flex justify-center items-center" // Center image inside the carousel
              >
                <img
                  src={imageUrl || "https://via.placeholder.com/150"}
                  alt={product?.title || "Product Image"}
                  className="object-cover w-full h-80" // Fix image size to match container
                />
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {product?.title || "No Title"}
          </h1>
          <p className="text-gray-600 text-sm mb-2">
            Category: {product?.category || "Unknown"}
          </p>
          <p className="text-gray-800 text-xl font-semibold mb-4">
            N{product?.price || "N/A"}
          </p>
          <p className="text-gray-700 mb-4">
            {product?.description || "No description available"}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Stock: </strong>
            {product?.stock > 0 ? (
              <span className="text-green-600">
                In Stock ({product?.stock})
              </span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>
          <div className="mb-4">
            <span className="text-gray-600 font-semibold">Rating: </span>
            {renderStars(product?.ratings || 0)}
          </div>
          <a
            href={product?.pdf_specifications || "#"}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF Specifications
          </a>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Specifications</h2>
        <p className="text-gray-700 mt-2">
          {product?.text_specifications || "No specifications available"}
        </p>
      </div>

      {/* Customer Reviews */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Customer Reviews
        </h2>
        {product?.reviews?.length > 0 ? (
          product?.reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow mt-4">
              <p className="text-gray-800 font-bold">
                {review?.user || "Anonymous"}
              </p>
              <div className="flex items-center">
                {renderStars(review?.rating || 0)}
                <p className="ml-2 text-sm text-gray-600">
                  {new Date(review?.created_at).toLocaleDateString()}
                </p>
              </div>
              <p className="mt-2 text-gray-700">
                {review?.comment || "No comment"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductOverview;
