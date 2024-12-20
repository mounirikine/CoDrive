import React from "react";
import Navbar from "../../components/Navbar";
import Testemotional from "../../components/Testemotional";
import Pricing from "../../components/Pricing";
import Footer from '../../components/Footer'
import { ArrowRight, CircleCheck } from "lucide-react";
const page = () => {
  return (
    <>
      <Navbar />

      <section className="py-20 lg:py-32 min-h-screen hero w-full px-3">
        <main className="flex items-center md:container justify-between py-5 md:py-8 md:gap-3 flex-col lg:flex-row">
          <div className="w-full lg:w-6/12 md:px-4">
            <h1 className="text-2xl md:text-6xl font-bold mb-5 text-center md:text-left">
              Securely store access & Share your Files Anytime Anywhere
            </h1>
            <p className=" lg:text-xl mb-5 text-center text-gray-600 md:text-left">
              Effortlessly manage and secure your documents and files in one
              place, with seamless sharing and collaboration tools that ensure
              productivity and peace of mind.
            </p>
            <div className="flex items-center py-2 md:py-5 gap-1 md:gap-3 flex-col md:flex-row px-5 md:px-0">
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
            </div>
          </div>
          <div className="w-full lg:w-6/12 relative mt-2 md:mt-10 lg:mt-0">
            <img
              src="https://cdn.prod.website-files.com/644bdc09dc06a84e58e7e48e/644c405cfe8d89249d36fa52_gain-insights-with-website-analytics-image-home-v1-techflow-x-webflow-template.png"
              className="rounded-xl shadow-2xl w-full"
              alt=""
            />
            <img
              className="absolute top-72 hidden lg:block -left-5 rounded-xl shadow-xl w-44"
              src="https://cdn.prod.website-files.com/644bdc09dc06a84e58e7e48e/6451e516ca1acb4697c0e298_measure-your-website-success-bottom-image-techflow-x-webflow-template.png"
              alt=""
            />
          </div>
        </main>

        <div className="lg:flex items-center justify-between container flex-row hidden   pt-20  ">
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
        </div>
      </section>

      <section className="container mx-auto py-16 px-6">
        <h5 className="text-base mb-5 text-center mx-auto text-[#5ea977] font-semibold">
          - How it Works -
        </h5>
        <h1 className="text-2xl lg:text-5xl text-center font-bold text-gray-900 mt-4">
          How Fortify Cloud Storage Works
        </h1>
        <p className="text-sm lg:text-base  text-center text-gray-700 mt-5 max-w-3xl mx-auto md:mb-24">
          Fortify Cloud Storage is your secure, reliable, and intuitive platform
          for storing, sharing, and collaborating on documents. Here’s how we
          protect and manage your data with ease.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {/* Step 1: Upload */}
          <div className="border border-[#5ea977] bg-gray-50 p-9 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d53c725b581cadc3887c1d_chart.svg"
              alt="Upload Icon"
              className="w-16 h-16 mx-auto mb-4 bg-[#5ea977] p-3 rounded-full"
            />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
              Easy Upload
            </h2>
            <p className="text-gray-600 text-center text-sm">
              Simply drag and drop your files or use the upload button to start
              storing your important documents securely in the cloud. Upload
              from any device, anytime.
            </p>
          </div>
          {/* Step 2: Secure Storage */}
          <div className="border border-[#5ea977] bg-gray-50 p-9 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d53c725b581cadc3887c1d_chart.svg"
              alt="Upload Icon"
              className="w-16 h-16 mx-auto mb-4 bg-[#5ea977] p-3 rounded-full"
            />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
              Secure Storage
            </h2>
            <p className="text-gray-600 text-center text-sm">
              Your files are encrypted and stored in a highly secure
              environment, ensuring they are protected from unauthorized access,
              data breaches, and threats.
            </p>
          </div>
          {/* Step 3: Access & Share */}
          <div className="border border-[#5ea977] bg-gray-50 p-9 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d53c725b581cadc3887c1d_chart.svg"
              alt="Upload Icon"
              className="w-16 h-16 mx-auto mb-4 bg-[#5ea977] p-3 rounded-full"
            />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
              Access & Share
            </h2>
            <p className="text-gray-600 text-center text-sm">
              Easily access your documents from any device. Share files with
              your team, clients, or friends with just a few clicks, and
              collaborate in real-time.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10 md:py-24 px-6">
        <main className="flex items-center justify-between flex-col lg:flex-row">
          <div className="w-full lg:w-5/12 relative mt-2 md:mt-10 lg:mt-0">
            <img
              src="https://cdn.prod.website-files.com/644bdc09dc06a84e58e7e48e/644c405cfe8d89249d36fa52_gain-insights-with-website-analytics-image-home-v1-techflow-x-webflow-template.png"
              className="rounded-xl shadow-2xl w-full"
              alt=""
            />
            <img
              className="absolute top-56 hidden lg:block -left-5 rounded-xl shadow-xl w-44"
              src="https://cdn.prod.website-files.com/644bdc09dc06a84e58e7e48e/6451e516ca1acb4697c0e298_measure-your-website-success-bottom-image-techflow-x-webflow-template.png"
              alt=""
            />
          </div>

          <div className="w-full lg:w-7/12 mt-10 lg:mt-0 lg:pl-12">
            <h1 className="text-2xl lg:text-5xl text-center lg:text-left font-bold text-gray-900 mt-4">
              Your Files, Securely Stored and Easily Accessible
            </h1>
            <p className="text-sm lg:text-base  text-center lg:text-left text-gray-700 mt-5 max-w-3xl mx-auto">
              Our platform makes it simple to upload, store, and share your
              documents securely. Whether you’re working solo or collaborating
              with a team, we provide an intuitive and reliable solution for
              managing your files.
            </p>

            <ul className="mt-10 space-y-4">
              <li className="flex items-start text-gray-600 gap-2">
                <CircleCheck color="#5ea977" />
                Upload your files easily with drag-and-drop or manual selection.
              </li>
              <li className="flex items-start text-gray-600 gap-2">
                <CircleCheck color="#5ea977" />
                Your documents are stored securely with top-notch encryption to
                protect your data.
              </li>
              <li className="flex items-start text-gray-600 gap-2">
                <CircleCheck color="#5ea977" />
                Share documents with anyone easily, with control over
                permissions.
              </li>
            </ul>
          </div>
        </main>
      </section>
      <section className="container mx-auto py-10 lg:py-24 px-6">
        <main className="flex items-center justify-between flex-col lg:flex-row">
          <div className="w-full lg:w-7/12 mt-10 lg:mt-0 lg:pl-12">
            <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-bold text-gray-900 mt-4">
              Comprehensive File Access Monitoring for Enhanced Security
            </h1>
            <p className="text-sm lg:text-base text-center lg:text-left text-gray-700 mt-5 max-w-3xl mx-auto">
              Our platform tracks and logs every file access event, providing
              detailed insights on who accessed what, when, and from which
              device. This robust monitoring ensures compliance, security, and
              peace of mind for all users.
            </p>
            <a
              className="px-8 text-center py-3  w-10/12 md:w-4/12 mt-10  rounded-full font-semibold bg-black border-2 text-white border-black flex items-center justify-center gap-1"
              href="/"
            >
              Get Started <ArrowRight />
            </a>
          </div>
          <div className="w-full lg:w-5/12 relative mt-5 md:mt-10 lg:mt-0">
            <img
              src="https://cdn.prod.website-files.com/669675662d419f003607555b/6697964809a5102d9555f5e7_man-p-800.webp"
              className="w-full"
              alt="File Access Monitoring"
            />
          </div>
        </main>
      </section>

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

      <section className="hero-badge  w-10/12 mx-auto py-10 md:py-24 px-3 md:px-20 rounded-2xl flex flex-col lg:flex-row items-center justify-between mb-10">
        <div className="md:w-6/12 text-lg font-semibold">
          <h1 className="text-xl md:text-4xl text-white font-semibold mb-4">
            {" "}
            Get in Touch: We're Here to Help with Any Questions or Support
          </h1>
        </div>
        <div className=" hidden lg:block md:w-6/12">
          <div className="flex flex-col lg:flex-row items-center bg-white w-full py-3 md:rounded-full px-3 ">
            <input
              type="text"
              className="px-4 bg-transparent text-black  md:w-9/12 outline-none border-none  "
              placeholder="Enter your message"
            />
            <button className="p-5 md:p-3 bg-[#5ea977] text-lg flex items-center justify-center w-full md:w-3/12 text-white font-semibold rounded-full ">
              Submit
              <ArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
