"use client";
import SectionRenderer from "@/components/comman/SectionRenderer";
import { StrapiPageData, type StrapiPageDataQuery, StrapiPageDataQueryVariables } from "@/gql/graphql";
import { useQuery } from "@urql/next";
import React from "react";

export default function page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const [{ data }] = useQuery<StrapiPageDataQuery, StrapiPageDataQueryVariables>({
    query: StrapiPageData,
    variables: { slug: slug ? `/${slug?.join("/")}` : "/" },
    requestPolicy: "cache-first"
  });
  const blogs = data?.cms?.pages?.[0]?.blogs;
  const categories = data?.cms?.pages?.[0]?.categories;
  return (
    <>
      {data?.cms?.pages?.[0]?.contentSections?.map((section, index) => <SectionRenderer key={index} section={section} blogs={blogs} categories={categories} />)}
    </>
  );
}
