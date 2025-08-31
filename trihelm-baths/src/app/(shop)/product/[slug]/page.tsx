import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const p = await prisma.product.findUnique({ where: { slug: params.slug } });
  if (!p) return notFound();
  const imgs = p.images as unknown as string[] | undefined;
  const img = Array.isArray(imgs) && imgs.length ? imgs[0] : undefined;
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img} alt={p.name} className="w-full rounded-2xl object-cover" />
        ) : (
          <div className="w-full h-64 bg-neutral-200 rounded-2xl" />
        )}
      </div>
      <div>
        <h1 className="text-2xl font-bold">{p.name}</h1>
        <p className="text-neutral-600 mt-2">SKU: {p.sku}</p>
        <p className="text-2xl font-semibold mt-4">${(p.priceCents / 100).toFixed(2)}</p>
        <p className="mt-4 text-neutral-700 whitespace-pre-wrap">{p.description}</p>
        <div className="mt-6 text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl p-3">
          Note: Faucets & plumbing installation are not included.
        </div>
        <form action="/cart" className="mt-6">
          <button className="rounded-xl bg-blue-600 text-white px-5 py-3 hover:bg-blue-700">Add to cart</button>
        </form>
      </div>
    </div>
  );
}
