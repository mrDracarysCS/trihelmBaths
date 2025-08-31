import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { productSchema } from "@/lib/validators";

function authed(req: Request) {
  return (req as any).headers.get("cookie")?.includes("trihelm_admin=1");
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  if (!authed(req)) return new NextResponse("Unauthorized", { status: 401 });
  const body = await req.json();
  const parsed = productSchema.partial().safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error.format(), { status: 400 });
  const updated = await prisma.product.update({ where: { id: Number(params.id) }, data: parsed.data as any });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  if (!authed(req)) return new NextResponse("Unauthorized", { status: 401 });
  await prisma.product.delete({ where: { id: Number(params.id) } });
  return new NextResponse(null, { status: 204 });
}
