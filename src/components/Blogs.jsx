import React from "react";
import Button from "./layouts/Button";
import BlogCard from "./layouts/BlogCard";
import img1 from "/blog/img1.jpg";
import img2 from "/blog/img2.jpg";
import img3 from "/blog/img3.jpg";
import img4 from "/blog/img4.jpg";
import img5 from "/blog/img5.jpg";
import img6 from "/blog/img3.jpg";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">Latest Post</h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            eum?
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headLines="Unraveling the Mysteries of sleep"/>
          <BlogCard img={img2} headLines="The Heart-Healthy Diet"/>
          <BlogCard img={img3} headLines="Understanding Pediatric Vaccinations"/>
          <BlogCard img={img4} headLines="Navigating Mental Health"/>
          <BlogCard img={img5} headLines="The Importance of Regular Exercies"/>
          <BlogCard img={img6} headLines="Skin Health 101"/>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
