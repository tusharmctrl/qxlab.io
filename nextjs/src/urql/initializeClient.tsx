import { env } from "@/env.mjs";
import {
  cacheExchange,
  type Client,
  createClient,
  type Exchange,
  fetchExchange,
  type SSRData,
  ssrExchange,
} from "@urql/next";
import { authExchange } from "@urql/exchange-auth";
let urqlClient: Client | null = null;
let ssrCache: ReturnType<typeof ssrExchange> | null = null;
const isServer = typeof window === "undefined";
export function initUrqlClient(token: string | null, initialState?: SSRData) {
  ssrCache = ssrExchange({ initialState, isClient: !isServer });
  const exchange: Exchange[] = [
    cacheExchange,
    ssrCache,
    // eslint-disable-next-line @typescript-eslint/require-await
    authExchange(async (utils) => {
      return {
        addAuthToOperation: (operation) => {
          if (!operation) return operation;
          return utils.appendHeaders(operation, {
            authorization: `Bearer ${token ?? ""}`,
          });
        },
        willAuthError: (_operation) => {
          return false; // todo: check if token is expired
        },
        didAuthError: (error, _operation) => {
          console.log(error);
          return true;
        },
        /* eslint:disable:no-empty-function */
        refreshAuth: async (): Promise<void> => {
          // token = await getToken({ template: "hasura" });
          // console.log("refreshAuth", token);
        },
      };
    }),
    fetchExchange,
  ];
  urqlClient = createClient({
    url: env.NEXT_PUBLIC_HASURA_GRAPHQL_API,
    exchanges: exchange,
  });
  // } else {
  //when navigating to another page, client is already initialized.
  //lets restore that page's initial state
  ssrCache?.restoreData(initialState ?? {});
  // }
  // Return both the Client instance and the ssrCache.
  return { urqlClient, ssrCache };
}

export const initCronUrqlClient = () => {
  return createClient({
    url: env.NEXT_PUBLIC_HASURA_GRAPHQL_API,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers: {
        "x-hasura-admin-secret": env.HASURA_GRAPHQL_ADMIN_SECRET,
      },
    },
  });
};
