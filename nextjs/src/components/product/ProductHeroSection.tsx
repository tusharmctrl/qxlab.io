import React from "react";
import Qxi from "@/../public/images/qxi.svg";
import Image from "next/image";
import { env } from "@/env.mjs";
import BlurFade from "../ui/blur-fade";
export default function ProductHeroSection(data: any) {
  const renderContent = (description: any) => {
    const sections = description.split("\n");
    return sections.map((section: any, index: any) => {
      return (
        <p key={index} className="text-base font-medium leading-2em text-cultured">
          {section.trim()}
        </p>
      );
    });
  };

  return (
    <div className="mt-24 p-5">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-12 p-6">
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <Image
                src={data?.logo?.url ? `${env.NEXT_PUBLIC_STRAPI_URL}${data?.logo?.url}` : "/images/qxi.svg"}
                alt="qxi"
                className="Qxi"
                width={130}
                height={220}
              />
            </div>
            <p className="text-center text-base font-semibold text-white">{data?.title}</p>
          </div>
          <BlurFade delay={1} inView>
            <Image
              src={data?.productImage?.url ? `${env.NEXT_PUBLIC_STRAPI_URL}${data?.productImage?.url}` : "/images/product-img.png"}
              alt="Qxiimage"
              className="mx-auto"
              width={700}
              height={500}
            />
          </BlurFade>
          <div className="!mt-6">{renderContent(data?.description)}</div>
          <div className="!mt-5 text-center">
            <button className="scale-100 rounded-lg bg-pastel-green px-4 py-3 text-sm font-semibold text-cultured transition-all duration-300 hover:scale-110 md:px-6 md:py-3.5 md:text-base">
              {data?.button?.text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
