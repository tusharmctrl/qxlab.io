import React from "react";
import Qxlogo from "@/app/images/qx-labs.svg";
import Rocket from "@/app/images/rocket.svg";
import LinkedInCover from "@/app/images/linkedIn-cover-2-1.png";
import SpeechHuman from "@/app/images/speech-on-human.png";
import Foshtech from "@/app/images/fosh-tech.png";
import Dazn from "@/app/images/dazn.png";
import Betfair from "@/app/images/betfair.png";
import Igt from "@/app/images/igt.png";
import Playtech from "@/app/images/playtech.png";
import Markor from "@/app/images/markor.png";
import Facebook from "@/app/images/Facebook.svg";
import Linkedin from "@/app/images/Linkedin.svg";
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

    <section  className="p-5 relative lg:bg-hero-pattern lg:bg-center-right lg:bg-no-repeat lg:bg-cover flex items-center justify-center  bg-before flex-grow-0 flex-shrink-0  flex-col min-h-[calc(100vh-140px)] md:min-h-[calc(100vh-200px)] xl:min-h-screen">
      <div className="container z-10">
        <div className="flex">
         
            <div className="max-w-2xl space-y-5 md:space-y-8">
              <h1 className="text-white text-5xl md:text-6xl lg:text-8xl leading-1.4em md:leading-1.08em  font-semibold">Generate your QXi Score <span className="text-waterspout">Today</span></h1>
              <div className="max-w-md">
              <p className="text-cultured text-lg md:text-xl font-normal"><span className="inline-block mr-2"><img src={Rocket.src} className="w-5 h-5" alt="rocket"/></span>Welcome to QX Lab: Revolutionizing the Customer Experience industry with AI-Powered Innovation!

              </p>
              </div>
              <button className="transition-all duration-300 hover:scale-110 scale-100 bg-pastel-green text-sm md:text-base text-cultured px-4 py-3 md:py-3.5 md:px-5 rounded-lg font-semibold">Coming Soon</button>
            </div>
        </div>
      </div>
    </section>
    <section className="relative -mt-14 p-5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-slate-gray/60 p-6 md:p-9 space-y-1">
            <span className="text-waterspout text-base font-semibold">QXi</span>
            <h5 className="text-white text-2xl font-semibold">Automated<br/> Benchmarking</h5>
            <p className="text-base text-cultured leading-8">Measure and improve the quality of your digital experiences with instant insight, analysis and recommendations.</p>
            <a href="#" className="text-maximum-blue-green text-base font-normal">LearnMore</a>
          </div>
          <div className="rounded-2xl bg-slate-gray/60 p-6 md:p-9 space-y-1">
            <span className="text-waterspout text-base font-semibold">QXi</span>
            <h5 className="text-white text-2xl font-semibold">Customer Experience <br/> Consultancy</h5>
            <p className="text-base text-cultured leading-8">Advance your Customer Experience programme through Fractional Leadership or Project Based initiatives.</p>
            <a href="#" className="text-maximum-blue-green text-base font-normal">LearnMore</a>
          </div>
        </div>
      </div>
    </section>
    <section className="mt-5 pt-0 md:pt-10 px-5 xl:px-66px">
      <div className="relative space-y-5 md:space-y-7">
        <div className="max-w-5xl mx-auto text-center space-y-5 md:space-y-7">
        <h2 className="text-2xl leading-1.8em md:text-3xl md:leading-2em text-white font-semibold">We use proprietary AI that employs over 1000+ industry specific data points to evaluate your site.</h2>
        <p className="text-sm md:text-base font-normal text-white leading-6 md:leading-8">QXLab melds cutting-edge technology with extensive industry insights to re-define digital user experiences, establishing new standards in website performance and UX excellence.</p>
      </div>
      <div className="relative">
        <img src={LinkedInCover.src} alt="linkedIn-cover"/>
      </div>
      </div>
    </section>
    <section className="py-5 md:py-10 relative p-5">
      <div className="hidden xl:block bg-svg-blur bg-svg-blur-fs w-590px h-432px absolute z-1 -left-16 top-16">
        <svg className="w-full h-full" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
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
      <div className="hidden xl:block bg-svg-blur w-590px h-432px absolute z-1 left-44 top-16">
        <svg className="w-full h-full" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
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
              <img src={SpeechHuman.src} className="w-480px mx-auto xl:mx-unset" alt="SpeechHuman"/>
            </div>
          </div>
          <div className="w-full xl:w-1/2 p-2.5">
            <div className="space-y-2">
              <h2 className="text-white font-bold text-4xl md:text-66px leading-1.2em">QXc<br/> Case Studies</h2>
              <p className="text-base text-white leading-1.8em">See how QX Lab's consultancy services have transformed businesses. Our QXc Case Studies highlight the impact of our insights and expert guidance on customer experience and digital performance.</p>
              <div className="!mt-5 md:!mt-11">
                  <button  className="text-waterspout text-base md:text-lg transition-all duration-500 scale-100 hover:scale-110 font-semibold flex items-center gap-4">Case Studies <span>
                    <svg className="w-1.5 stroke-waterspout" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8 8L1 15"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="p-5 lg:p-12 mt-2.5 marquee-wrapper overflow-hidden">
      <div className="qx-marquee " >
        <ul className="flex items-center">
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className=" md:w-20" src={Foshtech.src} alt="foshtech"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-12" src={Dazn.src} alt="dazn"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Betfair.src} alt="Betfair"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Igt.src} alt="Igt"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Playtech.src} alt="Playtech"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Markor.src} alt="Markor"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Foshtech.src} alt="foshtech"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-12" src={Dazn.src} alt="dazn"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Betfair.src} alt="Betfair"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Igt.src} alt="Igt"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Playtech.src} alt="Playtech"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Markor.src} alt="Markor"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Foshtech.src} alt="foshtech"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-12" src={Dazn.src} alt="dazn"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Betfair.src} alt="Betfair"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Igt.src} alt="Igt"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Playtech.src} alt="Playtech"/></li>
          <li className="mx-10 lg:mx-16 cursor-pointer inline-block whitespace-nowrap min-w-14 md:min-w-20 lg:min-w-28"><img className="w-20" src={Markor.src} alt="Markor"/></li>
        </ul>
      </div>
    </div>

    <section className="py-5 lg:pt-14 px-5 pb-5">
      <div className="container">
        <div className="flex items-start flex-wrap gap-y-4 lg:gap-y-6">
          <div className="w-full lg:w-1/2 p-2.5">
              <div className="max-w-488px space-y-4 lg:space-y-7">
                <h2 className="text-white text-3xl md:text-40px font-medium">Contact</h2>
                <div className="flex flex-col">
                  <a href="#" className="text-cultured text-xl font-normal">QxLab Ltd.</a>
                  <a href="#" className="text-eucalyptus text-sm font-normal">Company no:15727970</a>
                </div>
                <ul className="flex items-center flex-wrap gap-4">
                  <li><a href="#"><img src={Linkedin.src} className="w-12" alt="linkdin"/></a></li>
                  <li><a href="#"><img src={Facebook.src} className="w-12" alt="facebook"/></a></li>
                </ul>
              </div>
          </div>
          <div className="w-full lg:w-1/2 p-2.5">
            <div className="relative">              

                <form className="">
                  
                  <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-cultured">Name</label>
                    <input type="password"  className="!bg-white/5 text-white/50 font-medium text-sm rounded-md focus:ring-0 focus:outline-0  block w-full p-13px " required />
                  </div>
                  <div className="mb-5">
                    <label id="email" className="block mb-2 text-sm font-medium text-cultured">Email</label>
                    <input type="email" id="email" className="!bg-white/5  text-white/50 font-medium text-sm rounded-md focus:ring-0 focus:outline-0 block w-full p-3.5 " placeholder="Email" required />
                  </div>
                  
                  <div className="mb-5">
                    <label  className="block mb-2 text-sm font-medium text-cultured">Subject</label>
                    <select  className="!bg-white/5 text-white/50 font-medium text-sm rounded-md  block w-full p-3.5 focus:outline-0 focus:ring-0">
                      <option className="text-black text-sm font-medium " selected>Choose a country</option>
                      <option className="text-black text-sm font-medium" value="US">United States</option>
                      <option className="text-black text-sm font-medium" value="CA">Canada</option>
                      <option className="text-black text-sm font-medium" value="FR">France</option>
                      <option className="text-black text-sm font-medium" value="DE">Germany</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-cultured">Message</label>
                    <textarea id="message" rows="4" class="block p-3 w-full text-sm font-medium text-white/50 !bg-white/5 rounded-md focus:ring-0 focus:outline-0" placeholder="Message"></textarea>
                  </div>
                  
                  <button type="submit" className="text-white bg-pastel-green focus:ring-0  font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center ">Send</button>
                </form>

            </div>
          </div>
        </div>
      </div>
    </section>
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
