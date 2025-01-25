import React from "react";

const Button = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
        Login
      </button>
      <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all">
        Sign Up
      </button>
    </div>
  );
};

export default Button;
