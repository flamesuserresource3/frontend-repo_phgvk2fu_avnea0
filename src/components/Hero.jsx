import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setTimeout(() => setShow3D(true), 300);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  return (
    <section className="relative w-full min-h-[78vh] bg-white">
      <div className="absolute inset-0">
        {!prefersReducedMotion && show3D ? (
          <Spline
            scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-white via-amber-50 to-white" />
        )}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/80 pointer-events-none" />
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-300/40">
            New season • Hand-picked luxury
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Perfumes crafted to feel cinematic
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore refined fragrances with luminous florals, deep woods, and rare resins. Order full bottles or try elegant discovery samples—delivered fast.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#topsellers" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              Shop Bestsellers
            </a>
            <a href="#offers" className="inline-flex items-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-medium ring-1 ring-gray-200 hover:ring-gray-300 transition-all">
              View Offers
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
