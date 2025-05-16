import React from "react";
import { motion } from "framer-motion";
import { Center } from "@chakra-ui/react";
import ProductList from "../components/ProductList";
import NewNavbar from "../components/NewNavbarCom";
import Footeer from "../components/Footeer";
import { Fab } from "react-tiny-fab";
import { FaWhatsapp } from "react-icons/fa";

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

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Store() {
  const openWhatsApp = () => {
    const phoneNumber = "+2347038122409";
    const message =
      "Hello, I'm interested in AlphaRapha's solar energy solutions.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NewNavbar active={true} />
      <main className="pt-24">
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
                Explore Our Solar Solutions
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Discover AlphaRapha’s range of high-quality solar panels,
                inverters, batteries, and accessories designed for a sustainable
                future.
              </motion.p>
            </Center>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ProductList />
            </motion.div>
          </div>
        </section>
      </main>
      <Footeer />
      <motion.div
        className="fixed bottom-6 right-6 z-50"
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
    </div>
  );
}
