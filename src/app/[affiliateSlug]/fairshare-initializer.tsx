"use client";

// @ts-expect-error -- FluidSDK build is not typed?
import { FluidSDK } from "@fluid-commerce/fairshare";
import { env } from "@/../env";
import { useEffect } from "react";

interface FairshareInitializerProps {
  fluidShopId: string;
  apiUrlHost?: string;
  appId?: string;
  currentUserToken?: string;
  enableFingerPrinting?: boolean;
  country?: string;
  chat?: boolean;
}

export default function FairshareInitializer({
  fluidShopId,
  apiUrlHost = "",
  appId = "",
  currentUserToken = "",
  enableFingerPrinting = false,
  country = "US",
  chat = true,
}: FairshareInitializerProps) {
  useEffect(() => {
    console.log("FairshareInitializer ", env.NEXT_PUBLIC_FLUID_BASE_URL);
    async function init() {
      console.log("Initializing Fairshare");
      const sdk = FluidSDK.getInstance();
      await sdk
        .initialize({
          debug: true,
          fluid_shop: fluidShopId,
          app_id: appId,
          apiUrlHost: apiUrlHost,
          currentUserToken: currentUserToken,
          enableFingerPrinting: enableFingerPrinting,
          country: country,
          initSettings: {
            cart: {
              enabled: true,
              flavor: "icon",
            },
            chat: chat,
            country: country,
          },
        })
        .then(() => {
          console.log("Fairshare initialized");
        })
        .catch((error: unknown) => {
          console.error("Fairshare initialization failed", error);
        });
    }
    init();
  }, [
    fluidShopId,
    appId,
    currentUserToken,
    enableFingerPrinting,
    country,
    chat,
  ]);

  // This component doesn't render anything
  return null;
}
