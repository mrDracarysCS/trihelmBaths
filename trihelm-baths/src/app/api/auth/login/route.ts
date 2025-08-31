import { NextResponse } from "next/server";
import { verifyAdmin } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const ok = await verifyAdmin(email, password);
  if (!ok) return new NextResponse("Invalid credentials", { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set("trihelm_admin", "1", { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 8 });
  return res;
}
