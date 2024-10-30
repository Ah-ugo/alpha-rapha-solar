import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProductCategories() {
  const navig = useNavigate();
  return (
    <div className="pb-5 bg-white">
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center space-y-2">
              {/* <p className="text-xl leading-5 text-gray-600">
                Our Product Categories
              </p> */}
              <motion.span
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 2 % 2 === 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                className="mb-2 block text-lg font-semibold text-primary"
              >
                Our Product Categories
              </motion.span>
              {/* <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
                Shop Category
              </h1> */}
              <motion.h2
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 2 % 2 === 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
              >
                Shop Categories
              </motion.h2>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 2 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full"
            >
              <div
                onClick={() => navig("/store")}
                className="relative group flex justify-center items-center h-full w-full"
              >
                <img
                  className="object-center object-cover h-full w-full"
                  src="http://res.cloudinary.com/dejeplzpv/image/upload/v1730155721/shops/hm0azk6sbjns7ydkorvl.webp"
                  alt="girl-image"
                />
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Inverters
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div
                  onClick={() => navig("/store")}
                  className="relative group flex justify-center items-center h-full w-full"
                >
                  <img
                    className="object-center object-cover h-full w-full"
                    src="http://res.cloudinary.com/dejeplzpv/image/upload/v1729780532/shops/sy8xng4ycbx8oje8oc09.webp"
                    alt="shoe-image"
                  />
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Charge Controllers
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div
                  onClick={() => navig("/store")}
                  className="relative group flex justify-center items-center h-full w-full"
                >
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://ueeshop.ly200-cdn.com/u_file/UPAZ/UPAZ775/2311/15/products/01-d389.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_500,w_500"
                    alt="watch-image"
                  />
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Lithium Batteries
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </div>
              <div
                onClick={() => navig("/store")}
                className="relative group justify-center items-center h-full w-full hidden lg:flex"
              >
                <img
                  className="object-center object-cover h-full w-full"
                  src="http://res.cloudinary.com/dejeplzpv/image/upload/v1729780471/shops/xvsaioxifajgtqdyyrqz.webp"
                  alt="girl-image"
                />
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Solar Street Light
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div
                onClick={() => navig("/store")}
                className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden"
              >
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                  alt="girl-image"
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Women
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </motion.div>
            <div
              onClick={() => navig("/store")}
              className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden"
            >
              <img
                className="object-center object-cover h-full w-full hidden md:block"
                src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                alt="girl-image"
              />
              <img
                className="object-center object-cover h-full w-full sm:hidden"
                src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Women
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
