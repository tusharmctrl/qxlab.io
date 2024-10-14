"use client";
import React from "react";
import { initUrqlClient } from "./initializeClient";
import { UrqlProvider as NextUrqlProvider } from "@urql/next";

const UrqlProvider = ({ children }: { children: React.ReactNode }) => {
  const token = process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? "";
  const client = initUrqlClient(token);
  return (
    <NextUrqlProvider client={client.urqlClient} ssr={client.ssrCache}>
      {children}
    </NextUrqlProvider>
  );
};

export default UrqlProvider;
