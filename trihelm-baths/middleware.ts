import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_PATH = "/admin";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith(ADMIN_PATH)) {
    const isAuthed = req.cookies.get("trihelm_admin")?.value === "1";
    if (!isAuthed && !pathname.startsWith("/admin/login")) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
    // add x-robots-tag on admin paths
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
