import React from "react";
import Qxlogo from "@/app/images/qx-labs.svg";
import CaseOne from "@/app/images/case-01.png";
import Designsystem from "@/app/images/design-system.png";
import Designcreation from "@/app/images/design-creation.png";
import Cxreportion from "@/app/images/cx-reportion.png";
import Heuristic from "@/app/images/heuristic-analysis.png";
import Experiment from "@/app/images/experiment.png";
import Measurement from "@/app/images/measurement.png";
import Operation from "@/app/images/cs-operation.png";
import Strategy from "@/app/images/product-strategy.png";

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
    <div className="p-5 mt-24 py-10 md:py-14">
      <div className="container">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-semibold text-white text-center">Case Studies</h2>
          <div className="relative">
              <ul className="flex items-center gap-1 flex-wrap justify-center">
                <li><a href="#" className="text-sm font-medium text-white transition-all p-2 duration-300 hover:text-cultured">All</a></li>
                <li><a href="#" className="text-sm font-medium text-white transition-all p-2 duration-300 hover:text-cultured">Design & Implementation</a></li>
                <li><a href="#" className="text-sm font-medium text-white transition-all p-2 duration-300 hover:text-cultured">Insight & Understanding</a></li>
                <li><a href="#" className="text-sm font-medium text-white transition-all p-2 duration-300 hover:text-cultured">Measurement & Analytics</a></li>
                <li><a href="#" className="text-sm font-medium text-white transition-all p-2 duration-300 hover:text-cultured">Process & Accountability</a></li>
                <li><a href="#" className="text-sm font-medium text-white transition-all p-2 duration-300 hover:text-cultured">Vision & Strategy</a></li>
              </ul>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            <div className="rounded-lg  overflow-hidden">
              <a href="#" className="group relative"><img src={CaseOne.src} alt="CaseOne"/><div className="overlay-slk group-hover:opacity-100 opacity-0 absolute top-0 left-0 p-4 bottom-0 right-0 bg-white/10"></div></a>
            </div>
            {/* 02 */}
            <div className="rounded-lg  overflow-hidden">
              <a href="#" className="group relative"><img src={Designsystem.src} alt="CaseOne"/><div className="overlay-slk group-hover:opacity-100 opacity-0 absolute top-0 left-0 p-4 bottom-0 right-0 bg-white/10"></div></a>
            </div>
            {/* 03 */}
            <div className="rounded-lg  overflow-hidden">
              <a href="#" className="group relative"><img src={Designcreation.src} alt="CaseOne"/><div className="overlay-slk group-hover:opacity-100 opacity-0 absolute top-0 left-0 p-4 bottom-0 right-0 bg-white/10"></div></a>
            </div>
            {/* 04 */}
            <div className="rounded-lg  overflow-hidden">
              <a href="#" className="group relative"><img src={Cxreportion.src} alt="CaseOne"/><div className="overlay-slk group-hover:opacity-100 opacity-0 absolute top-0 left-0 p-4 bottom-0 right-0 bg-white/10"></div></a>
            </div>
           
            {/* 06 */}
            <div className="rounded-lg  overflow-hidden">
              <a href="#" className="group relative"><img src={Heuristic.src} alt="CaseOne"/><div className="overlay-slk group-hover:opacity-100 opacity-0 absolute top-0 left-0 p-4 bottom-0 right-0 bg-white/10"></div></a>
            </div>
            {/* 07 */}
            <div className="rounded-lg  overflow-hidden">
              <a href="#" className="group relative"><img src={Experiment.src} alt="CaseOne"/><div className="overlay-slk group-hover:opacity-100 opacity-0 absolute top-0 left-0 p-4 bottom-0 right-0 bg-white/10"></div></a>
            </div>
            {/* 08 */}
            <div className="rounded-lg  overflow-hidden">
              <a href="#" className="group relative"><img src={Measurement.src} alt="CaseOne"/><div className="overlay-slk group-hover:opacity-100 opacity-0 absolute top-0 left-0 p-4 bottom-0 right-0 bg-white/10"></div></a>
            </div>
            {/* 09 */}
            <div className="rounded-lg  overflow-hidden">
              <a href="#" className="group relative"><img src={Operation.src} alt="CaseOne"/><div className="overlay-slk group-hover:opacity-100 opacity-0 absolute top-0 left-0 p-4 bottom-0 right-0 bg-white/10"></div></a>
            </div>
            {/* 10 */}
            <div className="rounded-lg  overflow-hidden">
              <a href="#" className="group relative"><img src={Strategy.src} alt="CaseOne"/><div className="overlay-slk group-hover:opacity-100 opacity-0 absolute top-0 left-0 p-4 bottom-0 right-0 bg-white/10"></div></a>
            </div>
          </div>
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
