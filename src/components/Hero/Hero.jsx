import React from "react";
import bgStyle from "../../assets/bg-intro-mobile.svg";
import bgStyleDesktop from "../../assets/bg-intro-desktop.svg";
import Phone from "../../assets/image-mockups.png";
const Hero = () => {
  return (
    <div className="flex flex-col gap-24 md:flex-row-reverse h-fit justify-between md:pl-14">
      <div className="mockup relative md:flex md:items-end md:flex-col ">
        <img
          src={bgStyle}
          alt=""
          className="md:hidden absolute w-full -z-10 top-0"
        />
        <img
          src={bgStyleDesktop}
          className="hidden md:block absolute w-full -z-10 -top-38 md:-right-52"
          alt=""
        />
        <img
          src={Phone}
          alt=""
          className="sticky -z-10 opacity-0 w-[70%] md:w-[55%]"
        />
        <img
          src={Phone}
          alt=""
          className="opacity- absolute -top-38 -z-10 md:w-[70%] md:-right-25 md:-top-20"
        />
      </div>

      <div className="writeup flex items-center flex-col text-center px-10 gap-6 md:text-left md:justify-center md:items-start md:w-[32%]">
        <div className="title text-4xl">Next generation digital banking</div>
        <p>
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="px-12 py-3 rounded-full">Request Invite</button>
      </div>
    </div>
  );
};

export default Hero;
