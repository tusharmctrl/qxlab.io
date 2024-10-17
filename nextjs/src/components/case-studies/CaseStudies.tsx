import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CaseStudies(data: any) {
  const [caseStudy, setCaseStudy] = useState(data?.categories[0]?.case_studies);
  const router = useRouter();
  return (
    <>
      <div className="mt-24 p-5 py-10 md:py-14">
        <div className="container">
          <div className="space-y-12">
            <h2 className="text-center text-4xl font-semibold text-white md:text-6xl xl:text-7xl">Case Studies</h2>
            <div className="relative">
              <ul className="flex flex-wrap items-center justify-center gap-1">
                {data?.categories?.map((category: any, index: number) => (
                  <li key={index}>
                    <span
                      className="cursor-pointer p-2 text-sm font-medium text-white transition-all duration-300 hover:text-cultured"
                      onClick={() => setCaseStudy(category?.case_studies)}
                    >
                      {category.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
              {caseStudy?.map((caseStudy: any, index: number) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <div className="group relative cursor-pointer" onClick={() => router.push(`/case-studies/${caseStudy?.documentId}`)}>
                    <img src="/images/case-01.png" alt="CaseOne" />
                    <div className="overlay-slk absolute bottom-0 left-0 right-0 top-0 bg-white/10 p-4">
                      <p className="flex justify-center text-white">{caseStudy?.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
