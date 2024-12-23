"use client";

import React from "react";
import Pricing from "../../../components/Pricing";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PricingCont = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <>
      <Navbar />
<section className="pt-20 lg:pt-32">
<Pricing />

<style>
  {`
  .hero-badge{
  background-image: url('https://cdn.prod.website-files.com/66e94f692c515ba3371b66b2/66ea8970f1d2743b5f3d176e_Header%20Background.png');
    background-size: cover;
background-repeat: no-repeat;
background-position: top;
  }
  `}
</style>

<motion.section
  initial="hidden"
  animate="visible"
  variants={containerVariants}
  className="hero-badge w-10/12 mx-auto py-10 md:py-24 px-3 md:px-20 rounded-2xl flex flex-col lg:flex-row items-center justify-between mb-10 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg"
>
  {/* Left Content Section */}
  <motion.div
    variants={itemVariants}
    className="md:w-6/12 text-lg font-semibold text-center lg:text-left"
  >
    <h1 className="text-xl md:text-4xl text-white font-semibold mb-4 leading-tight">
      Get in Touch: We're Here to Help with Any Questions or Support
    </h1>
  </motion.div>

  {/* Right Input Section */}
  <motion.div
    variants={itemVariants}
    className="hidden lg:block md:w-6/12"
  >
    <div className="flex flex-col lg:flex-row items-center bg-white w-full py-3 md:rounded-full px-3 shadow-md">
      <motion.input
        type="text"
        variants={itemVariants}
        className="px-4 bg-transparent text-black md:w-9/12 outline-none border-none placeholder-gray-500"
        placeholder="Enter your message"
      />
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-5 md:p-3 bg-[#5ea977] hover:bg-green-600 text-lg flex items-center justify-center w-full md:w-3/12 text-white font-semibold rounded-full transition-all duration-300 ease-in-out"
      >
        Submit
        <ArrowRight className="ml-2 text-sm" />
      </motion.button>
    </div>
  </motion.div>
</motion.section>
<Footer />
</section>
    </>
  );
};

export default PricingCont;
