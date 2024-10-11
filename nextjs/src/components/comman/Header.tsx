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
      <div>Header</div>
    </>
  );
};
