import React from "react";
import Qxlogo from "@/../public/images/qx-labs.svg";

export default function page() {
  return (
    <>
      {/* Our Services */}
      <div className="mt-24 p-5 pt-10 md:pt-14">
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-center text-4xl font-semibold text-white md:text-6xl xl:text-7xl">About Us</h2>
            <p className="text-center text-base font-semibold text-white md:text-xl">Automated Digital Customer Experience</p>
          </div>
        </div>
      </div>
      {/* Our Services list */}
      <div className="pb-16 pt-7 md:pb-28 md:pt-10 xl:pb-36">
        <div className="border-y-0.5px border-slate-800/45 px-5 py-10 xl:pb-16 xl:pt-10">
          <div className="mx-auto max-w-2xl space-y-5 md:space-y-7">
            <div className="space-y-6">
              <span className="badges-gradient inline-block rounded-md px-4 py-1 text-sm text-white">Our Mission</span>
              <h2 className="text-base font-medium text-cultured md:text-xl">Introducing QXLab.</h2>
            </div>
            <p className="text-base font-medium text-cultured md:text-xl">
              Customer Experience (CX) is a multifaceted concept, one that means a lot of different things to a lot of different people.
            </p>
            <p className="text-base font-medium text-cultured md:text-xl">At it’s core, CX is an enablement expertise.</p>
            <p className="text-base font-medium text-cultured md:text-xl">
              The fundamental mission of any CX team is to empower a business to make more informed and impactful decisions, all while keeping the customer as
              the focal point of that decision making process.
            </p>
            <p className="text-base font-medium text-cultured md:text-xl">Traditionally, CX has been approached from two angles:</p>
            <p className="text-base font-medium text-waterspout md:text-xl">1. Assessing an organisations ability to deliver quality experiences (inputs)</p>
            <p className="text-base font-medium text-waterspout md:text-xl">2. Improving the quality of those experiences (outputs).</p>
            <p className="text-base font-medium text-cultured md:text-xl">Both of which have been measured via outdated, manual and costly methodologies.</p>
            <p className="text-base font-medium text-cultured md:text-xl">QXLab has been created to revolutionize this paradigm.</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl space-y-5 md:mt-24 md:space-y-7 xl:mt-32">
            <div className="space-y-6">
              <span className="badges-gradient inline-block rounded-md px-4 py-1 text-sm text-white">Our Background</span>
              <h2 className="text-base font-medium text-cultured md:text-xl">
                We have unique, comprehensive and leading backgrounds in Digital Customer Experience.
              </h2>
            </div>
            <p className="text-base font-medium text-cultured md:text-xl">
              We have worked within some of the world's biggest companies, with experience in-house, at agencies and in start-ups.
            </p>
            <p className="text-base font-medium text-cultured md:text-xl">
              We have developed tried and tested approaches to Digital CX that are proven to work, across multiple industries. We are commercial operators
              responsible for £10s-of-millions in increased revenues.
            </p>
            <p className="text-base font-medium text-cultured md:text-xl">
              We have led large, international teams in the definition, design, development and improvement of multiple sites and apps.
            </p>
            <p className="text-base font-medium text-cultured md:text-xl">
              Our expertise is focused on defining appropriate, pragmatic and measurably effective CX programmes for leading digital companies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
