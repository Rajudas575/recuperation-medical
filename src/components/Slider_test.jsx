import { useState } from "react";
import { descriptions, images } from "../data";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const getRandomNumber = () => Math.floor(Math.random() * 41) - 20;

const Slider = () => {
  const [index, setIndex] = useState(4);
  return (
    // container
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center
    lg:px-32 px-5 pt-24 lg:pt-16 gap-5 relative">
      {/* slider */}
      {/* <div className="flex gap-x-20 lg:items-center items-center lg:flex-row flex-col"> */}
      <div className="w-full lg:w-3/4 space-y-4 ">
        {/* Images */}
        <div className={`sm:w-100 sm:h-100 w-75 h-75 relative`}>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              className={`w-full h-full absolute object-cover rounded-3xl transition-all duration-300 ${i === index ? "activeimage" : "inactiveImage"}`}
              style={{
                transform: `rotate(${index === i ? 0 : getRandomNumber()}deg)`,
              }}
            />
          ))}
        </div>
      </div>
      {/* Descriptions */}
      {/* <div className={`relative sm:w-100 sm:h-80 mt-22 lg:mt-5`}> */}
      <div className="relative w-full lg:w-3/4">
        {descriptions.map((desc, i) => (
          <p
            className={`text-center sm:text-xl text-gray-600 
                absolute transition-all duration-300 
                ${i === index ? "activeDesc delay-200" : "inactiveDsc"}`}
            key={i}>
            {desc}
          </p>
        ))}
      </div>

      {/* image controls */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <button
          className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          onClick={() =>
            setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }>
          <FaArrowLeft size={18} />
        </button>
        <button
          className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          onClick={() =>
            setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
          }>
          <FaArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
