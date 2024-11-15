import { variantCountrySchema } from "@/types/variantCountry";
import { z } from "zod";

const variantSchema = z.object({
  id: z.number(),
  title: z.string().nullable(),
  is_master: z.boolean(),
  image_urL: z.string().nullable().optional(),
  buyable: z.boolean(),
  allow_subscription: z.boolean(),
  subscription_only: z.boolean(),
  shipping_included_in_price: z.boolean(),
  variant_countries: z.record(variantCountrySchema),
  images: z.array(
    z.object({
      id: z.number(),
      image_url: z.string(),
      image_path: z.string(),
      position: z.number(),
    })
  ),
});

export type Variant = z.infer<typeof variantSchema>;
export { variantSchema };
