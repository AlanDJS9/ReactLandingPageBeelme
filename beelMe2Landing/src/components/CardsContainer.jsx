import React from "react";
import ImageCard from "./ImageCard";
import DropdownCard from "./DropdownCard";
const CardsContainer = () => {
  return (
    <div
      className="flex justify-evenly items-center flex-wrap gap-y-6 p-8"
      style={{
        paddingLeft: "20px", // Optional padding for spacing consistency
        paddingRight: "20px",
      }}
    >
      {/* Cards */}
      <ImageCard
        imageURL="/cdmx-1.jpg"
        text="Explore the beauty of Mexico"
        link="https://example.com"
        width={3}
        height={3}
      />
      <ImageCard
        imageURL="/oaxaca-1.jpg"
        text="Discover local cuisines"
        link="https://example.com"
        width={3}
        height={3}
      />
      <ImageCard
        imageURL="/tulum-1.jpg"
        text="Experience cultural heritage"
        link="https://example.com"
        width={3}
        height={3}
      />
      <ImageCard
        imageURL="/cdmx-3.jpg"
        text="Unwind in nature"
        link="https://example.com"
        width={2}
        height={3}
      />
      <DropdownCard
        title="Our Mission"
        content="To connect travelers with authentic, curated experiences across Mexico, fostering cultural exchange and exploration through an intuitive platform that empowers users to discover, create, and share their unique journeys."
      />
      <DropdownCard
        title="Our Vision"
        content="To become the go-to platform for travelers exploring Mexico, offering a community-driven approach to tourism that highlights the country’s beauty, culture, and diversity while promoting sustainable and meaningful travel."
      />
    </div>
  );
};

export default CardsContainer;
