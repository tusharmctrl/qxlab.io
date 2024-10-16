import React from "react";
import Qxlogo from "@/app/images/qx-labs.svg";
import Okr from "@/app/images/okr-mapping.png";
import Foshtech from "@/app/images/fosh-tech.png";
import Dazn from "@/app/images/dazn.png";
import Betfair from "@/app/images/betfair.png";
import Igt from "@/app/images/igt.png";
import Playtech from "@/app/images/playtech.png";
import Markor from "@/app/images/markor.png";

export default function page() {
  return (
    <>
       <header className="px-5 xl:px-2.5 py-4 fixed w-full top-0 z-999 gradieant-header">
        <div className="container">
          <div className="w-full">
            <div className="flex items-center justify-between xl:justify-start">
              <a href="#" className="mr-11">
                <img src={Qxlogo.src} className="w-11 md:w-70px my-1" alt="qx-logo"/>
              </a>
              <button className="xl:hidden text-base text-white flex items-center gap-3">
                <span className="flex flex-col gap-y-1.5 relative"><span className="w-5 h-0.5 bg-white"></span><span className="w-5 h-0.5 bg-white"></span></span>Menu</button>
              <ul className="hidden xl:flex items-center gap-x-11">
                <li><a href="#" className="text-sm text-white font-semibold">Home</a></li>
                <li><a href="#" className="text-sm text-white font-semibold">Products</a></li>
                <li><a href="#" className="text-sm text-white font-semibold">QXc Services</a></li>
                <li className="relative group cursor-pointer">
                  <a href="#" className="text-sm text-white font-semibold  flex items-center gap-2">Solutions <span><svg className="w-3 h-2 fill-white" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
                  </svg>
                  </span>
                  </a>
                  <ul className="opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col gap-y-9 w-64 min-w-64 rounded-lg absolute top-8 left-0 bg-dark-slate-gray p-6">
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">For Brands</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">For Enterprise</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">Industries</a>
                    </li>
                  </ul>
                  </li>
                  <li className="relative group cursor-pointer"><a href="#" className="text-sm text-white font-semibold  flex items-center gap-2">Resources <span><svg className="w-3 h-2 fill-white" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
                  </svg>
                  </span>
                  </a>
                  <ul className="opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col gap-y-9 w-64 min-w-64 rounded-lg absolute top-8 left-0 bg-dark-slate-gray p-6">
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">Case Studies</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">About Us</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">Blog</a>
                    </li>
                  </ul>
                  </li>               
              </ul>
            </div>
          </div>
        </div>
    </header>
    
    {/* Our Services */}
    <div className="p-5 mt-24 py-12 pb-8 md:pb-14 lg:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-28 xl:gap-36">
          <div className="relative">
            <div className="space-y-8">
              <span className="inline-flex rounded-3xl bg-white text-xs px-4 capitalize py-1.5">back</span>
              <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold  text-gradient-blue ">OKR MAPPING</h2>
              <div className="relative space-y-2">
                <h6 className="text-base md:text-2xl font-semibold text-white ">The Ask</h6>
                <p className="text-cultured italic font-semibold text-sm">Create a company-wide and functionally specific OKR programme</p>
              </div>
              <div className="relative space-y-2">
                <h6 className="text-base md:text-2xl font-semibold text-white ">Activities</h6>
                <p className="text-cultured font-semibold text-sm">Workshops to:</p>
                <p className="text-cultured font-semibold text-sm">– Review research and insight on brand + market</p>
                <p className="text-cultured font-semibold text-sm">- Co-create company and function OKRs – review, vote, align – align to measurement framework</p>
                <p className="text-cultured font-semibold text-sm">– Set up of quarterly progress reviews</p>
              </div>
              <div className="relative space-y-2">
                <h6 className="text-base md:text-2xl font-semibold text-white ">Outputs</h6>
                <p className="text-cultured font-semibold text-sm">– Populated OKR matrix</p>
                <p className="text-cultured font-semibold text-sm">– Ownerships and accountability of metrics</p>
                <p className="text-cultured font-semibold text-sm">– Template to track and report on targets</p>
                <p className="text-cultured font-semibold text-sm">– Company wide forum to review each Q</p>
              </div>
            </div>
            </div>
            <div className="relative">
              <div className="blur-75px w-300px h-300px z-0 md:w-400px md:h-400px absolute right-20 -top-10 isolate pointer-events-none opacity-35 animation-svgs">
              <svg className="w-full h-full" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
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
            <div className="rounded-xl z-10 relative overflow-hidden ">
                  <img src={Okr.src} className="w-full" alt="Okr"/>
                </div>
            </div>
        </div>
        
      </div>
    </div>
   {/* logo-animation */}
   <div className="py-6 md:p-8 lg:p-12   ">
    <div className="container overflow-hidden marquee-wrapper  before:w-0 after:w-0 before:-left-12 after:-right-12 md:after:right-0 md:before:left-0 be md:before:w-7 md:after:w-7 md:before:-top-4 before:top-0 after:top-0 md:after:-top-4 before:h-12 after:h-12 md:after:h-16 md:before:h-16 relative">
      <div className="qx-marquee " >
        <ul className="flex items-center">
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Foshtech.src} alt="foshtech"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-12" src={Dazn.src} alt="dazn"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Betfair.src} alt="Betfair"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Igt.src} alt="Igt"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Playtech.src} alt="Playtech"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Markor.src} alt="Markor"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Foshtech.src} alt="foshtech"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-12" src={Dazn.src} alt="dazn"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Betfair.src} alt="Betfair"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Igt.src} alt="Igt"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Playtech.src} alt="Playtech"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Markor.src} alt="Markor"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Foshtech.src} alt="foshtech"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-12" src={Dazn.src} alt="dazn"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Betfair.src} alt="Betfair"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Igt.src} alt="Igt"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Playtech.src} alt="Playtech"/></li>
          <li className="mx-5 md:mx-10 lg:mx-12 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Markor.src} alt="Markor"/></li>
        </ul>
      </div>
      </div>
    </div>
    
    <footer className="bg-charleston-green/50 py-12 lg:py-20 px-5">
      <div className="container ">
        <div className="flex flex-col justify-center items-center space-y-5 lg:space-y-8">
          <a href="#">
            <img src={Qxlogo.src} alt="qxlogo"/>
          </a>
          <ul className="flex items-center gap-4 md:gap-10">
            <li><a href="#" className="text-sm md:text-base text-white/45 font-medium">About Us</a></li>
            <li><a href="#" className="text-sm md:text-base text-white/45 font-medium">Privacy&Cookie Statement</a></li>
            <li><a href="#" className="text-sm md:text-base text-white/45 font-medium">Investors</a></li>
          </ul>
          <p className="text-sm text-white/45 font-light">© 2024 QX Lab Ltd | Company Number  <span className="font-semibold">15727970</span></p>
        </div>
        
      </div>
      
    </footer>
    </>
  );
}
