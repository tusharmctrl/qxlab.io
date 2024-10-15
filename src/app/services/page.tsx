import React from "react";
import Qxlogo from "@/app/images/qx-labs.svg";
import SpeechHuman from "@/app/images/speech-on-human.png";
import Foshtech from "@/app/images/fosh-tech.png";
import Dazn from "@/app/images/dazn.png";
import Betfair from "@/app/images/betfair.png";
import Igt from "@/app/images/igt.png";
import Playtech from "@/app/images/playtech.png";
import Markor from "@/app/images/markor.png";
import Vision from "@/app/images/vision.svg";
import Insight from "@/app/images/insight.svg";
import Measurement from "@/app/images/measurement.svg";
import Check from "@/app/images/check.svg";
import Process from "@/app/images/process.svg";
import Tooling from "@/app/images/tooling.svg";
import Projectmind from "@/app/images/project-mind.png";
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
    {/* services */}
    <div className="p-5 mt-24">
      <div className="container">
        <div className="max-w-3xl mx-auto md:p-6 ">
            <h1 className="main-title relative z-10 font-medium text-4xl min-[1620px]:text-6xl leading-1.2em text-center">Qxc</h1>
            <h4 className="main-title relative z-10 font-medium text-4xl min-[1620px]:text-6xl leading-1.2em text-center">Your CX Agency</h4>
            <div className="!mt-6 max-w-432px mx-auto text-center">
              <p className="text-sm text-cultured leading-2em font-medium">Advance your Customer Experience programme through our fractional or project based consultancy services.</p>
             
            </div>
            <div className="!mt-8 text-center">
              <button className="transition-all duration-300 hover:scale-110 scale-100 bg-pastel-green hover:bg-violets-blue text-sm md:text-lg text-cultured px-4 py-3 md:py-5 md:px-8  rounded-xl font-semibold">Our Services</button>
            </div>
        </div>
      </div>
    </div>
    {/* logo-animation */}
    <div className="p-5 lg:p-12 marquee-wrapper relative overflow-hidden">
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
    {/* Our Services */}
    <div className="p-5 pt-10 md:pt-14 bg-msu-green">
      <div className="container">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-cultured text-center">Our Services</h2>
          <p className="text-sm md:text-base font-normal text-white text-center">Our team of experts are available to lead and upskill your teams across the multiple areas of Customer Experience.</p>
        </div>
      </div>
    </div>
    {/* Our Services list */}
    <div className="p-5 py-5 md:py-12 xl:py-16">
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 xl:px-20">
          <div className="rounded-3xl text-center bg-slate-gray/60 p-6 md:p-9 space-y-3 transition-all duration-500 hover:-translate-y-4">
            <img src={Vision.src} alt="Vision" className="mx-auto mb-5"/>
            <h5 className="text-white text-xl font-semibold">Vision & Strategy</h5>
            <p className="text-sm text-white leading-7 font-medium">Define systems, plans and principles that focus a business on delivering valuable digital experiences.</p>
            <h5 className="text-sm text-white py-1 font-semibold">Project Examples:</h5>
            <ul className="list-disc text-white flex flex-col justify-center items-center !mt-3 space-y-1">
              <li><p className="text-sm text-white">CX Maturity Assessments</p></li>
              <li><p className="text-sm text-white">Digital Strategy Definition</p></li>
              <li><p className="text-sm text-white">Brand Creation & Alignment</p></li>
              <li><p className="text-sm text-white">OKR Mapping</p></li>
            </ul>
          </div>
          <div className="rounded-3xl text-center bg-slate-gray/60 p-6 md:p-9 space-y-3 transition-all duration-500 hover:-translate-y-4">
            <img src={Insight.src} alt="Insight" className="mx-auto mb-5"/>
            <h5 className="text-white text-xl font-semibold">Insight & Understanding</h5>
            <p className="text-sm text-white leading-7 font-medium">Build a deep knowledge of existing and desired customer needs, preferences and behaviours​.</p>
            <h5 className="text-sm text-white py-1 font-semibold">Project Examples:</h5>
            <ul className="list-disc text-white flex flex-col justify-center items-center !mt-3 space-y-1">
              <li><p className="text-sm text-white">Voice of Customer program definition</p></li>
              <li><p className="text-sm text-white">Customer Research & NPS program definition​</p></li>
              <li><p className="text-sm text-white">Customer Journey Measurement</p></li>
            </ul>
          </div>
          <div className="rounded-3xl text-center bg-slate-gray/60 p-6 md:p-9 space-y-3 transition-all duration-500 hover:-translate-y-4">
            <img src={Measurement.src} alt="Measurement" className="mx-auto mb-5"/>
            <h5 className="text-white text-xl font-semibold">Measurement & Analytics</h5>
            <p className="text-sm text-white leading-7 font-medium">Evaluate experiences, quantify the impact of initiatives and tie these to a measurable business strategy.</p>
            <h5 className="text-sm text-white py-1 font-semibold">Project Examples:</h5>
            <ul className="list-disc text-white flex flex-col justify-center items-center !mt-3 space-y-1">
              <li><p className="text-sm text-white">North Star Metric Definition</p></li>
              <li><p className="text-sm text-white">KPI Tree/ Measurement Framework Creation</p></li>
              <li><p className="text-sm text-white">Data Layer Creation</p></li>
              <li><p className="text-sm text-white">Experimentation Programme Definition</p></li>
            </ul>
          </div>
          <div className="rounded-3xl text-center bg-slate-gray/60 p-6 md:p-9 space-y-3 transition-all duration-500 hover:-translate-y-4">
            <img src={Check.src} alt="Check" className="mx-auto mb-5"/>
            <h5 className="text-white text-xl font-semibold">Design & Implementation</h5>
            <p className="text-sm text-white leading-7 font-medium">Create and launch valuable experiences based on insight/data led understanding.​</p>
            <h5 className="text-sm text-white py-1 font-semibold">Project Examples:</h5>
            <ul className="list-disc text-white flex flex-col justify-center items-center !mt-3 space-y-1">
              <li><p className="text-sm text-white">Design System Creation</p></li>
              <li><p className="text-sm text-white">UX/UI Creation</p></li>
              <li><p className="text-sm text-white">Design Operations</p></li>
              <li><p className="text-sm text-white">Product Release/Usability Testing</p></li>
            </ul>
          </div>
          <div className="rounded-3xl text-center bg-slate-gray/60 p-6 md:p-9 space-y-3 transition-all duration-500 hover:-translate-y-4">
            <img src={Process.src} alt="Process" className="mx-auto mb-5"/>
            <h5 className="text-white text-xl font-semibold">Process & Accountability</h5>
            <p className="text-sm text-white leading-7 font-medium">Embed ways of working that provide employees with the resource they need to deliver the right experiences.​</p>
            <h5 className="text-sm text-white py-1 font-semibold">Project Examples:</h5>
            <ul className="list-disc text-white flex flex-col justify-center items-center !mt-3 space-y-1">
              <li><p className="text-sm text-white">Digital Analytics optimisation</p></li>
              <li><p className="text-sm text-white">Report/insight mapping</p></li>
              <li><p className="text-sm text-white">Customer Journey Orchestration​</p></li>
              <li><p className="text-sm text-white">Customer Support Operations</p></li>
            </ul>
          </div>
          <div className="rounded-3xl text-center bg-slate-gray/60 p-6 md:p-9 space-y-3 transition-all duration-500 hover:-translate-y-4">
            <img src={Tooling.src} alt="Tooling" className="mx-auto mb-5"/>
            <h5 className="text-white text-xl font-semibold">Tooling and Budgets</h5>
            <p className="text-sm text-white leading-7 font-medium">Embed the right tooling, at the right price, to boost operational efficiency and ROI.​</p>
            <h5 className="text-sm text-white py-1 font-semibold">Project Examples:</h5>
            <ul className="list-disc text-white flex flex-col justify-center items-center !mt-3 space-y-1">
              <li><p className="text-sm text-white">Tool Assessment and Rationalization</p></li>
              <li><p className="text-sm text-white">Integration Solutions</p></li>
              <li><p className="text-sm text-white">Strategic budget optimization</p></li>
              <li><p className="text-sm text-white">Performance Monitoring​</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* project  */}
    <div className="p-5 relative ">
      <div className="container pt-10 pb-10 md:pt-16 space-y-10 md:pb-44 xl:pt-20 xl:pb-52">
        <div className="space-y-5 md:space-y-7">
          <h2 className="text-2xl space-y-3 md:space-y-6 md:text-4xl xl:text-56px text-center text-white font-semibold"><span className="block">Have a project in mind?</span><span className="block gradient-colors">Let’s connect.</span></h2>
          <div className="!mt-5 md:!mt-8 text-center">
              <button className="transition-all duration-300 hover:scale-110 scale-100 bg-pastel-green hover:bg-violets-blue text-sm md:text-lg text-cultured px-4 py-3 md:py-4 md:px-8  rounded-xl font-semibold">Contact Us</button>
            </div>
        </div>
        {/* right-80 bottom-16 */}
        <div className="relative md:absolute md:bottom-12% md:right-0 lg:right-2% xl:right-8% min-[1600px]:right-16%">
          <img src={Projectmind.src} className="w-96 lg:w-432px" alt="projectmind"/>
        </div>
      </div>
    </div>
    {/* footer */}
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
