import { Header } from "@/components/comman/Header";
import React from "react";
import { LayoutProps } from "../layout";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
