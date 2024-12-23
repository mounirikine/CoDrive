"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Testemotional from "../../components/Testemotional";
import HowItWorksSection from "../../components/HowItWorksSection";
import Pricing from "../../components/Pricing";
import Footer from "../../components/Footer";
import { ArrowRight, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const page = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <Navbar />

      <section className="py-20 lg:py-32 min-h-screen hero w-full px-3">
        <motion.main
          className="flex items-center md:container justify-between py-5 md:py-8 md:gap-3 flex-col lg:flex-row"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full lg:w-6/12 md:px-4"
            variants={textVariants}
          >
            <motion.h1
              className="text-2xl md:text-6xl font-bold mb-5 text-center md:text-left"
              variants={textVariants}
            >
              Securely store access & Share your Files Anytime Anywhere
            </motion.h1>
            <motion.p
              className="lg:text-xl mb-5 text-center text-gray-600 md:text-left"
              variants={textVariants}
            >
              Effortlessly manage and secure your documents and files in one
              place, with seamless sharing and collaboration tools that ensure
              productivity and peace of mind.
            </motion.p>
            <motion.div
              className="flex items-center py-2 md:py-5 gap-1 md:gap-3 flex-col md:flex-row px-5 md:px-0"
              variants={textVariants}
            >
              <a
                className="px-8 text-center py-3 w-full md:w-auto rounded-full font-semibold bg-black border-2 text-white border-black flex items-center justify-center gap-1"
                href="/"
              >
                Get Started <ArrowRight />
              </a>
              <a
                className="px-8 text-center py-3 w-full md:w-auto rounded-full font-semibold bg-transparent border-2 border-black mt-3 lg:mt-0"
                href="/"
              >
                Start Free Trial
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full lg:w-6/12 relative mt-2 md:mt-10 lg:mt-0"
            variants={imageVariants}
          >
            <motion.img
              src="https://cdn.prod.website-files.com/644bdc09dc06a84e58e7e48e/644c405cfe8d89249d36fa52_gain-insights-with-website-analytics-image-home-v1-techflow-x-webflow-template.png"
              className="rounded-xl shadow-2xl w-full"
              alt=""
            />
            <motion.img
              className="absolute top-72 hidden lg:block -left-5 rounded-xl shadow-xl w-44"
              src="https://cdn.prod.website-files.com/644bdc09dc06a84e58e7e48e/6451e516ca1acb4697c0e298_measure-your-website-success-bottom-image-techflow-x-webflow-template.png"
              alt=""
            />
          </motion.div>
        </motion.main>

        <motion.div
          className="lg:flex items-center justify-between container flex-row hidden pt-20"
          initial="hidden"
          animate="visible"
        >
            <img
            src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d53321ed86a854a77d0f05_Fictional%20company%20logo.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d533220d6ef268b667d9b1_Fictional%20company%20logo%20(1).svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d533210d6ef268b667cf66_Fictional%20company%20logo%20(2).svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d53321c15d3fd6dc95baac_Fictional%20company%20logo%20(3).svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d5332183e439aa6c060e60_Fictional%20company%20logo%20(4).svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d53321cbdf198a9e43dd50_Fictional%20company%20logo%20(5).svg"
            alt=""
          />
        </motion.div>
      </section>

      <HowItWorksSection />

      <Pricing />
      <Testemotional />

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
    </>
  );
};

export default page;
