"use client";
import PageLoader from "@/components/comman/PageLoader";
import SectionRenderer from "@/components/comman/SectionRenderer";
import { StrapiPageData, type StrapiPageDataQuery, StrapiPageDataQueryVariables } from "@/gql/graphql";
import { useQuery } from "@urql/next";
import React from "react";

export default function page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const [{ data, fetching }] = useQuery<StrapiPageDataQuery, StrapiPageDataQueryVariables>({
    query: StrapiPageData,
    variables: { slug: slug ? `/${slug?.join("/")}` : "/" },
    requestPolicy: "cache-first"
  });

  const blogs = data?.cms?.pages?.[0]?.blogs;
  const categories = data?.cms?.pages?.[0]?.categories;
  const blogData = data?.cms?.blogs;
  const pageData = data?.cms?.pages?.[0]?.contentSections;

  if (fetching) return <PageLoader />;
  return <>{(pageData ?? blogData)?.map((section, index) => <SectionRenderer key={index} section={section} blogs={blogs} categories={categories} />)}</>;
}
