import React from "react";
import Logo from "../../assets/logo-light.svg";
import FB from "../../assets/icon-facebook.svg";
import YT from "../../assets/icon-youtube.svg";
import X from "../../assets/icon-twitter.svg";
import Pin from "../../assets/icon-pinterest.svg";
import IG from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center md:flex-row bg-[#2d314d] py-12 text-white gap-12 md:justify-between md:px-24">
      <div className="top flex flex-col gap-12 items-center">
        <img src={Logo} alt="Digitalbank" />
        <div className="socials flex gap-4 items-center">
          <a href="#">
            <img src={FB} alt="facebook" />
          </a>
          <a href="#">
            <img src={YT} alt="facebook" />
          </a>
          <a href="#">
            <img src={X} alt="facebook" />
          </a>
          <a href="#">
            <img src={Pin} alt="facebook" />
          </a>
          <a href="#">
            <img src={IG} alt="facebook" />
          </a>
        </div>
      </div>

      <div className="links flex flex-col items-center gap-6 md:flex-row md:gap-32">
        <div className="right flex flex-col items-center gap-6 md:items-start">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <div className="left flex flex-col items-center gap-6 md:items-start">
          <a href="#">Careers</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      <div className="end flex flex-col items-center gap-4">
        <button className="px-12 py-3 rounded-full footerbtn">Request Invite</button>
        <p>Digitalbank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
