import React from "react";
import { FiTool } from "react-icons/fi";
import { GiSolarPower } from "react-icons/gi";
import {
  MdBuild,
  MdOutlinePower,
  MdOutlineSupportAgent,
  MdSettings,
} from "react-icons/md";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="pb-5 pt-10 lg:pb-5 lg:pt-10">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
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
                Our Services
              </motion.span>
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
                What We Offer
              </motion.h2>
              <motion.p
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
                className="text-base text-body-color px-4"
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="mx-4 sm:-mx-4 flex flex-wrap">
          <ServiceCard
            title="Solar Panel Sales"
            details="Get premium solar panels designed to harness the power of the sun efficiently. Choose from a wide range of solar solutions tailored to meet your energy needs."
            icon={<GiSolarPower size={36} color="white" />}
          />
          <ServiceCard
            title="Solar Consultation"
            details="Receive expert guidance on solar energy solutions. Our team will assess your energy needs and recommend the perfect solar setup for your home or business."
            icon={<MdOutlineSupportAgent size={36} color="white" />}
          />
          <ServiceCard
            title="Solar Installation"
            details="Enjoy seamless and professional installation of solar panels by our certified technicians. We ensure every system is installed safely and efficiently."
            icon={<FiTool size={36} color="white" />}
          />
          <ServiceCard
            title="System Repairs"
            details="Keep your solar systems running smoothly with our reliable repair services. We handle everything from minor fixes to major overhauls, ensuring your system operates at its best."
            icon={<MdBuild size={36} color="white" />}
          />
          <ServiceCard
            title="System Maintenance"
            details="Maintain peak efficiency of your solar setup with regular maintenance checks. Our team offers comprehensive system tune-ups to keep your panels performing optimally."
            icon={<MdSettings size={36} color="white" />}
          />
          <ServiceCard
            title="Energy Audits"
            details="Maximize your energy savings with a thorough audit of your current energy usage. We help identify opportunities for improved energy efficiency and solar integration."
            icon={<MdOutlinePower size={36} color="white" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
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
        className="w-full px-4 md:w-1/2 lg:w-1/3"
      >
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg  md:px-7 xl:px-10 duration-200 hover:-translate-y-4">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-900">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </motion.div>
    </>
  );
};
