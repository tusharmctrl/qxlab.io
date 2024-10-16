import React from "react";

export default function HeroSection(data: any) {
  return (
    <section className="bg-before relative flex min-h-[calc(100vh-100px)] flex-shrink-0 flex-grow-0 flex-col items-center justify-center p-5 md:min-h-[calc(100vh-200px)] lg:bg-cover lg:bg-center-right lg:bg-no-repeat xl:min-h-screen">
      <div className="p-5">
        <div className="container">
          <div className="mx-auto max-w-3xl md:p-6">
            <h1 className="main-title relative z-10 text-center text-4xl font-medium leading-1.2em min-[1620px]:text-6xl">Qxc</h1>
            <h4 className="main-title relative z-10 text-center text-4xl font-medium leading-1.2em min-[1620px]:text-6xl">{data.title}</h4>
            <div className="mx-auto !mt-6 max-w-432px text-center">
              <p className="text-sm font-medium leading-2em text-cultured">{data.description}</p>
            </div>
            <div className="!mt-8 text-center">
              <button className="scale-100 rounded-xl bg-pastel-green px-4 py-3 text-sm font-semibold text-cultured transition-all duration-300 hover:scale-110 hover:bg-violets-blue md:px-8 md:py-5 md:text-lg">
                {data.button.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
