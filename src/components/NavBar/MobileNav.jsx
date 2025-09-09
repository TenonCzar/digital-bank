import React from "react";
import CloseBtn from "../../assets/icon-close.svg";
const MobileNav = ({ onClose }) => {
  return (
    <div className="bg-[#00000038] h-[100vh] transition-all trans pt-4 top-0 fixed left-0 w-[100vw] z-10 md:hidden">
      {/* Mobile Menu Button */}
      <div
        onClick={onClose}
        aria-controls="mobile-nav"
        aria-label="Toggle navigation menu"
        className="md:hidden pr-12 float-right cursor-pointer"
      >
        <img src={CloseBtn} alt="menu toggle" className="w-6 h-6" />
      </div>
      <div className="shadow-md bg-white w-[80%] rounded mx-auto mt-16 px-12 py-6 items-center text-center font-semibold flex flex-col gap-6">
        <a href="#" className="hover:text-[#32d25d]">
          Home
        </a>
        <a href="#" className="hover:text-[#32d25d]">
          About
        </a>
        <a href="#" className="hover:text-[#32d25d]">
          Contact
        </a>
        <a href="#" className="hover:text-[#32d25d]">
          Blog
        </a>
        <a href="#" className="hover:text-[#32d25d]">
          Careers
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
