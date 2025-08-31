'use client';
import { useState } from 'react';

export default function AdminProductForm({ initial }: { initial?: Partial<any> }) {
  const [form, setForm] = useState<any>({
    name: initial?.name ?? '',
    slug: initial?.slug ?? '',
    description: initial?.description ?? '',
    category: initial?.category ?? 'VANITY_TOP',
    priceCents: initial?.priceCents ?? 0,
    sku: initial?.sku ?? '',
    stock: initial?.stock ?? 0,
    images: (initial?.images as string[]) ?? [],
    imgInput: '',
  });

  const addImage = () => {
    if (form.imgInput) setForm((s: any) => ({ ...s, images: [...s.images, s.imgInput], imgInput: '' }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form };
    delete (payload as any).imgInput;
    const res = await fetch('/api/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (res.ok) location.reload();
    else alert('Failed to create product');
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input className="border rounded-xl px-3 py-2" placeholder="Name" value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} />
        <input className="border rounded-xl px-3 py-2" placeholder="Slug" value={form.slug} onChange={(e)=>setForm({ ...form, slug: e.target.value })} />
        <input className="border rounded-xl px-3 py-2" placeholder="SKU" value={form.sku} onChange={(e)=>setForm({ ...form, sku: e.target.value })} />
        <select className="border rounded-xl px-3 py-2" value={form.category} onChange={(e)=>setForm({ ...form, category: e.target.value })}>
          <option value="VANITY_TOP">Vanity Top</option>
          <option value="CABINET">Cabinet</option>
          <option value="COUNTERTOP">Countertop</option>
          <option value="SINK">Sink</option>
        </select>
        <input className="border rounded-xl px-3 py-2" placeholder="Price (USD)" type="number" value={form.priceCents/100} onChange={(e)=>setForm({ ...form, priceCents: Math.round(Number(e.target.value)*100) })} />
        <input className="border rounded-xl px-3 py-2" placeholder="Stock" type="number" value={form.stock} onChange={(e)=>setForm({ ...form, stock: Number(e.target.value) })} />
      </div>
      <textarea className="border rounded-xl px-3 py-2 w-full" placeholder="Description" rows={4} value={form.description} onChange={(e)=>setForm({ ...form, description: e.target.value })} />
      <div>
        <div className="flex gap-2">
          <input className="flex-1 border rounded-xl px-3 py-2" placeholder="Image URL" value={form.imgInput} onChange={(e)=>setForm({ ...form, imgInput: e.target.value })} />
          <button type="button" onClick={addImage} className="rounded-xl border px-3">Add</button>
        </div>
        {form.images.length > 0 && (
          <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
            {form.images.map((u: string, i: number) => (<li key={i} className="break-all">{u}</li>))}
          </ul>
        )}
      </div>
      <button className="rounded-xl bg-blue-600 text-white px-4 py-2">Create Product</button>
    </form>
  );
}
