import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const CarouselWithText = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track active hyperlink

  // Array of image URLs
  const images = [
    "/cdmx-1.jpg",
    "/cdmx-2.jpg",
    "/cdmx-3.jpg",
    "/tulum-1.jpg",
    "/oaxaca-1.jpg",
    // Add more URLs as needed
  ];

  // Responsive settings for the carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
      {/* Image Carousel with Fixed Height */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        containerClass="absolute inset-0"
        itemClass="h-full"
        className="h-full"
        dotListClass="absolute bottom-4 flex justify-center"
      >
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between h-[10vh] md:h-[8vh] px-4 md:px-8 z-50 bg-black/10 backdrop-blur-md">
        {/* Logo */}
        <div className="text-white font-bold text-lg md:text-xl">
          beelme<span className="text-primary">.</span>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="flex items-center md:hidden ">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full bg-black text-white flex-col items-center gap-4 py-4 z-20 md:static md:flex-row md:flex md:items-center md:justify-center md:bg-transparent md:py-0`}
        >
          {["Home", "Product", "Overview", "About Us"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              onClick={() => setActiveLink(link)}
              className={`px-4 py-2 hover:text-primary transition-all ${
                activeLink === link ? "text-primary" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setActiveLink("Login")}
            className={`px-4 py-2 border ${
              activeLink === "Login"
                ? "bg-primary text-white"
                : "border-primary text-primary"
            } rounded-lg text-sm hover:bg-primary hover:text-white transition-all`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveLink("Sign Up")}
            className={`px-4 py-2 ${
              activeLink === "Sign Up"
                ? "bg-primary-dark"
                : "bg-primary text-white"
            } rounded-lg text-sm hover:bg-primary-dark transition-all`}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-8 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold sm:leading-[3rem] md:leading-[4rem] xl:leading-[7.5rem]">
          Your Story, Your Tour <br />
          <span className="text-primary py-1 sm:py-2 px-4 sm:px-6 border-4 sm:border-8 border-primary relative inline-block">
            Your México
          </span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-lg md:text-2xl leading-5 sm:leading-[2rem] md:leading-[2.5rem] mt-4 sm:mt-6">
          Find tours tailored to your interests whether you’re a foodie, history
          buff, or nature lover. Inspire others by creating and sharing your
          own tours with fellow explorers.
        </p>
      </div>
    </section>
  );
};

export default CarouselWithText;
