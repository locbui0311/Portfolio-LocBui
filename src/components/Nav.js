import React from "react";
import { BiHomeAlt, BiSolidContact, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsChatSquareText,
} from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {}
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-2xl
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="home"
            className=" cursor-pointer w-[60px] h-[60px] flex items-center jus"
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className=" cursor-pointer w-[60px] h-[60px] flex items-center jus"
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="services"
            className=" cursor-pointer w-[60px] h-[60px] flex items-center jus"
          >
            <BsClipboardData />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            className=" cursor-pointer w-[60px] h-[60px] flex items-center jus"
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className=" cursor-pointer w-[60px] h-[60px] flex items-center jus"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
