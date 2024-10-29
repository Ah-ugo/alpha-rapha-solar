import React, { useContext, useEffect, useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProductListCard from "./ProductListCard";
import solar1 from "../assets/solar_1.jpg";
import solar2 from "../assets/solar_2.jpg";
import { LoadAllProducts } from "../utils/Products";
import { Center, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import ProductCard2 from "./ProductCard2";
import { Context } from "../Context/mainContext";
import { FaSearch } from "react-icons/fa";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart, handleAddToCart, handleRemoveFromCart } = useContext(Context);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="mt-5 px- xl:px-0 py-12">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center">
          <div className="relative">
            <img
              className="hidden sm:block w-full h-svh object-cover"
              src={solar1}
              alt="sofa"
            />
            <img
              className="sm:hidden w-full object-cover h-svh"
              src={solar2}
              alt="sofa"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text content */}
            <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
              <div>
                <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">
                  Range Comfort Solar
                </p>
                <p className="text-lg mt-4 sm:text-xl font-medium leading-9 text-gray-300 w-full sm:w-1/2">
                  Welcome to AlphaRapha Solar's Shop – Explore premium solar
                  energy solutions for a brighter, sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="mx-4 mt-6">
          {/* Search Input */}
          <InputGroup mb={6}>
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search by title, category, or tags"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              _focus={{
                borderColor: "blue.400",
                boxShadow: "0 0 0 1px blue.400",
              }}
              _placeholder={{ color: "gray.400" }}
              p={4}
              px={6}
              fontSize="lg"
            />
          </InputGroup>
        </div>

        <div className="mx-4">
          <div className="mt-10 grid lg:grid-cols-4 grid-cols-1 gap-x-8 gap-y-8 items-center">
            {filteredProducts.map((resp) => {
              return (
                <ProductCard2
                  key={resp._id}
                  img_url={resp.image_urls[0]}
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
