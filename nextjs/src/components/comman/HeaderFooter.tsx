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
import { LayoutProps } from "@/app/layout";
import { env } from "@/env.mjs";
import Image from "next/image";

export const HeaderFooter = ({ children }: LayoutProps) => {
  const [{ data }] = useQuery<GlobalDataQuery>({
    query: GlobalData,
    requestPolicy: "cache-first"
  });

  return (
    <>
      {data?.global?.navbar && (
        <header className="gradieant-header fixed top-0 z-999 w-full px-5 py-4 xl:px-2.5">
          <div className="container">
            <div className="w-full">
              <div className="flex items-center justify-between xl:justify-start">
                <Link href="/" className="mr-11">
                  <Image width={70} height={50} src={`${env.NEXT_PUBLIC_STRAPI_URL}${data?.global?.navbar?.logo?.url}`} alt="qxlogo" />
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
                      {data?.global?.navbar?.links?.map((link, index) => (
                        <NavigationMenuItem key={index}>
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
      )}

      {children}

      {data?.global?.footer && (
        <footer className="bg-charleston-green/50 px-5 py-12 lg:py-20">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-5 lg:space-y-8">
              <Link href="#">
                <Image width={50} height={50} src={`${env.NEXT_PUBLIC_STRAPI_URL}${data?.global?.footer?.logo?.url}`} alt="qxlogo" />
              </Link>
              <ul className="flex items-center gap-10">
                {data?.global?.footer?.columns?.map((footer, index) => {
                  return (
                    <li key={footer?.id ?? index}>
                      <Link className="text-base font-medium text-white/45" href={footer?.links?.[0]?.url ?? "/"}>
                        {footer?.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="text-sm font-light text-white/45">{data?.global?.footer?.smallText}</p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
