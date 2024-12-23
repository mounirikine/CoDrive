"use client";

import React from "react";
import Navbar from "../../../components/Navbar";
import Testemotional from "../../../components/Testemotional";

import Footer from "../../../components/Footer";
import { ArrowRight, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
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
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Navbar />

      <section className="py-20 lg:py-32 min-h-screen hero w-full px-3">
        <motion.main
          className="flex items-center md:container justify-between py-5 md:py-8 md:gap-5 flex-col lg:flex-row"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full lg:w-7/12 md:px-4"
            variants={textVariants}
          >
            <motion.h1
              className="text-2xl md:text-6xl font-bold mb-5 text-center md:text-left"
              variants={textVariants}
            >
              About Fortify Platform
            </motion.h1>
            <motion.p
              className="text-base lg:text-xl mb-5 text-center text-gray-600 md:text-left"
              variants={textVariants}
            >
              Our platform provides a secure and easy-to-use solution for
              storing, managing, and sharing files across all devices. Whether
              for personal or business use, you can upload, organize, and access
              your documents anytime, with confidence in our advanced security
              features. Real-time synchronization and simple sharing make
              collaboration seamless, while our intuitive interface ensures
              hassle-free file management.
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
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full lg:w-5/12 relative mt-2 md:mt-10 lg:mt-0"
            variants={imageVariants}
          >
            <motion.img
              src="https://cdn.prod.website-files.com/667a4726185e2a3380a33bfe/671735eb9aef0ee7e2d056d5_Image%20(91)%20(1)-p-800.png"
              className="rounded-xl shadow-2xl w-full"
              alt=""
            />
          </motion.div>
        </motion.main>
      </section>

      <motion.section className="container py-24">
        <motion.main
          className="flex flex-col lg:flex-row  items-center justify-center gap-10"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          {/* Stats Card 1 */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-4/12 text-center p-6 "
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-blue-600 mb-4"
            >
              10,000+
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-xl font-semibold text-gray-800 mb-2"
            >
              Global Clients Trust Us
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-base"
            >
              Our platform provides secure and seamless solutions for businesses
              and individuals to store, manage, and share critical documents,
              fostering smooth collaboration across teams worldwide.
            </motion.p>
          </motion.div>

          {/* Stats Card 2 */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-4/12 text-center p-6 "
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-blue-600 mb-4"
            >
              100,000+
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-xl font-semibold text-gray-800 mb-2"
            >
              Files Shared Globally
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-base"
            >
              With advanced encryption and real-time synchronization, our
              platform ensures that files are securely stored and easily
              accessible, empowering teams to collaborate efficiently without
              concerns over security.
            </motion.p>
          </motion.div>

          {/* Stats Card 3 */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-4/12 text-center p-6 "
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-blue-600 mb-4"
            >
              95%
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-xl font-semibold text-gray-800 mb-2"
            >
              Client Retention Rate
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-base"
            >
              Our clients trust us to handle their most sensitive data, and with
              a 95% retention rate, we are committed to delivering exceptional
              service that drives long-term relationships and growth.
            </motion.p>
          </motion.div>
        </motion.main>
      </motion.section>

      <motion.section
        className="text-gray-600 body-font"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.prod.website-files.com/66a3deff1f6e721d58a35001/66aa450a611e55a59b0e719d_great-team-saasfy-x-webflow-template-p-800.jpg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            >
              Secure File Storage and Seamless Sharing Solutions
              <br className="hidden lg:inline-block" /> Seamless Integration
              Across Devices
            </motion.h1>
            <motion.p variants={itemVariants} className="mb-8 leading-relaxed">
              Our platform offers businesses a powerful and secure solution to
              manage, store, and share documents in real time, ensuring seamless
              access across all devices. With features like end-to-end
              encryption and collaborative tools, your teams can focus on what
              matters most—growth and innovation. Whether you're sharing
              contracts, reports, or marketing assets, our platform ensures that
              your files remain safe, easily accessible, and synchronized at all
              times.
            </motion.p>

            {/* Buttons */}
            <div className="flex justify-center">
              <motion.a
                variants={itemVariants}
                className="px-8 text-center py-3 w-full md:w-auto rounded-full font-semibold bg-black border-2 text-white border-black flex items-center justify-center gap-1"
                href="/"
              >
                Get Started <ArrowRight />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
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

export default About;
