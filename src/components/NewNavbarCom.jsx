import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Logo from "../assets/logo3-1.png";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Context } from "../Context/mainContext";
import { logoutUser } from "../utils/auth";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import ModalWrapper from "./ModalWrapper";
import { Cart } from "./Cart";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// Animation variants
const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const linkVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export default function NewNavbar({ active, className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    isOpen: isOpenModal1,
    onOpen: onOpenModal1,
    onClose: onCloseModal1,
  } = useDisclosure();
  const {
    isOpen: isOpenModal2,
    onOpen: onOpenModal2,
    onClose: onCloseModal2,
  } = useDisclosure();

  const { cart } = useContext(Context);
  const location = useLocation();

  const localeData = localStorage.getItem("alphrapha_details");
  const parsedLocaleData = localeData ? JSON.parse(localeData) : null;

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Nav links data
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/store", label: "Store" },
    { path: "/solar-panels", label: "Solar Panels" },
    { path: "/inverters", label: "Inverters" },
    { path: "/lithium-battery", label: "Lithium Battery" },
    { path: "/solar-pump", label: "Solar Pump" },
    { path: "/accessories", label: "Accessories" },
  ];

  return (
    <motion.header
      className={`fixed z-50 w-full top-0 transition-all duration-1000 ease-in-out ${
        active
          ? "bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg"
          : "bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md shadow-md border-b border-white/50"
      } ${className || "lg:px-10 px-4"}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-7xl flex items-center gap-4 py-4">
        <a href="/" aria-label="AlphaRapha Home">
          <img
            src={Logo}
            alt="AlphaRapha Logo"
            className="w-24 sm:w-28"
            loading="eager"
          />
        </a>

        <nav
          className={`lg:ml-auto ${
            isMenuOpen ? "block" : "hidden"
          } lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <ul
            className="lg:flex lg:gap-x-6 max-lg:space-y-4 max-lg:fixed max-lg:bg-white max-lg:w-3/4 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-screen max-lg:shadow-xl max-lg:overflow-auto"
            style={{ zIndex: 5000000000000 }}
          >
            <li className="mb-8 hidden max-lg:block">
              <a href="/" aria-label="AlphaRapha Home">
                <img src={Logo} alt="AlphaRapha Logo" className="w-36" />
              </a>
            </li>
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="max-lg:border-b max-lg:py-3 px-3"
                whileHover="hover"
                variants={linkVariants}
              >
                <a
                  href={link.path}
                  className={`relative text-[15px] font-semibold transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-blue-400"
                      : isMenuOpen
                      ? "text-gray-900"
                      : "text-white"
                  } hover:text-blue-300`}
                  aria-current={
                    location.pathname === link.path ? "page" : undefined
                  }
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                      location.pathname === link.path
                        ? "w-full"
                        : "group-hover:w-full"
                    }`}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-4 ml-auto">
          <motion.span
            className="relative cursor-pointer"
            onClick={onOpenModal2}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            aria-label={`Cart with ${cart.products.length} items`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              className="fill-white inline"
              viewBox="0 0 512 512"
            >
              <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"></path>
            </svg>
            <motion.span
              className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white"
              animate={{ scale: cart.products.length > 0 ? [1, 1.2, 1] : 1 }}
              transition={{
                repeat: cart.products.length > 0 ? Infinity : 0,
                duration: 1.5,
              }}
            >
              {cart.products.length}
            </motion.span>
          </motion.span>

          {!parsedLocaleData ? (
            <motion.button
              onClick={onOpenModal1}
              className="rounded-md border-2 border-blue-300 px-6 py-1 font-semibold text-blue-300 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-700 hover:text-white hover:border-transparent transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open login modal"
            >
              Login
            </motion.button>
          ) : (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Avatar
                    isBordered
                    as="button"
                    color="primary"
                    name={parsedLocaleData?.full_name}
                    size="sm"
                    className="border-2 border-blue-400"
                    aria-label={`User profile for ${parsedLocaleData?.full_name}`}
                  />
                </motion.div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{parsedLocaleData?.email}</p>
                </DropdownItem>
                <DropdownItem onClick={logoutUser} key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}

          <motion.button
            onClick={handleToggle}
            className="lg:hidden z-[500000000000] rounded-full p-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <RiCloseLine size={28} color="white" />
            ) : (
              <RiMenu3Line size={28} color="white" />
            )}
          </motion.button>
        </div>
      </div>

      <Drawer
        size="md"
        isOpen={isOpenModal2}
        placement="right"
        onClose={onCloseModal2}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Cart close={onCloseModal2} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <ModalWrapper isOpen={isOpenModal1} onClose={onCloseModal1} />
    </motion.header>
  );
}
