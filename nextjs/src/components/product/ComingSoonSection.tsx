import { env } from "@/env.mjs";
import Image from "next/image";
import React from "react";

export default function ComingSoonSection(data: any) {
  return (
    <div className="relative bg-dark-slate-gray p-5 py-20 md:py-40">
      <div className="container">
        <div className="relative mx-auto max-w-590px space-y-5 pt-5 text-center md:space-y-8 md:pt-10">
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <Image src={data?.logo?.url ? `${env.NEXT_PUBLIC_STRAPI_URL}${data?.logo?.url}` : "/images/qxm.svg"} alt="howork" width={130} height={220} />
            </div>
            <p className="text-sm font-semibold !leading-2em text-white md:text-base">{data?.description}</p>
          </div>
          <div className="!mt-5 text-center">
            <button className="scale-100 rounded-lg bg-white/20 px-4 py-3 text-sm font-semibold text-cultured transition-all duration-300 hover:scale-110 md:px-8 md:py-3.5 md:text-base">
              {data?.button?.text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
