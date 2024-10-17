import { env } from "@/env.mjs";
import Image from "next/image";
import React from "react";

export default function WorksSection(data) {
  return (
    <div className="relative p-5">
      <div className="container">
        <h2 className="text-gradient text-center text-4xl font-semibold text-cultured md:text-6xl">{data?.title}</h2>
      </div>
      <div className="container mt-4 rounded-3xl border-0.5px border-black/30 p-6 md:p-8 xl:p-12">
        <div className="flex flex-wrap items-center gap-y-12 md:gap-y-20">
          <div className="order-2 w-full space-y-10 xl:order-1 xl:w-2/5">
            {data?.howItWorks?.worksFeature?.features.map((data, index) => (
              <div className="mr-auto flex items-start gap-8 xl:max-w-80">
                <div className="gradient-style flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-semibold text-cultured">
                  {index + 1}
                </div>
                <div className="relative space-y-2">
                  <h4 className="text-xl font-medium text-white">{data?.title}</h4>
                  <p className="text-sm font-normal leading-6 text-cultured">{data?.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 w-full xl:order-2 xl:w-3/5">
            <div className="relative">
              <Image
                src={data?.howItWorks.image?.url ? `${env.NEXT_PUBLIC_STRAPI_URL}${data?.howItWorks.image?.url}` : "/images/how-its-work.png"}
                alt="howork"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
