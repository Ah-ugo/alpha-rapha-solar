import React, { useEffect, useState } from "react";

export default function index() {
  const [show1, setshow1] = useState(true);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);

  return (
    <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
      <div className="flex flex-col jusitfy-start items-start">
        <div>
          <p className="text-sm leading-4 text-gray-600">Home</p>
        </div>
        <div className="mt-3">
          <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800">
            Favourites
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-2xl tracking-tight leading-6 text-gray-600">
            03 items
          </p>
        </div>
        <div className=" mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
          <div className="flex flex-col">
            <div className="relative">
              <img
                className="hidden lg:block"
                src="https://i.ibb.co/SsmkhPq/Rectangle-23.png"
                alt="bag"
              />
              <img
                className="hidden sm:block lg:hidden"
                src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png"
                alt="bag"
              />
              <img
                className=" sm:hidden"
                src="https://i.ibb.co/cyN26yn/Rectangle-23.png"
                alt="bag"
              />
              <button
                aria-label="close"
                className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400"
              >
                <svg
                  className="fil-current"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1L13 13"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="flex justify-center items-center">
                <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                  New York Streak
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button
                  aria-label="show menu"
                  onClick={() => setshow1(!show1)}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400"
                >
                  <svg
                    className={`fill-stroke ${show1 ? "block" : "hidden"}`}
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L5 1L1 5"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className={`fill-stroke ${show1 ? "hidden" : "block"}`}
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="menu1"
              className={` flex-col jusitfy-start items-start mt-12 ${
                show1 ? "flex" : "hidden"
              }`}
            >
              <div>
                <p className="tracking-tight text-xs leading-3 text-gray-800">
                  MK617
                </p>
              </div>
              <div className="mt-2">
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                  Beige brown
                </p>
              </div>
              <div className="mt-6">
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                  42 size
                </p>
              </div>
              <div className="mt-6">
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                  $1,000
                </p>
              </div>
              <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full  space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                <div className="w-full">
                  <button className=" focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800">
                    More information
                  </button>
                </div>
                <div className="w-full">
                  <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <img
                className="hidden lg:block"
                src="https://i.ibb.co/WVySXBL/Rectangle-24.png"
                alt="watch"
              />
              <img
                className="hidden sm:block lg:hidden"
                src="https://i.ibb.co/9sqGrR6/Rectangle-24-1.png"
                alt="watch"
              />
              <img
                className="sm:hidden"
                src="https://i.ibb.co/wCGrdFt/Rectangle-24.png"
                alt="watch"
              />
              <button
                aria-label="close"
                className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400"
              >
                <svg
                  className="fil-current"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1L13 13"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="flex justify-center items-center">
                <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                  Luxe 3 series
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button
                  aria-label="show menu"
                  onClick={() => setshow2(!show2)}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400"
                >
                  <svg
                    className={`fill-stroke ${show2 ? "block" : "hidden"}`}
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L5 1L1 5"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className={`fill-stroke ${show2 ? "hidden" : "block"}`}
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="menu2"
              className={`flex-col jusitfy-start items-start mt-12 ${
                show2 ? "flex" : "hidden"
              }`}
            >
              <div>
                <p className="tracking-tight text-xs leading-3 text-gray-800">
                  MK617
                </p>
              </div>
              <div className="mt-2">
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                  Beige brown
                </p>
              </div>
              <div className="mt-6">
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                  42 size
                </p>
              </div>
              <div className="mt-6">
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                  $1,000
                </p>
              </div>
              <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                <div className="w-full">
                  <button className=" focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800">
                    More information
                  </button>
                </div>
                <div className="w-full">
                  <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <img
                className="hidden lg:block"
                src="https://i.ibb.co/JqD4MwR/Rectangle-5.png"
                alt="shoes"
              />
              <img
                className="hidden sm:block lg:hidden"
                src="https://i.ibb.co/MG7JYJ4/Rectangle-5-1.png"
                alt="shoes"
              />
              <img
                className="sm:hidden"
                src="https://i.ibb.co/89gMng3/Rectangle-5.png"
                alt="shoes"
              />
              <button
                aria-label="close"
                className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400"
              >
                <svg
                  className="fil-current"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1L13 13"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="flex justify-center items-center">
                <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                  EZ sneakers
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button
                  aria-label="show menu"
                  onClick={() => setshow3(!show3)}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400"
                >
                  <svg
                    className={`fill-stroke ${show3 ? "block" : "hidden"}`}
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L5 1L1 5"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className={`fill-stroke ${show3 ? "hidden" : "block"}`}
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="menu3"
              className={`flex-col jusitfy-start items-start mt-12 ${
                show3 ? "flex" : "hidden"
              }`}
            >
              <div>
                <p className="tracking-tight text-xs leading-3 text-gray-800">
                  MK617
                </p>
              </div>
              <div className="mt-2">
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                  Beige brown
                </p>
              </div>
              <div className="mt-6">
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                  42 size
                </p>
              </div>
              <div className="mt-6">
                <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                  $1,000
                </p>
              </div>
              <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                <div className="w-full">
                  <button className=" focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800">
                    More information
                  </button>
                </div>
                <div className="w-full">
                  <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
