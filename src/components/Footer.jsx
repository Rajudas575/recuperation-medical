import { Link } from "react-scroll";
import Logo from "../assets/medicine_icon.png";

const Footer = () => {
  return (
    <div className="bg-setbg text-white rounded-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <div className="flex items-center">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center gap-2 text-xl font-semibold cursor-pointer leading-none">
              <img
                src={Logo}
                alt="logo"
                className="w-7 h-7 object-contain inline-block align-middle"
              />
              <span className="leading-none">Recuperation</span>
            </Link>
          </div>

          <p className="pt-5">
            Ourteam of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
        </div>

        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFC000] transition-all cursor-pointer">
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFC000] transition-all cursor-pointer">
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hovercolor transition-all cursor-pointer">
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFC000] transition-all cursor-pointer">
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFC000] transition-all cursor-pointer">
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFC000] transition-all cursor-pointer">
              Heart Health
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              15, Nilgunj Road, Kolkata-114, WB
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              support@care.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +91 8989665533
            </Link>
          </nav>
        </div>
      </div>
      <div className="text-center py-4">
        © {new Date().getFullYear()} Choice Zone. All rights reserved || Made
        with ❤️ by Raju.
      </div>
    </div>
  );
};

export default Footer;
