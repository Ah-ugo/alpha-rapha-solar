import React, { useEffect, useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProductListCard from "./ProductListCard";
import solar1 from "../assets/solar_1.jpg";
import solar2 from "../assets/solar_2.jpg";
import { LoadAllProducts } from "../utils/Products";
import { Center } from "@chakra-ui/react";
import ProductCard2 from "./ProductCard2";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        {/* </div> */}

        <div className="mx-4">
          <div className="mt-10 grid lg:grid-cols-4 grid-cols-1  gap-x-8 gap-y-8 items-center">
            {/* <ProductListCard
              img={
                "https://solarstepza.co.za/cdn/shop/files/ecco-550W-SOLAR-PANEL_png_4bdbb790-bf4a-4531-b1c2-4992216b1593.webp?v=1728996623&width=360"
              }
              price={""}
              title={"Mono Crystal Solar Panel"}
            />
            <ProductListCard
              title={"Hybrid Inverter"}
              img={
                "https://solarstepza.co.za/cdn/shop/files/GROWTECH-5.5KVA-PLUG-AND-PLAY-300x300.png?v=1729165538"
              }
            />
            <ProductListCard
              title={"Solar Flood Light"}
              img={
                "https://solarstepza.co.za/cdn/shop/files/MTY-FLOOD-LIGHT_png.webp?v=1716452058&width=360"
              }
            />
            <ProductListCard
              title={"Charge Controller"}
              img={
                "https://solarstepza.co.za/cdn/shop/files/sun-mppt-solar-charge-controller-12-24v-dc-20a_0.webp?v=1716453916&width=360"
              }
            />

            <ProductListCard
              title={"Inverter"}
              img={
                "https://media.istockphoto.com/id/1696511112/photo/electrical-control-cabinet-of-solar-cell-pv-grid-tile-inverter-for-home-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=jpSOSCI2AiPDfjNniFTEvNJv1UZt7IB61n1Ig3LkCYo="
              }
            />

            <ProductListCard
              title={"Charge Controller"}
              img={
                "https://innovateenergy.com.ng/wp-content/uploads/2024/04/MF48100.1-1024x702.png"
              }
            /> */}
            {products.map((resp) => {
              return (
                <ProductCard2
                  img_url={resp.image_urls[0]}
                  price={resp.price}
                  title={resp.title}
                  id={resp._id}
                  descr={resp.description}
                  category={resp.category}
                  rating={resp.ratings}
                  review={resp.reviews?.length}
                />
              );
            })}
          </div>
          {/* <div className="flex justify-end items-end mt-12">
            <div className="flex flex-row items-center justify-center space-x-8">
              <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                <p>1</p>
              </button>
              <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                <p>2</p>
              </button>
              <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                <p>3</p>
              </button>
              <button className="flex justify-center items-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
