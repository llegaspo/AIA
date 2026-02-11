import React from 'react';
import MovingMountainsOverlay from '../../components/ui/MovingMountains';

const Illustration = () => {
  return (
    <main className="w-full bg-white guide-page">
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-gradient-to-br from-aia-red via-aia-red/90 to-aia-charcoal">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute right-10 top-10 h-72 w-72 rotate-12 rounded-3xl bg-white/20" />
          <div className="absolute right-52 bottom-6 h-64 w-64 -rotate-6 rounded-3xl bg-white/10" />
        </div>
        <div className="relative z-10 px-12 md:px-20 pt-10">
          <div className="flex items-center gap-3 text-white">
            <img src="/assets/assets/logo_cropped.png" alt="AIA" className="h-12 w-auto logo-clean mix-blend-multiply" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 px-12 md:px-20 pt-16 md:pt-24">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight">Illustration</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Everyday surrealism: playful, bold, and unmistakably AIA.
          </p>
        </div>
      </section>

      {/* Style */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <h2 className="text-aia-red font-bold uppercase">Our illustration style</h2>
            <p className="mt-4 text-aia-charcoal/80">
              Everyday surrealism places dreams and ambitions at the heart of our designs and uses scale and wit to set us apart.
            </p>
            <p className="mt-4 text-aia-charcoal/80">
              AIA Red should always be present. Secondary colours may support, but keep the palette restrained and consistent.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['asset_11.png', 'asset_12.png', 'asset_13.png', 'asset_14.png'].map((asset) => (
              <div key={asset} className="rounded-lg border border-gray-100 p-2">
                <img src={`/assets/assets/${asset}`} alt="Illustration example" className="w-full h-32 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h2 className="text-aia-red font-bold uppercase">Illustration examples</h2>
          <p className="mt-4 text-aia-charcoal/80">
            Use AIA Red prominently. Secondary colours can add energy but must stay within the palette.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['asset_15.png', 'asset_16.png', 'asset_17.png', 'asset_18.png'].map((asset) => (
              <div key={asset} className="rounded-lg border border-gray-100 p-2">
                <img src={`/assets/assets/${asset}`} alt="Illustration example" className="w-full h-28 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scene example */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h2 className="text-aia-red font-bold uppercase">Illustration scene example</h2>
          <p className="mt-4 text-aia-charcoal/80">
            When creating a scene, use muted grey backgrounds so characters and brand colours stand out.
          </p>
          <div className="mt-6 rounded-2xl bg-aia-grey/50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <img src="/assets/assets/asset_19.png" alt="Scene element" className="h-32 object-contain" />
              <img src="/assets/assets/asset_20.png" alt="Scene element" className="h-32 object-contain" />
              <img src="/assets/assets/asset_21.png" alt="Scene element" className="h-32 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Moving Mountains integration */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <h2 className="text-aia-red font-bold uppercase">Moving Mountains integration</h2>
            <p className="mt-4 text-aia-charcoal/80">
              Use Moving Mountains as a cropped landscape, or minimal backdrop for depth.
            </p>
            <ul className="mt-4 text-aia-charcoal/70 list-disc list-inside">
              <li>Cropped mountain landscape with characters interacting</li>
              <li>Minimal integration as a subtle background layer</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-aia-grey/40 p-6">
            <MovingMountainsOverlay className="w-full h-40 text-aia-red" />
          </div>
        </div>
      </section>

      {/* Illustration in use */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h2 className="text-aia-red font-bold uppercase">Illustration in use</h2>
          <p className="mt-4 text-aia-charcoal/80">
            Illustrations should only be used where photography is not appropriate. Avoid above‑the‑line communications.
          </p>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-aia-charcoal/70">
            <li>Website / app product info</li>
            <li>Explainer videos</li>
            <li>Internal comms</li>
            <li>Annual reports</li>
            <li>Healthy living index</li>
            <li>Infographics</li>
            <li>Email marketing</li>
            <li>Social media posts</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Illustration;
