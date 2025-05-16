import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { AddReview, GetProductById } from "../utils/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaWhatsapp,
  FaSun,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import { Center, Flex, Text, useToast } from "@chakra-ui/react";
import { formatNumber } from "../utils/FormatString";
import { Context } from "../Context/mainContext";
import Breadcrumb from "./BreadCrumb";
import ModalWrapper from "./ModalWrapper";
import { useDisclosure } from "@chakra-ui/react";

const ImageModal = ({ isOpen, onClose, imageSrc, altText }) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition"
              aria-label="Close image viewer"
            >
              <FaTimes size={24} />
            </button>
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const ProductOverview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const { handleAddToCart } = useContext(Context);
  const toast = useToast();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    GetProductById(id)
      .then((rep) => {
        const productWithFallbacks = {
          ...rep,
          image_urls:
            rep.image_urls?.length > 0 ? rep.image_urls : ["/placeholder.jpg"],
          ratings: rep.ratings || 0,
          reviews: rep.reviews || [],
          text_specifications: rep.text_specifications || [],
          description: rep.description || "No description available",
          category: rep.category || "Unknown",
          stock: rep.stock || 0,
        };
        setProduct(productWithFallbacks);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load product:", err);
        setError("Failed to load product. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  const openWhatsApp = () => {
    const phoneNumber = "+2347038122409";
    const message = `Hello, I'm interested in ${
      product?.title || "this product"
    }.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setImageModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("alpharapha_token");
    if (!token) {
      onOpen();
      return;
    }
    const reviewData = { rating: newReview.rating, comment: newReview.comment };
    AddReview(reviewData, id)
      .then((resp) => {
        toast({
          title: "Review submitted!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        GetProductById(id).then((rep) => {
          setProduct({
            ...rep,
            image_urls:
              rep.image_urls?.length > 0
                ? rep.image_urls
                : ["/placeholder.jpg"],
            ratings: rep.ratings || 0,
            reviews: rep.reviews || [],
            text_specifications: rep.text_specifications || [],
          });
        });
        setNewReview({ rating: 0, comment: "" });
      })
      .catch((error) => {
        toast({
          title: "Error submitting review",
          description: error.message || "Please try again later",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    return (
      <div className="flex space-x-1 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {halfStars === 1 && <FaStarHalfAlt />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !isMobile,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-600 transition-all duration-300" />
    ),
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
  };

  if (loading) {
    return (
      <Center h="100vh" bg="gray.50">
        <motion.div
          className="w-16 h-16 border-4 border-t-blue-600 border-gray-200 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          aria-label="Loading product"
        />
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="100vh" bg="gray.50" flexDirection="column" gap={4}>
        <Text color="red.500" fontSize="xl">
          {error}
        </Text>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </Center>
    );
  }

  if (!product) {
    return (
      <Center h="100vh" bg="gray.50">
        <Text fontSize="xl">Product not found</Text>
      </Center>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <Breadcrumb
            breadcrumbs={[
              { label: "Shop", path: "/store" },
              { label: product.title, path: `#` },
            ]}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <motion.div
            className="lg:w-1/2 bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          >
            {product.image_urls.length > 0 ? (
              <Slider {...settings} className="w-full">
                {product.image_urls.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center p-4"
                  >
                    <img
                      src={imageUrl}
                      alt={`${product.title} - Image ${index + 1}`}
                      className="object-contain w-full h-64 sm:h-80 md:h-96 cursor-pointer"
                      onClick={() => handleImageClick(imageUrl)}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "/placeholder.jpg";
                      }}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="flex justify-center items-center p-4 h-64 sm:h-80 md:h-96">
                <img
                  src="/placeholder.jpg"
                  alt="No image available"
                  className="object-contain w-full h-full"
                />
              </div>
            )}
          </motion.div>

          <motion.div
            className="lg:w-1/2 bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 0.2 },
            }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FaSun className="text-yellow-500 text-xl" />
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {product.title}
                </h1>
              </div>

              <p className="text-gray-600">
                <span className="font-medium">Category:</span>{" "}
                {product.category}
              </p>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-blue-600">
                  ₦{formatNumber(product.price)}
                </span>
                <span
                  className={`text-sm px-2 py-1 rounded ${
                    product.stock > 5
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {product.stock > 5
                    ? "In Stock"
                    : `Only ${product.stock} left`}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {renderStars(product.ratings)}
                <span className="text-gray-600 text-sm">
                  ({product.reviews.length} reviews)
                </span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-700">{product.description}</p>
              </div>

              {product.pdf_specifications && (
                <a
                  href={product.pdf_specifications}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 underline"
                >
                  Download Product Specifications (PDF)
                </a>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => {
                    handleAddToCart(product);
                    toast({
                      title: "Added to cart",
                      description: `${product.title} has been added to your cart`,
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition ${
                    product.stock > 0
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                  disabled={product.stock <= 0}
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
                <button
                  onClick={openWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
                >
                  <FaWhatsapp />
                  Buy on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.4 },
          }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Specifications
          </h2>
          {product.text_specifications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.text_specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  }}
                >
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">
                      {spec.label}:
                    </span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No specifications available.</p>
          )}
        </motion.div>

        <motion.div
          className="mt-8 bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.6 },
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Customer Reviews
            </h2>
            <div className="flex items-center gap-2">
              {renderStars(product.ratings)}
              <span className="text-gray-600">
                ({product.reviews.length} reviews)
              </span>
            </div>
          </div>

          {product.reviews.length > 0 ? (
            <div className="space-y-4">
              {product.reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      {review.user[0].toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{review.user}</p>
                      <div className="flex items-center gap-2">
                        {renderStars(review.rating)}
                        <span className="text-gray-500 text-sm">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No reviews yet. Be the first to review!
            </p>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Write a Review
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Your Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className={`text-2xl ${
                        newReview.rating >= star
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } hover:text-yellow-400 transition`}
                      aria-label={`Rate ${star} star${star !== 1 ? "s" : ""}`}
                    >
                      <FaStar />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="comment"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Review
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
              >
                Submit Review
              </button>
            </form>
          </div>
        </motion.div>

        <ImageModal
          isOpen={isImageModalOpen}
          onClose={closeImageModal}
          imageSrc={selectedImage}
          altText={`Enlarged view of ${product.title}`}
        />

        <ModalWrapper isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

        <motion.div
          className="fixed bottom-6 right-6 z-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp size={24} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductOverview;
