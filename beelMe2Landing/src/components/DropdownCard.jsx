import React, { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

const DropdownCard = ({ title, subtitle, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md p-4 rounded-2xl shadow-lg bg-white transition-all">
      {/* Title Section */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-black">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-primary text-xl rounded-full hover:bg-gray-100 transition-all"
        >
          {isOpen ? <RiSubtractLine /> : <RiAddLine />}
        </button>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-4 text-gray-600 text-sm">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownCard;
