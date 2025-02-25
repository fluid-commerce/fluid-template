import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    FLUID_API_TOKEN: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_FLUID_BASE_URL: z.string().default("https://api.fluid.app"),
    NEXT_PUBLIC_FLUID_SHOP_ID: z.string().min(1),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_FLUID_BASE_URL: process.env.NEXT_PUBLIC_FLUID_BASE_URL,
    NEXT_PUBLIC_FLUID_SHOP_ID: process.env.NEXT_PUBLIC_FLUID_SHOP_ID,
  },
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
});
