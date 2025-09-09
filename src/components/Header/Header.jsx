import React, { useState } from "react";
import Logo from "../../assets/logo-dark.svg";
import NavBtn from "../../assets/icon-hamburger.svg";
import MobileNav from "../NavBar/MobileNav";

const Header = () => {
  const [isStart, setIsStart] = useState(false);
  return (
    <div className="flex items-center justify-between px-12 py-4 bg-white md:px-24">
      <img src={Logo} alt="" />

      <nav className="flex justify-between">
        <div className="links md:flex items-center gap-12 hidden">
          <ul className=" md:flex items-center gap-12 hidden">
            <li className="text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-b-[#32d25d] pb-3">
              <a href="#">Home</a>
            </li>
            <li className="text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-b-[#32d25d] pb-3">
              <a href="#">About</a>
            </li>
            <li className="text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-b-[#32d25d] pb-3">
              <a href="#">Contact</a>
            </li>
            <li className="text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-b-[#32d25d] pb-3">
              <a href="#">Blog</a>
            </li>
            <li className="text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-b-[#32d25d] pb-3">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setIsStart(true)}
          aria-controls="mobile-nav"
          aria-label="Open navigation menu"
          className={`cursor-pointer ${isStart ? "hidden" : "md:hidden"}`}
          // className="button md:hidden bg-transparent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
            <g fill="#2D314D" fill-rule="evenodd">
              <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
            </g>
          </svg>
        </div>
      </nav>
      <button className="hidden cta-head greengrad py-2 px-6 rounded-full lg:flex">
        Request Invite
      </button>

      {isStart && <MobileNav onClose={() => setIsStart(false)} />}
    </div>
  );
};

export default Header;
