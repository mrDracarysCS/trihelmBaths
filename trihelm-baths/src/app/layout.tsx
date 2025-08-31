import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Trihelm Baths",
  description: "Modular vanities, cabinets, countertops & sinks.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
        <div className="w-full bg-amber-50 text-amber-900 text-sm py-2 text-center">
          Faucets & plumbing installation <b>not included</b> in any product listings.
        </div>
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
