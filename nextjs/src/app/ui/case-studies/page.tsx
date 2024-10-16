import React from "react";
import Qxlogo from "@/../public/images/qx-labs.svg";
import CaseOne from "@/../public/images/case-01.png";
import Designsystem from "@/../public/images/design-system.png";
import Designcreation from "@/../public/images/design-creation.png";
import Cxreportion from "@/../public/images/cx-reportion.png";
import Heuristic from "@/../public/images/heuristic-analysis.png";
import Experiment from "@/../public/images/experiment.png";
import Measurement from "@/../public/images/measurement.png";
import Operation from "@/../public/images/cs-operation.png";
import Strategy from "@/../public/images/product-strategy.png";

export default function page() {
  return (
    <>
      {/* Our Services */}
      <div className="mt-24 p-5 py-10 md:py-14">
        <div className="container">
          <div className="space-y-12">
            <h2 className="text-center text-4xl font-semibold text-white md:text-6xl xl:text-7xl">Case Studies</h2>
            <div className="relative">
              <ul className="flex flex-wrap items-center justify-center gap-1">
                <li>
                  <a href="#" className="p-2 text-sm font-medium text-white transition-all duration-300 hover:text-cultured">
                    All
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2 text-sm font-medium text-white transition-all duration-300 hover:text-cultured">
                    Design & Implementation
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2 text-sm font-medium text-white transition-all duration-300 hover:text-cultured">
                    Insight & Understanding
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2 text-sm font-medium text-white transition-all duration-300 hover:text-cultured">
                    Measurement & Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2 text-sm font-medium text-white transition-all duration-300 hover:text-cultured">
                    Process & Accountability
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2 text-sm font-medium text-white transition-all duration-300 hover:text-cultured">
                    Vision & Strategy
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
              <div className="overflow-hidden rounded-lg">
                <a href="#" className="group relative">
                  <img src={CaseOne.src} alt="CaseOne" />
                  <div className="overlay-slk absolute bottom-0 left-0 right-0 top-0 bg-white/10 p-4 opacity-0 group-hover:opacity-100"></div>
                </a>
              </div>
              {/* 02 */}
              <div className="overflow-hidden rounded-lg">
                <a href="#" className="group relative">
                  <img src={Designsystem.src} alt="CaseOne" />
                  <div className="overlay-slk absolute bottom-0 left-0 right-0 top-0 bg-white/10 p-4 opacity-0 group-hover:opacity-100"></div>
                </a>
              </div>
              {/* 03 */}
              <div className="overflow-hidden rounded-lg">
                <a href="#" className="group relative">
                  <img src={Designcreation.src} alt="CaseOne" />
                  <div className="overlay-slk absolute bottom-0 left-0 right-0 top-0 bg-white/10 p-4 opacity-0 group-hover:opacity-100"></div>
                </a>
              </div>
              {/* 04 */}
              <div className="overflow-hidden rounded-lg">
                <a href="#" className="group relative">
                  <img src={Cxreportion.src} alt="CaseOne" />
                  <div className="overlay-slk absolute bottom-0 left-0 right-0 top-0 bg-white/10 p-4 opacity-0 group-hover:opacity-100"></div>
                </a>
              </div>

              {/* 06 */}
              <div className="overflow-hidden rounded-lg">
                <a href="#" className="group relative">
                  <img src={Heuristic.src} alt="CaseOne" />
                  <div className="overlay-slk absolute bottom-0 left-0 right-0 top-0 bg-white/10 p-4 opacity-0 group-hover:opacity-100"></div>
                </a>
              </div>
              {/* 07 */}
              <div className="overflow-hidden rounded-lg">
                <a href="#" className="group relative">
                  <img src={Experiment.src} alt="CaseOne" />
                  <div className="overlay-slk absolute bottom-0 left-0 right-0 top-0 bg-white/10 p-4 opacity-0 group-hover:opacity-100"></div>
                </a>
              </div>
              {/* 08 */}
              <div className="overflow-hidden rounded-lg">
                <a href="#" className="group relative">
                  <img src={Measurement.src} alt="CaseOne" />
                  <div className="overlay-slk absolute bottom-0 left-0 right-0 top-0 bg-white/10 p-4 opacity-0 group-hover:opacity-100"></div>
                </a>
              </div>
              {/* 09 */}
              <div className="overflow-hidden rounded-lg">
                <a href="#" className="group relative">
                  <img src={Operation.src} alt="CaseOne" />
                  <div className="overlay-slk absolute bottom-0 left-0 right-0 top-0 bg-white/10 p-4 opacity-0 group-hover:opacity-100"></div>
                </a>
              </div>
              {/* 10 */}
              <div className="overflow-hidden rounded-lg">
                <a href="#" className="group relative">
                  <img src={Strategy.src} alt="CaseOne" />
                  <div className="overlay-slk absolute bottom-0 left-0 right-0 top-0 bg-white/10 p-4 opacity-0 group-hover:opacity-100"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
