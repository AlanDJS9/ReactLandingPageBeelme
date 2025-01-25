import React from "react";

const TextCard = () => {
  return (
    <div className="w-[250px] h-[250px] rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col justify-between">
      {/* Title */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-black">Text Card Title</h3>
        <p className="text-gray-600 mt-2">
          This is placeholder text for the body of the text card. It provides an example.
        </p>
      </div>
      {/* Button */}
      <div className="p-4">
        <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all">
          See More
        </button>
      </div>
    </div>
  );
};

export default TextCard;
