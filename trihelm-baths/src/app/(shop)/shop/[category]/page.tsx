import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/ProductCard";
import { Category } from "@prisma/client";

type Props = { params: { category: Category } };

export default async function CategoryPage({ params }: Props) {
  const items = await prisma.product.findMany({ where: { category: params.category } });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{params.category.replace("_", " ")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((p) => (<ProductCard key={p.id} p={p as any} />))}
      </div>
    </div>
  );
}
