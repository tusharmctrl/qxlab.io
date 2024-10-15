import React from "react";
import Qxlogo from "@/app/images/qx-labs.svg";
import Mockup from "@/app/images/people.png";
import Blogone from "@/app/images/blog-img.jpg";
import Blogtwo from "@/app/images/blog-img-01.jpg";
import Blogthree from "@/app/images/blog-img-02.jpg";
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

    <section  className="p-5 relative lg:bg-blog-pattern lg:bg-center-right lg:bg-no-repeat lg:bg-cover flex items-center justify-center  bg-before flex-grow-0 flex-shrink-0  flex-col ">
      <div className="container z-10">
            <div className="max-w-5xl mb-16 mx-auto text-center min-h-40vmax grid place-content-end py-72px">
              <h1 className="text-white text-5xl md:text-6xl lg:text-8xl leading-1.4em font-semibold">Delivering Our First Proof of Concept Reports</h1>
              <ul className="flex items-center gap-10 justify-center my-5">
                <li className="relative before:absolute before:w-1 before:h-1 before:bg-white before:rounded-full before:content-[''] before:top-18px before:-right-6"><div className="flex items-center gap-5"><img src={Mockup.src} className="w-10 h-10 rounded-full" alt="mockup"/><a href="#" className="text-base font-medium text-white hover:text-cultured transition-all duration-500">qxlab</a></div></li>
                <li className="relative before:absolute before:w-1 before:h-1 before:bg-white before:rounded-full before:content-[''] before:top-2.5 before:-right-6"><a href="#" className="text-base font-medium text-white hover:text-cultured transition-all duration-500">September 19, 2024</a></li>
                <li className="relative before:absolute before:w-1 before:h-1 before:bg-white before:rounded-full last:before:content-[unset] before:top-2.5 before:-right-6"><a href="#" className="text-base font-medium text-white hover:text-cultured transition-all duration-500">AI</a></li>
              </ul>
            </div>
      </div>
    </section>
    <section className="p-5 relative">
      <div className="container">
        <div className="space-y-2 md:px-5">
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">At QX Lab, we’ve been working tirelessly over the last few months to turn our bright idea in to reality. Today, we’re thrilled to announce the delivery of our very first batch of proof-of-concept (PoC) reports, marking a major milestone for the company.</p>
          <h3 className="text-2xl md:text-3xl xl:text-40px font-semibold text-white !mb-5 md:!mb-8 xl:!mb-10">Three Reports, Three Markets, One Industry:</h3>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">Our initial delivery was focused on the iGaming industry. We delivered two <span className="font-semibold">Competitor Benchmarking</span> reports and one <span className="font-semibold">Expert Review</span>, across three different regions.</p>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">Our initial delivery was focused on the iGaming industry. We delivered two Each report was generated using our proprietary <span className="font-semibold">QXi</span> tool; delivering scores, actionable insights, and tailored improvement recommendations across four key experience categories – <span className="font-semibold">Performance, Perception, Usability and Customer Journeys.</span></p>
          <h3 className="text-2xl md:text-3xl xl:text-40px font-semibold text-white !mb-5 md:!mb-8 xl:!mb-10">Insights That Move the Needle:</h3>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">What makes these reports truly transformative is the speed and efficiency of the analysis, whilst maintaining the quality and actionability of the recommendations.</p>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">Historically, reports of this caliber could take weeks or even months to compile, often costing clients tens of thousands of pounds.</p>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">In contrast, our AI-driven platform generated these reports almost instantly—and at a fraction of the cost. The aim of each of these reports was not only to provide cheaper insight; but to provide recommendations to the clients that matched that of a human researcher; ones that can actually move the needle.</p>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">The reports delivered contained an average of 32 different improvement recommendations. The variation in scores vs a manual human analysis was &lt;5%. A good start.</p>
          <h3 className="text-2xl md:text-3xl xl:text-40px font-semibold text-white !mb-5 md:!mb-8 xl:!mb-10">What’s Next: Expanding Our Reach</h3>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">The delivery of these first three reports is just the beginning. Over the next two weeks, we plan to deliver eight more reports, covering an additional 20 brands across three different industries—OTT, Telecom, and eCommerce – the aim here is to validate the different industry models that power the QXi tool.</p>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">Each report will continue to leverage the QXi tool’s full range of capabilities, helping clients across various sectors better understand and improve their customer experiences.</p>
          <h3 className="text-2xl md:text-3xl xl:text-40px font-semibold text-white !mb-5 md:!mb-8 xl:!mb-10">Learning and Improving</h3>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">As with any proof of concept, there’s plenty of room for refinement (and we successfully managed to break lots of things). Catering for multiple languages and locales and the need to authenticate user accounts to measure certain customer journeys proved tricky, but it wouldnt be fun if it was simple, would it?</p>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">Couple of key improvements are still to to be made, too.</p>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">Now we’ve run our first batch of reports, we’re excited to start trending this data over time—a feature that will allow clients to track improvements or changes in their customer experience over the long term. Furthermore, the more brands within industries that we measure, the more we can begin to classify best practice examples, that can feed in to our models and further advance the recommendations we generate.</p>
          <h3 className="text-2xl md:text-3xl xl:text-40px font-semibold text-white !mb-5 md:!mb-8 xl:!mb-10">Looking Ahead: Soft Launch and Beyond</h3>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">Once the remaining case study reports are delivered, we’ll be gearing up for the next big milestone: the <span className="font-semibold">soft launch</span> of our <span className="font-semibold">QXi platform.</span></p>
          <p className="text-base md:text-xl font-medium text-cultured leading-1.8em">This platform will empower any user to create an account, purchase a plan and generate their own reports, instantly. For now, huge thanks for the trust to our POC clients thus far and to the incredible team building these unique solutions. Stay tuned – lot’s more on the way.</p>
        </div>
      </div>
    </section>
    <section className="p-5 pb-0 pt-8 relative border-t-0.5px border-white/5 my-5 md:my-8">
      <div className="container">
        <div className="flex flex-wrap items-center gap-y-5 justify-between md:px-5">
          <div className="flex items-center flex-wrap gap-y-5">
            <span className="mr-5 text-sm font-normal text-cultured ">Tags:</span>
            <ul className="flex items-center flex-wrap gap-3">
              <li><a href="#" className="py-1 px-3 bg-pale-silver rounded-3xl transition-all duration-500 hover:scale-110 scale-100 block text-black text-xs">AI</a></li>
              <li><a href="#" className="py-1 px-3 bg-pale-silver rounded-3xl transition-all duration-500 hover:scale-110 scale-100 block text-black text-xs">benchmarking</a></li>
              <li><a href="#" className="py-1 px-3 bg-pale-silver rounded-3xl transition-all duration-500 hover:scale-110 scale-100 block text-black text-xs">Customer Experience</a></li>
              <li><a href="#" className="py-1 px-3 bg-pale-silver rounded-3xl transition-all duration-500 hover:scale-110 scale-100 block text-black text-xs">Report</a></li>
              <li><a href="#" className="py-1 px-3 bg-pale-silver rounded-3xl transition-all duration-500 hover:scale-110 scale-100 block text-black text-xs">UX</a></li>
            </ul>
          </div>
          <div className="flex items-center">
            <span className="mr-5 text-sm font-normal text-cultured uppercase">Share On</span>
            <ul className="flex items-center gap-5">
              <li><a href="#" className=" transition-all duration-300 hover:scale-110 scale-100 ">
                <svg className="w-4 fill-pale-silver" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M504 256C504 119 393 8 256 8C119 8 8 119 8 256C8 379.78 98.69 482.38 217.25 501V327.69H154.25V256H217.25V201.36C217.25 139.21 254.25 104.88 310.92 104.88C338.06 104.88 366.44 109.72 366.44 109.72V170.72H335.16C304.36 170.72 294.75 189.84 294.75 209.45V256H363.53L352.53 327.69H294.75V501C413.31 482.38 504 379.78 504 256Z"/>
                  </svg>
                  </a></li>
              <li><a href="#" className=" transition-all duration-300 hover:scale-110 scale-100 ">
              <svg className="w-4 fill-pale-silver" viewBox="0 0 512 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M459.37 103.634C459.695 108.182 459.695 112.731 459.695 117.279C459.695 255.999 354.112 415.837 161.137 415.837C101.685 415.837 46.457 398.618 0 368.731C8.447 369.705 16.568 370.03 25.34 370.03C74.395 370.03 119.553 353.462 155.614 325.198C109.482 324.223 70.822 294.01 57.502 252.426C64 253.4 70.497 254.05 77.32 254.05C86.741 254.05 96.163 252.75 104.934 250.477C56.853 240.73 20.791 198.497 20.791 147.492V146.193C34.76 153.99 51.005 158.863 68.222 159.512C39.958 140.669 21.441 108.507 21.441 72.121C21.441 52.629 26.638 34.761 35.735 19.167C87.39 82.842 165.035 124.425 252.1 128.974C250.476 121.177 249.501 113.056 249.501 104.934C249.501 47.106 296.283 0 354.435 0C384.648 0 411.937 12.67 431.105 33.137C454.82 28.589 477.561 19.817 497.704 7.797C489.906 32.163 473.338 52.63 451.572 65.624C472.689 63.351 493.156 57.502 511.998 49.381C497.706 70.172 479.837 88.689 459.37 103.634Z" />
                </svg>

                </a></li>
              
              <li><a href="#" className=" transition-all duration-300 hover:scale-110 scale-100 "><svg className="w-4 fill-pale-silver" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47 24C47 37.2581 36.4819 48 23.5 48C21.0742 48 18.7431 47.6226 16.5448 46.9258C17.5018 45.329 18.9327 42.7161 19.4633 40.6355C19.7476 39.5129 20.9226 34.9258 20.9226 34.9258C21.6901 36.4161 23.9264 37.6839 26.3048 37.6839C33.3927 37.6839 38.5002 31.0258 38.5002 22.7516C38.5002 14.8258 32.1609 8.89355 24.0117 8.89355C13.8726 8.89355 8.48085 15.8419 8.48085 23.4194C8.48085 26.9419 10.3192 31.3258 13.2472 32.7194C13.6925 32.9323 13.9294 32.8355 14.0337 32.4C14.1095 32.071 14.5075 30.4355 14.6875 29.6806C14.7444 29.4387 14.7159 29.2258 14.5264 28.9935C13.5694 27.7839 12.7923 25.5774 12.7923 23.5161C12.7923 18.2226 16.7153 13.1032 23.4052 13.1032C29.176 13.1032 33.2222 17.1194 33.2222 22.8677C33.2222 29.3613 30.0099 33.8613 25.831 33.8613C23.5284 33.8613 21.7944 31.9161 22.3534 29.5258C23.0167 26.671 24.296 23.5935 24.296 21.5323C24.296 19.6935 23.3294 18.1548 21.3206 18.1548C18.9611 18.1548 17.0659 20.6419 17.0659 23.9806C17.0659 26.1097 17.7671 27.5419 17.7671 27.5419C17.7671 27.5419 15.4456 37.5871 15.0192 39.4645C14.5454 41.5355 14.7349 44.4581 14.9339 46.3548C6.19718 42.8613 0 34.171 0 24C0 10.7419 10.5181 0 23.5 0C36.4819 0 47 10.7419 47 24Z" />
                </svg>
                </a></li>
                <li><a href="#" className=" transition-all duration-300 hover:scale-110 scale-100 ">
                <svg className="w-4 fill-pale-silver" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 0H31.9C14.3 0 0 14.5 0 32.3V415.7C0 433.5 14.3 448 31.9 448H416C433.6 448 448 433.5 448 415.7V32.3C448 14.5 433.6 0 416 0ZM135.4 384H69V170.2H135.5V384H135.4ZM102.2 141C80.9 141 63.7 123.7 63.7 102.5C63.7 81.3 80.9 64 102.2 64C123.4 64 140.7 81.3 140.7 102.5C140.7 123.8 123.5 141 102.2 141ZM384.3 384H317.9V280C317.9 255.2 317.4 223.3 283.4 223.3C248.8 223.3 243.5 250.3 243.5 278.2V384H177.1V170.2H240.8V199.4H241.7C250.6 182.6 272.3 164.9 304.6 164.9C371.8 164.9 384.3 209.2 384.3 266.8V384Z" />
                  </svg>

                  </a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-612px py-9 space-y-4 px-5">
            <a href="#" className="py-2 px-4 bg-pale-silver inline-flex items-center font-semibold uppercase rounded-3xl transition-all duration-500 hover:scale-110 scale-100  gap-2 text-black text-sm">
              <span>
                <svg className="w-4 fill-black" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.82858 7.41406L9.82843 1.41421L8.41421 0L0 8.41421L8.41421 16.8284L9.82843 15.4142L3.82828 9.41406H21.4141V7.41406H3.82858Z" />
                </svg>
              </span>Previous Article</a>
              <h4 className="text-base md:text-xl font-semibold text-pale-silver">Welcome to QXLab</h4>
        </div>
      </div>
    </section>
    <section className="p-5 mb-8">
      <div className="container">
        <div className="space-y-8">
            <h2 className="text-26px text-white font-semibold text-center">You may also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              <div className="rounded-2xl shadow-card transition-all duration-300 hover:shadow-card-hover cursor-pointer hover:-translate-y-2">
                <div className="relative"><img src={Blogone.src} className="rounded-t-2xl" alt="Blogone"/></div>
                <div className="px-5 pb-5 pt-8">
                <div className="flex items-center gap-4 justify-between">
                  <p className="text-cultured flex-shrink-0 text-sm font-semibold">2 Months ago</p>
                  <div className="w-full border-0.1px border-cultured/15"></div>
                  <p className="text-cultured text-sm flex-shrink-0 font-semibold">AI</p>
                </div>
                <h4 className="text-22px font-semibold text-white my-3 mb-16 hover:text-waterspout transition-all duration-300">Welcome to QXLab</h4>
                <a href="#" className="flex items-center gap-2 text-base md:text-lg font-semibold text-white transition-all duration-300 hover:text-waterspout group">Read More <span><svg className="w-1.5 fill-white group-hover:fill-waterspout " viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L15.0607 12.9393C15.6464 13.5251 15.6464 14.4749 15.0607 15.0607L3.06066 27.0607C2.47487 27.6464 1.52513 27.6464 0.93934 27.0607C0.353553 26.4749 0.353553 25.5251 0.93934 24.9393L11.8787 14L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z" />
                  </svg>
                  </span>
                </a>
              </div>
              </div>
              {/* 02 */}
              <div className="rounded-2xl shadow-card transition-all duration-300 hover:shadow-card-hover cursor-pointer hover:-translate-y-2">
                <div className="relative"><img src={Blogtwo.src} className="rounded-t-2xl" alt="Blogone"/></div>
                <div className="px-5 pb-5 pt-8">
                <div className="flex items-center gap-4 justify-between">
                  <p className="text-cultured flex-shrink-0 text-sm font-semibold">2 Months ago</p>
                  <div className="w-full border-0.1px border-cultured/15"></div>
                  <p className="text-cultured text-sm flex-shrink-0 font-semibold">AI</p>
                </div>
                <h4 className="text-22px font-semibold text-white my-3 mb-16 hover:text-waterspout transition-all duration-300">Embracing AI Without Losing the Human Touch: A QX Lab Perspective</h4>
                <a href="#" className="flex items-center gap-2 text-base md:text-lg font-semibold text-white transition-all duration-300 hover:text-waterspout group">Read More <span><svg className="w-1.5 fill-white group-hover:fill-waterspout " viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L15.0607 12.9393C15.6464 13.5251 15.6464 14.4749 15.0607 15.0607L3.06066 27.0607C2.47487 27.6464 1.52513 27.6464 0.93934 27.0607C0.353553 26.4749 0.353553 25.5251 0.93934 24.9393L11.8787 14L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z" />
                  </svg>
                  </span>
                </a>
              </div>
              </div>
              {/* 03 */}
              <div className="rounded-2xl shadow-card transition-all duration-300 hover:shadow-card-hover cursor-pointer hover:-translate-y-2">
                <div className="relative"><img src={Blogthree.src} className="rounded-t-2xl" alt="Blogone"/></div>
                <div className="px-5 pb-5 pt-8">
                <div className="flex items-center gap-4 justify-between">
                  <p className="text-cultured flex-shrink-0 text-sm font-semibold">5 Months ago</p>
                  <div className="w-full border-0.1px border-cultured/15"></div>
                  <p className="text-cultured text-sm flex-shrink-0 font-semibold">AI</p>
                </div>
                <h4 className="text-22px font-semibold text-white my-3 mb-16 hover:text-waterspout transition-all duration-300">QXLab vs. Traditional Ways of Gathering Customer Insight and NPS</h4>
                <a href="#" className="flex items-center gap-2 text-base md:text-lg font-semibold text-white transition-all duration-300 hover:text-waterspout group">Read More <span><svg className="w-1.5 fill-white group-hover:fill-waterspout " viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L15.0607 12.9393C15.6464 13.5251 15.6464 14.4749 15.0607 15.0607L3.06066 27.0607C2.47487 27.6464 1.52513 27.6464 0.93934 27.0607C0.353553 26.4749 0.353553 25.5251 0.93934 24.9393L11.8787 14L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z" />
                  </svg>
                  </span>
                </a>
              </div>
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
