import "hero-slider/dist/index.css";
import HeroSlider, { Nav, Overlay, Slide } from "hero-slider";
import React, { useEffect, useState } from "react";
import bg1 from "./assets/panel.jpg";
import bg2 from "./assets/bgWork.jpg";
import bg3 from "./assets/imgbg1.jpg";
import { Button } from "@nextui-org/react";
import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NewNavbar from "./components/NewNavbarCom";
import SubServiceCards from "./components/SubServiceCards";
import Service from "./components/Service";
import FeaturedProducts from "./components/FeaturedProducts";
import About1 from "./components/About1";
import MissionBlock from "./components/MissionBlock";
import SecondPortfolio from "./components/SecondPortfolio";
import Footeer from "./components/Footeer";
import { Fab } from "react-tiny-fab";
import { FaWhatsapp } from "react-icons/fa";

// Motion components for animations
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionDiv = motion.div;

// Animation variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function App() {
  const [navbar, setNavbar] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "+2347038122409";
    const message = "Hello, I'm interested in your solar solutions!";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <NewNavbar active={navbar} />
      <HeroSlider
        width={"100vw"}
        height={"100vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 600,
          slidingDelay: 200,
        }}
        className="relative overflow-x-hidden"
      >
        <Nav
          className="bottom-8"
          navStyles={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "50%",
            width: "12px",
            height: "12px",
            margin: "0 6px",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          activeNavStyles={{
            backgroundColor: "#ffffff",
            transform: "scale(1.2)",
          }}
        />

        {/* Slide 1 */}
        <Slide
          background={{
            backgroundImageSrc: bg1,
            backgroundAttachment: "scroll",
          }}
        >
          <Overlay>
            <div className="h-full w-full bg-gradient-to-r from-black/75 via-black/50 to-transparent px-4 sm:px-8 md:px-16 lg:px-24 overflow-x-hidden">
              <Flex flexDirection="column" height="full">
                <Center
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  height="full"
                  maxWidth={{ base: "90%", md: "3xl" }}
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-5 w-full"
                  >
                    <MotionHeading
                      size={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
                      className="text-white font-extrabold leading-tight text-left"
                      variants={childVariants}
                      style={{ maxWidth: "100%", wordWrap: "break-word" }}
                    >
                      Power Your Future with AlphaRapha
                    </MotionHeading>
                    <MotionText
                      fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                      className="text-gray-100"
                      variants={childVariants}
                      style={{ maxWidth: "100%", wordWrap: "break-word" }}
                    >
                      Transform your energy landscape with cutting-edge solar
                      panels, expert installation, and dedicated support.
                      Embrace renewable energy, reduce your carbon footprint,
                      and save on costs with our tailored solutions.
                    </MotionText>
                    <Flex gap={3} flexWrap="wrap">
                      <MotionButton
                        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-base font-semibold py-5 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                        variants={childVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Get started with solar solutions"
                      >
                        Get Started
                      </MotionButton>
                      <MotionButton
                        className="bg-transparent border-2 border-white text-white text-base font-semibold py-5 px-6 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
                        variants={childVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Learn more about AlphaRapha"
                      >
                        Learn More
                      </MotionButton>
                    </Flex>
                  </motion.div>
                </Center>
              </Flex>
            </div>
          </Overlay>
        </Slide>

        {/* Slide 2 */}
        <Slide
          background={{
            backgroundImageSrc: bg2,
            backgroundAttachment: "scroll",
          }}
        >
          <Overlay>
            <div className="h-full w-full bg-gradient-to-r from-black/75 via-black/50 to-transparent px-4 sm:px-8 md:px-16 lg:px-24 overflow-x-hidden">
              <Flex flexDirection="column" height="full">
                <Center
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  height="full"
                  maxWidth={{ base: "90%", md: "3xl" }}
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-5 w-full"
                  >
                    <MotionHeading
                      size={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
                      className="text-white font-extrabold leading-tight text-left"
                      variants={childVariants}
                      style={{ maxWidth: "100%", wordWrap: "break-word" }}
                    >
                      Custom Solar Solutions for You
                    </MotionHeading>
                    <MotionText
                      fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                      className="text-gray-100"
                      variants={childVariants}
                      style={{ maxWidth: "100%", wordWrap: "break-word" }}
                    >
                      At AlphaRapha, we deliver personalized solar systems with
                      professional consultation, seamless installation, and
                      reliable maintenance. Transition to clean energy
                      effortlessly and cost-effectively.
                    </MotionText>
                    <Flex gap={3} flexWrap="wrap">
                      <MotionButton
                        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-base font-semibold py-5 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                        variants={childVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Book a consultation"
                      >
                        Book Consultation
                      </MotionButton>
                      <MotionButton
                        className="bg-transparent border-2 border-white text-white text-base font-semibold py-5 px-6 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
                        variants={childVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Explore our services"
                      >
                        Explore Services
                      </MotionButton>
                    </Flex>
                  </motion.div>
                </Center>
              </Flex>
            </div>
          </Overlay>
        </Slide>

        {/* Slide 3 */}
        <Slide
          background={{
            backgroundImageSrc: bg3,
            backgroundAttachment: "scroll",
          }}
        >
          <Overlay>
            <div className="h-full w-full bg-gradient-to-r from-black/75 via-black/50 to-transparent px-4 sm:px-8 md:px-16 lg:px-24 overflow-x-hidden">
              <Flex flexDirection="column" height="full">
                <Center
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  height="full"
                  maxWidth={{ base: "90%", md: "3xl" }}
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-5 w-full"
                  >
                    <MotionHeading
                      size={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
                      className="text-white font-extrabold leading-tight text-left"
                      variants={childVariants}
                      style={{ maxWidth: "100%", wordWrap: "break-word" }}
                    >
                      Maximize Solar Efficiency
                    </MotionHeading>
                    <MotionText
                      fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                      className="text-gray-100"
                      variants={childVariants}
                      style={{ maxWidth: "100%", wordWrap: "break-word" }}
                    >
                      Keep your solar systems at peak performance with our
                      expert repair and maintenance services. Enjoy
                      uninterrupted energy with AlphaRapha’s rapid response
                      team.
                    </MotionText>
                    <Flex gap={3} flexWrap="wrap">
                      <MotionButton
                        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-base font-semibold py-5 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                        variants={childVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Schedule a repair"
                      >
                        Schedule Repair
                      </MotionButton>
                      <MotionButton
                        className="bg-transparent border-2 border-white text-white text-base font-semibold py-5 px-6 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
                        variants={childVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Discover maintenance plans"
                      >
                        Maintenance Plans
                      </MotionButton>
                    </Flex>
                  </motion.div>
                </Center>
              </Flex>
            </div>
          </Overlay>
        </Slide>
      </HeroSlider>

      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SubServiceCards />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Service />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FeaturedProducts />
      </MotionDiv>
      <About1 />
      <MissionBlock />
      <SecondPortfolio />
      <Footeer />
      <Fab
        mainButtonStyles={{
          backgroundColor: "#25D366",
          animation: "pulse 2s infinite",
        }}
        style={{ bottom: 20, right: 20 }}
        icon={<FaWhatsapp />}
        onClick={openWhatsApp}
        aria-label="Contact us on WhatsApp"
      />
    </div>
  );
}
