import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(5),
  category: z.enum(["VANITY_TOP", "CABINET", "COUNTERTOP", "SINK"]),
  priceCents: z.number().int().min(0),
  sku: z.string().min(2),
  stock: z.number().int().min(0),
  images: z.array(z.string().url()).default([]),
  specs: z.record(z.any()).default({}),
});
export type ProductInput = z.infer<typeof productSchema>;
