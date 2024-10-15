import React from "react";
import Qxlogo from "@/app/images/qx-labs.svg";

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
    <div className="p-5 mt-24 pt-8">
      <div className="container">
        <div className="flex items-center -mx-2 gap-3">
          <div className="w-1/2 px-2">
            <div className="space-y-5">
              <span className="inline-flex rounded-3xl bg-white text-xs px-4 capitalize py-1.5">back</span>
              <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold  text-gradient-blue ">OKR MAPPING</h2>
              <div className="relative space-y-2">
              <h6 className="text-base md:text-2xl font-semibold text-white ">The Ask</h6>
              <p className="text-cultured italic font-medium text-sm">Create a company-wide and functionally specific OKR programme</p>
              </div>
            </div>
            </div>
        </div>
        
      </div>
    </div>
    {/* Our Services list */}
    <div className=" pt-7 md:pt-10 pb-16 md:pb-28 xl:pb-36 ">
      <div className="border-y-0.5px px-5 py-10 xl:pt-10 xl:pb-16 border-slate-800/45">
          <div className="max-w-2xl mx-auto space-y-5 md:space-y-7">
            <div className="space-y-6">
              <span className="badges-gradient inline-block text-sm px-4 py-1 text-white rounded-md">
                  Our Mission
              </span>
              <h2 className="text-base md:text-xl font-medium text-cultured">Introducing QXLab.</h2>
            </div>
            <p className="text-base md:text-xl font-medium text-cultured">Customer Experience (CX) is a multifaceted concept, one that means a lot of different things to a lot of different people.</p>
            <p className="text-base md:text-xl font-medium text-cultured">At it’s core, CX is an enablement expertise.</p>
            <p className="text-base md:text-xl font-medium text-cultured">The fundamental mission of any CX team is to empower a business to make more informed and impactful decisions, all while keeping the customer as the focal point of that decision making process.</p>
            <p className="text-base md:text-xl font-medium text-cultured">Traditionally, CX has been approached from two angles:</p>
            <p className="text-base md:text-xl font-medium text-waterspout">1. Assessing an organisations ability to deliver quality experiences (inputs)</p>
            <p className="text-base md:text-xl font-medium text-waterspout">2. Improving the quality of those experiences (outputs).</p>
            <p className="text-base md:text-xl font-medium text-cultured">Both of which have been measured via outdated, manual and costly methodologies.</p>
            <p className="text-base md:text-xl font-medium text-cultured">QXLab has been created to revolutionize this paradigm.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-5 md:space-y-7 mt-8 md:mt-24 xl:mt-32">
            <div className="space-y-6">
              <span className="badges-gradient inline-block text-sm px-4 py-1 text-white rounded-md">
              Our Background
              </span>
              <h2 className="text-base md:text-xl font-medium text-cultured">We have unique, comprehensive and leading backgrounds in Digital Customer Experience.</h2>
            </div>
            <p className="text-base md:text-xl font-medium text-cultured">We have worked within some of the world's biggest companies, with experience in-house, at agencies and in start-ups.</p>
            <p className="text-base md:text-xl font-medium text-cultured">We have developed tried and tested approaches to Digital CX that are proven to work, across multiple industries. We are commercial operators responsible for £10s-of-millions in increased revenues.</p>
            <p className="text-base md:text-xl font-medium text-cultured">We have led large, international teams in the definition, design, development and improvement of multiple sites and apps.</p>
            <p className="text-base md:text-xl font-medium text-cultured">Our expertise is focused on defining appropriate, pragmatic and measurably effective CX programmes for leading digital companies.</p>
           
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
