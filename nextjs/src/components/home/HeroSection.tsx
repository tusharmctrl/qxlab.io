import React from "react";

export default function HeroSection(data: any) {
  return (
    <section className="bg-before relative flex min-h-[calc(100vh-100px)] flex-shrink-0 flex-grow-0 flex-col items-center justify-center bg-hero-pattern p-5 md:min-h-[calc(100vh-200px)] lg:bg-cover lg:bg-center-right lg:bg-no-repeat xl:min-h-screen">
      <div className="container z-10 w-full">
        <div className="flex w-full">
          <div className="max-w-2xl space-y-5 md:space-y-8">
            <h1 className="text-5xl font-semibold leading-1.08em text-white md:text-6xl lg:text-8xl">
              {/* Generate your QXi Score <span className="text-waterspout">Today</span> */}
              {data?.title}
            </h1>
            <div className="max-w-md">
              <p className="text-xl font-normal text-cultured">
                <span className="mr-2 inline-block">
                  <img src="/images/rocket.svg" className="h-5 w-5" alt="rocket" />
                </span>
                {/* Welcome to QX Lab: Revolutionizing the Customer Experience industry with AI-Powered Innovation! */}
                {data?.description}
              </p>
            </div>
            <button className="rounded-lg bg-pastel-green px-4 py-3 text-sm font-semibold text-cultured md:px-5 md:py-3.5 md:text-base">
              {data?.buttons[0]?.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
