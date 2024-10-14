"use client";
import { GlobalData } from "@/gql/graphql";
import React from "react";
import { useQuery } from "urql";

export const Header = () => {
  const data = useQuery({
    query: GlobalData,
  });
  console.log(data);
  return (
    <>
      <header className="z-999 gradieant-header fixed top-0 w-full px-5 py-4 xl:px-2.5">
        <div className="container">
          <div className="w-full">
            <div className="flex items-center justify-between xl:justify-start">
              <a href="#" className="mr-11">
                <img
                  src="/images/qx-labs.svg"
                  className="md:w-70px my-1 w-11"
                  alt="qx-logo"
                />
              </a>
              <button className="flex items-center gap-3 text-base text-white xl:hidden">
                <span className="relative flex flex-col gap-y-1.5">
                  <span className="h-0.5 w-5 bg-white"></span>
                  <span className="h-0.5 w-5 bg-white"></span>
                </span>
                Menu
              </button>
              <ul className="hidden items-center gap-x-11 xl:flex">
                <li>
                  <a href="#" className="text-sm font-semibold text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-semibold text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm font-semibold text-white">
                    QXc Services
                  </a>
                </li>
                <li className="group relative cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    Solutions{" "}
                    <span>
                      <svg
                        className="h-2 w-3 fill-white"
                        viewBox="0 0 16 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                        />
                      </svg>
                    </span>
                  </a>
                  <ul className="bg-dark-slate-gray invisible absolute left-0 top-8 flex w-64 min-w-64 flex-col gap-y-9 rounded-lg p-6 opacity-0 group-hover:visible group-hover:opacity-100">
                    <li>
                      <a href="#" className="text-sm font-semibold text-white">
                        For Brands
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm font-semibold text-white">
                        For Enterprise
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm font-semibold text-white">
                        Industries
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group relative cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    Resources{" "}
                    <span>
                      <svg
                        className="h-2 w-3 fill-white"
                        viewBox="0 0 16 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                        />
                      </svg>
                    </span>
                  </a>
                  <ul className="bg-dark-slate-gray invisible absolute left-0 top-8 flex w-64 min-w-64 flex-col gap-y-9 rounded-lg p-6 opacity-0 group-hover:visible group-hover:opacity-100">
                    <li>
                      <a href="#" className="text-sm font-semibold text-white">
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm font-semibold text-white">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm font-semibold text-white">
                        Blog
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
