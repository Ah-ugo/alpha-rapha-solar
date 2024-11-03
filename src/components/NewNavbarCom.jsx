import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
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

const NewNavbar = ({ active, className }) => {
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
  const location = useLocation(); // Get current location

  const localeData = localStorage.getItem("alphrapha_details");
  const parsedLocaleData = JSON.parse(localeData);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={
        !active
          ? className
            ? className
            : "shadow fixed z-50 px-10 w-full top-0 bg-white/20 border-white/50 focus-within:ring-1 backdrop-blur-md transition-all duration-1000 ease-in-out"
          : "shadow fixed z-50 px-10 w-full top-0 bg-blue-900 border-white/50 focus-within:ring-1 backdrop-blur-md transition-all duration-1000 ease-in-out"
      }
    >
      <div className="flex sm:flex-wrap items-center lg:gap-y-2 gap-4 w-full">
        <a href="javascript:void(0)">
          <img src={Logo} alt="logo" className="sm:w-28 w-28" />
        </a>

        <div
          className={`lg:ml-60 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:h-screen max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            onClick={handleToggle}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
            </svg>
          </button>

          <ul
            className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-screen max-lg:shadow-md max-lg:overflow-auto"
            style={{ zIndex: 5000000000000 }}
          >
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img src={Logo} alt="logo" className="w-36" />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="/"
                className={`text-[15px] block font-semibold ${
                  location.pathname === "/" ? "text-[#007bff]" : "text-[#fff]"
                }`}
              >
                Home
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="/store"
                className={`text-[15px] block font-semibold ${
                  location.pathname === "/store"
                    ? "text-[#007bff]"
                    : "text-[#fff]"
                }`}
              >
                Shop
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className={`text-[15px] block font-semibold ${
                  location.pathname === "/solar-panels"
                    ? "text-[#007bff]"
                    : "text-[#fff]"
                }`}
              >
                Solar Panels
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className={`text-[15px] block font-semibold ${
                  location.pathname === "/inverters"
                    ? "text-[#007bff]"
                    : "text-[#fff]"
                }`}
              >
                Inverters
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-6 gap-y-4 ml-auto">
          <div className="flex items-center space-x-8">
            <span class="relative" onClick={onOpenModal2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                class="cursor-pointer fill-[#fff] inline"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000000"
                ></path>
              </svg>
              <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                {cart.products.length}
              </span>
            </span>
            {/* </span> */}
            <ModalWrapper isOpen={isOpenModal1} onClose={onCloseModal1} />

            {!localeData ? (
              <button
                onClick={onOpenModal1}
                className="rounded-md border-2 border-gray-300 px-6 py-1 font-medium text-gray-300 transition-colors hover:bg-blue-600 hover:text-white"
              >
                Login
              </button>
            ) : (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    color="secondary"
                    name={parsedLocaleData?.full_name}
                    size="sm"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{parsedLocaleData?.email}</p>
                  </DropdownItem>
                  <DropdownItem
                    onClick={logoutUser}
                    key="logout"
                    color="danger"
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
      <Drawer
        size={"xl"}
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
    </header>
  );
};

export default NewNavbar;
