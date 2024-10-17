import { useState } from "react";
import Image from "next/image";
import React from "react";

export default function FAQSection(data) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className="relative p-5">
      <div className="container">
        <h2 className="text-gradient text-center text-4xl font-semibold text-cultured md:text-6xl">{data?.title}</h2>
      </div>
      <div className="mx-auto mt-4 max-w-612px">
        <div className="relative">
          {data?.faqList?.features.map((data, index) => (
            <>
              <div key={index}>
                <div className="flex cursor-pointer items-center justify-between py-3.5" onClick={() => toggleFAQ(index)}>
                  <h4 className="text-lg font-semibold text-white md:text-xl">{data?.title}</h4>
                  {expandedIndex === index ? (
                    <Image src="/images/up-arrows.svg" alt="Up arrow" width={25} height={200} />
                  ) : (
                    <Image src="/images/down-arrow.svg" alt="Down arrow" width={25} height={200} />
                  )}
                </div>
                {expandedIndex === index && (
                  <div className="relative">
                    <p className="text-sm leading-2em text-white">{data?.description}</p>
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
