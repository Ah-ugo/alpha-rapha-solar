import "hero-slider/dist/index.css";
import HeroSlider, { Nav, Overlay, Slide } from "hero-slider";
import React, { useEffect, useState } from "react";
import bg1 from "./assets/panel.jpg";
import bg2 from "./assets/bgWork.jpg";
import bg3 from "./assets/imgbg1.jpg";
import { Button } from "@nextui-org/react";
import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import NavbarCom from "./components/NavbarCom";
import Reviews from "./components/Reviews";
import About1 from "./components/About1";
import Service from "./components/Service";
import FeaturedProducts from "./components/FeaturedProducts";
import Footeer from "./components/Footeer";
import { Fab } from "react-tiny-fab";
import { FaWhatsapp } from "react-icons/fa";
import ProductCategories from "./components/ProductCategories";
import SubServiceCards from "./components/SubServiceCards";
import MissionBlock from "./components/MissionBlock";
import NewNavbar from "./components/NewNavbarCom";

export default function App() {
  const [navbar, setNavbar] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "+2347038122409"; // Replace with the phone number you want to message
    const message = "Hello, I'm interested in your service."; // Optional: A default message

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank"); // Open in a new tab
  };

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* fgdcj */}
      {/* <NavbarCom active={navbar} /> */}
      <NewNavbar active={navbar} />
      <HeroSlider
        width={"100vw"}
        height={"100vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 100,
          slidingDelay: 10,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Slide background={{ backgroundImageSrc: bg1 }}>
          <Overlay className="">
            <div className="h-full w-full bg-black/50 px-10 md:px-28">
              <Flex flexDirection={"column"} height={"full"}>
                <Center
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  height={"full"}
                  maxWidth={"2xl"}
                >
                  <Flex flexDirection={"column"} gap={7}>
                    <Heading
                      size={{ base: "md", md: "lg", lg: "xl" }}
                      className="text-gray-50"
                    >
                      AlphaRapha - Your trusted partner for solar solutions
                    </Heading>
                    <Text
                      fontSize={{ base: "15px", md: "18px", lg: "20px" }}
                      className=" text-gray-300"
                    >
                      Upgrade to solar power today with high-quality solar
                      panels, expert installation, and ongoing support. Join the
                      renewable revolution and reduce your energy bills!
                    </Text>
                  </Flex>
                  <Button className="mt-10 text-lg bg-blue-900 px-3 py-7 rounded-md font-semibold text-white">
                    Start your journey
                  </Button>
                </Center>
              </Flex>
            </div>
          </Overlay>
        </Slide>

        <Slide background={{ backgroundImageSrc: bg2 }}>
          <Overlay>
            <div className="h-full bg-black/50 px-10 md:px-28">
              <Flex flexDirection={"column"} height={"full"}>
                <Center
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  height={"full"}
                  maxWidth={"2xl"}
                >
                  <Flex flexDirection={"column"} gap={7}>
                    <Heading
                      size={{ base: "md", md: "lg", lg: "xl" }}
                      className="text-gray-50"
                    >
                      Customized solar systems tailored to your needs
                    </Heading>
                    <Text
                      fontSize={{ base: "15px", md: "18px", lg: "20px" }}
                      className=" text-gray-300"
                    >
                      At AlphaRapha, we offer professional consultation,
                      seamless installation, and reliable maintenance services.
                      Let us help you make the switch to sustainable energy with
                      ease.
                    </Text>
                  </Flex>
                  <Button className="mt-10 text-lg bg-blue-900 px-3 py-7 rounded-md font-semibold text-white">
                    Book Consultation
                  </Button>
                </Center>
              </Flex>
            </div>
          </Overlay>
        </Slide>

        <Slide background={{ backgroundImageSrc: bg3 }}>
          <Overlay>
            <div className="h-full bg-black/50 px-10 md:px-28">
              <Flex flexDirection={"column"} height={"full"}>
                <Center
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  height={"full"}
                  maxWidth={"2xl"}
                >
                  <Flex flexDirection={"column"} gap={7}>
                    <Heading
                      size={{ base: "md", md: "lg", lg: "xl" }}
                      className="text-gray-50"
                    >
                      Keep your solar systems running at peak efficiency
                    </Heading>
                    <Text
                      fontSize={{ base: "15px", md: "18px", lg: "20px" }}
                      className=" text-gray-300"
                    >
                      AlphaRapha provides quick and efficient repair services
                      for all types of solar energy products. Ensure
                      uninterrupted energy flow with our expert maintenance
                      solutions.
                    </Text>
                  </Flex>
                  <Button className="mt-10 text-lg bg-blue-900 px-3 py-7 rounded-md font-semibold text-white">
                    Schedule Repair
                  </Button>
                </Center>
              </Flex>
            </div>
          </Overlay>
        </Slide>
      </HeroSlider>
      <SubServiceCards />
      <Service />
      <FeaturedProducts />
      <About1 />
      <MissionBlock />
      <Reviews />
      <Footeer />
      <Fab
        mainButtonStyles={{ backgroundColor: "#25D366" }}
        // actionButtonStyles={actionButtonStyles}
        style={{ bottom: 0, right: 0 }}
        icon={<FaWhatsapp />}
        // event={event}
        // alwaysShowTitle={true}
        onClick={openWhatsApp}
      />
    </div>
  );
}
