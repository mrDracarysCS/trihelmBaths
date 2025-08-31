import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function run() {
  await prisma.product.deleteMany({});

  await prisma.product.createMany({
    data: [
      {
        name: "Trihelm Vanity Top — 36\" Quartz (Carrara)",
        slug: "vanity-top-36-quartz-carrara",
        description: "Premium quartz vanity top. Faucet & plumbing install not included.",
        category: "VANITY_TOP",
        priceCents: 34900,
        sku: "VT-36Q-CARRARA",
        stock: 25,
        images: ["https://images.unsplash.com/photo-1600566753190-17f0baa2b9bf"],
        specs: { size: "36\"", material: "Quartz", color: "Carrara" }
      } as any,
      {
        name: "Trihelm Cabinet — 36\" Shaker (White)",
        slug: "cabinet-36-shaker-white",
        description: "Durable shaker cabinet. Faucet not included.",
        category: "CABINET",
        priceCents: 45900,
        sku: "CB-36S-WH",
        stock: 15,
        images: ["https://images.unsplash.com/photo-1582582429416-238a0d4a5745"],
        specs: { width: "36\"", style: "Shaker", finish: "White" }
      } as any,
      {
        name: "Trihelm Countertop Slab — Quartz (Pure White)",
        slug: "countertop-quartz-pure-white",
        description: "Countertop slab cut-to-size available upon request.",
        category: "COUNTERTOP",
        priceCents: 89900,
        sku: "CT-Q-PUREWHITE",
        stock: 8,
        images: ["https://images.unsplash.com/photo-1505692794403-34d4982f88aa"],
        specs: { material: "Quartz", color: "Pure White" }
      } as any,
      {
        name: "Trihelm Sink — Undermount Rectangular (Ceramic)",
        slug: "sink-undermount-rect",
        description: "High quality ceramic undermount sink.",
        category: "SINK",
        priceCents: 12900,
        sku: "SK-UM-RECT",
        stock: 60,
        images: ["https://images.unsplash.com/photo-1584628393595-bf3f1c7a5f1d"],
        specs: { type: "Undermount", shape: "Rectangular", material: "Ceramic" }
      } as any
    ]
  });
}

run().finally(() => prisma.$disconnect());
