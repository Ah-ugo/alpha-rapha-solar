import React, { useContext, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Center, Flex } from "@chakra-ui/react";
import NewProductCard from "./NewProductCard";
import { Context } from "../Context/mainContext";
import { LoadAllProducts } from "../utils/Products";
import NewNavbar from "./NewNavbarCom";
import Footeer from "./Footeer";
import { Fab } from "react-tiny-fab";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

const ImageModal = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full"
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
    </AnimatePresence>,
    document.body
  );
};

const NewProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageTitle, setSelectedImageTitle] = useState("");
  const { cart, handleAddToCart } = useContext(Context);

  const openWhatsApp = () => {
    const phoneNumber = "+2347038122409";
    const message =
      "Hello, I'm interested in AlphaRapha's solar energy solutions.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const handleImageClick = (img, title) => {
    setSelectedImage(img);
    setSelectedImageTitle(title);
    setImageModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    LoadAllProducts()
      .then((rep) => {
        setProducts(rep);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return products.filter((product) => {
      const hasTags = product.tags
        ? product.tags.join(",").toLowerCase().includes(query)
        : false;
      return (
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        hasTags
      );
    });
  }, [products, searchQuery]);

  if (loading) {
    return (
      <Center className="h-screen bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="text-gray-600 text-lg font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Loading products...
        </motion.div>
      </Center>
    );
  }

  if (error) {
    return (
      <Center className="h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="text-red-500 text-lg font-semibold">{error}</div>
      </Center>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NewNavbar active={true} />
      <main className="pt-24 pb-24">
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Center
              flexDirection="column"
              className="text-center mb-12 lg:mb-16"
            >
              <motion.h1
                className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Our Solar Products
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Explore AlphaRapha's premium solar panels, inverters, batteries,
                and accessories for sustainable energy solutions.
              </motion.p>
            </Center>

            <div className="relative mb-10 max-w-full lg:max-w-xl mx-auto">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  className="h-6 w-6 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <motion.input
                className="w-full border border-gray-200/50 rounded-md pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none focus:shadow-outline transition-all duration-300"
                type="text"
                placeholder="Search by title, category, or tags"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <Flex
              justify="space-between"
              align="center"
              mb={8}
              flexDir={{ base: "column", md: "row" }}
              gap={4}
            >
              <div className="flex flex-col justify-start items-start">
                <motion.p
                  className="text-sm leading-none text-gray-600 hover:text-blue-700 transition-colors duration-300"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <a href="/" className="underline">
                    Home
                  </a>{" "}
                  - Solar
                </motion.p>
                <Flex align="center" mt={2} gap={3}>
                  <motion.p
                    className="text-2xl font-semibold text-gray-800"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    Solar Products
                  </motion.p>
                  <motion.p
                    className="text-base text-gray-600"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    ({filteredProducts.length} products)
                  </motion.p>
                </Flex>
              </div>
              <motion.button
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 px-4 rounded-md flex items-center gap-3 hover:from-blue-800 hover:to-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle filters"
              >
                <svg
                  className="fill-none stroke-white"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 14.6452V9.33875"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6.30645V1"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14.6452V7.82263"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 4.79032V1"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 14.6452V10.8549"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 7.82258V1"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 9.33875H7"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 4.79028H15"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 10.8549H23"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="hidden md:block text-sm font-semibold">
                  Filters
                </span>
              </motion.button>
            </Flex>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredProducts.length === 0 ? (
                <Center className="col-span-full py-12">
                  <p className="text-gray-600 text-lg">
                    No products found matching your search.
                  </p>
                </Center>
              ) : (
                filteredProducts
                  .map((resp) => (
                    <motion.div key={resp._id} variants={cardVariants}>
                      <NewProductCard
                        img={resp.image_urls[0]}
                        price={resp.price}
                        title={resp.title}
                        id={resp._id}
                        descr={resp.description}
                        category={resp.category}
                        rating={resp.ratings}
                        review={resp.reviews?.length}
                        onClick={() => handleAddToCart(resp)}
                        onImageClick={handleImageClick}
                      />
                    </motion.div>
                  ))
                  .reverse()
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footeer />
      <motion.div
        className="fixed bottom-6 right-0 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Fab
          mainButtonStyles={{
            background: "linear-gradient(90deg, #25D366 0%, #20C05C 100%)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            width: "60px",
            height: "60px",
          }}
          icon={<FaWhatsapp size={28} color="white" />}
          onClick={openWhatsApp}
          aria-label="Contact us via WhatsApp"
        />
      </motion.div>

      <ImageModal
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
        imageSrc={selectedImage}
        altText={`Enlarged view of ${selectedImageTitle}`}
      />
    </div>
  );
};

export default NewProductList;
