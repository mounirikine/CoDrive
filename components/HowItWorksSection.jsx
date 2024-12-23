import { motion } from "framer-motion";
import { ArrowRight, CircleCheck } from "lucide-react";

const HowItWorksSection = () => {
  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.section
        className="container mx-auto py-16 px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h5
          className="text-base mb-5 text-center mx-auto text-[#5ea977] font-semibold"
          variants={itemVariants}
        >
          - How it Works -
        </motion.h5>
        <motion.h1
          className="text-2xl lg:text-5xl text-center font-bold text-gray-900 mt-4"
          variants={itemVariants}
        >
          How Fortify Cloud Storage Works
        </motion.h1>
        <motion.p
          className="text-sm lg:text-base text-center text-gray-700 mt-5 max-w-3xl mx-auto md:mb-24"
          variants={itemVariants}
        >
          Fortify Cloud Storage is your secure, reliable, and intuitive platform
          for storing, sharing, and collaborating on documents. Here’s how we
          protect and manage your data with ease.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10"
          variants={containerVariants}
        >
          {/* Step 1: Upload */}
          <motion.div
            className="border border-[#5ea977] bg-gray-50 p-9 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
          >
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
          </motion.div>

          {/* Step 2: Secure Storage */}
          <motion.div
            className="border border-[#5ea977] bg-gray-50 p-9 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
          >
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
          </motion.div>

          {/* Step 3: Access & Share */}
          <motion.div
            className="border border-[#5ea977] bg-gray-50 p-9 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
          >
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
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="container mx-auto py-10 md:py-24 px-6"
    >
      <main className="flex items-center justify-between flex-col lg:flex-row">
        {/* Left Image Section */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-5/12 relative mt-2 md:mt-10 lg:mt-0"
        >
          <img
            src="https://cdn.prod.website-files.com/644bdc09dc06a84e58e7e48e/644c405cfe8d89249d36fa52_gain-insights-with-website-analytics-image-home-v1-techflow-x-webflow-template.png"
            className="rounded-xl shadow-2xl w-full"
            alt="Primary illustration"
          />
          <img
            className="absolute top-56 hidden lg:block -left-5 rounded-xl shadow-xl w-44"
            src="https://cdn.prod.website-files.com/644bdc09dc06a84e58e7e48e/6451e516ca1acb4697c0e298_measure-your-website-success-bottom-image-techflow-x-webflow-template.png"
            alt="Secondary illustration"
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-7/12 mt-10 lg:mt-0 lg:pl-12"
        >
          <h1 className="text-2xl lg:text-5xl text-center lg:text-left font-bold text-gray-900 mt-4">
            Your Files, Securely Stored and Easily Accessible
          </h1>
          <p className="text-sm lg:text-base text-center lg:text-left text-gray-700 mt-5 max-w-3xl mx-auto">
            Our platform makes it simple to upload, store, and share your
            documents securely. Whether you’re working solo or collaborating
            with a team, we provide an intuitive and reliable solution for
            managing your files.
          </p>

          <ul className="mt-10 space-y-4">
            <motion.li
              variants={itemVariants}
              className="flex items-start text-gray-600 gap-2"
            >
              <CircleCheck color="#5ea977" />
              Upload your files easily with drag-and-drop or manual selection.
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="flex items-start text-gray-600 gap-2"
            >
              <CircleCheck color="#5ea977" />
              Your documents are stored securely with top-notch encryption to
              protect your data.
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="flex items-start text-gray-600 gap-2"
            >
              <CircleCheck color="#5ea977" />
              Share documents with anyone easily, with control over permissions.
            </motion.li>
          </ul>
        </motion.div>
      </main>
    </motion.section>
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="container mx-auto py-10 lg:py-24 px-6"
    >
      <main className="flex items-center justify-between flex-col lg:flex-row">
        {/* Left Content Section */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-7/12 mt-10 lg:mt-0 lg:pl-12"
        >
          <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-bold text-gray-900 mt-4">
            Comprehensive File Access Monitoring for Enhanced Security
          </h1>
          <p className="text-sm lg:text-base text-center lg:text-left text-gray-700 mt-5 max-w-3xl mx-auto">
            Our platform tracks and logs every file access event, providing
            detailed insights on who accessed what, when, and from which
            device. This robust monitoring ensures compliance, security, and
            peace of mind for all users.
          </p>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 text-center py-3 w-10/12 md:w-4/12 mt-10 rounded-full font-semibold bg-black border-2 text-white border-black flex items-center justify-center gap-1"
            href="/"
          >
            Get Started <ArrowRight />
          </motion.a>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-5/12 relative mt-5 md:mt-10 lg:mt-0"
        >
          <img
            src="https://cdn.prod.website-files.com/669675662d419f003607555b/6697964809a5102d9555f5e7_man-p-800.webp"
            className="w-full rounded-xl "
            alt="File Access Monitoring"
          />
        </motion.div>
      </main>
    </motion.section>
    </>
  );
};

export default HowItWorksSection;
