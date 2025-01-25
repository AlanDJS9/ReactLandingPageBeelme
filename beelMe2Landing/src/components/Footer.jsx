import React from "react";
// Icons
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiFacebookCircleLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-white p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-300 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 text-black"
          >
            beelme<span className=" text-5xl text-primary">.</span>{" "}
          </a>
        </div>
        {/* Social Media */}
        <nav className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/beelme.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-all text-2xl"
          >
            <RiInstagramLine />
          </a>
          <a
            href="https://www.linkedin.com/company/beelme-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-all text-2xl"
          >
            <RiLinkedinLine />
          </a>
          <a
            href="https://www.facebook.com/beelme.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-all text-2xl"
          >
            <RiFacebookCircleLine />
          </a>
          <a
            href="https://www.twitter.com/beelme_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-all text-2xl"
          >
            <RiTwitterLine />
          </a>
          <a
            href="https://www.youtube.com/beelmeapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-all text-2xl"
          >
            <RiYoutubeLine />
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-black text-center md:text-left">
          Company
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Press
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Investors
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Events
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Terms of Use
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Privacy Policy
          </a>
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-gray-200 hover:bg-gray-300 text-black rounded-xl transition-all"
          >
            Contact Us
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-500 text-center">
          maquinix 2024 © - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
