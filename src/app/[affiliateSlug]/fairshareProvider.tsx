"use client";

import dynamic from "next/dynamic";
import { env } from "@/../env";
import { ReactNode } from "react";

// Create a dynamic component that only loads on the client side
const DynamicFairshareInitializer = dynamic(
  () => import("./fairshare-initializer"), // This will be a new file we'll create
  {
    ssr: false, // This is crucial - it prevents any server-side rendering
    loading: () => null, // Optional: what to show while loading
  },
);

export default function FairshareProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <DynamicFairshareInitializer
        fluidShopId={env.NEXT_PUBLIC_FLUID_SHOP_ID}
      />
      {children}
    </>
  );
}
