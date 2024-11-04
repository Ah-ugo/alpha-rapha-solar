import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo3-1.png";
import { subscribeNewsLetters } from "../utils/aob";
import toast from "react-hot-toast";
import { Spinner } from "@chakra-ui/react";
// import { useLoaderData } from "react-router-dom";

export default function Footeer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const Subscribe = () => {
    setLoading(true);
    console.log(email, "email===");
    subscribeNewsLetters(email)
      .then((resp) => {
        console.log(resp);
        toast.success("Successfully subscribed to newsletter", resp);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          toast.error("Error response status: " + error.response.status);
          setLoading(false);
        } else if (error.request) {
          console.error("No response received:", error.request);
          toast.error("No response received: " + error.request);
          setLoading(false);
        } else {
          console.error("Error message:", error.message);
          toast.error("Error message: " + error.message);
          setLoading(false);
        }
      });
  };

  return (
    <footer class="bg-white">
      <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div class="max-w-sm">
          <div class="mb-6 flex h-12 items-center space-x-2">
            <motion.span
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              class="text-2xl font-bold"
            >
              <a href="javascript:void(0)">
                <img src={Logo} alt="logo" className="sm:w-28 w-28" />
              </a>
            </motion.span>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: 1 % 2 === 0 ? 50 : -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            class="text-gray-500"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a
            officia ea expedita!
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 1 % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          class=""
        >
          <div class="mt-4 mb-2 font-medium xl:mb-4">Address</div>
          <div class="text-gray-500">
            35 Remida Heights, <br />
            45 Street, <br />
            South Caroline, US
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 1 % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          class=""
        >
          <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
          <nav aria-label="Footer Navigation" class="text-gray-500">
            <ul class="space-y-3">
              <li>
                <a class="hover:text-blue-900 hover:underline" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a class="hover:text-blue-900 hover:underline" href="#">
                  Demo
                </a>
              </li>
              <li>
                <a class="hover:text-blue-900 hover:underline" href="#">
                  Press
                </a>
              </li>
              <li>
                <a class="hover:text-blue-900 hover:underline" href="#">
                  Support Hub
                </a>
              </li>
              <li>
                <a class="hover:text-blue-900 hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 1 % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          class=""
        >
          <div class="mt-4 mb-2 font-medium xl:mb-4">
            Subscribe to our Newsletter
          </div>
          <div class="flex flex-col">
            <div class="mb-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                class="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter your email"
              />
              <button
                onClick={Subscribe}
                class="block rounded-xl bg-blue-900 px-6 py-3 font-medium text-white"
              >
                {loading ? <Spinner color="white" size={"md"} /> : "Subscribe"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <div class="bg-gray-100">
        <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div class="">© 2024 Alpha-Rapha | All Rights Reserved</div>
          <div class="">
            <a class="" href="#">
              Privacy Policy
            </a>
            <span>|</span>
            <a class="" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
