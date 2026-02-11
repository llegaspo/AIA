import React from 'react';
import { Heart, Shield, Activity, Users, Bell, PieChart } from 'lucide-react';

const Iconography = () => {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-gradient-to-br from-aia-charcoal via-aia-charcoal/90 to-aia-red">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute left-10 top-10 h-64 w-64 rotate-6 rounded-3xl bg-white/10" />
          <div className="absolute right-10 bottom-10 h-72 w-72 -rotate-12 rounded-3xl bg-white/15" />
        </div>
        <div className="relative z-10 px-8 md:px-16 pt-10">
          <div className="flex items-center gap-3 text-white">
            <img src="/assets/assets/logo.png" alt="AIA" className="h-12 w-auto" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 px-8 md:px-16 pt-16 md:pt-24">
          <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tight">Iconography</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Minimal system icons for navigation and illustrated icons for storytelling.
          </p>
        </div>
      </section>

      {/* System icons */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
          <h2 className="text-aia-red font-bold uppercase">System icons</h2>
          <p className="mt-4 text-aia-charcoal/80">
            Use a minimal, modern style with rounded edges. Icons can sit in a circular container or stand alone. Secondary colours can aid navigation.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-4">
            {[Heart, Shield, Activity, Users, Bell, PieChart].map((Icon, idx) => (
              <div key={idx} className="h-16 w-16 rounded-full border border-gray-100 flex items-center justify-center text-aia-red">
                <Icon size={24} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustrated icons */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
          <h2 className="text-aia-red font-bold uppercase">Illustrated icons</h2>
          <p className="mt-4 text-aia-charcoal/80">
            Illustrated icons are for non‑UX purposes like product info, notifications, highlighting content, and infographics. Use simple shapes and keep them minimal.
          </p>
          <p className="mt-4 text-aia-charcoal/80">
            Colour rules: AIA Red must always be present. Use 2–3 colours total. Mono versions use 100% and 80% opacity.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['asset_22.png', 'asset_23.png', 'asset_2.png', 'asset_3.png'].map((asset) => (
              <div key={asset} className="rounded-lg border border-gray-100 p-3">
                <img src={`/assets/assets/${asset}`} alt="Illustrated icon" className="h-20 w-full object-contain" />
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-gray-100 p-4 text-sm text-aia-charcoal/70">
            Example: 50% are concerned about the potential costs of critical illnesses.
          </div>
        </div>
      </section>
    </main>
  );
};

export default Iconography;
