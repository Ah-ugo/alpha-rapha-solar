import React, { useContext } from "react";
import ModalWrapper from "./ModalWrapper";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { Cart } from "./Cart";
import { Context } from "../Context/mainContext";
import { logoutUser } from "../utils/auth";
import Logo from "../assets/logo3.png";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export default function NavbarCom({ active, className }) {
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

  const localeData = localStorage.getItem("alphrapha_details");
  const parsedLocaleData = JSON.parse(localeData);

  return (
    <header
      className={`shadow fixed z-50 w-full top-0 transition-all duration-1000 ease-in-out ${
        active ? "bg-blue-900 border-white/50" : "bg-white/20 border-white/50"
      } backdrop-blur-md focus-within:ring-1`}
    >
      <div className="relative flex flex-col max-w-screen-xl px-4 py-4 mx-auto md:flex-row md:items-center">
        <a
          href="#"
          className="flex items-center whitespace-nowrap h-20 text-xl md:text-2xl font-black"
        >
          <img src={Logo} alt="Logo" className="h-auto w-60 object-cover" />{" "}
          {/* Increased width */}
        </a>

        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          className=""
        >
          <Flex alignItems={"center"} gap={4}>
            {!localeData ? (
              <button
                onClick={onOpenModal1}
                className="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
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
            <div className="relative inline-block">
              <button onClick={onOpenModal2}>
                <BsCart2 size={28} className="text-white cursor-pointer" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                  {cart.products.length}
                </span>
              </button>
            </div>
          </Flex>
          <label
            className="text-white cursor-pointer md:hidden"
            htmlFor="navbar-open"
          >
            <span className="sr-only">Toggle Navigation</span>
            <RiMenu3Line size={28} />
          </label>
        </Flex>

        <nav
          aria-label="Header Navigation"
          className="flex flex-col items-center justify-between md:flex-row md:items-center md:ml-24"
        >
          <ul className="flex flex-col items-center space-y-2 md:flex-row md:space-x-12 md:space-y-0 md:justify-center">
            <li className="text-gray-100 hover:text-blue-600">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-100 hover:text-blue-600">
              <a href="/store">Shop</a>
            </li>
            <li className="text-gray-100 hover:text-blue-600">
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
      </div>

      <ModalWrapper isOpen={isOpenModal1} onClose={onCloseModal1} />
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
}
