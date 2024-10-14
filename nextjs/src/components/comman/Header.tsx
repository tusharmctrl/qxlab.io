"use client";
import React from "react";
import Link from "next/link";
import { GlobalData, GlobalDataQuery } from "@/gql/graphql";
import PageLoader from "@/components/comman/PageLoader";
import { useQuery } from "@urql/next";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "../ui/navigation-menu";

export const Header = () => {
  const [{ data }] = useQuery<GlobalDataQuery>({
    query: GlobalData,
    requestPolicy: "cache-first"
  });

  return (
    <>
      <header className="gradieant-header fixed top-0 z-999 w-full px-5 py-4 xl:px-2.5">
        <div className="container">
          <div className="w-full">
            <div className="flex items-center justify-between xl:justify-start">
              <Link href="/" className="mr-11">
                <img src="/images/qx-labs.svg" className="my-1 w-11 md:w-70px" alt="qx-logo" />
              </Link>
              <button className="flex items-center gap-3 text-base text-white xl:hidden">
                <span className="relative flex flex-col gap-y-1.5">
                  <span className="h-0.5 w-5 bg-white"></span>
                  <span className="h-0.5 w-5 bg-white"></span>
                </span>
                Menu
              </button>

              <div className="hidden items-center gap-x-14 xl:flex">
                <NavigationMenu>
                  <NavigationMenuList>
                    {data?.global?.navbar?.links?.map((link) => (
                      <NavigationMenuItem>
                        {!link?.sublinks?.length ? (
                          <Link href={link?.url ?? ""} className="text-sm font-semibold text-white">
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}> {link?.text ?? ""}</NavigationMenuLink>
                          </Link>
                        ) : (
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent text-white">{link?.text ?? ""}</NavigationMenuTrigger>
                            <NavigationMenuContent className="border-none">
                              <ul className="grid w-[400px] gap-3 bg-dark-slate-gray p-4 text-white md:w-[200px] md:grid-cols-1 lg:w-[300px]">
                                {link?.sublinks?.map((sublink) => (
                                  <Link key={sublink?.url} title={sublink?.text ?? ""} href={sublink?.url ?? ""}>
                                    {sublink?.text}
                                  </Link>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
