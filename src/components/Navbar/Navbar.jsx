import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import Contact from "../models/Contact";
import Logo from "../../assets/medicine_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState();
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <div >
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-setbg shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-xl cursor-pointer flex flex-row justify-between">
              <img src={Logo} alt="" width={30} />
              Recuperation
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium  gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFC000] transition-all cursor-pointer"
              onClick={closeMenu}>
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFC000] transition-all cursor-pointer"
              onClick={closeMenu}>
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFC000] transition-all cursor-pointer"
              onClick={closeMenu}>
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hovercolor transition-all cursor-pointer"
              onClick={closeMenu}>
              Doctors
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hovercolor transition-all cursor-pointer"
              onClick={closeMenu}>
              Blog
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <button
              className="bg-setbgLight text-white px-4 py-2 rounded-md hover:bg-hovercolor
            transition duration-300 ease-in-out cursor-pointer"
              onClick={openForm}>
              Contact Us
            </button>
          </div>
          {showForm && <Contact closeForm={closeForm} />}
          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-setbg text-white left-0 top-16 font-semibold text-xl text-center pt-6 pb-4 gap-6 w-full h-fit transition-transform duration-300`}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#FFC000] transition-all cursor-pointer"
            onClick={closeMenu}>
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#FFC000] transition-all cursor-pointer"
            onClick={closeMenu}>
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#FFC000] transition-all cursor-pointer"
            onClick={closeMenu}>
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hovercolor transition-all cursor-pointer"
            onClick={closeMenu}>
            Doctors
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hovercolor transition-all cursor-pointer"
            onClick={closeMenu}>
            Blog
          </Link>
          <div className="lg:hidden">
            <button
              className="bg-setbgLight text-white px-4 py-2 rounded-md hover:bg-hovercolor
            transition duration-300 ease-in-out"
              onClick={openForm}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
