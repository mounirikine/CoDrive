'use client'

import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  // State to handle scroll position
  const [scrolled, setScrolled] = useState(false);

  // Effect to monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return ( 
    <>
      <header className={`fixed lg:sticky w-full z-[9]  md:w-9/12 mx-auto top0 md:top-3 transition-all px-3 md:rounded-full duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-6 md:py-3 :bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img
                src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d4402763dc6e8af2b4607c_Logo%20(6).svg"
                className="mr-3 h-8 md:h-10"
                alt="Flowbite Logo"
              />
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="/sign-in"
                className="text-gray-800 px-5 font-semibold hidden md:block "
              >
                Log in
              </a>
              <a
                href="/sign-up"
                className=" bg-black text-white lg:font-semibold rounded-full px-5 lg:px-10 py-3 outline-none border-none "
              >
                Get started
              </a>
              <div className="block lg:hidden ">
                <Sheet>
                  <SheetTrigger>
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      className="hidden w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>
                        <a href="/" className="flex items-center">
                          <img
                            src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d4402763dc6e8af2b4607c_Logo%20(6).svg"
                            className="mr-3 h-8 md:h-10"
                            alt="Flowbite Logo"
                          />
                        </a>
                      </SheetTitle>

                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                          <a
                            href="/"
                            className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 :text-white"
                            aria-current="page"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="/about"
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            href="/pricing"
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"
                          >
                            Features
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="/"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 :text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 :text-gray-400 lg::hover:text-white :hover:bg-gray-700 :hover:text-white lg::hover:bg-transparent :border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
