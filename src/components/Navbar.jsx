import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Logo from "../assets/images/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <>
      <div className="fixed w-full flex justify-between items-center bg-[#0a192f] text-gray-300 h-[120px] px-14 z-30">
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "70px", height: "70px" }}
          />
        </div>
        {/* menu */}
        <ul className="hidden md:flex text-2xl font-semibold ">
          <li>
            <Link to="home" smooth={true} duration={500} spy={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} spy={true}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="skilss"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              duration={500}
              offset={-110}
              spy={true}
            >
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              Contact
            </Link>
          </li>
        </ul>
        {/* hamburger */}
        <div
          className="md:hidden text-3xl z-10 cursor-pointer"
          onClick={handleNav}
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-4xl"
          }
        >
          <li className="py-4">
            <Link onClick={handleNav} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-4">
            <Link
              onClick={handleNav}
              to="about"
              smooth={true}
              duration={500}
              offset={-135}
            >
              About
            </Link>
          </li>
          <li className="py-4">
            <Link
              onClick={handleNav}
              to="skilss"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Skills
            </Link>
          </li>
          <li className="py-4">
            <Link
              to="work"
              onClick={handleNav}
              smooth={true}
              duration={500}
              offset={-110}
            >
              Work
            </Link>
          </li>
          <li className="py-4">
            <Link
              to="contact"
              onClick={handleNav}
              smooth={true}
              duration={500}
              offset={-60}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center  bg-blue-500 ml-[-100px] duration-300 hover:ml-0">
              <a
                className="flex justify-between items-center w-full font-extrabold text-gray-300"
                href="https://www.linkedin.com/in/josse-pinem-61a358178/"
                target="_blank"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 hover:ml-0 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full font-extrabold text-gray-300"
                href="https://github.com/Josse29"
                target="_blank"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 hover:ml-0 bg-[#d53434]">
              <a
                className="flex justify-between items-center w-full font-extrabold text-gray-300"
                href="https://www.youtube.com/channel/UC1KhptiCbQsxwaogKpSAGjg"
              >
                Youtube <IoLogoYoutube size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 hover:ml-0 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full font-extrabold text-gray-300 "
                href="https://wa.link/2s7u5m"
                target="_blank"
              >
                Whatsapp <FaWhatsapp size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
