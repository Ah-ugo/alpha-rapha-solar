import { Center, Flex, Text, Spinner, Button } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LoadAllProducts } from "../utils/Products";
import { formatNumber } from "../utils/FormatString";

// Animation variants for staggered effects
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
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      bounce: 0.3,
    },
  },
  hover: {
    scale: 1.03,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <motion.div
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-3 shadow-lg hover:shadow-xl"
    whileHover={{ scale: 1.1, backgroundColor: "#f0f4ff" }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    aria-label="Next slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6 text-blue-900"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  </motion.div>
);

const PrevArrow = ({ onClick }) => (
  <motion.div
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-3 shadow-lg hover:shadow-xl"
    whileHover={{ scale: 1.1, backgroundColor: "#f0f4ff" }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    aria-label="Previous slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6 text-blue-900"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  </motion.div>
);

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    LoadAllProducts()
      .then((rep) => {
        setProducts(rep.slice(0, 6)); // Limit to 6 products
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          infinite: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="bg-transparent rounded-lg p-2">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full transition-all duration-300 hover:bg-opacity-100"></div>
    ),
  };

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Center flexDirection="column" className="text-center mb-12 lg:mb-16">
            <motion.span
              className="block text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-3"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Products
            </motion.span>
            <motion.h2
              className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Featured Products
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Explore our top-tier solar products, crafted for efficiency and
              sustainability.
            </motion.p>
          </Center>
          <Center className="h-52">
            <Flex align="center" gap={4}>
              <Spinner size="lg" color="white" thickness="3px" />
              <Text color="white" fontSize="lg">
                Loading products...
              </Text>
            </Flex>
          </Center>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Center flexDirection="column" className="text-center mb-12 lg:mb-16">
            <motion.span
              className="block text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-3"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Products
            </motion.span>
            <motion.h2
              className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Featured Products
            </motion.h2>
          </Center>
          <Center className="h-52">
            <Flex direction="column" align="center" gap={4}>
              <Text color="red.400" fontSize="lg">
                {error}
              </Text>
              <Button
                colorScheme="blue"
                size="md"
                onClick={() => window.location.reload()}
                px={8}
                py={6}
                fontWeight="semibold"
              >
                Retry
              </Button>
            </Flex>
          </Center>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-700 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Center flexDirection="column" className="text-center mb-12 lg:mb-16">
          <motion.span
            className="block text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-3"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Products
          </motion.span>
          <motion.h2
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Featured Products
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Explore our top-tier solar products, crafted for efficiency and
            sustainability to power your future.
          </motion.p>
        </Center>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Slider {...settings} className="featured-products-slider">
            {products.map((product) => (
              <motion.div
                key={product._id}
                className="px-4 py-2"
                variants={cardVariants}
              >
                <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      alt={product.title}
                      src={product.image_urls[0]}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 mb-2">
                        {product.title}
                      </h3>
                      <Text className="text-gray-600 text-sm mb-3">
                        {product.color || "Premium Solar Solution"}
                      </Text>
                    </div>
                    <div className="mt-auto">
                      <Flex justify="space-between" align="center">
                        <Text className="text-lg font-bold text-gray-900">
                          ₦{formatNumber(product.price)}
                        </Text>
                        <motion.a
                          href={`/products/${product._id}`}
                          className="relative text-base font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-2 group/link"
                          aria-label={`View details for ${product.title}`}
                          whileHover={{ x: 2 }}
                        >
                          <span className="relative">
                            View Details
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover/link:w-full transition-all duration-300" />
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 group-hover/link:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.a>
                      </Flex>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style jsx global>{`
        .featured-products-slider .slick-dots li.slick-active div {
          background-color: white;
          width: 12px;
          height: 12px;
        }
        .featured-products-slider .slick-dots li div {
          width: 8px;
          height: 8px;
        }
        .featured-products-slider .slick-list {
          padding: 20px 0;
          margin: -20px 0;
        }
      `}</style>
    </section>
  );
}
