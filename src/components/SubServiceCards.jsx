import React from "react";
import { motion } from "framer-motion";
import { Center } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";

export default function SubServiceCards() {
  return (
    <section class="bg-white py-12 sm:py-16 lg:py-20">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <Center>
          <div class="text-center">
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
              className="mb-2 block text-lg font-semibold text-blue-900"
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
              className="text-base text-body-color max-w-[510px]"
            >
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </motion.p>
          </div>
        </Center>

        <div class="gap-12 mt-10 grid grid-cols-1 sm:mt-16 sm:grid-cols-2 md:grid-cols-3 xl:mt-24">
          <div class="mx-auto max-w-screen-xl">
            <div class="mx-2 rounded-xl bg-gray-100"></div>
            <div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
              <div class="flex h-60 flex-col justify-between overflow-hidden">
                <img
                  src="http://res.cloudinary.com/dejeplzpv/image/upload/v1730155721/shops/hm0azk6sbjns7ydkorvl.webp"
                  class="group-hover:scale-110 h-full w-full object-cover duration-200"
                />
              </div>
              <div class="flex-1 overflow-hidden bg-white px-6 py-8">
                <h5 class="group-hover:text-blue-900 mb-4 text-xl font-bold">
                  Inverters
                </h5>
                <p class="mb-8 text-gray-600">
                  Cras ultricies ligula sed magna dictum porta. Praesent sapien
                  massa, convallis a pellentesque nec, egestas non nisi.
                </p>
                <div class="flex justify-between">
                  <a
                    href="/store"
                    class="group text-lg font-bold focus:text-blue-900 hover:text-blue-900"
                  >
                    {/* <span>▷</span> */}
                    <span class="underline">Shop Now</span>
                  </a>
                  <div class="max-w-full flex-none lg:px-4">
                    {/* <h5 class="text-lg font-bold">Video 6</h5> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-2 rounded-xl bg-gray-100"></div>
          </div>

          <div class="mx-auto max-w-screen-xl">
            <div class="mx-2 rounded-xl bg-gray-100"></div>
            <div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
              <div class="flex h-60 flex-col justify-between overflow-hidden">
                <img
                  src="http://res.cloudinary.com/dejeplzpv/image/upload/v1729780532/shops/sy8xng4ycbx8oje8oc09.webp"
                  class="group-hover:scale-110 h-full w-full object-cover duration-200"
                />
              </div>
              <div class="flex-1 overflow-hidden bg-white px-6 py-8">
                <h5 class="group-hover:text-blue-900 mb-4 text-xl font-bold">
                  Charge Controllers
                </h5>
                <p class="mb-8 text-gray-600">
                  Cras ultricies ligula sed magna dictum porta. Praesent sapien
                  massa, convallis a pellentesque nec, egestas non nisi.
                </p>
                <div class="flex justify-between">
                  <a
                    href="/store"
                    class="group text-lg font-bold focus:text-blue-900 hover:text-blue-900"
                  >
                    {/* <span>▷</span> */}
                    <span class="underline">Shop Now</span>
                  </a>
                  <div class="max-w-full flex-none lg:px-4">
                    {/* <h5 class="text-lg font-bold">Video 6</h5> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-2 rounded-xl bg-gray-100"></div>
          </div>

          <div class="mx-auto max-w-screen-xl">
            <div class="mx-2 rounded-xl bg-gray-100"></div>
            <div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
              <div class="flex h-60 flex-col justify-between overflow-hidden">
                <img
                  src="https://ueeshop.ly200-cdn.com/u_file/UPAZ/UPAZ775/2311/15/products/01-d389.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_500,w_500"
                  class="group-hover:scale-110 h-full w-full object-cover duration-200"
                />
              </div>
              <div class="flex-1 overflow-hidden bg-white px-6 py-8">
                <h5 class="group-hover:text-blue-900 mb-4 text-xl font-bold">
                  Lithium Batteries
                </h5>
                <p class="mb-8 text-gray-600">
                  Cras ultricies ligula sed magna dictum porta. Praesent sapien
                  massa, convallis a pellentesque nec, egestas non nisi.
                </p>
                <div class="flex justify-between">
                  <a
                    href="/store"
                    class="group text-lg font-bold focus:text-blue-900 hover:text-blue-900"
                  >
                    {/* <span>▷</span> */}
                    <span class="underline">Shop Now</span>
                  </a>
                  <div class="max-w-full flex-none lg:px-4">
                    {/* <h5 class="text-lg font-bold">Video 6</h5> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-2 rounded-xl bg-gray-100"></div>
          </div>

          <div class="mx-auto max-w-screen-xl">
            <div class="mx-2 rounded-xl bg-gray-100"></div>
            <div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
              <div class="flex h-60 flex-col justify-between overflow-hidden">
                <img
                  src="http://res.cloudinary.com/dejeplzpv/image/upload/v1729780471/shops/xvsaioxifajgtqdyyrqz.webp"
                  class="group-hover:scale-110 h-full w-full object-cover duration-200"
                />
              </div>
              <div class="flex-1 overflow-hidden bg-white px-6 py-8">
                <h5 class="group-hover:text-blue-900 mb-4 text-xl font-bold">
                  Solar Street Light
                </h5>
                <p class="mb-8 text-gray-600">
                  Cras ultricies ligula sed magna dictum porta. Praesent sapien
                  massa, convallis a pellentesque nec, egestas non nisi.
                </p>
                <div class="flex justify-between">
                  <a
                    href="/store"
                    class="group text-lg font-bold focus:text-blue-900 hover:text-blue-900"
                  >
                    {/* <span>▷</span> */}
                    <span class="underline">Shop Now</span>
                  </a>
                  <div class="max-w-full flex-none lg:px-4">
                    {/* <h5 class="text-lg font-bold">Video 6</h5> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-2 rounded-xl bg-gray-100"></div>
          </div>

          <div class="mx-auto max-w-screen-xl">
            <div class="mx-2 rounded-xl bg-gray-100"></div>
            <div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
              <div class="flex h-60 flex-col justify-between overflow-hidden">
                <img
                  src="http://res.cloudinary.com/dejeplzpv/image/upload/v1729780220/shops/tezufktdoxewn89dvpqq.webp"
                  class="group-hover:scale-110 h-full w-full object-cover duration-200"
                />
              </div>
              <div class="flex-1 overflow-hidden bg-white px-6 py-8">
                <h5 class="group-hover:text-blue-900 mb-4 text-xl font-bold">
                  Solar Panel
                </h5>
                <p class="mb-8 text-gray-600">
                  Cras ultricies ligula sed magna dictum porta. Praesent sapien
                  massa, convallis a pellentesque nec, egestas non nisi.
                </p>
                <div class="flex justify-between">
                  <a
                    href="/store"
                    class="group text-lg font-bold focus:text-blue-900 hover:text-blue-900 flex items-center gap-2"
                  >
                    {/* <span><BiCart size={30} /></span> */}
                    <span class="underline">Shop Now</span>
                  </a>
                  <div class="max-w-full flex-none lg:px-4">
                    {/* <h5 class="text-lg font-bold">Video 6</h5> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-2 rounded-xl bg-gray-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
