import { env } from "@/env.mjs";

export const strapiGetAPI = async ({ endpoint, option = {} }: { endpoint: string; option?: any }) => {
  const data = await fetch(`${env.NEXT_PUBLIC_HASURA_GRAPHQL_API}${endpoint}`, option);
  return await data.json();
};
