'use client'

import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <style jsx>{`
        .bg-log {
          background-image: url("https://cdn.prod.website-files.com/6731fdd0f63b3ea818bdde45/673c8ca96a36ed6a20d92ff9_Blog-Single-6.jpg");
          background-position: 50%;
          background-size: cover;
          position: relative;
        }

        .bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5); /* Semi-transparent dark overlay */
          z-index: 1; /* Ensures the overlay is above the image but below the content */
        }

        .bg-log img {
          filter: brightness(50%) blur(2px); /* Apply darkening and blur to the background image */
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0; /* Ensure the image stays behind the overlay and content */
        }
      `}</style>

      <section className="relative hidden w-1/2 items-center justify-center bg-log p-10 lg:flex xl:w-8/12">
        <div className="bg-overlay"></div> {/* Overlay to darken the background */}
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Your Secure Portal 🔐
          </h1>
          <p className="text-lg text-white">
            Access your files with ease and confidence. The secure platform you can rely on, anytime, anywhere.
          </p>
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo.png"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
