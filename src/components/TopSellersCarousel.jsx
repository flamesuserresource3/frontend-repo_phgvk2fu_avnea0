import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const products = [
  {
    id: 'ts1',
    name: 'Aurora Oud',
    brand: 'Maison Sol',
    price: 189,
    image: 'https://images.unsplash.com/photo-1604908554079-62c7b9e0970a?q=80&w=1200&auto=format&fit=crop',
    notes: 'Top: Saffron • Heart: Rose • Base: Oud'
  },
  {
    id: 'ts2',
    name: 'Velvet Iris',
    brand: 'Atelier 88',
    price: 165,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop',
    notes: 'Top: Bergamot • Heart: Iris • Base: Musk'
  },
  {
    id: 'ts3',
    name: 'Cedar Noir',
    brand: 'Nocturne',
    price: 150,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop',
    notes: 'Top: Grapefruit • Heart: Black Pepper • Base: Cedar'
  },
  {
    id: 'ts4',
    name: 'Golden Neroli',
    brand: 'Lumière',
    price: 175,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    notes: 'Top: Neroli • Heart: Jasmine • Base: Amber'
  },
  {
    id: 'ts5',
    name: 'Rose Éclat',
    brand: 'Maison Sol',
    price: 160,
    image: 'https://images.unsplash.com/photo-1705704805141-cc9e194d3f63?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb3NlJTIwJUMzJTg5Y2xhdHxlbnwwfDB8fHwxNzYyMzMzOTIwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    notes: 'Top: Lychee • Heart: Rose • Base: Patchouli'
  },
];

function ProductCard({ product }) {
  return (
    <div className="group relative w-72 shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm will-change-transform">
      <div className="relative h-44 overflow-hidden">
        <img loading="lazy" src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
            <p className="text-xs text-gray-500">{product.brand}</p>
          </div>
          <span className="text-sm font-semibold text-amber-600">${product.price}</span>
        </div>
        <p className="mt-2 line-clamp-2 text-xs text-gray-600">{product.notes}</p>
        <div className="mt-3 flex gap-2">
          <button className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-3 py-2 text-xs font-medium text-white hover:bg-gray-800">Add to Cart</button>
          <button className="inline-flex w-full items-center justify-center rounded-full bg-white px-3 py-2 text-xs font-medium ring-1 ring-gray-200 hover:ring-gray-300">Try Sample</button>
        </div>
      </div>
    </div>
  );
}

export default function TopSellersCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { x: 0 },
        animate: { x: ['0%', '-50%'] },
        transition: { repeat: Infinity, duration: 28, ease: 'linear' },
      };

  return (
    <section id="topsellers" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Top Selling Perfumes</h2>
          <p className="mt-1 text-sm text-gray-600">Curated icons beloved by our community</p>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden">
        <motion.div className="flex gap-5" style={{ willChange: 'transform' }} {...animationProps}>
          {[...products, ...products].map((p, i) => (
            <ProductCard key={p.id + '-' + i} product={p} />
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
