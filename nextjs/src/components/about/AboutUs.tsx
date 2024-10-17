import React from "react";

export default function AboutUs(data: any) {
  return (
    <>
      <div className="mt-24 p-5 pt-10 md:pt-14">
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-center text-4xl font-semibold text-white md:text-6xl xl:text-7xl">{data.title}</h2>
            <p className="text-center text-base font-semibold text-white md:text-xl">{data.description}</p>
          </div>
        </div>
      </div>
      <div className="pb-16 pt-7 md:pb-28 md:pt-10 xl:pb-36">
        <div className="border-y-0.5px border-slate-800/45 px-5 py-10 xl:pb-16 xl:pt-10">
          {data.about_section.map((section: any, index: number) => (
            <div key={index} className="mx-auto max-w-2xl space-y-5 pb-10 md:space-y-7">
              <div className="space-y-6">
                <span className="badges-gradient inline-block rounded-md px-4 py-1 text-sm text-white">{section.label}</span>
              </div>
              <p className="text-base font-medium text-cultured md:text-xl">{section.section_description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
