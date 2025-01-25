import React from "react";
import { RiHeartLine } from "react-icons/ri";

const ImageCard = ({ imageURL, text, link, width, height }) => {
  return (
    <div
      className="relative rounded-2xl shadow-lg overflow-hidden bg-white"
      style={{
        width: `${width * 100}px`, // Dynamic width
        height: `${height * 100}px`, // Dynamic height
      }}
    >
      {/* Image */}
      <img src={imageURL} alt="Card" className="w-full h-full object-cover" />

      {/* Top Left Heart Button */}
      <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md text-primary hover:text-red-500">
        <RiHeartLine />
      </button>

      {/* Top Right See More Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 px-4 py-2 bg-white rounded-lg shadow-md text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all"
      >
        See More
      </a>

      {/* Text Overlay */}
      <div className="absolute bottom-2 left-2 right-2 p-4 bg-white bg-opacity-80 rounded-md">
        <p className="text-black font-medium">{text}</p>
      </div>
    </div>
  );
};

export default ImageCard;
