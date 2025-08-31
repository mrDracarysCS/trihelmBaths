import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { productSchema } from "@/lib/validators";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const where: any = category ? { category } : {};
  const items = await prisma.product.findMany({ where, orderBy: { createdAt: "desc" } });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const isAdmin = (req as any).headers.get("cookie")?.includes("trihelm_admin=1");
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const parsed = productSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error.format(), { status: 400 });

  const created = await prisma.product.create({ data: parsed.data as any });
  return NextResponse.json(created, { status: 201 });
}
