import { env } from "@/../env";

const FluidApiClient = async (
  url: string,
  isCompanyAPI = true,
  options?: RequestInit,
) => {
  let fluidBaseUrl = env.NEXT_PUBLIC_FLUID_BASE_URL;
  if (fluidBaseUrl?.endsWith("/")) {
    fluidBaseUrl += "/";
  }
  const baseUrl = isCompanyAPI
    ? `${env.NEXT_PUBLIC_FLUID_BASE_URL}/api/company/v1/`
    : `${env.NEXT_PUBLIC_FLUID_BASE_URL}/api/v1/`;

  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.FLUID_API_TOKEN}`,
    },
  });

  // instead of having to async get the body from every client call, we can just do it here
  return {
    ...response,
    body: await (response.headers
      .get("content-type")
      ?.includes("application/json")
      ? response.json()
      : response.text()),
  };
};

export default FluidApiClient;
