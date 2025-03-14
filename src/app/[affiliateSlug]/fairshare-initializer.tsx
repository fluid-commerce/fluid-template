"use client";
import { env } from "@/../env";
import { useEffect, useState } from "react";
import FluidSDK from "@fluid-commerce/fairshare";
import { Widgets } from "@fluid-commerce/widgets";

export default function FairshareInitializer() {
    const [isInitialized, setIsInitialized] = useState(false);
    useEffect(() => {
        FluidSDK.initialize({
            fluid_shop: env.NEXT_PUBLIC_FLUID_SHOP_ID,
            apiUrlHost: env.NEXT_PUBLIC_FLUID_BASE_URL,
            country: "us",
        }).then(() => {
            setIsInitialized(true);
            console.log("Fairshare initialized")
        });
    }, []);

    return isInitialized ? (
        <Widgets />
    ) : null;
}
