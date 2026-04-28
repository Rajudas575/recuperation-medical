import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-between items-center
    lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est
          aut nam? Qui, asperiores rem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio, nulla.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est
          aut nam? Qui, asperiores rem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio, nulla.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est
          aut nam? Qui, asperiores rem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio, nulla.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est
          aut nam? Qui, asperiores rem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio, nulla.
        </p>
      </div>
      <div className="relative w-full lg:w-3/4">
        <div className="absolute inset-0 bg-[#00b4d8]/30 rounded-lg"></div>
        <img src={"/about.jpg"} alt="About" className="rounded-lg" />
      </div>
    </div>
  );
};

export default About;
