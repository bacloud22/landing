"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthlySplit, setIsMonthlySplit] = useState(true);
  const basic = 150;
  const pro = 500;
  const ultimate = 2000;
  const split = (n: number) => Math.ceil(n / 10);

  return (
    <section id="pricing" className="bg-white relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Three simple plans"
          paragraph="Our lite version is also commercialized through Codecanyon marketplace. Pro and Ultimate versions have multiple languages, sections and maps included."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthlySplit(true)}
              className={`${
                isMonthlySplit
                  ? "pointer-events-none text-primary"
                  : "dark:text-white text-dark"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly plit payment
            </span>
            <div
              onClick={() => setIsMonthlySplit(!isMonthlySplit)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthlySplit ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthlySplit(false)}
              className={`${
                isMonthlySplit
                  ? "dark:text-white text-dark"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              One time payment
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthlySplit ? basic : basic}
            duration={isMonthlySplit ? "/one time" : ""}
            subtitle="Get our lite version instantly on Codecanyon."
          >
            <OfferList
              text="A fully functional listings website"
              status="active"
            />
            <OfferList
              text="Admin dashboard for approving listings"
              status="active"
            />
            <OfferList
              text="Multiple sections are supported (marketplace, meetings etc)"
              status="active"
            />
            <OfferList text="Ticket support" status="active" />
            <OfferList text="Email support" status="inactive" />
            <OfferList text="1:1 live support" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Pro"
            price={isMonthlySplit ? split(pro) + 5 : pro}
            duration={isMonthlySplit ? "/mo (*10)" : ""}
            subtitle="Pro version has maps fully integrated. It can be bought from Codecanyon. (comming soon)."
          >
            <OfferList
              text="Delimitations and listings maps on homepage"
              status="active"
            />
            <OfferList
              text="Admin dashboard for approving listings"
              status="active"
            />
            <OfferList text="Admin dashboard for monitoring" status="active" />
            <OfferList text="Ticket support" status="active" />
            <OfferList text="Email support" status="inactive" />
            <OfferList text="1:1 live support" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Ultimate"
            price={isMonthlySplit ? split(ultimate) + 20 : ultimate}
            duration={isMonthlySplit ? "/mo (*10)" : ""}
            subtitle="Ultimate version can be customized to integrate additionnal languages and listing sections. (comming soon)."
          >
            <OfferList text="Customization is discussed" status="active" />
            <OfferList text="Plain source code" status="active" />
            <OfferList text="Ticket support" status="active" />
            <OfferList text="Email support" status="active" />
            <OfferList text="1:1 live support" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
