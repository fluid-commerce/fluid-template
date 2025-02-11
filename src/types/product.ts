import { imageSchema } from "@/types/image";
import { variantSchema } from "@/types/variant";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  active: z.boolean(),
  title: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  introduction: z.string().nullable(),
  feature_text: z.string().nullable(),
  stripped: z.string().nullable(),
  price: z.string(),
  display_price: z.string(),
  shipping: z.string().nullable().optional(),
  subscription_price: z.string().nullable(),
  display_wholesale_price: z.string().nullable().optional(),
  display_wholesale_subscription_price: z.string().nullable().optional(),
  wholesale_price: z.string().nullable().optional(),
  wholesale_subscription_price: z.string().nullable().optional(),
  currency_code: z.string().nullable(),
  public: z.boolean().nullable(),
  in_stock: z.boolean().nullable(),
  unlimited_inventory: z.boolean().nullable().optional(),
  keep_selling: z.boolean().nullable(),
  image_url: z.string(),
  images: z.array(imageSchema),
  variants: z.array(variantSchema).nullable(),
});

export type Product = z.infer<typeof productSchema>;
export { productSchema };
