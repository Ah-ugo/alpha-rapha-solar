import React from "react";
import { motion } from "framer-motion";
import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";

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
    transition: { duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SubServiceCards() {
  // Product categories data
  const categories = [
    {
      title: "Inverters",
      description:
        "High-efficiency inverters to convert solar energy into usable power, designed for reliability and performance.",
      image:
        "http://res.cloudinary.com/dejeplzpv/image/upload/v1730155721/shops/hm0azk6sbjns7ydkorvl.webp",
    },
    {
      title: "Charge Controllers",
      description:
        "Advanced charge controllers to optimize battery charging and protect your solar system.",
      image:
        "http://res.cloudinary.com/dejeplzpv/image/upload/v1729780532/shops/sy8xng4ycbx8oje8oc09.webp",
    },
    {
      title: "Lithium Batteries",
      description:
        "Long-lasting lithium batteries for efficient energy storage and consistent power supply.",
      image:
        "https://ueeshop.ly200-cdn.com/u_file/UPAZ/UPAZ775/2311/15/products/01-d389.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_500,w_500",
    },
    {
      title: "Solar Street Lights",
      description:
        "Eco-friendly solar street lights for bright, sustainable outdoor illumination.",
      image:
        "http://res.cloudinary.com/dejeplzpv/image/upload/v1729780471/shops/xvsaioxifajgtqdyyrqz.webp",
    },
    {
      title: "Solar Panels",
      description:
        "Premium solar panels delivering maximum efficiency and durability for your energy needs.",
      image:
        "http://res.cloudinary.com/dejeplzpv/image/upload/v1729780220/shops/tezufktdoxewn89dvpqq.webp",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Center>
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              className="block text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 mb-3"
              variants={textVariants}
            >
              Discover Our Range
            </motion.span>
            <motion.h2
              className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
              variants={textVariants}
            >
              Explore Solar Product Categories
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
              variants={textVariants}
            >
              Dive into our curated selection of solar products, designed to
              power your life sustainably with cutting-edge technology and
              unmatched quality.
            </motion.p>
          </motion.div>
        </Center>

        <motion.div
          className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.title} product image`}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col">
                <h5 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 mb-3">
                  {category.title}
                </h5>
                <p className="text-gray-600 text-sm sm:text-base mb-5 flex-grow">
                  {category.description}
                </p>
                <Flex justify="space-between" align="center">
                  <a
                    href="/store"
                    className="relative text-base font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-2 group/link"
                    aria-label={`Shop ${category.title}`}
                  >
                    <span className="relative">
                      Shop Now
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <motion.span
                      className="text-blue-900"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BiCart size={20} />
                    </motion.span>
                  </a>
                </Flex>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
