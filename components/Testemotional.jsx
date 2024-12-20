"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testemotional = () => {
  return (
    <section className="container w-full md:w-10/12 mx-auto py-8 md:py-14">
    <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center w-10/12 mx-auto">
  Real Stories, Real Impact: Why Users Love Our File Sharing Platform
</h1>
<p className="lg:text-base mb-5 text-center text-gray-600 w-9/12 mx-auto">
  Discover how businesses and individuals trust us to store, share, and collaborate on files effortlessly. Our platform offers robust security, seamless sharing, and smooth collaboration for teams of all sizes.
</p>
    
    <section className="   flex items-center justify-center py-5">
      

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="md:ext-2xl font-medium text-gray-900 dark:text-white">
                    "This platform has revolutionized the way our team shares
                    and collaborates on files. It’s incredibly easy to use, and
                    the security features give us peace of mind knowing our
                    sensitive documents are safe."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      John Doe
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      CTO at InnovateTech
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="md:ext-2xl font-medium text-gray-900 dark:text-white">
                    "This platform has saved us so much time. It’s intuitive,
                    easy to navigate, and the file-sharing speed is lightning
                    fast. We can focus more on our work, and less on managing
                    files."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      Alan Brown
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      Product Manager at TechWorks
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="md:ext-2xl font-medium text-gray-900 dark:text-white">
                    "We needed a reliable cloud storage service for our growing
                    business, and this platform exceeded all expectations. The
                    ability to access and share files instantly has made our
                    operations so much smoother."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      Emily Johnson
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      Operations Manager at Swift Enterprises
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="md:ext-2xl font-medium text-gray-900 dark:text-white">
                    "We’ve been able to streamline our workflow and collaborate
                    seamlessly. The storage capacity and speed are unparalleled.
                    I’m impressed by the customizability for different team
                    needs."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      Jane Smith
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      Marketing Director at Future Enterprises
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </section></section>
    
  );
};

export default Testemotional;
