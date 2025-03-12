"use client";
import { env } from "@/../env";
import { useEffect } from "react";

export default function FairshareInitializer() {
  useEffect(() => {
    import('@fluid-commerce/fairshare').then(({ FluidSDK }) => {
      FluidSDK.initialize({
        fluid_shop: env.NEXT_PUBLIC_FLUID_BASE_URL,
        apiUrlHost: env.NEXT_PUBLIC_FLUID_BASE_URL,
        country: "us",
      }).then(() => console.log("Fairshare initialized"));
    })
    .catch(err => console.error('Error importing FluidSDK:', err));
  }, []);

  return null;
}
