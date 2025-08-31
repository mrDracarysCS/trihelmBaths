'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) router.push("/admin/products");
    else setErr("Invalid credentials");
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
      <form onSubmit={submit} className="space-y-4">
        <input className="w-full border rounded-xl px-4 py-3" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="w-full border rounded-xl px-4 py-3" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button className="w-full rounded-xl bg-blue-600 text-white px-4 py-3">Sign in</button>
      </form>
    </div>
  );
}
