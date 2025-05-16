import React from "react";
import { FiTool } from "react-icons/fi";
import { GiSolarPower } from "react-icons/gi";
import {
  MdBuild,
  MdOutlinePower,
  MdOutlineSupportAgent,
  MdSettings,
} from "react-icons/md";
import { motion } from "framer-motion";
import { Center, Flex, Heading, Text } from "@chakra-ui/react";

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

const Service = () => {
  // Service data
  const services = [
    {
      title: "Solar Panel Sales",
      details:
        "Discover premium solar panels engineered for maximum efficiency. Our range of solar solutions is tailored to power your home or business sustainably.",
      icon: <GiSolarPower size={40} color="white" />,
    },
    {
      title: "Solar Consultation",
      details:
        "Benefit from expert advice on solar energy solutions. We assess your needs and design the ideal solar setup for optimal performance and savings.",
      icon: <MdOutlineSupportAgent size={40} color="white" />,
    },
    {
      title: "Solar Installation",
      details:
        "Experience professional, hassle-free installation by our certified technicians, ensuring your solar system is safe, efficient, and built to last.",
      icon: <FiTool size={40} color="white" />,
    },
    {
      title: "System Repairs",
      details:
        "Keep your solar systems at peak performance with our reliable repair services, from quick fixes to comprehensive overhauls.",
      icon: <MdBuild size={40} color="white" />,
    },
    {
      title: "System Maintenance",
      details:
        "Ensure long-term efficiency with regular maintenance checks. Our team provides thorough tune-ups to keep your solar panels performing optimally.",
      icon: <MdSettings size={40} color="white" />,
    },
    {
      title: "Energy Audits",
      details:
        "Maximize savings with detailed energy audits. We identify opportunities to enhance efficiency and integrate solar power effectively.",
      icon: <MdOutlinePower size={40} color="white" />,
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
              Our Expertise
            </motion.span>
            <motion.h2
              className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
              variants={textVariants}
            >
              Comprehensive Solar Services
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
              variants={textVariants}
            >
              From consultation to maintenance, our end-to-end solar services
              empower you to embrace clean energy with confidence and ease.
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
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, details }) => {
  return (
    <motion.div
      className="w-full px-4"
      variants={cardVariants}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      <div className="mb-8 rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            {icon}
          </motion.div>
        </div>
        <h4 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {details}
        </p>
        <Flex justify="flex-start" mt={4}>
          <a
            href="/services"
            className="relative text-base font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-2 group/link"
            aria-label={`Learn more about ${title}`}
          >
            <span className="relative">
              Learn More
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover/link:w-full transition-all duration-300" />
            </span>
          </a>
        </Flex>
      </div>
    </motion.div>
  );
};

export default Service;
