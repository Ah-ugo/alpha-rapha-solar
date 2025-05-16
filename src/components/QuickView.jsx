import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  FaHeart,
  FaTimes,
  FaSun,
  FaShoppingCart,
  FaInfoCircle,
} from "react-icons/fa";
import { formatNumber } from "../utils/FormatString";

// Animation variants
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const QuickViewModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close modal on Escape key and manage body scroll
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    if (isOpen) {
      document.body.style.overflow = "hidden";
      const closeButton = document.querySelector(".modal-close-button");
      if (closeButton) closeButton.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const { title, descr, price, images = [product.img], id, stock } = product;
  const hasMultipleImages = images.length > 1;

  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success(`${title} added to cart!`, {
      position: "bottom-right",
      icon: <FaShoppingCart className="text-green-500" />,
    });
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden"
            layout
          >
            {/* Close Button */}
            <motion.button
              className="modal-close-button absolute top-4 right-4 z-50 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-all duration-200 shadow-md"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
              <FaTimes className="text-lg" />
            </motion.button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Carousel Section */}
              <div className="lg:w-1/2 bg-gray-50 p-6 flex flex-col items-center justify-center">
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={100}
                  totalSlides={images.length}
                  className="w-full"
                  currentSlide={currentSlide}
                  isIntrinsicHeight
                >
                  <div className="relative">
                    {hasMultipleImages && (
                      <>
                        <ButtonBack
                          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                          aria-label="Previous image"
                        >
                          <svg
                            className="w-5 h-5 text-gray-800"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </ButtonBack>
                        <ButtonNext
                          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                          aria-label="Next image"
                        >
                          <svg
                            className="w-5 h-5 text-gray-800"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </ButtonNext>
                      </>
                    )}

                    <Slider className="w-full h-64 md:h-96 lg:h-[500px]">
                      {images.map((img, index) => (
                        <Slide key={index} index={index} className="p-4">
                          <motion.div
                            className="w-full h-full flex items-center justify-center"
                            variants={imageVariants}
                            initial="rest"
                            whileHover={!isMobile ? "hover" : ""}
                          >
                            <img
                              src={img || "/placeholder.jpg"}
                              alt={`${title} - Image ${index + 1}`}
                              className="max-h-full max-w-full object-contain"
                              loading="lazy"
                            />
                          </motion.div>
                        </Slide>
                      ))}
                    </Slider>
                  </div>

                  {hasMultipleImages && (
                    <DotGroup
                      className="flex justify-center gap-2 mt-4"
                      renderDots={({ currentSlide }) =>
                        images.map((_, i) => (
                          <button
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all ${
                              i === currentSlide
                                ? "bg-blue-600 w-4"
                                : "bg-gray-300"
                            }`}
                            onClick={() => setCurrentSlide(i)}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))
                      }
                    />
                  )}
                </CarouselProvider>
              </div>

              {/* Product Details Section */}
              <div className="lg:w-1/2 p-6 md:p-8 flex flex-col">
                <motion.div variants={contentVariants}>
                  <div className="flex items-center gap-2 mb-3">
                    <FaSun className="text-yellow-500 text-xl" />
                    <h1
                      id="modal-title"
                      className="text-2xl md:text-3xl font-bold text-gray-900"
                    >
                      {title}
                    </h1>
                  </div>
                </motion.div>

                <motion.div variants={contentVariants} className="mb-6">
                  <p className="text-gray-600 text-sm md:text-base">{descr}</p>
                </motion.div>

                <motion.div variants={contentVariants} className="mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ₦{formatNumber(price)}
                    </span>
                    {stock && (
                      <span
                        className={`text-sm px-2 py-1 rounded ${
                          stock > 5
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {stock > 5 ? "In Stock" : `Only ${stock} left`}
                      </span>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  variants={contentVariants}
                  className="flex flex-col sm:flex-row gap-3 mb-6"
                >
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    aria-label={`Add ${title} to cart`}
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                  <a
                    href={`/products/${id}`}
                    className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    aria-label={`View details for ${title}`}
                  >
                    <FaInfoCircle />
                    View Details
                  </a>
                </motion.div>

                <motion.div variants={contentVariants} className="mt-auto">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`flex items-center gap-2 text-sm ${
                      isWishlisted
                        ? "text-red-500"
                        : "text-gray-600 hover:text-red-500"
                    } transition-colors`}
                    aria-label={
                      isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                    }
                  >
                    <FaHeart className={isWishlisted ? "text-red-500" : ""} />
                    {isWishlisted ? "Saved to Wishlist" : "Save to Wishlist"}
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default QuickViewModal;
