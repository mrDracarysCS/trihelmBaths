import Link from "next/link";

type Product = {
  id: number;
  name: string;
  slug: string;
  priceCents: number;
  images: unknown;
};

export function ProductCard({ p }: { p: Product }) {
  const imgs = p.images as string[] | undefined;
  const img = Array.isArray(imgs) && imgs.length ? imgs[0] : undefined;

  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      {img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={img} alt={p.name} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-neutral-200" />
      )}
      <div className="p-4">
        <h3 className="font-semibold line-clamp-1">{p.name}</h3>
        <p className="text-sm text-neutral-600 mt-1">${(p.priceCents / 100).toFixed(2)}</p>
        <Link href={`/product/${p.slug}`} className="mt-3 inline-block text-sm text-blue-600">
          View details →
        </Link>
      </div>
    </div>
  );
}
