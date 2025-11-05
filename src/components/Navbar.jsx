import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

const categories = [
  { label: 'Men', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'Unisex', href: '#' },
  { label: 'Custom Scents', href: '#' },
  { label: 'Offers', href: '#' },
];

const sampleCatalog = [
  { id: '1', name: 'Aurora Oud', gender: 'Unisex', brand: 'Maison Sol', price: 189 },
  { id: '2', name: 'Velvet Iris', gender: 'Women', brand: 'Atelier 88', price: 165 },
  { id: '3', name: 'Cedar Noir', gender: 'Men', brand: 'Nocturne', price: 150 },
  { id: '4', name: 'Golden Neroli', gender: 'Unisex', brand: 'Lumière', price: 175 },
  { id: '5', name: 'Rose Éclat', gender: 'Women', brand: 'Maison Sol', price: 160 },
  { id: '6', name: 'Saffron Sky', gender: 'Unisex', brand: 'Atelier 88', price: 195 },
];

export default function Navbar() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return sampleCatalog.filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)).slice(0, 5);
  }, [query]);

  useEffect(() => {
    setOpen(suggestions.length > 0);
  }, [suggestions.length]);

  useEffect(() => {
    const onClick = (e) => {
      if (!inputRef.current) return;
      if (!inputRef.current.parentElement.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="text-xl font-semibold tracking-wide text-gray-900">
              <span className="font-semibold">Aurum</span>
              <span className="text-amber-500"> Parfum</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {categories.map((c) => (
                <a key={c.label} href={c.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {c.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto md:min-w-[28rem]">
            <div className="relative flex-1 md:flex-none md:w-[28rem]">
              <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm focus-within:ring-2 ring-amber-300/60">
                <Search size={18} className="text-gray-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setOpen(true)}
                  placeholder="Search fragrances, brands, notes..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              {open && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden">
                  <ul className="divide-y divide-gray-100">
                    {suggestions.map((s) => (
                      <li key={s.id} className="p-3 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{s.name}</p>
                            <p className="text-xs text-gray-500">{s.brand} • {s.gender}</p>
                          </div>
                          <span className="text-sm font-semibold text-amber-600">${s.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button className="hidden md:inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm hover:border-gray-300">
              <User size={18} />
              Account
            </button>
            <button aria-label="Cart" className="relative inline-flex items-center justify-center rounded-full border border-gray-200 p-2 hover:border-gray-300">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-500 px-1 text-xs font-medium text-white">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
