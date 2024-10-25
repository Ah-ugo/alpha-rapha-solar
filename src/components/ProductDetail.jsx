import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { AddReview, GetProductById } from "../utils/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ModalWrapper from "./ModalWrapper";
import { useDisclosure } from "@nextui-org/react";

const ProductOverview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    GetProductById(id).then((rep) => {
      setProduct(rep); // Ensure this updates product once
      console.log("Product Data: ", rep); // Log the product data
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setNewReview((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for the authorization token
    const token = localStorage.getItem("alpharapha_token");
    if (!token) {
      // Open the modal if the token is not found
      onOpen();
      return; // Exit the function to prevent further execution
    }

    // Continue with review submission if token exists
    const reviewData = {
      rating: newReview.rating,
      comment: newReview.comment,
    };

    console.log("New Review Submitted: ", reviewData);

    AddReview(reviewData, id)
      .then((resp) => {
        console.log("Review submission response: ", resp);
        // Reload product data after successful review submission
        GetProductById(id).then((rep) => {
          setProduct(rep);
          console.log("Updated Product Data: ", rep);
        });
        // Reset the review form
        setNewReview({
          rating: 0,
          comment: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting review: ", error);
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleOpen = () => {
    // setSize(size)
    onOpen();
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
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
    <div className="container mx-auto p-6 mt-16">
      {/* Product Header */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image Carousel */}
        <div className="w-full md:w-1/2">
          {product?.image_urls && product.image_urls?.length > 0 && (
            <Slider {...settings} className="w-full">
              {product.image_urls.map((imageUrl, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: index % 2 === 0 ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                  className="flex justify-center items-center"
                >
                  <img
                    src={imageUrl}
                    alt={product?.title || "Product Image"}
                    className="object-cover w-full h-auto md:h-80"
                  />
                </motion.div>
              ))}
            </Slider>
          )}
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
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
            // target="_blank"
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
          {product?.text_specifications || "No specifications available."}
        </p>
      </div>

      {/* Customer Reviews */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Customer Reviews
        </h2>
        {product?.reviews?.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow mt-4">
              <p className="text-gray-800 font-bold">{review.user}</p>
              <div className="flex items-center">
                {renderStars(review.rating)}
                <p className="ml-2 text-sm text-gray-600">
                  {new Date(review.created_at).toLocaleDateString()}
                </p>
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </div>

      {/* Review Form */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Write a Review</h2>
        <form
          onSubmit={handleSubmit}
          className="mt-4 bg-white p-4 rounded-lg shadow"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Your Review</label>
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              className="border border-gray-300 rounded p-2 w-full"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Rating</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className={`text-2xl ${
                    newReview.rating >= star
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      </div>
      <ModalWrapper isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </div>
  );
};

export default ProductOverview;
