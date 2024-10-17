"use client";
import { useQuery } from "@urql/next";
import { CaseStudyData, type CaseStudyDataQuery, CaseStudyDataQueryVariables } from "@/gql/graphql";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { env } from "@/env.mjs";
export default function CaseStudyPage({ params }: { params: { documentId: string } }) {
  const router = useRouter();
  const { documentId } = params;
  const [{ data }] = useQuery<CaseStudyDataQuery, CaseStudyDataQueryVariables>({
    query: CaseStudyData,
    variables: { documentId: documentId },
    requestPolicy: "cache-first"
  });

  const caseStudy = data?.cms?.caseStudies;

  if (!caseStudy) return <p>No case study found.</p>;

  const formatCaseStudyDetails = (details: any) => {
    const lines = details.split("\n");
    return lines.map((line: any, index: number) => {
      if (line.match(/^(The Ask|Activities|Outputs)/)) {
        return (
          <h6 key={index} className="mb-2 text-base font-semibold text-white md:text-2xl">
            {line}
          </h6>
        );
      } else {
        return (
          <p key={index} className="mb-4 text-sm font-semibold italic text-cultured">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <>
      <div className="mt-24 p-5 py-12 pb-8 md:pb-14 lg:pb-20">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-28 xl:gap-36">
            <div className="relative">
              <div className="space-y-8">
                <span
                  className="inline-flex rounded-3xl bg-white px-4 py-1.5 text-xs capitalize hover:cursor-pointer"
                  onClick={() => router.push(`/case-studies`)}
                >
                  back
                </span>
                {caseStudy?.map((data, index) => (
                  <>
                    <h2 className="text-gradient-blue text-3xl font-semibold md:text-5xl xl:text-6xl">{data?.title}</h2>
                    <div className="relative space-y-2">
                      <ul>{formatCaseStudyDetails(data?.casestudy?.details)}</ul>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="animation-svgs pointer-events-none absolute -top-10 right-20 isolate z-0 h-300px w-300px opacity-35 blur-75px md:h-400px md:w-400px">
                <svg
                  className="h-full w-full"
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <circle cx="32.5" cy="32.5" r="32.5" fill="url(#paint_1f3bd0c7)"></circle>
                  <defs>
                    <linearGradient id="paint_1f3bd0c7" x1="0" y1="0" x2="65" y2="65" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#6E51E7">
                        <animate attributeName="stop-color" values="#6E51E7;#E7C0E4;#5372FF;" dur="18s" repeatCount="indefinite"></animate>
                      </stop>
                      <stop offset="1" stop-color="#B270EB">
                        <animate attributeName="stop-color" values="#B270EB;" dur="14s" repeatCount="indefinite"></animate>
                      </stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {caseStudy?.map((data, index) => (
                <div className="relative z-10 overflow-hidden rounded-xl">
                  <Image
                    src={data?.casestudy?.image?.url ? `${env.NEXT_PUBLIC_STRAPI_URL}${data?.casestudy?.image?.url}` : "/images/okr-mapping.png"}
                    height={400}
                    width={400}
                    className="w-full"
                    alt="Okr"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
