import React from "react";
import Online from "../../assets/icon-online.svg"
import Simple from "../../assets/icon-budgeting.svg"
import Onboarding from "../../assets/icon-onboarding.svg"
import Api from "../../assets/icon-api.svg"

const Why = () => {
  return (
    <div className="py-20 px-12 flex flex-col gap-12 bg-[#f3f4f6] -z-[400] sticky mt-12 md:px-24 md:mt-0">
      <div className="title flex flex-col items-center text-center gap-6 md:text-left md:items-start md:w-[40%]">
        <h2 className="text-4xl">Why choose Digitalbank?</h2>
        <p className="md:text-sm grey6">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="points flex flex-col md:flex-row gap-8 grey6">
        <div className="point1 flex flex-col items-center gap-6 text-center py-4">
          <img src={Online} alt="Online Banking" className="mb-2" />
          <div className="tag text-3xl text-[#2d314d]">Online Banking</div>
          <p className="md:text-sm">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="point1 flex flex-col items-center gap-6 text-center py-4">
          <img src={Simple} alt="Online Banking" className="mb-2" />
          <div className="tag text-3xl text-[#2d314d]">Simple Budgeting</div>
          <p className="md:text-sm">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="point1 flex flex-col items-center gap-6 text-center py-4">
          <img src={Onboarding} alt="Online Banking" className="mb-2" />
          <div className="tag text-3xl text-[#2d314d]">Fast Onboarding</div>
          <p className="md:text-sm">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="point1 flex flex-col items-center gap-6 text-center py-4">
          <img src={Api} alt="Online Banking" className="mb-2" />
          <div className="tag text-3xl text-[#2d314d]">Open Api</div>
          <p className="md:text-sm">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
