import React from "react";
import Qxlogo from "@/../public/images/qx-labs.svg";
import Mockup from "@/../public/images/people.png";
import Blogone from "@/../public/images/blog-img.jpg";
import Blogtwo from "@/../public/images/blog-img-01.jpg";
import Blogthree from "@/../public/images/blog-img-02.jpg";
export default function page() {
  return (
    <>
      <section className="lg:bg-blog-pattern bg-before relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-center p-5 lg:bg-cover lg:bg-center-right lg:bg-no-repeat">
        <div className="container z-10">
          <div className="min-h-40vmax py-72px mx-auto mb-16 grid max-w-5xl place-content-end text-center">
            <h1 className="leading-1.4em text-5xl font-semibold text-white md:text-6xl lg:text-8xl">Delivering Our First Proof of Concept Reports</h1>
            <ul className="my-5 flex items-center justify-center gap-10">
              <li className="before:top-18px relative before:absolute before:-right-6 before:h-1 before:w-1 before:rounded-full before:bg-white before:content-['']">
                <div className="flex items-center gap-5">
                  <img src={Mockup.src} className="h-10 w-10 rounded-full" alt="mockup" />
                  <a href="#" className="text-base font-medium text-white transition-all duration-500 hover:text-cultured">
                    qxlab
                  </a>
                </div>
              </li>
              <li className="relative before:absolute before:-right-6 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-white before:content-['']">
                <a href="#" className="text-base font-medium text-white transition-all duration-500 hover:text-cultured">
                  September 19, 2024
                </a>
              </li>
              <li className="relative before:absolute before:-right-6 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-white last:before:content-[unset]">
                <a href="#" className="text-base font-medium text-white transition-all duration-500 hover:text-cultured">
                  AI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative p-5">
        <div className="container">
          <div className="space-y-2 md:px-5">
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              At QX Lab, we’ve been working tirelessly over the last few months to turn our bright idea in to reality. Today, we’re thrilled to announce the
              delivery of our very first batch of proof-of-concept (PoC) reports, marking a major milestone for the company.
            </p>
            <h3 className="!mb-5 text-2xl font-semibold text-white md:!mb-8 md:text-3xl xl:!mb-10 xl:text-40px">Three Reports, Three Markets, One Industry:</h3>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              Our initial delivery was focused on the iGaming industry. We delivered two <span className="font-semibold">Competitor Benchmarking</span> reports
              and one <span className="font-semibold">Expert Review</span>, across three different regions.
            </p>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              Our initial delivery was focused on the iGaming industry. We delivered two Each report was generated using our proprietary{" "}
              <span className="font-semibold">QXi</span> tool; delivering scores, actionable insights, and tailored improvement recommendations across four key
              experience categories – <span className="font-semibold">Performance, Perception, Usability and Customer Journeys.</span>
            </p>
            <h3 className="!mb-5 text-2xl font-semibold text-white md:!mb-8 md:text-3xl xl:!mb-10 xl:text-40px">Insights That Move the Needle:</h3>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              What makes these reports truly transformative is the speed and efficiency of the analysis, whilst maintaining the quality and actionability of the
              recommendations.
            </p>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              Historically, reports of this caliber could take weeks or even months to compile, often costing clients tens of thousands of pounds.
            </p>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              In contrast, our AI-driven platform generated these reports almost instantly—and at a fraction of the cost. The aim of each of these reports was
              not only to provide cheaper insight; but to provide recommendations to the clients that matched that of a human researcher; ones that can actually
              move the needle.
            </p>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              The reports delivered contained an average of 32 different improvement recommendations. The variation in scores vs a manual human analysis was
              &lt;5%. A good start.
            </p>
            <h3 className="!mb-5 text-2xl font-semibold text-white md:!mb-8 md:text-3xl xl:!mb-10 xl:text-40px">What’s Next: Expanding Our Reach</h3>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              The delivery of these first three reports is just the beginning. Over the next two weeks, we plan to deliver eight more reports, covering an
              additional 20 brands across three different industries—OTT, Telecom, and eCommerce – the aim here is to validate the different industry models
              that power the QXi tool.
            </p>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              Each report will continue to leverage the QXi tool’s full range of capabilities, helping clients across various sectors better understand and
              improve their customer experiences.
            </p>
            <h3 className="!mb-5 text-2xl font-semibold text-white md:!mb-8 md:text-3xl xl:!mb-10 xl:text-40px">Learning and Improving</h3>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              As with any proof of concept, there’s plenty of room for refinement (and we successfully managed to break lots of things). Catering for multiple
              languages and locales and the need to authenticate user accounts to measure certain customer journeys proved tricky, but it wouldnt be fun if it
              was simple, would it?
            </p>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">Couple of key improvements are still to to be made, too.</p>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              Now we’ve run our first batch of reports, we’re excited to start trending this data over time—a feature that will allow clients to track
              improvements or changes in their customer experience over the long term. Furthermore, the more brands within industries that we measure, the more
              we can begin to classify best practice examples, that can feed in to our models and further advance the recommendations we generate.
            </p>
            <h3 className="!mb-5 text-2xl font-semibold text-white md:!mb-8 md:text-3xl xl:!mb-10 xl:text-40px">Looking Ahead: Soft Launch and Beyond</h3>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              Once the remaining case study reports are delivered, we’ll be gearing up for the next big milestone: the{" "}
              <span className="font-semibold">soft launch</span> of our <span className="font-semibold">QXi platform.</span>
            </p>
            <p className="text-base font-medium leading-1.8em text-cultured md:text-xl">
              This platform will empower any user to create an account, purchase a plan and generate their own reports, instantly. For now, huge thanks for the
              trust to our POC clients thus far and to the incredible team building these unique solutions. Stay tuned – lot’s more on the way.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t-0.5px relative my-5 border-white/5 p-5 pb-0 pt-8 md:my-8">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-y-5 md:px-5">
            <div className="flex flex-wrap items-center gap-y-5">
              <span className="mr-5 text-sm font-normal text-cultured">Tags:</span>
              <ul className="flex flex-wrap items-center gap-3">
                <li>
                  <a href="#" className="bg-pale-silver block scale-100 rounded-3xl px-3 py-1 text-xs text-black transition-all duration-500 hover:scale-110">
                    AI
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-pale-silver block scale-100 rounded-3xl px-3 py-1 text-xs text-black transition-all duration-500 hover:scale-110">
                    benchmarking
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-pale-silver block scale-100 rounded-3xl px-3 py-1 text-xs text-black transition-all duration-500 hover:scale-110">
                    Customer Experience
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-pale-silver block scale-100 rounded-3xl px-3 py-1 text-xs text-black transition-all duration-500 hover:scale-110">
                    Report
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-pale-silver block scale-100 rounded-3xl px-3 py-1 text-xs text-black transition-all duration-500 hover:scale-110">
                    UX
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <span className="mr-5 text-sm font-normal uppercase text-cultured">Share On</span>
              <ul className="flex items-center gap-5">
                <li>
                  <a href="#" className="scale-100 transition-all duration-300 hover:scale-110">
                    <svg className="fill-pale-silver w-4" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M504 256C504 119 393 8 256 8C119 8 8 119 8 256C8 379.78 98.69 482.38 217.25 501V327.69H154.25V256H217.25V201.36C217.25 139.21 254.25 104.88 310.92 104.88C338.06 104.88 366.44 109.72 366.44 109.72V170.72H335.16C304.36 170.72 294.75 189.84 294.75 209.45V256H363.53L352.53 327.69H294.75V501C413.31 482.38 504 379.78 504 256Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="scale-100 transition-all duration-300 hover:scale-110">
                    <svg className="fill-pale-silver w-4" viewBox="0 0 512 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M459.37 103.634C459.695 108.182 459.695 112.731 459.695 117.279C459.695 255.999 354.112 415.837 161.137 415.837C101.685 415.837 46.457 398.618 0 368.731C8.447 369.705 16.568 370.03 25.34 370.03C74.395 370.03 119.553 353.462 155.614 325.198C109.482 324.223 70.822 294.01 57.502 252.426C64 253.4 70.497 254.05 77.32 254.05C86.741 254.05 96.163 252.75 104.934 250.477C56.853 240.73 20.791 198.497 20.791 147.492V146.193C34.76 153.99 51.005 158.863 68.222 159.512C39.958 140.669 21.441 108.507 21.441 72.121C21.441 52.629 26.638 34.761 35.735 19.167C87.39 82.842 165.035 124.425 252.1 128.974C250.476 121.177 249.501 113.056 249.501 104.934C249.501 47.106 296.283 0 354.435 0C384.648 0 411.937 12.67 431.105 33.137C454.82 28.589 477.561 19.817 497.704 7.797C489.906 32.163 473.338 52.63 451.572 65.624C472.689 63.351 493.156 57.502 511.998 49.381C497.706 70.172 479.837 88.689 459.37 103.634Z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#" className="scale-100 transition-all duration-300 hover:scale-110">
                    <svg className="fill-pale-silver w-4" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M47 24C47 37.2581 36.4819 48 23.5 48C21.0742 48 18.7431 47.6226 16.5448 46.9258C17.5018 45.329 18.9327 42.7161 19.4633 40.6355C19.7476 39.5129 20.9226 34.9258 20.9226 34.9258C21.6901 36.4161 23.9264 37.6839 26.3048 37.6839C33.3927 37.6839 38.5002 31.0258 38.5002 22.7516C38.5002 14.8258 32.1609 8.89355 24.0117 8.89355C13.8726 8.89355 8.48085 15.8419 8.48085 23.4194C8.48085 26.9419 10.3192 31.3258 13.2472 32.7194C13.6925 32.9323 13.9294 32.8355 14.0337 32.4C14.1095 32.071 14.5075 30.4355 14.6875 29.6806C14.7444 29.4387 14.7159 29.2258 14.5264 28.9935C13.5694 27.7839 12.7923 25.5774 12.7923 23.5161C12.7923 18.2226 16.7153 13.1032 23.4052 13.1032C29.176 13.1032 33.2222 17.1194 33.2222 22.8677C33.2222 29.3613 30.0099 33.8613 25.831 33.8613C23.5284 33.8613 21.7944 31.9161 22.3534 29.5258C23.0167 26.671 24.296 23.5935 24.296 21.5323C24.296 19.6935 23.3294 18.1548 21.3206 18.1548C18.9611 18.1548 17.0659 20.6419 17.0659 23.9806C17.0659 26.1097 17.7671 27.5419 17.7671 27.5419C17.7671 27.5419 15.4456 37.5871 15.0192 39.4645C14.5454 41.5355 14.7349 44.4581 14.9339 46.3548C6.19718 42.8613 0 34.171 0 24C0 10.7419 10.5181 0 23.5 0C36.4819 0 47 10.7419 47 24Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="scale-100 transition-all duration-300 hover:scale-110">
                    <svg className="fill-pale-silver w-4" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M416 0H31.9C14.3 0 0 14.5 0 32.3V415.7C0 433.5 14.3 448 31.9 448H416C433.6 448 448 433.5 448 415.7V32.3C448 14.5 433.6 0 416 0ZM135.4 384H69V170.2H135.5V384H135.4ZM102.2 141C80.9 141 63.7 123.7 63.7 102.5C63.7 81.3 80.9 64 102.2 64C123.4 64 140.7 81.3 140.7 102.5C140.7 123.8 123.5 141 102.2 141ZM384.3 384H317.9V280C317.9 255.2 317.4 223.3 283.4 223.3C248.8 223.3 243.5 250.3 243.5 278.2V384H177.1V170.2H240.8V199.4H241.7C250.6 182.6 272.3 164.9 304.6 164.9C371.8 164.9 384.3 209.2 384.3 266.8V384Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-612px space-y-4 px-5 py-9">
            <a
              href="#"
              className="bg-pale-silver inline-flex scale-100 items-center gap-2 rounded-3xl px-4 py-2 text-sm font-semibold uppercase text-black transition-all duration-500 hover:scale-110"
            >
              <span>
                <svg className="w-4 fill-black" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.82858 7.41406L9.82843 1.41421L8.41421 0L0 8.41421L8.41421 16.8284L9.82843 15.4142L3.82828 9.41406H21.4141V7.41406H3.82858Z"
                  />
                </svg>
              </span>
              Previous Article
            </a>
            <h4 className="text-pale-silver text-base font-semibold md:text-xl">Welcome to QXLab</h4>
          </div>
        </div>
      </section>
      <section className="mb-8 p-5">
        <div className="container">
          <div className="space-y-8">
            <h2 className="text-26px text-center font-semibold text-white">You may also like</h2>
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="hover:shadow-card-hover cursor-pointer rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img src={Blogone.src} className="rounded-t-2xl" alt="Blogone" />
                </div>
                <div className="px-5 pb-5 pt-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="flex-shrink-0 text-sm font-semibold text-cultured">2 Months ago</p>
                    <div className="border-0.1px w-full border-cultured/15"></div>
                    <p className="flex-shrink-0 text-sm font-semibold text-cultured">AI</p>
                  </div>
                  <h4 className="text-22px my-3 mb-16 font-semibold text-white transition-all duration-300 hover:text-waterspout">Welcome to QXLab</h4>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-base font-semibold text-white transition-all duration-300 hover:text-waterspout md:text-lg"
                  >
                    Read More{" "}
                    <span>
                      <svg className="w-1.5 fill-white group-hover:fill-waterspout" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L15.0607 12.9393C15.6464 13.5251 15.6464 14.4749 15.0607 15.0607L3.06066 27.0607C2.47487 27.6464 1.52513 27.6464 0.93934 27.0607C0.353553 26.4749 0.353553 25.5251 0.93934 24.9393L11.8787 14L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              {/* 02 */}
              <div className="hover:shadow-card-hover cursor-pointer rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img src={Blogtwo.src} className="rounded-t-2xl" alt="Blogone" />
                </div>
                <div className="px-5 pb-5 pt-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="flex-shrink-0 text-sm font-semibold text-cultured">2 Months ago</p>
                    <div className="border-0.1px w-full border-cultured/15"></div>
                    <p className="flex-shrink-0 text-sm font-semibold text-cultured">AI</p>
                  </div>
                  <h4 className="text-22px my-3 mb-16 font-semibold text-white transition-all duration-300 hover:text-waterspout">
                    Embracing AI Without Losing the Human Touch: A QX Lab Perspective
                  </h4>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-base font-semibold text-white transition-all duration-300 hover:text-waterspout md:text-lg"
                  >
                    Read More{" "}
                    <span>
                      <svg className="w-1.5 fill-white group-hover:fill-waterspout" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L15.0607 12.9393C15.6464 13.5251 15.6464 14.4749 15.0607 15.0607L3.06066 27.0607C2.47487 27.6464 1.52513 27.6464 0.93934 27.0607C0.353553 26.4749 0.353553 25.5251 0.93934 24.9393L11.8787 14L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              {/* 03 */}
              <div className="hover:shadow-card-hover cursor-pointer rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img src={Blogthree.src} className="rounded-t-2xl" alt="Blogone" />
                </div>
                <div className="px-5 pb-5 pt-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="flex-shrink-0 text-sm font-semibold text-cultured">5 Months ago</p>
                    <div className="border-0.1px w-full border-cultured/15"></div>
                    <p className="flex-shrink-0 text-sm font-semibold text-cultured">AI</p>
                  </div>
                  <h4 className="text-22px my-3 mb-16 font-semibold text-white transition-all duration-300 hover:text-waterspout">
                    QXLab vs. Traditional Ways of Gathering Customer Insight and NPS
                  </h4>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-base font-semibold text-white transition-all duration-300 hover:text-waterspout md:text-lg"
                  >
                    Read More{" "}
                    <span>
                      <svg className="w-1.5 fill-white group-hover:fill-waterspout" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L15.0607 12.9393C15.6464 13.5251 15.6464 14.4749 15.0607 15.0607L3.06066 27.0607C2.47487 27.6464 1.52513 27.6464 0.93934 27.0607C0.353553 26.4749 0.353553 25.5251 0.93934 24.9393L11.8787 14L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
