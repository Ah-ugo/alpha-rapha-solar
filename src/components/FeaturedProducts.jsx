import { Center } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LoadAllProducts } from "../utils/Products";
import { formatNumber } from "../utils/FormatString";

export default function FeaturedProducts() {
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
      <div className="bg-blue-900">
        <div className="mx-auto px-4 pt-16 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8">
          <Center
            flexDirection={"column"}
            className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20"
          >
            {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2> */}
            <motion.span
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="mb-2 block text-lg font-semibold text-gray-300"
            >
              Our Products
            </motion.span>
            <motion.h2
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px]"
            >
              Featured Products
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="text-base text-gray-300"
            >
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </motion.p>
          </Center>
        </div>
        <Center className="h-52">
          <div className="text-white">Loading products...</div>
        </Center>
      </div>
    );
  if (error)
    return (
      <div className="bg-blue-900">
        <Center className="h-52">
          <div className="text-red-500">{error}</div>
        </Center>
      </div>
    );
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    autoplay: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          infinite: true,
        },
      },
    ],
    // widt
  };
  return (
    <div className="">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto px-4 py-16 bg-blue-900 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Center
            flexDirection={"column"}
            className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20"
          >
            {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2> */}
            <motion.span
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="mb-2 block text-lg font-semibold text-gray-300"
            >
              Our Products
            </motion.span>
            <motion.h2
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px]"
            >
              Featured Products
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              className="text-base text-gray-300"
            >
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </motion.p>
          </Center>
        </div>
        <div className="mt-6">
          {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> */}
          <Slider {...settings} className="gap-x-6 space-x-6">
            {products.map((product) => (
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 1 % 2 === 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                key={product._id}
                className="group relative px-6 flex gap-6"
              >
                <a href={`/detail/${product._id}`}>
                  <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.title}
                      src={product.image_urls[0]}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product?.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-700">
                        {product?.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {formatNumber(product.price)}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
