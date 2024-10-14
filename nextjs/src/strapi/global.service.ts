import { strapiGetAPI } from "./comman.service";

export const getGlobalData = async () => {
  return strapiGetAPI({ endpoint: "/api/global" });
};
