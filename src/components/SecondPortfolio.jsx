import React from "react";
import { motion } from "framer-motion";
import { Center, Flex, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

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

export default function SecondPortfolio() {
  // Portfolio data
  const portfolios = [
    {
      title: "Residential Solar Installations",
      category: "Solar",
      image:
        "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-4.0.3&auto=format&fit=crop&w=1565&q=80&output=webp",
      alt: "Residential solar panel installation",
    },
    {
      title: "Commercial Solar Kits",
      category: "Solar Kits",
      image:
        "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80&output=webp",
      alt: "Commercial solar kit installation",
    },
    {
      title: "Solar Energy Mockups",
      category: "Mockups",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80&output=webp",
      alt: "Solar energy project mockup",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Center flexDirection="column" className="text-center mb-12 lg:mb-16">
          <motion.h1
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Solar Projects
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Discover AlphaRapha’s cutting-edge solar energy solutions,
            transforming homes and businesses with sustainable power.
          </motion.p>
        </Center>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-8 xl:mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl cursor-pointer h-96 group relative shadow-md hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={portfolio.image}
                alt={portfolio.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-8 py-4 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/70 to-black/50 group-hover:opacity-100 backdrop-blur-sm">
                <motion.h2
                  className="mt-4 text-xl font-semibold text-white capitalize"
                  variants={textVariants}
                >
                  {portfolio.title}
                </motion.h2>
                <motion.p
                  className="mt-2 text-lg tracking-wider text-blue-400 uppercase"
                  variants={textVariants}
                >
                  {portfolio.category}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Flex justify="flex-end" mt={8} mx={4}>
          <Link
            to="/projects"
            className="relative flex items-center gap-2 text-base font-semibold text-blue-900 hover:text-blue-700 group/link"
            aria-label="See more solar projects"
          >
            <span className="relative">
              See More
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover/link:w-full transition-all duration-300" />
            </span>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <BsArrowRight size={20} />
            </motion.div>
          </Link>
        </Flex>
      </div>
    </section>
  );
}
