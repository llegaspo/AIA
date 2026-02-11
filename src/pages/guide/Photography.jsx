import React from 'react';

const Photography = () => {
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
          <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tight">Photography</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Real people, real moments. Inclusive, vibrant, and emotionally close.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
          <h2 className="text-aia-red font-bold uppercase">Our photography principles</h2>
          <p className="mt-4 text-aia-charcoal/80">
            Brilliant photography helps customers see themselves in our brand. We are not interested in posing models or unobtainable lifestyles.
          </p>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-aia-charcoal/70">
            <li>Represent Healthier, Longer, Better Lives</li>
            <li>Represent real life and real people</li>
            <li>Capture people in the moment</li>
            <li>Be inclusive and realistic</li>
            <li>Show a variety of life circumstances</li>
            <li>Show emotions that feel up close and personal</li>
          </ul>
        </div>
      </section>

      {/* Brief essentials */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
          <h2 className="text-aia-red font-bold uppercase">Photography briefs</h2>
          <p className="mt-4 text-aia-charcoal/80">
            Photography should be people‑focused. Landscape shots or images without people should not be used.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-aia-charcoal/70">
            <div className="rounded-lg border border-gray-100 p-5">
              <h3 className="font-semibold text-aia-charcoal">Customer‑centric</h3>
              <p className="mt-2">Real people living their lives. Authentic, intimate, energetic.</p>
            </div>
            <div className="rounded-lg border border-gray-100 p-5">
              <h3 className="font-semibold text-aia-charcoal">Active</h3>
              <p className="mt-2">Capture vibrant, in‑the‑moment activity, not posed scenes.</p>
            </div>
            <div className="rounded-lg border border-gray-100 p-5">
              <h3 className="font-semibold text-aia-charcoal">Personal</h3>
              <p className="mt-2">Relatable images so people recognise themselves and feel inspired.</p>
            </div>
            <div className="rounded-lg border border-gray-100 p-5">
              <h3 className="font-semibold text-aia-charcoal">Progress</h3>
              <p className="mt-2">Show the joy of making progress, big or small.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What works */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
          <h2 className="text-aia-red font-bold uppercase">What works and what doesn’t</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-gray-100 p-4">
              <img src="/guide/assets/purpose/purpose-kitchen.jpg" alt="Too posed example" className="w-full rounded-md" />
              <p className="mt-3 text-sm text-aia-charcoal/70">
                Too posed. Feels like a photoshoot and lacks the energy of real life.
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 p-4">
              <img src="/guide/assets/purpose/purpose-active.jpg" alt="On brand example" className="w-full rounded-md" />
              <p className="mt-3 text-sm text-aia-charcoal/70">
                Natural, energetic, and believable. Feels like a moment in real life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Don’ts */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
          <h2 className="text-aia-red font-bold uppercase">Photography don’ts</h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-aia-charcoal/70">
            <li>Don’t use landscape photography. Show people.</li>
            <li>Don’t use overly posed imagery.</li>
            <li>Don’t use negative or gloomy imagery.</li>
            <li>Don’t include single‑use plastics or harmful materials.</li>
            <li>Don’t perpetuate unrealistic body images.</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Photography;
