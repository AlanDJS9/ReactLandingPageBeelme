import React, { useState } from "react";
// Icons
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import Button from "./Button"; // New component for buttons

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between w-full py-4 px-8 h-[10vh] z-50">
      {/* Logo Section */}
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          beelme<span className="text-primary text-5xl">.</span>{" "}
        </a>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`flex-1 flex justify-center items-center gap-10 ${
          showMenu ? "fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full left-0 top-0 flex-col xl:static transition-all duration-500 z-50" : "hidden xl:flex"
        }`}
      >
        <a href="#home" className="hover:text-primary transition-all">
          Home
        </a>
        <a href="#tours" className="hover:text-primary transition-all">
          Tours
        </a>
        <a href="#services" className="hover:text-primary transition-all">
          Services
        </a>
        <a href="#aboutUs" className="hover:text-primary transition-all">
          About Us
        </a>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center justify-end xl:w-1/6">
        <Button />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
