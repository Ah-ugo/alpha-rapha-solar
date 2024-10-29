// import { useDisclosure } from "@nextui-org/react";
import React, { useContext } from "react";
import ModalWrapper from "./ModalWrapper";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Cart } from "./Cart";
import { Context } from "../Context/mainContext";

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

  const btnRef = React.useRef();

  const localeData = localStorage.getItem("alphrapha_details");
  const parsedLocaleData = JSON.parse(localeData);
  console.log(parsedLocaleData);

  return (
    <header
      className={
        !active
          ? className
            ? className
            : "shadow fixed z-50 w-full top-0 bg-white/20 border-white/50 focus-within:ring-1 backdrop-blur-md transition-all duration-1000 ease-in-out"
          : "shadow fixed z-50 w-full top-0 bg-blue-900 border-white/50 focus-within:ring-1 backdrop-blur-md transition-all duration-1000 ease-in-out"
      }
    >
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <a
          href="#"
          className="flex items-center whitespace-nowrap text-xl md:text-2xl font-black"
        >
          <span className="mr-2 text-4xl text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"
              />
            </svg>
          </span>
          <span className="text-gray-50">Alpha-Rapha Solar</span>
        </a>

        <input type="checkbox" className="peer hidden" id="navbar-open" />

        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={5}
          className="absolute top-5 right-7"
        >
          {/* Flex container for Login and Cart icon */}
          <Flex
            alignItems={"center"}
            gap={4}
            className="mt md:mt-0 md:ml-auto md:flex md:justify-end"
          >
            {!localeData ? (
              <button
                onClick={onOpenModal1}
                className="rounded-md border-2 hidden sm:block border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
              >
                Login
              </button>
            ) : (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name={parsedLocaleData?.full_name}
                    size="sm"
                    // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{parsedLocaleData?.email}</p>
                  </DropdownItem>
                  {/* <DropdownItem key="settings">My Settings</DropdownItem> */}
                  {/* <DropdownItem key="team_settings">Team Settings</DropdownItem> */}
                  {/* <DropdownItem key="analytics">Analytics</DropdownItem> */}
                  {/* <DropdownItem key="system">System</DropdownItem> */}
                  {/* <DropdownItem key="configurations">Configurations</DropdownItem> */}
                  {/* <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
            <div className="relative inline-block">
              <button onClick={onOpenModal2} className="relative">
                <BsCart2 size={28} className="text-white cursor-pointer" />
                {/* {cart.products.length > 0 && ( */}
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                  {cart.products.length}
                </span>
                {/* )} */}
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
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-center md:justify-between"
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
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            <Cart close={onCloseModal2} />
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onCloseModal2}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </header>
  );
}
