import React from 'react';
import MovingMountainsOverlay from '../../components/ui/MovingMountains';

const MountainsSample = ({ variant = 'core' }) => {
  if (variant === 'outline') {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-20" aria-hidden="true">
        <path d="M10 70 L70 10 L130 70 Z" fill="none" stroke="#D31145" strokeWidth="3" />
        <path d="M70 70 L130 20 L190 70 Z" fill="none" stroke="#D31145" strokeWidth="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 90" className="w-full h-20" aria-hidden="true">
      <path d="M10 80 L70 10 L130 80 Z" fill="#D31145" fillOpacity="1" />
      <path d="M60 80 L120 20 L190 80 Z" fill="#D31145" fillOpacity="0.6" />
      <path d="M100 80 L160 30 L220 80 Z" fill="#D31145" fillOpacity="0.4" />
    </svg>
  );
};

const MovingMountains = () => {
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
            <img src="/assets/assets/logo_cropped_transparent.png" alt="AIA" className="h-12 w-auto logo-clean mix-blend-multiply" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 px-12 md:px-20 pt-16 md:pt-24">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight">Moving Mountains</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            A visual representation of Healthier, Longer, Better Lives. Use the system consistently and with restraint.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div className="text-aia-charcoal/80">
            <h2 className="text-aia-red font-bold uppercase">Introduction</h2>
            <p className="mt-4">
              Healthier, Longer, Better Lives is active, customer-centric and personal. We developed the Moving Mountains (three- and four-peak versions) as a visual representation of this.
            </p>
            <p className="mt-4">
              Use Moving Mountains as a graphic or integrated with imagery. Don’t overuse it; it does not need to appear on every page.
            </p>
          </div>
          <div className="rounded-2xl bg-aia-grey/40 p-8 flex items-center justify-center">
            <MovingMountainsOverlay className="w-full h-48 text-aia-red" />
          </div>
        </div>
      </section>

      {/* Core / Multicolour / Two-colour / Outline / Mirror */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h2 className="text-aia-red font-bold uppercase">Variants</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold text-aia-charcoal">Core Moving Mountains</h3>
              <p className="mt-3 text-aia-charcoal/70">First mountain is 100% AIA Red. Middle mountains are 90% opacity.</p>
              <div className="mt-4"><MountainsSample /></div>
            </div>
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold text-aia-charcoal">Multicolour</h3>
              <p className="mt-3 text-aia-charcoal/70">Predominant colour must be AIA Red. Secondary colours only at 100%.</p>
              <div className="mt-4 flex gap-2">
                <div className="h-12 w-12 rounded bg-[#D31145]" />
                <div className="h-12 w-12 rounded bg-[#FF754D]" />
                <div className="h-12 w-12 rounded bg-[#1F78AD]" />
              </div>
            </div>
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold text-aia-charcoal">Two‑colour</h3>
              <p className="mt-3 text-aia-charcoal/70">AIA Red + tints of one secondary colour. Don’t mix tints from different colours.</p>
              <div className="mt-4 flex gap-2">
                <div className="h-12 w-12 rounded bg-[#D31145]" />
                <div className="h-12 w-12 rounded bg-[#4C4794]" />
                <div className="h-12 w-12 rounded bg-[#9491BE]" />
              </div>
            </div>
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold text-aia-charcoal">Outline</h3>
              <p className="mt-3 text-aia-charcoal/70">Use only AIA Red or white, or follow core tint rules.</p>
              <div className="mt-4"><MountainsSample variant="outline" /></div>
            </div>
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold text-aia-charcoal">Mirror</h3>
              <p className="mt-3 text-aia-charcoal/70">Create in design tools by masking background imagery into mountain shapes.</p>
              <div className="mt-4 h-20 rounded bg-gradient-to-r from-aia-grey to-aia-red/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Photography integration */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h2 className="text-aia-red font-bold uppercase">Using with photography</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold">Container</h3>
              <p className="mt-2 text-sm text-aia-charcoal/70">Use the first mountain as a container for the image.</p>
              <div className="mt-4 relative h-44 rounded-xl bg-aia-grey overflow-hidden">
                <img src="/guide/assets/purpose/purpose-active.jpg" alt="Active" className="absolute inset-0 h-full w-full object-cover" />
                <div
                  className="absolute inset-0 bg-aia-red/30"
                  style={{ clipPath: 'polygon(0% 100%, 45% 20%, 90% 100%)' }}
                />
              </div>
            </div>
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold">Cutout</h3>
              <p className="mt-2 text-sm text-aia-charcoal/70">Cutout photography can merge with the mountains for a minimal design.</p>
              <div className="mt-4 h-44 rounded-xl bg-aia-grey flex items-center justify-center">
                <img src="/guide/assets/purpose/purpose-family-transparent.png" alt="Cutout" className="h-28 cutout-clean" />
              </div>
            </div>
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold">Full bleed</h3>
              <p className="mt-2 text-sm text-aia-charcoal/70">Use mountains as a supporting graphic over full‑bleed photography.</p>
              <div className="mt-4 relative h-44 rounded-xl overflow-hidden">
                <img src="/guide/assets/purpose/purpose-kitchen.jpg" alt="Full bleed" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-aia-red/60" />
              </div>
            </div>
            <div className="rounded-lg border border-gray-100 p-6">
              <h3 className="font-semibold">Transparent</h3>
              <p className="mt-2 text-sm text-aia-charcoal/70">Use transparent mountains on light backgrounds only.</p>
              <div className="mt-4 relative h-44 rounded-xl overflow-hidden">
                <img src="/guide/assets/purpose/purpose-customer.jpg" alt="Transparent" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-aia-red/20 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Don’ts */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h2 className="text-aia-red font-bold uppercase">Moving Mountains don’ts</h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-aia-charcoal/70">
            <li>Don’t complicate designs with unnecessary graphics.</li>
            <li>Don’t use pointed triangles; use the approved shapes.</li>
            <li>Don’t combine container and cutout methods.</li>
            <li>Don’t rotate or invert unless specified.</li>
            <li>Don’t use more than four mountains in static form.</li>
            <li>Don’t use inverted mountains on non‑red backgrounds.</li>
          </ul>
        </div>
      </section>

      {/* Library & Creation */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h2 className="text-aia-red font-bold uppercase">Library & creation</h2>
          <p className="mt-4 text-aia-charcoal/80">
            Use the approved library whenever possible. New Moving Mountains should be created using the Illustrator template and grid.
          </p>
          <ol className="mt-6 list-decimal list-inside text-aia-charcoal/80 space-y-2">
            <li>Draw the first mountain using grid points.</li>
            <li>Duplicate and adjust to create additional mountains.</li>
            <li>Apply 8px rounded corners.</li>
            <li>Use pathfinder to trim overlaps and maintain clean edges.</li>
          </ol>
        </div>
      </section>
    </main>
  );
};

export default MovingMountains;
