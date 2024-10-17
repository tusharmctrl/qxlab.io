import { useParams } from "next/navigation";
import React from "react";
import Markdown from "react-markdown";

export default function BlogDetails(data: any) {
  return (
    <>
      <section className="lg:bg-blog-pattern bg-before relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-center p-5 lg:bg-cover lg:bg-center-right lg:bg-no-repeat">
        <div className="container z-10">
          <div className="mx-auto mb-16 grid min-h-40vmax max-w-5xl place-content-end py-72px text-center">
            <h1 className="text-5xl font-semibold leading-1.4em text-white md:text-6xl lg:text-8xl">{data.title}</h1>
            <ul className="my-5 flex items-center justify-center gap-10">
              <li className="relative before:absolute before:-right-6 before:top-18px before:h-1 before:w-1 before:rounded-full before:bg-white before:content-['']">
                <div className="flex items-center gap-5">
                  <img src="/images/people.png" className="h-10 w-10 rounded-full" alt="mockup" />
                  <span className="text-base font-medium text-white transition-all duration-500 hover:text-cultured">{data?.author?.name}</span>
                </div>
              </li>
              <li className="relative before:absolute before:-right-6 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-white before:content-['']">
                <span className="text-base font-medium text-white transition-all duration-500 hover:text-cultured">{data?.date}</span>
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
          <Markdown className="text-white">{data.blog_content}</Markdown>
        </div>
      </section>

      <section className="relative my-5 border-t-0.5px border-white/5 p-5 pb-0 pt-8 md:my-8">
        <div className="container">
          <div className="w-full">
            <div className="flex justify-between">
              <div className="flex flex-wrap items-center justify-between gap-y-5">
                <span className="mr-5 text-sm font-normal text-cultured">Tags:</span>
                <ul className="flex flex-wrap items-center gap-3">
                  {data?.blog_tags.map((tag: any, index: number) => (
                    <li key={index}>
                      <span className="block scale-100 rounded-3xl bg-pale-silver px-3 py-1 text-xs text-black transition-all duration-500 hover:scale-110">
                        {tag?.tag_name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center">
                <span className="mr-5 text-sm font-normal uppercase text-cultured">Share On</span>
                <ul className="flex items-center gap-5">
                  <li>
                    <a href="#" className="scale-100 transition-all duration-300 hover:scale-110">
                      <svg className="w-4 fill-pale-silver" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M504 256C504 119 393 8 256 8C119 8 8 119 8 256C8 379.78 98.69 482.38 217.25 501V327.69H154.25V256H217.25V201.36C217.25 139.21 254.25 104.88 310.92 104.88C338.06 104.88 366.44 109.72 366.44 109.72V170.72H335.16C304.36 170.72 294.75 189.84 294.75 209.45V256H363.53L352.53 327.69H294.75V501C413.31 482.38 504 379.78 504 256Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="scale-100 transition-all duration-300 hover:scale-110">
                      <svg className="w-4 fill-pale-silver" viewBox="0 0 512 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M459.37 103.634C459.695 108.182 459.695 112.731 459.695 117.279C459.695 255.999 354.112 415.837 161.137 415.837C101.685 415.837 46.457 398.618 0 368.731C8.447 369.705 16.568 370.03 25.34 370.03C74.395 370.03 119.553 353.462 155.614 325.198C109.482 324.223 70.822 294.01 57.502 252.426C64 253.4 70.497 254.05 77.32 254.05C86.741 254.05 96.163 252.75 104.934 250.477C56.853 240.73 20.791 198.497 20.791 147.492V146.193C34.76 153.99 51.005 158.863 68.222 159.512C39.958 140.669 21.441 108.507 21.441 72.121C21.441 52.629 26.638 34.761 35.735 19.167C87.39 82.842 165.035 124.425 252.1 128.974C250.476 121.177 249.501 113.056 249.501 104.934C249.501 47.106 296.283 0 354.435 0C384.648 0 411.937 12.67 431.105 33.137C454.82 28.589 477.561 19.817 497.704 7.797C489.906 32.163 473.338 52.63 451.572 65.624C472.689 63.351 493.156 57.502 511.998 49.381C497.706 70.172 479.837 88.689 459.37 103.634Z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="scale-100 transition-all duration-300 hover:scale-110">
                      <svg className="w-4 fill-pale-silver" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47 24C47 37.2581 36.4819 48 23.5 48C21.0742 48 18.7431 47.6226 16.5448 46.9258C17.5018 45.329 18.9327 42.7161 19.4633 40.6355C19.7476 39.5129 20.9226 34.9258 20.9226 34.9258C21.6901 36.4161 23.9264 37.6839 26.3048 37.6839C33.3927 37.6839 38.5002 31.0258 38.5002 22.7516C38.5002 14.8258 32.1609 8.89355 24.0117 8.89355C13.8726 8.89355 8.48085 15.8419 8.48085 23.4194C8.48085 26.9419 10.3192 31.3258 13.2472 32.7194C13.6925 32.9323 13.9294 32.8355 14.0337 32.4C14.1095 32.071 14.5075 30.4355 14.6875 29.6806C14.7444 29.4387 14.7159 29.2258 14.5264 28.9935C13.5694 27.7839 12.7923 25.5774 12.7923 23.5161C12.7923 18.2226 16.7153 13.1032 23.4052 13.1032C29.176 13.1032 33.2222 17.1194 33.2222 22.8677C33.2222 29.3613 30.0099 33.8613 25.831 33.8613C23.5284 33.8613 21.7944 31.9161 22.3534 29.5258C23.0167 26.671 24.296 23.5935 24.296 21.5323C24.296 19.6935 23.3294 18.1548 21.3206 18.1548C18.9611 18.1548 17.0659 20.6419 17.0659 23.9806C17.0659 26.1097 17.7671 27.5419 17.7671 27.5419C17.7671 27.5419 15.4456 37.5871 15.0192 39.4645C14.5454 41.5355 14.7349 44.4581 14.9339 46.3548C6.19718 42.8613 0 34.171 0 24C0 10.7419 10.5181 0 23.5 0C36.4819 0 47 10.7419 47 24Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="scale-100 transition-all duration-300 hover:scale-110">
                      <svg className="w-4 fill-pale-silver" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                className="inline-flex scale-100 items-center gap-2 rounded-3xl bg-pale-silver px-4 py-2 text-sm font-semibold uppercase text-black transition-all duration-500 hover:scale-110"
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
              <h4 className="text-base font-semibold text-pale-silver md:text-xl">Welcome to QXLab</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
