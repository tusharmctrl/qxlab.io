import React from "react";
import Qxlogo from "@/../public/images/qx-labs.svg";
import Okr from "@/../public/images/okr-mapping.png";
import Foshtech from "@/../public/images/fosh-tech.png";
import Dazn from "@/../public/images/dazn.png";
import Betfair from "@/../public/images/betfair.png";
import Igt from "@/../public/images/igt.png";
import Playtech from "@/../public/images/playtech.png";
import Markor from "@/../public/images/markor.png";

export default function page() {
  return (
    <>
      {/* Our Services */}
      <div className="mt-24 p-5 py-12 pb-8 md:pb-14 lg:pb-20">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-28 xl:gap-36">
            <div className="relative">
              <div className="space-y-8">
                <span className="inline-flex rounded-3xl bg-white px-4 py-1.5 text-xs capitalize">back</span>
                <h2 className="text-gradient-blue text-3xl font-semibold md:text-5xl xl:text-6xl">OKR MAPPING</h2>
                <div className="relative space-y-2">
                  <h6 className="text-base font-semibold text-white md:text-2xl">The Ask</h6>
                  <p className="text-sm font-semibold italic text-cultured">Create a company-wide and functionally specific OKR programme</p>
                </div>
                <div className="relative space-y-2">
                  <h6 className="text-base font-semibold text-white md:text-2xl">Activities</h6>
                  <p className="text-sm font-semibold text-cultured">Workshops to:</p>
                  <p className="text-sm font-semibold text-cultured">– Review research and insight on brand + market</p>
                  <p className="text-sm font-semibold text-cultured">
                    - Co-create company and function OKRs – review, vote, align – align to measurement framework
                  </p>
                  <p className="text-sm font-semibold text-cultured">– Set up of quarterly progress reviews</p>
                </div>
                <div className="relative space-y-2">
                  <h6 className="text-base font-semibold text-white md:text-2xl">Outputs</h6>
                  <p className="text-sm font-semibold text-cultured">– Populated OKR matrix</p>
                  <p className="text-sm font-semibold text-cultured">– Ownerships and accountability of metrics</p>
                  <p className="text-sm font-semibold text-cultured">– Template to track and report on targets</p>
                  <p className="text-sm font-semibold text-cultured">– Company wide forum to review each Q</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="animation-svgs pointer-events-none absolute -top-10 right-20 isolate z-0 h-300px w-300px opacity-35 blur-75px md:h-400px md:w-400px">
                <svg
                  className="h-full w-full"
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <circle cx="32.5" cy="32.5" r="32.5" fill="url(#paint_1f3bd0c7)"></circle>
                  <defs>
                    <linearGradient id="paint_1f3bd0c7" x1="0" y1="0" x2="65" y2="65" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#6E51E7">
                        <animate attributeName="stop-color" values="#6E51E7;#E7C0E4;#5372FF;" dur="18s" repeatCount="indefinite"></animate>
                      </stop>
                      <stop offset="1" stop-color="#B270EB">
                        <animate attributeName="stop-color" values="#B270EB;" dur="14s" repeatCount="indefinite"></animate>
                      </stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative z-10 overflow-hidden rounded-xl">
                <img src={Okr.src} className="w-full" alt="Okr" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* logo-animation */}
      <div className="py-6 md:p-8 lg:p-12">
        <div className="marquee-wrapper be container relative overflow-hidden before:-left-12 before:top-0 before:h-12 before:w-0 after:-right-12 after:top-0 after:h-12 after:w-0 md:before:-top-4 md:before:left-0 md:before:h-16 md:before:w-7 md:after:-top-4 md:after:right-0 md:after:h-16 md:after:w-7">
          <div className="qx-marquee">
            <ul className="flex items-center">
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Foshtech.src} alt="foshtech" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-12" src={Dazn.src} alt="dazn" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Betfair.src} alt="Betfair" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Igt.src} alt="Igt" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Playtech.src} alt="Playtech" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Markor.src} alt="Markor" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Foshtech.src} alt="foshtech" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-12" src={Dazn.src} alt="dazn" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Betfair.src} alt="Betfair" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Igt.src} alt="Igt" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Playtech.src} alt="Playtech" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Markor.src} alt="Markor" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Foshtech.src} alt="foshtech" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-12" src={Dazn.src} alt="dazn" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Betfair.src} alt="Betfair" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Igt.src} alt="Igt" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Playtech.src} alt="Playtech" />
              </li>
              <li className="mx-5 inline-block min-w-14 cursor-pointer whitespace-nowrap md:mx-10 md:min-w-20 lg:mx-12 lg:min-w-28">
                <img className="w-20" src={Markor.src} alt="Markor" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
