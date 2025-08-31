import Link from "next/link";
import { cookies } from "next/headers";

export async function Header() {
  const isAdmin = cookies().get("trihelm_admin")?.value === "1";

  const nav = [
    { href: "/", label: "Home" },
    { href: "/shop/VANITY_TOP", label: "Vanity Tops" },
    { href: "/shop/CABINET", label: "Cabinets" },
    { href: "/shop/COUNTERTOP", label: "Countertops" },
    { href: "/shop/SINK", label: "Sinks" },
    { href: "/cart", label: "Cart" },
    // Admin link will be pushed below only if isAdmin
  ];
  if (isAdmin) nav.push({ href: "/admin/products", label: "Admin" });

  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">Trihelm Baths</Link>
        <nav className="flex items-center gap-4 text-sm">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="hover:text-blue-600">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
