import React from "react";

export default function CardSection(data: any) {
  return (
    <section className="relative -mt-14 p-5">
      <div className="container">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {data?.card?.map((data: any, index: number) => (
            <div key={index} className="space-y-1 rounded-2xl bg-slate-gray/60 p-6 md:p-9">
              <span className="text-base font-semibold text-waterspout">{data?.label}</span>
              <h5 className="text-2xl font-semibold text-white">{data?.title}</h5>
              <p className="text-base leading-8 text-cultured">{data?.description}</p>
              <a href="#" className="text-base font-normal text-maximum-blue-green">
                {data?.more?.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
