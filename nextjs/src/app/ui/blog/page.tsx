import React from "react";
import Qxlogo from "@/../public/images/qx-labs.svg";
import Dots from "@/../public/images/dots.svg";
import FacebookAlt from "@/../public/images/facebook-alt.svg";
import LinkedinAlt from "@/../public/images/linkedin-alt.svg";
import TwitterAlt from "@/../public/images/twitter-alt.svg";

export default function page() {
  return (
    <>
      {/* Our Services */}
      <div className="mt-24 p-5 pt-10 md:pt-14">
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-center text-4xl font-semibold text-white md:text-6xl xl:text-7xl">Latest News</h2>
          </div>
        </div>
      </div>
      {/* Our Services list */}
      <div className="p-5 py-5 md:py-8 lg:py-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <div className="space-y-4 rounded-2xl bg-white p-5">
              <div className="my-2 flex items-center gap-3">
                <p className="text-xs text-hex-black">qxlab</p>
                <img src={Dots.src} className="w-2" alt="Dots" />
                <p className="text-xs text-hex-black">3 weeks ago</p>
              </div>
              <a href="#" className="block text-base font-semibold leading-7 text-indigo-black md:text-xl">
                Delivering Our First Proof of Concept Reports
              </a>
              <p className="block text-xs font-light leading-1.8em tracking-wider text-indigo-black">
                At QX Lab, we’ve been working tirelessly over the last few months to turn our bright idea in to reality. Today, we’re thrilled to announce
              </p>
            </div>
            {/* 02 */}
            <div className="space-y-4 rounded-2xl bg-white p-5">
              <div className="my-2 flex items-center gap-3">
                <p className="text-xs text-hex-black">qxlab</p>
                <img src={Dots.src} className="w-2" alt="Dots" />
                <p className="text-xs text-hex-black">2 weeks ago</p>
              </div>
              <a href="#" className="block text-base font-semibold leading-7 text-indigo-black md:text-xl">
                Welcome to QXLab
              </a>
              <p className="block text-xs font-light leading-1.8em tracking-wider text-indigo-black">
                In today’s rapidly evolving digital landscape, customer experience (CX) isn’t just a buzzword—it’s a business imperative. A single negative
                interaction can lead 32% of customers
              </p>
            </div>
            {/* 03 */}
            <div className="space-y-4 rounded-2xl bg-white p-5">
              <div className="my-2 flex items-center gap-3">
                <p className="text-xs text-hex-black">qxlab</p>
                <img src={Dots.src} className="w-2" alt="Dots" />
                <p className="text-xs text-hex-black">2 weeks ago</p>
              </div>
              <a href="#" className="block text-base font-semibold leading-7 text-indigo-black md:text-xl">
                Embracing AI Without Losing the Human Touch: A QX Lab Perspective
              </a>
              <p className="block text-xs font-light leading-1.8em tracking-wider text-indigo-black">
                In today’s rapidly evolving technological landscape, the integration of Artificial Intelligence (AI) into business operations has become not
                just an advantage, but a necessity. At
              </p>
            </div>
            {/* 04 */}
            <div className="space-y-4 rounded-2xl bg-white p-5">
              <div className="my-2 flex items-center gap-3">
                <p className="text-xs text-hex-black">qxlab</p>
                <img src={Dots.src} className="w-2" alt="Dots" />
                <p className="text-xs text-hex-black">5 weeks ago</p>
              </div>
              <a href="#" className="block text-base font-semibold leading-7 text-indigo-black md:text-xl">
                QXLab vs. Traditional Ways of Gathering Customer Insight and NPS
              </a>
              <p className="block text-xs font-light leading-1.8em tracking-wider text-indigo-black">
                In today’s competitive business landscape, understanding customer experience is crucial for success. Traditional methods of gathering customer
                insights and measuring Net Promoter Score (NPS) have
              </p>
            </div>
            {/* 05 */}
            <div className="space-y-4 rounded-2xl bg-white p-5">
              <div className="my-2 flex items-center gap-3">
                <p className="text-xs text-hex-black">qxlab</p>
                <img src={Dots.src} className="w-2" alt="Dots" />
                <p className="text-xs text-hex-black">10 weeks ago</p>
              </div>
              <a href="#" className="block text-base font-semibold leading-7 text-indigo-black md:text-xl">
                How AI is Revolutionizing the Online Gambling Industry.
              </a>
              <p className="block text-xs font-light leading-1.8em tracking-wider text-indigo-black">
                Artificial Intelligence (AI) is significantly transforming the online gambling industry, reshaping everything from user experience to security
                and operational efficiency. As online gambling continues to
              </p>
            </div>
            {/* 06 */}
            <div className="space-y-4 rounded-2xl bg-white p-5">
              <div className="my-2 flex items-center gap-3">
                <p className="text-xs text-hex-black">qxlab</p>
                <img src={Dots.src} className="w-2" alt="Dots" />
                <p className="text-xs text-hex-black">10 weeks ago</p>
              </div>
              <a href="#" className="block text-base font-semibold leading-7 text-indigo-black md:text-xl">
                The Crucial Role of UX in the Online Gambling Industry
              </a>
              <p className="block text-xs font-light leading-1.8em tracking-wider text-indigo-black">
                At our AI image creation website, we pride ourselves on the tangible results that our technology can provide.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Social-Media */}
      <div className="p-5 lg:py-8">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="flex items-stretch overflow-hidden rounded-3xl bg-facian-blue text-sm font-semibold text-white transition-all duration-500 hover:bg-celtic-blue md:text-base"
            >
              <span className="flex items-center bg-white/10 px-4 py-3 align-middle">
                <img src={FacebookAlt.src} className="w-4" alt="facebook" />
              </span>
              <span className="px-4 py-3">Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-stretch overflow-hidden rounded-3xl bg-rich-blue text-sm font-semibold text-white transition-all duration-500 hover:bg-vivid-blue md:text-base"
            >
              <span className="flex items-center bg-white/10 px-4 py-3 align-middle">
                <img src={TwitterAlt.src} className="w-4" alt="TwitterAlt" />
              </span>
              <span className="px-4 py-3">Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-stretch overflow-hidden rounded-3xl bg-persian-blue text-sm font-semibold text-white transition-all duration-500 hover:bg-azure-blue md:text-base"
            >
              <span className="flex items-center bg-white/10 px-4 py-3 align-middle">
                <img src={LinkedinAlt.src} className="w-4" alt="LinkedIn" />
              </span>
              <span className="px-4 py-3">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
