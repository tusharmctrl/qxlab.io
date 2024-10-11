"use client";
import React from "react";
import { initUrqlClient } from "./initializeClient";
import { UrqlProvider as NextUrqlProvider } from "@urql/next";

const UrqlProvider = ({ children }: { children: React.ReactNode }) => {
  const token =
    "58550453cd83ce09810f696f8e026545584e5eae783630899569d730180438984ab070867bb90b5b698f323b894e2a05d2b3ace58ddfb1892c4a8965359c816da25ae19f147979ac9f6ddd50a461ce68a3e216a50421c33ad1824502391fc41a16d5cb0d89c36d100b6253d90dcd750d40c7b137df3021cf410425a5880ccc26";

  const client = initUrqlClient(token);
  return (
    <NextUrqlProvider client={client.urqlClient} ssr={client.ssrCache}>
      {children}
    </NextUrqlProvider>
  );
};

export default UrqlProvider;
