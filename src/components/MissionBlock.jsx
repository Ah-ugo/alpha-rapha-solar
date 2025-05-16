import React from "react";
import { motion } from "framer-motion";
import { Center, Flex, Text } from "@chakra-ui/react";

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

export default function MissionBlock() {
  // Mission, Values, Vision data
  const blocks = [
    {
      title: "Mission",
      description:
        "To empower communities with sustainable solar energy solutions, driving a cleaner and brighter future for all.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
          />
        </svg>
      ),
    },
    {
      title: "Values",
      description:
        "We uphold integrity, innovation, and environmental stewardship in every solar solution we deliver.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      ),
    },
    {
      title: "Vision",
      description:
        "To lead the global transition to renewable energy, making solar power accessible and impactful for every home and business.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
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
            <motion.h2
              className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
              variants={textVariants}
            >
              Our Purpose
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
              variants={textVariants}
            >
              At AlphaRapha, our mission, values, and vision drive us to deliver
              sustainable solar energy solutions that transform lives and
              protect the planet.
            </motion.p>
          </motion.div>
        </Center>
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 mb-5 relative overflow-hidden">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  {block.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300 mb-3">
                {block.title}
              </h3>
              <Text className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {block.description}
              </Text>
              <Flex justify="flex-start" mt={4}>
                <a
                  href="/about"
                  className="relative text-base font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-2 group/link"
                  aria-label={`Learn more about our ${block.title.toLowerCase()}`}
                >
                  <span className="relative">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover/link:w-full transition-all duration-300" />
                  </span>
                </a>
              </Flex>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
