import React, { useContext, useEffect, useState } from "react";
import NewProductCard from "./NewProductCard";
import { Context } from "../Context/mainContext";
import { LoadAllProducts } from "../utils/Products";
import { Center } from "@chakra-ui/react";
import NavbarCom from "./NavbarCom";
import Footeer from "./Footeer";
import { Fab } from "react-tiny-fab";
import { FaWhatsapp } from "react-icons/fa";
import NewNavbar from "./NewNavbarCom";

const NewProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart, handleAddToCart, handleRemoveFromCart } = useContext(Context);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  const openWhatsApp = () => {
    const phoneNumber = "+2347038122409"; // Replace with the phone number you want to message
    const message = "Hello, I'm interested in your service."; // Optional: A default message

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank"); // Open in a new tab
  };

  useEffect(() => {
    // Load products with error handling
    LoadAllProducts()
      .then((rep) => {
        setProducts(rep);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Center className="h-screen">
        <div>Loading products...</div>
      </Center>
    );
  if (error)
    return (
      <Center className="h-screen">
        <div className="text-red-500">{error}</div>
      </Center>
    );

  // Filtered products based on the search query
  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    const hasTags = product.tags
      ? product.tags.join(",").toLowerCase().includes(query)
      : false;

    return (
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      hasTags
    );
  });
  return (
    <div>
      {/* <NavbarCom
        className={
          "shadow fixed z-50 w-full top-0 bg-blue-900 border-white/50 focus-within:ring-1 backdrop-blur-md transition-all duration-1000 ease-in-out"
        }
      /> */}
      <NewNavbar
        className={
          "shadow fixed px-4 z-50 w-full top-0 bg-blue-900 border-white/50 focus-within:ring-1 backdrop-blur-md transition-all duration-1000 ease-in-out"
        }
      />
      <div class="relative mt-28 mb-10 lg:max-w-xl max-w-full mx-4 lg:mx-auto">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search by title, category, or tags"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div class="pb-10 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container flex justify-center items-center">
        <div class="flex justify-between items-center w-full">
          <div class="flex flex-col justify-start items-start">
            <p class="text-sm leading-none text-gray-600">Home - Solar</p>
            <div class="mt-2 flex flex-row justify-end items-center space-x-3">
              <p class="text-2xl font-semibold leading-normal text-gray-800">
                Solar
              </p>
              <p class="text-base leading-4 text-gray-600 mt-2">
                ({filteredProducts.length} products)
              </p>
            </div>
          </div>

          <button class="hover:text-gray-500 text-gray-600 bg-gray-100 py-3.5 px-3 rounded-sm flex flex-row justify-center items-center space-x-3">
            <svg
              class="fill-stroke"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 14.6452V9.33875"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 6.30645V1"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14.6452V7.82263"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4.79032V1"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 14.6452V10.8549"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 7.82258V1"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 9.33875H7"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 4.79028H15"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 10.8549H23"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p class="hidden md:block text-sm leading-none">Filters</p>
          </button>
        </div>
      </div>
      <section class="pb-24">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 class="font-manrope font-bold text-3xl min-[400px]:text-4xl text-black mb-8">
            Available Products
          </h2> */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProducts
              .map((resp) => {
                return (
                  <NewProductCard
                    key={resp._id}
                    img={resp.image_urls[0]}
                    price={resp.price}
                    title={resp.title}
                    id={resp._id}
                    descr={resp.description}
                    category={resp.category}
                    rating={resp.ratings}
                    review={resp.reviews?.length}
                    onClick={() => handleAddToCart(resp)}
                  />
                );
              })
              .reverse()}
          </div>
        </div>
      </section>
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
};

export default NewProductList;
