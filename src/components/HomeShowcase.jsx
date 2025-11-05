import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Truck, Star, MessageCircle } from 'lucide-react';
import DealsTimer from './DealsTimer';

const collections = [
  {
    title: 'Men',
    image: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZW58ZW58MHwwfHx8MTc2MjMzNDUwOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Woods, spice, and modern freshness',
  },
  {
    title: 'Women',
    image: 'https://images.unsplash.com/photo-1761839259112-aaea03db3633?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxXb21lbnxlbnwwfDB8fHwxNzYyMzM0NTE0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Luminous florals and soft musks',
  },
  {
    title: 'Unisex',
    image: 'https://images.unsplash.com/photo-1545693315-85b6be26a3d6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVbmlzZXh8ZW58MHwwfHx8MTc2MjMzNDUxNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Balanced, expressive, and bold',
  },
  {
    title: 'Custom Scents',
    image: 'https://images.unsplash.com/photo-1618026878992-a0ab3d060878?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTY2VudHN8ZW58MHwwfHx8MTc2MjMzNDUxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Design your signature fragrance',
  },
];

const notes = [
  { name: 'Top', items: 'Bergamot • Grapefruit • Saffron', color: 'from-amber-200/70 to-white' },
  { name: 'Heart', items: 'Rose • Iris • Jasmine', color: 'from-amber-100/80 to-white' },
  { name: 'Base', items: 'Oud • Cedar • Musk • Amber', color: 'from-amber-50/90 to-white' },
];

const reviews = [
  {
    name: 'Layla M.',
    text: 'The sample kit was brilliant. Chose my favorite and delivery was next-day. Luxurious from box to scent.',
    rating: 5,
  },
  {
    name: 'Daniel K.',
    text: 'Velvet Iris feels refined and calm. Smooth checkout and generous packaging.',
    rating: 5,
  },
  {
    name: 'Amir S.',
    text: 'Cedar Noir is my new signature. Warm, elegant, and lasts all day.',
    rating: 5,
  },
];

function Stars({ n = 5 }) {
  return (
    <div className="flex items-center text-amber-500">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={16} fill="#f59e0b" className="text-amber-500" />
      ))}
    </div>
  );
}

export default function HomeShowcase() {
  return (
    <div className="bg-white">
      <DealsTimer />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Featured Collections</h2>
            <p className="mt-1 text-sm text-gray-600">Explore by mood and style</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((c) => (
            <motion.a
              key={c.title}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative h-48">
                <img loading="lazy" src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-1 text-xs text-gray-600">{c.description}</p>
                <span className="mt-3 inline-flex text-xs font-medium text-amber-700">Shop {c.title} →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Understand the Notes</h2>
            <p className="mt-2 text-sm text-gray-600">Each composition unfolds in three acts—discover how your fragrance evolves on skin.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {notes.map((n) => (
                <div key={n.name} className={`rounded-xl border border-amber-100 bg-gradient-to-b ${n.color} p-4`}>
                  <h4 className="text-sm font-semibold text-gray-900">{n.name}</h4>
                  <p className="mt-1 text-xs text-gray-700">{n.items}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center rounded-full bg-gray-900 px-5 py-3 text-xs font-medium text-white hover:bg-gray-800">Browse All Notes</a>
              <a href="#" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-xs font-medium ring-1 ring-gray-200 hover:ring-gray-300">Build a Custom Scent</a>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200/40 bg-amber-50/60 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Try Before You Commit</h3>
            <p className="mt-2 text-sm text-gray-700">Order a discovery set with four 2ml vials. If you purchase a full bottle within 30 days, we credit the sample cost.</p>
            <div className="mt-4 flex gap-3">
              <button className="inline-flex items-center rounded-full bg-amber-500 px-5 py-3 text-xs font-semibold text-white hover:bg-amber-600">Get the Sample Kit</button>
              <button className="inline-flex items-center rounded-full bg-white px-5 py-3 text-xs font-medium ring-1 ring-gray-200 hover:ring-gray-300">How it works</button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-white p-4 ring-1 ring-amber-100">
                <p className="text-xl font-semibold text-gray-900">4</p>
                <p className="text-xs text-amber-700">Samples</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-amber-100">
                <p className="text-xl font-semibold text-gray-900">2 ml</p>
                <p className="text-xs text-amber-700">Each vial</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-amber-100">
                <p className="text-xl font-semibold text-gray-900">30 days</p>
                <p className="text-xs text-amber-700">Credit window</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Client Reviews</h2>
            <p className="mt-1 text-sm text-gray-600">Verified photos and impressions</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-xs font-medium text-amber-700">Read all →</a>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <Stars n={r.rating} />
              <p className="mt-3 text-sm text-gray-800">“{r.text}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                  {r.name.split(' ').map((x) => x[0]).join('')}
                </div>
                <p className="text-xs text-gray-600">{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid items-center gap-6 rounded-2xl border border-amber-200/40 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Concierge Support</h3>
            <p className="mt-2 text-sm text-gray-700">Need recommendations or order help? Our team responds in minutes via chat or WhatsApp.</p>
            <div className="mt-4 flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-xs font-medium text-white hover:bg-gray-800">
                <MessageCircle size={16} /> Live Chat
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-medium ring-1 ring-gray-200 hover:ring-gray-300">
                <MessageCircle size={16} /> WhatsApp
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-white p-4 text-center ring-1 ring-gray-100">
              <Truck className="mx-auto text-amber-500" />
              <p className="mt-2 text-xs font-medium text-gray-900">Fast Delivery</p>
              <p className="text-[11px] text-gray-600">1–3 business days</p>
            </div>
            <div className="rounded-xl bg-white p-4 text-center ring-1 ring-gray-100">
              <Shield className="mx-auto text-amber-500" />
              <p className="mt-2 text-xs font-medium text-gray-900">Secure Checkout</p>
              <p className="text-[11px] text-gray-600">PCI compliant</p>
            </div>
            <div className="rounded-xl bg-white p-4 text-center ring-1 ring-gray-100">
              <Star className="mx-auto text-amber-500" />
              <p className="mt-2 text-xs font-medium text-gray-900">Premium Reviews</p>
              <p className="text-[11px] text-gray-600">4.9/5 average</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Join the Circle</h3>
              <p className="mt-1 text-sm text-gray-700">Early access to drops, private offers, and scent education.</p>
            </div>
            <form className="flex w-full max-w-md gap-3">
              <input type="email" required placeholder="Your email" className="w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-200" />
              <button type="submit" className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-600">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
