import React from "react";
import Qxlogo from "@/app/images/qx-labs.svg";
import Dots from "@/app/images/dots.svg";
import FacebookAlt from "@/app/images/facebook-alt.svg";
import LinkedinAlt from "@/app/images/linkedin-alt.svg";
import TwitterAlt from "@/app/images/twitter-alt.svg";

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
    <div className="p-5 mt-24 pt-10 md:pt-14">
      <div className="container">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-semibold text-white text-center">Latest News</h2>
        </div>
      </div>
    </div>
    {/* Our Services list */}
    <div className="p-5 py-5 md:py-8 lg:py-12 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-white p-5 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 my-2">
                  <p className="text-xs text-hex-black">qxlab</p>
                  <img src={Dots.src} className="w-2" alt="Dots"/>
                  <p className="text-xs text-hex-black">3 weeks ago</p>
            </div>
            <a href="#" className="text-base md:text-xl text-indigo-black block font-semibold leading-7">Delivering Our First Proof of Concept Reports</a>
            <p className="text-xs text-indigo-black block font-light tracking-wider leading-1.8em">At QX Lab, we’ve been working tirelessly over the last few months to turn our bright idea in to reality. Today, we’re thrilled to announce</p>
          </div>
          {/* 02 */}
          <div className="bg-white p-5 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 my-2">
                  <p className="text-xs text-hex-black">qxlab</p>
                  <img src={Dots.src} className="w-2" alt="Dots"/>
                  <p className="text-xs text-hex-black">2 weeks ago</p>
            </div>
            <a href="#" className="text-base md:text-xl text-indigo-black block font-semibold leading-7">Welcome to QXLab</a>
            <p className="text-xs text-indigo-black block font-light tracking-wider leading-1.8em">In today’s rapidly evolving digital landscape, customer experience (CX) isn’t just a buzzword—it’s a business imperative. A single negative interaction can lead 32% of customers</p>
          </div>
          {/* 03 */}
          <div className="bg-white p-5 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 my-2">
                  <p className="text-xs text-hex-black">qxlab</p>
                  <img src={Dots.src} className="w-2" alt="Dots"/>
                  <p className="text-xs text-hex-black">2 weeks ago</p>
            </div>
            <a href="#" className="text-base md:text-xl text-indigo-black block font-semibold leading-7">Embracing AI Without Losing the Human Touch: A QX Lab Perspective</a>
            <p className="text-xs text-indigo-black block font-light tracking-wider leading-1.8em">In today’s rapidly evolving technological landscape, the integration of Artificial Intelligence (AI) into business operations has become not just an advantage, but a necessity. At</p>
          </div>
          {/* 04 */}
          <div className="bg-white p-5 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 my-2">
                  <p className="text-xs text-hex-black">qxlab</p>
                  <img src={Dots.src} className="w-2" alt="Dots"/>
                  <p className="text-xs text-hex-black">5 weeks ago</p>
            </div>
            <a href="#" className="text-base md:text-xl text-indigo-black block font-semibold leading-7">QXLab vs. Traditional Ways of Gathering Customer Insight and NPS</a>
            <p className="text-xs text-indigo-black block font-light tracking-wider leading-1.8em">In today’s competitive business landscape, understanding customer experience is crucial for success. Traditional methods of gathering customer insights and measuring Net Promoter Score (NPS) have</p>
          </div>
          {/* 05 */}
          <div className="bg-white p-5 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 my-2">
                  <p className="text-xs text-hex-black">qxlab</p>
                  <img src={Dots.src} className="w-2" alt="Dots"/>
                  <p className="text-xs text-hex-black">10 weeks ago</p>
            </div>
            <a href="#" className="text-base md:text-xl text-indigo-black block font-semibold leading-7">How AI is Revolutionizing the Online Gambling Industry.</a>
            <p className="text-xs text-indigo-black block font-light tracking-wider leading-1.8em">Artificial Intelligence (AI) is significantly transforming the online gambling industry, reshaping everything from user experience to security and operational efficiency. As online gambling continues to</p>
          </div>
          {/* 06 */}
          <div className="bg-white p-5 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 my-2">
                  <p className="text-xs text-hex-black">qxlab</p>
                  <img src={Dots.src} className="w-2" alt="Dots"/>
                  <p className="text-xs text-hex-black">10 weeks ago</p>
            </div>
            <a href="#" className="text-base md:text-xl text-indigo-black block font-semibold leading-7">The Crucial Role of UX  in the Online Gambling Industry</a>
            <p className="text-xs text-indigo-black block font-light tracking-wider leading-1.8em">At our AI image creation website, we pride ourselves on the tangible results that our technology can provide.</p>
          </div>
        </div>
      </div>
      
    </div>
    {/* Social-Media */}
    <div className="p-5 lg:py-8">
      <div className="container">
        <div className="flex items-center flex-wrap justify-center gap-3">
          <a href="#" className="rounded-3xl bg-facian-blue text-sm  md:text-base font-semibold text-white  flex items-stretch transition-all duration-500 hover:bg-celtic-blue  overflow-hidden"><span className="px-4 py-3 flex items-center bg-white/10 align-middle "><img src={FacebookAlt.src} className="w-4" alt="facebook"/></span><span className="px-4 py-3">Facebook</span></a>
          <a href="#" className="rounded-3xl bg-rich-blue text-sm  md:text-base font-semibold text-white  flex items-stretch transition-all duration-500 hover:bg-vivid-blue  overflow-hidden"><span className="px-4 py-3 flex items-center bg-white/10 align-middle "><img src={TwitterAlt.src} className="w-4" alt="TwitterAlt"/></span><span className="px-4 py-3">Twitter</span></a>
          <a href="#" className="rounded-3xl bg-persian-blue text-sm  md:text-base font-semibold text-white  flex items-stretch transition-all duration-500 hover:bg-azure-blue  overflow-hidden"><span className="px-4 py-3 flex items-center bg-white/10 align-middle "><img src={LinkedinAlt.src} className="w-4" alt="LinkedIn"/></span><span className="px-4 py-3">LinkedIn</span></a>
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
