import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Newsletter = () => {
  return (
    <section id="aboutUs" className="bg-gray-100 py-12 px-8">
      {/* Mission Section */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl xl:text-5xl text-center font-bold text-black">
          Mission
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-5xl text-primary">
            <RiDoubleQuotesL />
          </span>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl">
            To connect travelers with authentic, curated experiences across
            Mexico, fostering cultural exchange and exploration through an
            intuitive platform that empowers users to discover, create, and
            share their unique journeys.
          </p>
          <span className="text-5xl text-primary">
            <RiDoubleQuotesR />
          </span>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-4xl mx-auto mt-12 flex flex-col gap-8">
        <h1 className="text-4xl xl:text-5xl text-center font-bold text-black">
          Vision
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-5xl text-primary">
            <RiDoubleQuotesL />
          </span>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl">
            To become the go-to platform for travelers exploring Mexico,
            offering a community-driven approach to tourism that highlights the
            country’s beauty, culture, and diversity while promoting sustainable
            and meaningful travel.
          </p>
          <span className="text-5xl text-primary">
            <RiDoubleQuotesR />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
