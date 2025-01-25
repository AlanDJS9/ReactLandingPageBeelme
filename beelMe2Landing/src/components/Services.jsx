import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-8 md:p-12 xl:p-20"
    >
      {/* Big Card for Email Subscription */}
      <div
        className="relative bg-cover bg-center rounded-2xl shadow-lg p-8 flex flex-col justify-between"
        style={{
          backgroundImage: "url('/public/tulum-1.jpg')",
          minHeight: "400px",
        }}
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            🌍 Explore Mexico Like Never Before!
          </h1>
          <p className="text-lg md:text-xl text-white mt-4">
            Get exclusive early access to beelme, the ultimate travel app for
            discovering and sharing the best tours around Mexico.
          </p>
        </div>
        <form className="w-full mt-6">
          <div className="relative">
            <input
              type="email"
              className="w-full bg-white py-4 pl-12 pr-40 rounded-xl outline-none text-gray-700"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-4 hover:bg-primary-dark transition-all"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Grid of 2x2 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ServiceCard
          imageURL="/public/beeLME1.png"
          title="Discover"
          description="Immerse yourself in authentic experiences crafted by real people, not just generic travel guides."
        />
        <ServiceCard
          imageURL="/public/beeLME2.png"
          title="Create and Share"
          description="Inspire others by creating and sharing your own tours with fellow explorers."
        />
        <ServiceCard
          imageURL="/public/beeLME3.png"
          title="Choose"
          description="Make informed choices with honest reviews and ratings from other travelers."
        />
        <ServiceCard
          imageURL="/public/beeLME4.png"
          title="Plan"
          description="From costs to directions, our app makes it easy to plan unforgettable adventures."
        />
      </div>
    </section>
  );
};

export default Services;
