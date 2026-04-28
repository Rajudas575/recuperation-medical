import React from "react";
import Button from "./layouts/Button";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('/home.png')] bg-no-repeat bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00b4d8]/60"></div>

      {/* Content */}
      <div className="relative w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life — Trusted Care You Deserve...
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          officiis, unde dolore error vel natus!
        </p>
        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
