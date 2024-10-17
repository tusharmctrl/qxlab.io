import React from "react";
import Marquee from "../ui/marquee";
import { MarqueeLogos } from "../comman/MarqueeLogos";
import { CoolMode } from "../ui/cool-mode";
import { Button } from "../ui/button";
import BlurFade from "../ui/blur-fade";
import HyperText from "../ui/hyper-text";

const logos = [
  {
    img: "/images/fosh-tech.png"
  },
  {
    img: "/images/dazn.png"
  },
  {
    img: "/images/betfair.png"
  },
  {
    img: "/images/igt.png"
  },
  {
    img: "/images/playtech.png"
  },
  {
    img: "/images/markor.png"
  }
];

export default function HeroSection(data: any) {
  return (
    <section className="bg-before relative flex min-h-[calc(100vh-100px)] flex-shrink-0 flex-grow-0 flex-col items-center justify-center bg-hero-pattern p-5 md:min-h-[calc(100vh-200px)] lg:bg-cover lg:bg-center-right lg:bg-no-repeat xl:min-h-screen">
      <div className="container z-10 w-full">
        <div className="flex w-full">
          <div className="max-w-2xl space-y-5 md:space-y-8">
            <h1 className="text-4xl font-semibold leading-1.08em text-white md:text-5xl lg:text-6xl">
              {/* Generate your QXi Score <span className="text-waterspout">Today</span> */}
              {data?.title}
            </h1>
            <BlurFade delay={1} inView>
              <div className="max-w-md">
                <p className="text-xl font-normal text-cultured">
                  <span className="mr-2 inline-block">
                    <img src="/images/rocket.svg" className="h-5 w-5" alt="rocket" />
                  </span>
                  {/* Welcome to QX Lab: Revolutionizing the Customer Experience industry with AI-Powered Innovation! */}
                  {data?.description}
                </p>
              </div>
            </BlurFade>
            <CoolMode
              options={{
                particle: "/images/rocket.svg",
                size: 50,
                speedUp: 20
              }}
            >
              <Button className="rounded-lg bg-pastel-green px-4 py-3 text-sm font-semibold text-cultured md:px-5 md:py-3.5 md:text-base">
                {data?.buttons[0]?.text}
              </Button>
            </CoolMode>
          </div>
        </div>
      </div>
      <Marquee pauseOnHover className="container pt-10 [--duration:20s]">
        {logos.map((logo, index) => (
          <MarqueeLogos key={index} {...logo} />
        ))}
      </Marquee>
    </section>
  );
}
