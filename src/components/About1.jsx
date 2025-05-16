import React from "react";
import { motion } from "framer-motion";
import { Center, Flex, Text, Button } from "@chakra-ui/react";
import bg2 from "../assets/imgbg2.jpg";
import bg1 from "../assets/bgWoman.jpg";
import bg3 from "../assets/item1.jpg";

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About1 = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="flex flex-wrap items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-6/12 px-4 mb-10 lg:mb-0">
            <Flex className="items-center flex-wrap -mx-3">
              <div className="w-full sm:w-1/2 px-3">
                <motion.div className="py-3" variants={imageVariants}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src={bg2}
                      alt="Solar panel installation"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                <motion.div className="py-3" variants={imageVariants}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src={bg1}
                      alt="Team member working on solar project"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>
              <div className="w-full sm:w-1/2 px-3">
                <motion.div className="py-3 relative" variants={imageVariants}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src={bg3}
                      alt="Solar energy product"
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>
            </Flex>
          </div>

          <div className="w-full lg:w-5/12 px-4">
            <motion.div className="mt-8 lg:mt-0" variants={containerVariants}>
              <motion.span
                className="block mb-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 text-center lg:text-left"
                variants={textVariants}
              >
                Why Choose AlphaRapha
              </motion.span>
              <motion.h2
                className="mb-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center lg:text-left"
                variants={textVariants}
              >
                Empowering a Sustainable Future
              </motion.h2>
              <motion.p
                className="mb-5 text-base sm:text-lg text-gray-600 text-center lg:text-left"
                variants={textVariants}
              >
                At AlphaRapha, we are committed to delivering innovative solar
                energy solutions that power homes and businesses sustainably.
                Our expertise ensures high-quality products and exceptional
                service.
              </motion.p>
              <motion.p
                className="mb-8 text-base sm:text-lg text-gray-600 text-center lg:text-left"
                variants={textVariants}
              >
                With a focus on reliability and efficiency, we help you
                transition to clean energy with confidence, backed by our
                dedicated support and cutting-edge technology.
              </motion.p>
              <motion.div variants={textVariants}>
                <Button
                  as="a"
                  href="/contact"
                  className="inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-white bg-gradient-to-r from-blue-900 to-blue-700 rounded-md hover:from-blue-800 hover:to-blue-600 transition-all duration-300"
                  aria-label="Get started with AlphaRapha"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About1;
