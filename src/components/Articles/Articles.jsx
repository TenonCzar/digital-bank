import React from 'react'
import Money from "../../assets/image-currency.jpg"
import Food from "../../assets/image-restaurant.jpg"
import Plane from "../../assets/image-plane.jpg"
import Confetti from "../../assets/image-confetti.jpg"

const Articles = () => {
  return (
    <div className="flex flex-col items-center py-16 md:items-start md:px-24">
      <div className="title text-3xl mb-16">Latest Articles</div>

      <div className="cards flex flex-col items-center gap-6 md:flex-row ">
        <div className="card rounded w-[90%]">
          <img
            src={Money}
            alt="Receive money in any currency with no fees"
            className="rounded-t md:h-[200px] w-full"
          />
          <div className="text bg-white p-4 flex flex-col gap-2 text-sm">
            <div className="author grey6">By Claire Robinson</div>
            <div className="headline text-xl font-semibold">
              Receive money in any currency with no fees
            </div>
            <div className="text grey6">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </div>
          </div>
        </div>
        <div className="card rounded w-[90%]">
          <img
            src={Food}
            alt="Treat yourself without worrying about money"
            className="rounded-t md:h-[200px] w-full"
          />
          <div className="text bg-white p-4 flex flex-col gap-2 text-sm">
            <div className="author grey6">By Wilson Hutton</div>
            <div className="headline text-xl font-semibold">
              Treat yourself without worrying about money
            </div>
            <div className="text grey6">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </div>
          </div>
        </div>
        <div className="card rounded w-[90%]">
          <img
            src={Plane}
            alt="Take your Digitalbank card wherever you go"
            className="rounded-t md:h-[200px] w-full"
          />
          <div className="text bg-white p-4 flex flex-col gap-2 text-sm">
            <div className="author grey6">By Wilson Hutton</div>
            <div className="headline text-xl font-semibold">
              Take your Digitalbank card wherever you go
            </div>
            <div className="text grey6">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </div>
          </div>
        </div>
        <div className="card rounded w-[90%]">
          <img
            src={Confetti}
            alt="Our invite-only Beta accounts are now live!"
            className="rounded-t md:h-[200px] w-full"
          />
          <div className="text bg-white p-4 flex flex-col gap-2 text-sm">
            <div className="author grey6">By Claire Robinson</div>
            <div className="headline text-xl font-semibold">
              Our invite-only Beta accounts are now live!
            </div>
            <div className="text grey6">
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles
