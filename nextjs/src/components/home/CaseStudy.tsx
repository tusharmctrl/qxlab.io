import { env } from "@/env.mjs";
import Image from "next/image";
import React from "react";

export default function CaseStudy(data) {
  return (
    <section className="relative p-5 py-10">
      <div className="bg-svg-blur bg-svg-blur-fs absolute -left-16 top-16 z-1 hidden h-432px w-590px xl:block">
        {/* <svg className="h-full w-full" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
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
        </svg> */}
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
              <Image height={480} width={600} src={`${env.NEXT_PUBLIC_STRAPI_URL}${data.image?.url}`} alt="linkedIn-cover" />
            </div>
          </div>
          <div className="w-full p-2.5 xl:w-1/2">
            <div className="space-y-2">
              <h2 className="text-66px font-bold leading-1.2em text-white">
                {/* QXc
                <br /> Case Studies */}
                {data.title}
              </h2>
              <p className="text-base leading-1.8em text-white">
                {/* See how QX Lab's consultancy services have transformed businesses. Our QXc Case Studies highlight the impact of our insights and expert guidance
                on customer experience and digital performance. */}
                {data?.description}
              </p>
              <div className="!mt-11">
                <button className="flex scale-100 items-center gap-4 text-lg font-semibold text-waterspout transition-all duration-500 hover:scale-110">
                  {/* Case Studies */}
                  {data.case_study_btn?.text}
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
  );
}
