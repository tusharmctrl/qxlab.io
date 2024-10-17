import React from "react";
import Qxlogo from "@/../public/images/qx-labs.svg";
import Qxi from "@/../public/images/qxi.svg";
import Qxiimage from "@/../public/images/product-img.png";
import Howork from "@/../public/images/how-its-work.png";
import Uparrow from "@/../public/images/up-arrows.svg";
import Downarrow from "@/../public/images/down-arrow.svg";
import Qxm from "@/../public/images/qxm.svg";
import Qxj from "@/../public/images/qxj.svg";

export default function page() {
  return (
    <>
      <div className="mt-24 p-5">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-12 p-6">
            <h1>
              {" "}
              <img src={Qxi.src} alt="qxi" className="mx-auto" />
            </h1>
            <p className="text-center text-base font-semibold text-white">Instant UX Analysis from a single input – no code required</p>
            <img src={Qxiimage.src} alt="Qxiimage" className="mx-auto" />
            <div className="!mt-6">
              <p className="text-base font-medium leading-2em text-cultured">
                QXi is an AI-powered insight platform designed to transform how businesses understand and improve their digital experience.
              </p>
              <p className="text-base font-medium leading-2em text-cultured">
                By simply entering a URL, or inputting an app name, QXi leverages advanced algorithms to analyze your brand, benchmarked against your
                competitors.
              </p>
              <p className="text-base font-medium leading-2em text-cultured">
                This process, which requires no coding or complex setup, generates a QX Index that quantifies your sites:
              </p>
              <ul className="my-5 ml-4 list-disc space-y-2 text-cultured">
                <li>
                  <p className="text-base font-medium text-cultured">Performance</p>
                </li>
                <li>
                  <p className="text-base font-medium text-cultured">Perception</p>
                </li>
                <li>
                  <p className="text-base font-medium text-cultured">Usability</p>
                </li>
                <li>
                  <p className="text-base font-medium text-cultured">Journey</p>
                </li>
                <li>
                  <p className="text-base font-medium text-cultured">Overall Experience</p>
                </li>
              </ul>
              <p className="text-base font-medium leading-2em text-cultured">
                Ideal for businesses aiming to enhance their online engagement, QXi offers seamless, data-driven, analysis and recommendations to boost your
                digital experiences.
              </p>
            </div>
            <div className="!mt-5 text-center">
              <button className="scale-100 rounded-lg bg-pastel-green px-4 py-3 text-sm font-semibold text-cultured transition-all duration-300 hover:scale-110 md:px-6 md:py-3.5 md:text-base">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* How It Works */}
      <div className="relative p-5">
        <div className="container">
          <h2 className="text-gradient text-center text-4xl font-semibold text-cultured md:text-6xl">How It Works</h2>
        </div>
        <div className="container mt-4 rounded-3xl border-0.5px border-black/30 p-6 md:p-8 xl:p-12">
          <div className="flex flex-wrap items-center gap-y-12 md:gap-y-20">
            <div className="order-2 w-full space-y-10 xl:order-1 xl:w-2/5">
              <div className="mr-auto flex items-start gap-8 xl:max-w-80">
                <div className="gradient-style flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-semibold text-cultured">1</div>
                <div className="relative space-y-2">
                  <h4 className="text-xl font-medium text-white">Enter URL</h4>
                  <p className="text-sm font-normal leading-6 text-cultured">
                    Enter your website URL or app name to kickstart the analysis. No complex setup needed.
                  </p>
                </div>
              </div>
              <div className="mr-auto flex items-start gap-5 xl:max-w-80">
                <div className="gradient-style-one flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-semibold text-cultured">2</div>
                <div className="relative space-y-2">
                  <h4 className="text-xl font-medium text-white">Magic Happens!</h4>
                  <p className="text-sm font-normal leading-6 text-cultured">
                    Our AI analyzes your digital presence in real-time, using industry-specific benchmarks.
                  </p>
                </div>
              </div>
              <div className="mr-auto flex items-start gap-5 xl:max-w-80">
                <div className="gradient-style-one flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-semibold text-cultured">2</div>
                <div className="relative space-y-2">
                  <h4 className="text-xl font-medium text-white">Analysis & Reccommendations</h4>
                  <p className="text-sm font-normal leading-6 text-cultured">
                    Get detailed reports on performance, usability, and more, with actionable insights and easy export options recommendations to enhance your
                    digital experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 w-full xl:order-2 xl:w-3/5">
              <div className="relative">
                <img src={Howork.src} alt="howork" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Faq */}
      <div className="relative p-5">
        <div className="container">
          <h2 className="text-gradient text-center text-4xl font-semibold text-cultured md:text-6xl">FAQ</h2>
          <div className="mx-auto mt-4 max-w-612px">
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">What is QX Index?</h4>
                <img src={Uparrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative">
                <p className="text-sm leading-2em text-white">
                  The QX Index is a composite score that quantifies a brand's digital experience quality. It is derived from multiple categories such as
                  usability, performance, perception, and accessibility.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">How frequently is the data updated?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative hidden">
                <p className="text-sm leading-2em text-white">
                  The frequency of data updates is customizable based on the subscription plan. For example, users with a subscription plan may have their data
                  updated daily, while Freemium users may have less frequent updates.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">Can I export the reports?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative hidden">
                <p className="text-sm leading-2em text-white">
                  Yes, users can export the reports in various formats such as PDF or CSV for further analysis and sharing with stakeholders.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">Are there any limitations to the Freemium plan?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative hidden">
                <p className="text-sm leading-2em text-white">
                  Yes, the Freemium plan provides limited access to basic features and scores without in-depth analysis or recommendations. Users will need to
                  upgrade to access comprehensive insights and competitor analysis.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">What industries does the QXi Tool support?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative hidden">
                <p className="text-sm leading-2em text-white">
                  Currently, the QXi Tool supports several industries, including Gaming, OTT (Over-the-Top media services) TelCo and D2C for the MVP release.
                  More industries will be added in future updates.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">What categories does the QXi Tool analyse?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative hidden">
                <p className="text-sm leading-2em text-white">Currently, the QXi Tool provides analysis against the following categories:</p>
                <ul className="my-5 ml-4 list-disc space-y-1 text-cultured">
                  <li>
                    <p className="text-xs font-medium text-cultured">Overall Experience</p>
                  </li>
                  <li>
                    <p className="text-xs font-medium text-cultured">Usability</p>
                  </li>
                  <li>
                    <p className="text-xs font-medium text-cultured">Customer Journeys</p>
                  </li>
                  <li>
                    <p className="text-xs font-medium text-cultured">Perception</p>
                  </li>
                  <li>
                    <p className="text-xs font-medium text-cultured">Performance</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">How long does it take to generate a report?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative hidden">
                <p className="text-sm leading-2em text-white">
                  Report generation time varies depending on the complexity of the analysis and the number of competitors included. Typically, it takes a few
                  minutes to complete the analysis and generate a report.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">Can I customize the analysis parameters?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative hidden">
                <p className="text-sm leading-2em text-white">
                  Yes and No. The analysis categories are set. However, you can amend what brands you analyze and what markets these brands are analysed from.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">Is there a limit to the number of searches I can perform?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative hidden">
                <p className="text-sm leading-2em text-white">
                  The number of searches you can perform depends on your subscription plan. Freemium users have limited searches, while paid plans offer more
                  searches and the option to purchase additional credits.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">How do I upgrade my plan?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative hidden">
                <p className="text-sm leading-2em text-white">
                  You can upgrade your plan directly through the QXi Tool's dashboard by selecting the upgrade or Manage Plans option and following the prompts
                  for payment and plan selection.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-3.5">
                <h4 className="text-lg font-semibold text-white md:text-xl">Do you offer enterprise solutions?</h4>
                <img src={Downarrow.src} className="w-5" alt="Uparrow" />
              </div>
              <div className="relative hidden">
                <p className="text-sm leading-2em text-white">
                  Yes, we offer enterprise solutions tailored to the needs of large organizations, including custom integrations and white-label options. Please
                  contact our sales team for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* QXm */}
      <div className="relative bg-dark-slate-gray p-5 py-20 md:py-40">
        <div className="container">
          <div className="relative mx-auto max-w-590px space-y-5 pt-5 text-center md:space-y-8 md:pt-10">
            <img src={Qxm.src} alt="Qxm" className="mx-auto w-28 md:w-40" />
            <p className="text-sm font-semibold !leading-2em text-white md:text-base">
              QXm , Our AI-powered digital maturity tool that measures how prepared your business is to become truly user-centric
            </p>
            <div className="!mt-5 text-center">
              <button className="scale-100 rounded-lg bg-white/20 px-4 py-3 text-sm font-semibold text-cultured transition-all duration-300 hover:scale-110 md:px-8 md:py-3.5 md:text-base">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* QXj */}
      <div className="relative bg-blue-sapphire p-5 py-20 md:py-40">
        <div className="container">
          <div className="relative mx-auto max-w-590px space-y-5 pt-5 text-center md:space-y-8 md:pt-10">
            <img src={Qxj.src} alt="Qxj" className="mx-auto w-28 md:w-40" />
            <p className="text-sm font-semibold !leading-2em text-white md:text-base">
              QXj leverages advanced AI to map out every step of your customer’s journey, providing a clear visualization of their experience across your
              digital platforms.
            </p>
            <div className="!mt-5 text-center">
              <button className="scale-100 rounded-lg bg-white/20 px-4 py-3 text-sm font-semibold text-cultured transition-all duration-300 hover:scale-110 md:px-8 md:py-3.5 md:text-base">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
