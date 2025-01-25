import React from "react";

const ServiceCard = ({ imageURL, title, description }) => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-lg">
      {/* Image Section */}
      <div className="w-full h-32 overflow-hidden rounded-xl">
        <img
          src={imageURL}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
