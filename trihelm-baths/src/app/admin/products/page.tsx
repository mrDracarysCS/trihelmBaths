import { prisma } from "@/lib/prisma";
import AdminProductForm from "@/components/AdminProductForm";
import { Product } from "@prisma/client/edge";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function AdminProducts() {
  const isAdmin = cookies().get("trihelm_admin")?.value === "1";
  if (!isAdmin) redirect("/admin/login");
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <ul className="space-y-3">
          {products.map((p : Product) => (
            <li key={p.id} className="border rounded-xl p-4 bg-white">
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-neutral-600">{p.sku} — ${(p.priceCents/100).toFixed(2)} — Stock: {p.stock}</div>
              <form action={`/api/products/${p.id}`} method="POST" className="mt-3 flex gap-2">
                <button formAction={`/api/products/${p.id}`} formMethod="DELETE" className="text-red-600 text-sm">Delete</button>
              </form>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <AdminProductForm />
      </div>
    </div>
  );
}
