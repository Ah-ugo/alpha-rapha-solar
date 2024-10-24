import React from "react";
import ProductOverview from "../components/ProductDetail";
import NavbarCom from "../components/NavbarCom";

export default function ProductOverView() {
  return (
    <div>
      <NavbarCom
        className={
          "shadow fixed z-50 w-full top-0 bg-blue-900 border-white/50 focus-within:ring-1 backdrop-blur-md transition-all duration-1000 ease-in-out"
        }
      />
      <ProductOverview />
    </div>
  );
}
