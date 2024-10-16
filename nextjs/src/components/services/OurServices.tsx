import { env } from "@/env.mjs";
import React from "react";

export default function OurServices(data: any) {
  return (
    <>
      {/* Our Services */}
      <div className="bg-msu-green p-5 pt-10 md:pt-14">
        <div className="container">
          <div className="space-y-3">
            <h2 className="text-center text-4xl font-semibold text-cultured md:text-5xl xl:text-6xl"> {data.title}</h2>
            <p className="text-center text-sm font-normal text-white">
              {/* Our team of experts are available to lead and upskill your teams across the multiple areas of Customer Experience. */}
              {data.description}
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 py-5 md:py-12 xl:py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:px-20">
            {data.services_cards.map((card: any) => {
              return (
                <div className="space-y-3 rounded-3xl bg-slate-gray/60 p-6 text-center transition-all duration-500 hover:-translate-y-4 md:p-9">
                  <img src={`${env.NEXT_PUBLIC_STRAPI_URL}${card.icon.url}`} alt={card.name} className="mx-auto mb-5" />
                  <h5 className="text-xl font-semibold text-white">{card.name}</h5>
                  <p className="text-sm font-medium leading-7 text-white">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
