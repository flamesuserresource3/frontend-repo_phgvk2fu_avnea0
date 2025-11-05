import React, { useEffect, useMemo, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

function getMsToMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime() - now.getTime();
}

function format(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return { hours, minutes, seconds };
}

export default function DealsTimer() {
  const [remaining, setRemaining] = useState(getMsToMidnight());
  const controls = useAnimation();

  useEffect(() => {
    const i = setInterval(() => setRemaining(getMsToMidnight()), 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    controls.start({ scale: [1, 1.06, 1], transition: { duration: 0.6 } });
  }, [remaining, controls]);

  const t = useMemo(() => format(remaining), [remaining]);

  return (
    <section id="offers" className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl border border-amber-200/40 bg-amber-50/60 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-amber-700">Daily Deal</p>
              <h2 className="mt-1 text-2xl font-semibold text-gray-900">Golden Hour Offers end in</h2>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {['Hours', 'Minutes', 'Seconds'].map((label, idx) => {
                const value = idx === 0 ? t.hours : idx === 1 ? t.minutes : t.seconds;
                return (
                  <motion.div
                    key={label}
                    animate={controls}
                    className="flex flex-col items-center rounded-xl bg-white px-6 py-4 shadow-sm ring-1 ring-amber-100"
                  >
                    <span className="text-3xl font-semibold tabular-nums text-gray-900">{value}</span>
                    <span className="mt-1 text-xs uppercase tracking-wide text-amber-700">{label}</span>
                  </motion.div>
                );
              })}
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors">
              Shop Flash Sale
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
