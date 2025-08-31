export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8 text-sm text-neutral-600">
        © {new Date().getFullYear()} Trihelm Baths. All rights reserved.
      </div>
    </footer>
  );
}
