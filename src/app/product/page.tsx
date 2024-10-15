import React from "react";
import Qxlogo from "@/app/images/qx-labs.svg";
import Qxi from "@/app/images/qxi.svg";
import Qxiimage from "@/app/images/product-img.png";
import Howork from "@/app/images/how-its-work.png";
import Uparrow from "@/app/images/up-arrows.svg";
import Downarrow from "@/app/images/down-arrow.svg";
import Qxm from "@/app/images/qxm.svg";
import Qxj from "@/app/images/qxj.svg";

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

    <div className="p-5 mt-24">
      <div className="container">
        <div className="max-w-3xl mx-auto  p-6 space-y-12">
            <h1> <img src={Qxi.src} alt="qxi" className="mx-auto"/></h1>
            <p className="text-base text-white font-semibold text-center">Instant UX Analysis from a single input – no code required</p>
            <img src={Qxiimage.src} alt="Qxiimage" className="mx-auto"/>
            <div className="!mt-6">
              <p className="text-base text-cultured leading-2em font-medium">QXi is an AI-powered insight platform designed to transform how businesses understand and improve their digital experience.</p>
              <p className="text-base text-cultured leading-2em font-medium">By simply entering a URL, or inputting an app name, QXi leverages advanced algorithms to analyze your brand, benchmarked against your competitors.</p>
              <p className="text-base text-cultured leading-2em font-medium">This process, which requires no coding or complex setup, generates a QX Index that quantifies your sites:</p>
              <ul className="list-disc text-cultured ml-4 my-5 space-y-2">
                <li><p className="text-base text-cultured font-medium">Performance</p></li>
                <li><p className="text-base text-cultured font-medium">Perception</p></li>
                <li><p className="text-base text-cultured font-medium">Usability</p></li>
                <li><p className="text-base text-cultured font-medium">Journey</p></li>
                <li><p className="text-base text-cultured font-medium">Overall Experience</p></li>
              </ul>
              <p className="text-base text-cultured leading-2em font-medium">Ideal for businesses aiming to enhance their online engagement, QXi offers seamless, data-driven, analysis and recommendations to boost your digital experiences.</p>
            </div>
            <div className="!mt-5 text-center">
              <button className="transition-all duration-300 hover:scale-110 scale-100 bg-pastel-green text-sm md:text-base text-cultured px-4 py-3 md:py-3.5 md:px-6  rounded-lg font-semibold">Request Demo</button>
              </div>
        </div>
      </div>
    </div>
    {/* How It Works */}
    <div className="p-5 relative">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-semibold text-cultured text-center text-gradient">How It Works</h2>
      </div>
      <div className="mt-4 container rounded-3xl border-0.5px border-black/30 p-6 md:p-8 xl:p-12">
        <div className="flex items-center flex-wrap gap-y-12 md:gap-y-20">
          <div className="order-2 xl:order-1 w-full xl:w-2/5 space-y-10">
            <div className="flex items-start gap-8 xl:max-w-80 mr-auto">
              <div className="flex-shrink-0 w-11 h-11 text-cultured gradient-style rounded-full font-semibold flex justify-center items-center">1</div>
              <div className="relative space-y-2">
                <h4 className="text-white text-xl font-medium">Enter URL</h4>
                <p className="text-sm font-normal text-cultured leading-6">Enter your website URL or app name to kickstart the analysis. No complex setup needed.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 xl:max-w-80 mr-auto">
              <div className="flex-shrink-0 w-11 h-11 text-cultured gradient-style-one rounded-full font-semibold flex justify-center items-center">2</div>
              <div className="relative space-y-2">
                <h4 className="text-white text-xl font-medium">Magic Happens!</h4>
                <p className="text-sm font-normal text-cultured leading-6">Our AI analyzes your digital presence in real-time, using industry-specific benchmarks.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 xl:max-w-80 mr-auto">
              <div className="flex-shrink-0 w-11 h-11 text-cultured gradient-style-one rounded-full font-semibold flex justify-center items-center">2</div>
              <div className="relative space-y-2">
                <h4 className="text-white text-xl font-medium">Analysis & Reccommendations</h4>
                <p className="text-sm font-normal text-cultured leading-6">Get detailed reports on performance, usability, and more, with actionable insights and easy export options recommendations to enhance your digital experience.</p>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-2 w-full xl:w-3/5">
            <div className="relative">
              <img src={Howork.src} alt="howork"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Faq */}
    <div className="p-5 relative">
      <div className="container">
          <h2 className="text-4xl md:text-6xl font-semibold text-cultured text-center text-gradient">FAQ</h2>
          <div className="max-w-612px mx-auto mt-4">
            <div className="relative">
            <div className="flex items-center justify-between py-3.5">
              <h4 className="text-white font-semibold text-lg md:text-xl">What is QX Index?</h4>
              <img src={Uparrow.src} className="w-5" alt="Uparrow"/>
            </div>
            <div className="relative ">
              <p className="text-sm text-white leading-2em">The QX Index is a composite score that quantifies a brand's digital experience quality. It is derived from multiple categories such as usability, performance, perception, and accessibility.</p>
            </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-white text-lg md:text-xl font-semibold">How frequently is the data updated?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow"/>
              </div>
              <div className="hidden relative ">
                <p className="text-sm text-white leading-2em">The frequency of data updates is customizable based on the subscription plan. For example, users with a subscription plan may have their data updated daily, while Freemium users may have less frequent updates.</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-white text-lg md:text-xl font-semibold">Can I export the reports?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow"/>
              </div>
              <div className="hidden relative ">
                <p className="text-sm text-white leading-2em">Yes, users can export the reports in various formats such as PDF or CSV for further analysis and sharing with stakeholders.</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-white text-lg md:text-xl font-semibold">Are there any limitations to the Freemium plan?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow"/>
              </div>
              <div className="hidden relative ">
                <p className="text-sm text-white leading-2em">Yes, the Freemium plan provides limited access to basic features and scores without in-depth analysis or recommendations. Users will need to upgrade to access comprehensive insights and competitor analysis.</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-white text-lg md:text-xl font-semibold">What industries does the QXi Tool support?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow"/>
              </div>
              <div className="hidden relative ">
                <p className="text-sm text-white leading-2em">Currently, the QXi Tool supports several industries, including Gaming, OTT (Over-the-Top media services) TelCo and D2C for the MVP release. More industries will be added in future updates.</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-white text-lg md:text-xl font-semibold">What categories does the QXi Tool analyse?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow"/>
              </div>
              <div className="hidden relative ">
                <p className="text-sm text-white leading-2em">Currently, the QXi Tool provides analysis against the following categories:</p>
                <ul className="list-disc text-cultured ml-4 my-5 space-y-1">
                <li><p className="text-xs text-cultured font-medium">Overall Experience</p></li>
                <li><p className="text-xs text-cultured font-medium">Usability</p></li>
                <li><p className="text-xs text-cultured font-medium">Customer Journeys</p></li>
                <li><p className="text-xs text-cultured font-medium">Perception</p></li>
                <li><p className="text-xs text-cultured font-medium">Performance</p></li>
              </ul>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-white text-lg md:text-xl font-semibold">How long does it take to generate a report?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow"/>
              </div>
              <div className="hidden relative ">
                <p className="text-sm text-white leading-2em">Report generation time varies depending on the complexity of the analysis and the number of competitors included. Typically, it takes a few minutes to complete the analysis and generate a report.</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-white text-lg md:text-xl font-semibold">Can I customize the analysis parameters?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow"/>
              </div>
              <div className="hidden relative ">
                <p className="text-sm text-white leading-2em">Yes and No. The analysis categories are set. However, you can amend what brands you analyze and what markets these brands are analysed from.</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-white text-lg md:text-xl font-semibold">Is there a limit to the number of searches I can perform?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow"/>
              </div>
              <div className="hidden relative ">
                <p className="text-sm text-white leading-2em">The number of searches you can perform depends on your subscription plan. Freemium users have limited searches, while paid plans offer more searches and the option to purchase additional credits.</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-white text-lg md:text-xl font-semibold">How do I upgrade my plan?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow"/>
              </div>
              <div className="hidden relative ">
                <p className="text-sm text-white leading-2em">You can upgrade your plan directly through the QXi Tool's dashboard by selecting the upgrade or Manage Plans option and following the prompts for payment and plan selection.</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-white text-lg md:text-xl font-semibold">Do you offer enterprise solutions?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow"/>
              </div>
              <div className="hidden relative ">
                <p className="text-sm text-white leading-2em">Yes, we offer enterprise solutions tailored to the needs of large organizations, including custom integrations and white-label options. Please contact our sales team for more information.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    {/* QXm */}
    <div className="p-5 relative bg-dark-slate-gray py-20 md:py-40">
      <div className="container">

      <div className="relative max-w-590px mx-auto text-center space-y-5 md:space-y-8 pt-5 md:pt-10">
        <img src={Qxm.src} alt="Qxm" className="mx-auto w-28 md:w-40"/>
        <p className="text-sm md:text-base !leading-2em text-white font-semibold">QXm , Our AI-powered digital maturity tool that measures how prepared your business is to become truly user-centric</p>
        <div className="!mt-5 text-center">
              <button className="transition-all duration-300 hover:scale-110 scale-100 bg-white/20 text-sm md:text-base text-cultured px-4 py-3 md:py-3.5 md:px-8  rounded-lg font-semibold">Coming Soon</button>
              </div>
        </div>
      </div>
    </div>
    {/* QXj */}
    <div className="p-5 relative bg-blue-sapphire py-20 md:py-40">
      <div className="container">

      <div className="relative max-w-590px mx-auto text-center space-y-5 md:space-y-8 pt-5 md:pt-10">
        <img src={Qxj.src} alt="Qxj" className="mx-auto w-28 md:w-40"/>
        <p className="text-sm md:text-base !leading-2em text-white font-semibold">QXj leverages advanced AI to map out every step of your customer’s journey, providing a clear visualization of their experience across your digital platforms.</p>
        <div className="!mt-5 text-center">
              <button className="transition-all duration-300 hover:scale-110 scale-100 bg-white/20 text-sm md:text-base text-cultured px-4 py-3 md:py-3.5 md:px-8  rounded-lg font-semibold">Coming Soon</button>
              </div>
        </div>
      </div>
    </div>
    {/* footer */}
    <footer className="bg-charleston-green/50 py-12 lg:py-20 px-5">
      <div className="container">
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
