import React from "react";
import Qxlogo from "@/../public/images/qx-labs.svg";
import Rocket from "@/../public/images/rocket.svg";
import LinkedInCover from "@/../public/images/linkedIn-cover-2-1.png";
import SpeechHuman from "@/../public/images/speech-on-human.png";
import Foshtech from "@/../public/images/fosh-tech.png";
import Dazn from "@/../public/images/dazn.png";
import Betfair from "@/../public/images/betfair.png";
import Igt from "@/../public/images/igt.png";
import Playtech from "@/../public/images/playtech.png";
import Markor from "@/../public/images/markor.png";
import Facebook from "@/../public/images/Facebook.svg";
import Linkedin from "@/../public/images/Linkedin.svg";
export default function page() {
  return (
    <>
      <section className="bg-before relative flex min-h-[calc(100vh-140px)] flex-shrink-0 flex-grow-0 flex-col items-center justify-center p-5 md:min-h-[calc(100vh-200px)] lg:bg-hero-pattern lg:bg-cover lg:bg-center-right lg:bg-no-repeat xl:min-h-screen">
        <div className="container z-10">
          <div className="flex">
            <div className="max-w-2xl space-y-5 md:space-y-8">
              <h1 className="text-5xl font-semibold leading-1.4em text-white md:text-6xl md:leading-1.08em lg:text-8xl">
                Generate your QXi Score <span className="text-waterspout">Today</span>
              </h1>
              <div className="max-w-md">
                <p className="text-lg font-normal text-cultured md:text-xl">
                  <span className="mr-2 inline-block">
                    <img src={Rocket.src} className="h-5 w-5" alt="rocket" />
                  </span>
                  Welcome to QX Lab: Revolutionizing the Customer Experience industry with AI-Powered Innovation!
                </p>
              </div>
              <button className="scale-100 rounded-lg bg-pastel-green px-4 py-3 text-sm font-semibold text-cultured transition-all duration-300 hover:scale-110 md:px-5 md:py-3.5 md:text-base">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative -mt-14 p-5">
        <div className="container">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="space-y-1 rounded-2xl bg-slate-gray/60 p-6 md:p-9">
              <span className="text-base font-semibold text-waterspout">QXi</span>
              <h5 className="text-2xl font-semibold text-white">
                Automated
                <br /> Benchmarking
              </h5>
              <p className="text-base leading-8 text-cultured">
                Measure and improve the quality of your digital experiences with instant insight, analysis and recommendations.
              </p>
              <a href="#" className="text-base font-normal text-maximum-blue-green">
                LearnMore
              </a>
            </div>
            <div className="space-y-1 rounded-2xl bg-slate-gray/60 p-6 md:p-9">
              <span className="text-base font-semibold text-waterspout">QXi</span>
              <h5 className="text-2xl font-semibold text-white">
                Customer Experience <br /> Consultancy
              </h5>
              <p className="text-base leading-8 text-cultured">
                Advance your Customer Experience programme through Fractional Leadership or Project Based initiatives.
              </p>
              <a href="#" className="text-base font-normal text-maximum-blue-green">
                LearnMore
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 px-5 pt-0 md:pt-10 xl:px-66px">
        <div className="relative space-y-5 md:space-y-7">
          <div className="mx-auto max-w-5xl space-y-5 text-center md:space-y-7">
            <h2 className="text-2xl font-semibold leading-1.8em text-white md:text-3xl md:leading-2em">
              We use proprietary AI that employs over 1000+ industry specific data points to evaluate your site.
            </h2>
            <p className="text-sm font-normal leading-6 text-white md:text-base md:leading-8">
              QXLab melds cutting-edge technology with extensive industry insights to re-define digital user experiences, establishing new standards in website
              performance and UX excellence.
            </p>
          </div>
          <div className="relative">
            <img src={LinkedInCover.src} alt="linkedIn-cover" />
          </div>
        </div>
      </section>
      <section className="relative p-5 py-5 md:py-10">
        <div className="bg-svg-blur bg-svg-blur-fs absolute -left-16 top-16 z-1 hidden h-432px w-590px xl:block">
          <svg className="h-full w-full" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <circle cx="32.5" cy="32.5" r="32.5" fill="url(#paint_229ce2ae)"></circle>
            <defs>
              <linearGradient id="paint_229ce2ae" x1="0" y1="0" x2="65" y2="65" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#26FFF2">
                  <animate attributeName="stop-color" values="#26FFF2;" dur="4.25s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="1" stop-color="#6ed5fb">
                  <animate attributeName="stop-color" values="#6ed5fb;" dur="4.25s" repeatCount="indefinite"></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="bg-svg-blur absolute left-44 top-16 z-1 hidden h-432px w-590px xl:block">
          <svg className="h-full w-full" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <circle cx="32.5" cy="32.5" r="32.5" fill="url(#paint_238fdec1)"></circle>
            <defs>
              <linearGradient id="paint_238fdec1" x1="0" y1="0" x2="65" y2="65" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#FF26BA">
                  <animate attributeName="stop-color" values="#FF26BA;" dur="4.25s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="1" stop-color="#6ed5fb">
                  <animate attributeName="stop-color" values="#6ed5fb;" dur="4.25s" repeatCount="indefinite"></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full xl:w-1/2">
              <div className="relative">
                <img src={SpeechHuman.src} className="mx-auto w-480px xl:mx-unset" alt="SpeechHuman" />
              </div>
            </div>
            <div className="w-full p-2.5 xl:w-1/2">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-1.2em text-white md:text-66px">
                  QXc
                  <br /> Case Studies
                </h2>
                <p className="text-base leading-1.8em text-white">
                  See how QX Lab's consultancy services have transformed businesses. Our QXc Case Studies highlight the impact of our insights and expert
                  guidance on customer experience and digital performance.
                </p>
                <div className="!mt-5 md:!mt-11">
                  <button className="flex scale-100 items-center gap-4 text-base font-semibold text-waterspout transition-all duration-500 hover:scale-110 md:text-lg">
                    Case Studies{" "}
                    <span>
                      <svg className="w-1.5 stroke-waterspout" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L8 8L1 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="marquee-wrapper mt-2.5 overflow-hidden p-5 lg:p-12">
        <div className="qx-marquee">
          <ul className="flex items-center">
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="md:w-20" src={Foshtech.src} alt="foshtech" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-12" src={Dazn.src} alt="dazn" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Betfair.src} alt="Betfair" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Igt.src} alt="Igt" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Playtech.src} alt="Playtech" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Markor.src} alt="Markor" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Foshtech.src} alt="foshtech" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-12" src={Dazn.src} alt="dazn" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Betfair.src} alt="Betfair" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Igt.src} alt="Igt" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Playtech.src} alt="Playtech" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Markor.src} alt="Markor" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Foshtech.src} alt="foshtech" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-12" src={Dazn.src} alt="dazn" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Betfair.src} alt="Betfair" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Igt.src} alt="Igt" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Playtech.src} alt="Playtech" />
            </li>
            <li className="mx-10 inline-block min-w-14 cursor-pointer whitespace-nowrap md:min-w-20 lg:mx-16 lg:min-w-28">
              <img className="w-20" src={Markor.src} alt="Markor" />
            </li>
          </ul>
        </div>
      </div>

      <section className="px-5 py-5 pb-5 lg:pt-14">
        <div className="container">
          <div className="flex flex-wrap items-start gap-y-4 lg:gap-y-6">
            <div className="w-full p-2.5 lg:w-1/2">
              <div className="max-w-488px space-y-4 lg:space-y-7">
                <h2 className="text-3xl font-medium text-white md:text-40px">Contact</h2>
                <div className="flex flex-col">
                  <a href="#" className="text-xl font-normal text-cultured">
                    QxLab Ltd.
                  </a>
                  <a href="#" className="text-sm font-normal text-eucalyptus">
                    Company no:15727970
                  </a>
                </div>
                <ul className="flex flex-wrap items-center gap-4">
                  <li>
                    <a href="#">
                      <img src={Linkedin.src} className="w-12" alt="linkdin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Facebook.src} className="w-12" alt="facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-2.5 lg:w-1/2">
              <div className="relative">
                <form className="">
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-cultured">Name</label>
                    <input
                      type="password"
                      className="block w-full rounded-md !bg-white/5 p-13px text-sm font-medium text-white/50 focus:outline-0 focus:ring-0"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label id="email" className="mb-2 block text-sm font-medium text-cultured">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-md !bg-white/5 p-3.5 text-sm font-medium text-white/50 focus:outline-0 focus:ring-0"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-cultured">Subject</label>
                    <select className="block w-full rounded-md !bg-white/5 p-3.5 text-sm font-medium text-white/50 focus:outline-0 focus:ring-0">
                      <option className="text-sm font-medium text-black" selected>
                        Choose a country
                      </option>
                      <option className="text-sm font-medium text-black" value="US">
                        United States
                      </option>
                      <option className="text-sm font-medium text-black" value="CA">
                        Canada
                      </option>
                      <option className="text-sm font-medium text-black" value="FR">
                        France
                      </option>
                      <option className="text-sm font-medium text-black" value="DE">
                        Germany
                      </option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-cultured">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full rounded-md !bg-white/5 p-3 text-sm font-medium text-white/50 focus:outline-0 focus:ring-0"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full rounded-lg bg-pastel-green px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-0">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
