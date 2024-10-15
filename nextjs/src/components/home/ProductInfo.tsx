import { env } from "@/env.mjs";
import Image from "next/image";
import React from "react";

export default function ProductInfo(data) {
  return (
    <section className="mt-5 px-5 pt-10 xl:px-66px">
      <div className="relative space-y-7">
        <div className="mx-auto max-w-5xl space-y-7 text-center">
          <h2 className="text-3xl font-semibold leading-2em text-white">
            {/* We use proprietary AI that employs over 1000+ industry specific data points to evaluate your site. */}
            {data.title}
          </h2>
          <p className="text-base font-normal leading-8 text-white">
            {/* QXLab melds cutting-edge technology with extensive industry insights to re-define digital user experiences, establishing new standards in website
            performance and UX excellence. */}
            {data.description}
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <Image className="w-[90%]" width={500} height={200} src={`${env.NEXT_PUBLIC_STRAPI_URL}${data.product_image?.url}`} alt="linkedIn-cover" />
        </div>
      </div>
    </section>
  );
}
