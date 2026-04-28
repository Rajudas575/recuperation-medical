import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button
        className="bg-setbgLight text-white px-4 py-2 rounded-md hover:bg-hovercolor
            transition duration-300 ease-in-out cursor-pointer">
        {title}
      </button>
    </div>
  );
};

export default Button;
