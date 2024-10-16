"use client";
import React from "react";
import { initUrqlClient } from "./initializeClient";
import { UrqlProvider as NextUrqlProvider } from "@urql/next";

const UrqlProvider = ({ children }: { children: React.ReactNode }) => {
  // const token = session?.data?.user?.token ?? "";
  const token = "";
  const client = initUrqlClient(token);
  return (
    <NextUrqlProvider client={client.urqlClient} ssr={client.ssrCache}>
      {children}
    </NextUrqlProvider>
  );
};

export default UrqlProvider;
