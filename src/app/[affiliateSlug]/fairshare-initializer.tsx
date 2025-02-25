"use client";

import { useEffect } from "react";
import { FluidSDK } from "@fluid-commerce/fairshare";

interface FairshareInitializerProps {
  fluidShopId: string;
}

export default function FairshareInitializer({
  fluidShopId,
}: FairshareInitializerProps) {
  useEffect(() => {
    console.log("FairshareInitializer");
    async function init() {
      console.log("Initializing Fairshare");
      const sdk = FluidSDK.getInstance();
      await sdk
        .initialize({
          fluid_shop: fluidShopId,
          api_url_host: "env.NEXT_PUBLIC_FLUID_BASE_URL",
        })
        .then(() => {
          console.log("Fairshare initialized");
        })
        .catch((error) => {
          console.error("Fairshare initialization failed", error);
        });
    }
    init();
  }, [fluidShopId]);

  // This component doesn't render anything
  return null;
}
