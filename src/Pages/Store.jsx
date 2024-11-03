import React from "react";
import ProductList from "../components/ProductList";
import NavbarCom from "../components/NavbarCom";
import Footeer from "../components/Footeer";
import { Fab } from "react-tiny-fab";
import { FaWhatsapp } from "react-icons/fa";
import NewNavbar from "../components/NewNavbarCom";

export default function Store() {
  const openWhatsApp = () => {
    const phoneNumber = "+2347038122409"; // Replace with the phone number you want to message
    const message = "Hello, I'm interested in your service."; // Optional: A default message

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank"); // Open in a new tab
  };
  return (
    <div>
      {/* <NavbarCom
        className={
          "shadow fixed z-50 w-full top-0 bg-blue-900 border-white/50 focus-within:ring-1 backdrop-blur-md transition-all duration-1000 ease-in-out"
        }
      /> */}
      <NewNavbar />
      <ProductList />
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
