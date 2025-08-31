import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@prisma/client/edge";

export default async function Home() {
  const featured = await prisma.product.findMany({ take: 8, orderBy: { createdAt: "desc" } });
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-10">
        <h1 className="text-3xl md:text-4xl font-bold">Crafted Elegance for Your Bath</h1>
        <p className="mt-2 text-neutral-700 max-w-2xl">Modular vanity tops, cabinets, countertops, and sinks. Faucet & plumbing install not included.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p : Product) => (<ProductCard key={p.id} p={p as any} />))}
        </div>
      </section>
    </div>
  );
}
