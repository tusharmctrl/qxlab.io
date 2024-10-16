import { env } from "@/env.mjs";
import React from "react";

export default function ContactUs(data: any) {
  return (
    <div className="relative p-5">
      <div className="container space-y-10 pb-10 pt-10 md:pb-44 md:pt-16 xl:pb-52 xl:pt-20">
        <div className="space-y-5 md:space-y-7">
          <h2 className="space-y-3 text-center text-2xl font-semibold text-white md:space-y-6 md:text-4xl xl:text-56px">
            <span className="block">{data.title}</span>
            {/* <span className="gradient-colors block">Let’s connect.</span> */}
          </h2>
          <div className="!mt-5 text-center md:!mt-8">
            <button className="scale-100 rounded-xl bg-pastel-green px-4 py-3 text-sm font-semibold text-cultured transition-all duration-300 hover:scale-110 hover:bg-violets-blue md:px-8 md:py-4 md:text-lg">
              {data.contact_us_btn.text}
            </button>
          </div>
        </div>

        <div className="relative md:absolute md:bottom-12% md:right-0 lg:right-2% xl:right-8% min-[1600px]:right-16%">
          <img src={`${env.NEXT_PUBLIC_STRAPI_URL}${data.image.url}`} alt={data.title} className="mx-auto mb-5 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
