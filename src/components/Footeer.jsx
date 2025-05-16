import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo3-1.png";
import { subscribeNewsLetters } from "../utils/aob";
import toast from "react-hot-toast";
import { Spinner } from "@chakra-ui/react";

export default function Footeer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    subscribeNewsLetters(email)
      .then((resp) => {
        toast.success("Successfully subscribed to our newsletter!");
        setEmail("");
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to subscribe. Please try again.";
        toast.error(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="max-w-xs">
            <div className="mb-6 flex items-center">
              <img src={Logo} alt="Company Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-600 text-sm leading-6">
              Empowering sustainable futures through innovative solar solutions.
              We provide top-tier renewable energy products tailored to your
              needs.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p className="mb-2">4 Concorde AVE, Owerri, imo state</p>
              <p className="mb-2">
                Alpha Rapha,New eke Ukwu modern market, Owerri ,Imo State
              </p>
              <p className="mb-2">Nigeria</p>
              <p className="mt-4">
                <a
                  href="mailto:info@example.com"
                  className="hover:text-blue-600"
                >
                  info@alpharapha.com
                </a>
              </p>
              <p>
                <a href="tel:07088093974" className="hover:text-blue-600">
                  07088093974
                </a>
              </p>
            </address>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {loading ? <Spinner size="sm" color="white" /> : "Subscribe"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-16 border-t border-gray-200 pt-8 flex flex-col items-center justify-between sm:flex-row"
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Alpha-Rapha. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
