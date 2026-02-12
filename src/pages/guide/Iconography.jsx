import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';

const Iconography = () => {
  useScrollSpy(['system-icons', 'illustrated-icons'], 'system-icons');
  return (
    <main className="w-full bg-white guide-page">
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-gradient-to-br from-aia-charcoal via-aia-charcoal/90 to-aia-red">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute left-10 top-10 h-64 w-64 rotate-6 rounded-3xl bg-white/10" />
          <div className="absolute right-10 bottom-10 h-72 w-72 -rotate-12 rounded-3xl bg-white/15" />
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
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight">Iconography</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Minimal system icons for navigation and illustrated icons for storytelling.
          </p>
        </div>
      </section>

      {/* System icons */}
      <section id="system-icons" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <div>
              <h2 className="text-aia-red font-bold uppercase">System icons</h2>
              <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                For digital system and navigation icons we use a minimal, modern style with rounded edges to
                complement our core brand assets.
              </p>
              <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                System icons may be placed in a circular container or used simply on their own.
              </p>
              <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                Secondary colours may be used for icons to aid navigation.
              </p>
              <p className="mt-6 text-aia-red font-semibold text-sm">
                Please contact the Group Brand Team for more information on system icons.
              </p>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-5 gap-6 items-center">
                {[
                  '/guide/assets/iconography/house-icon.png',
                  '/guide/assets/iconography/cursor-icon.png',
                  '/guide/assets/iconography/link-icon.png',
                  '/guide/assets/iconography/lightning-icon.png',
                  '/guide/assets/iconography/click-icon.png',
                ].map((src) => (
                  <img key={src} src={src} alt="System icon" className="h-10 w-10 object-contain" />
                ))}
              </div>
              <div className="grid grid-cols-5 gap-6">
                {[
                  { src: '/guide/assets/iconography/house-icon.png', bg: 'bg-aia-red' },
                  { src: '/guide/assets/iconography/cursor-icon.png', bg: 'bg-aia-charcoal' },
                  { src: '/guide/assets/iconography/link-icon.png', bg: 'bg-[#FF7A85]' },
                  { src: '/guide/assets/iconography/lightning-icon.png', bg: 'bg-[#BA0361]' },
                  { src: '/guide/assets/iconography/click-icon.png', bg: 'bg-[#FF754D]' },
                ].map((item) => (
                  <div key={item.src} className={`h-16 w-16 rounded-full ${item.bg} flex items-center justify-center`}>
                    <img src={item.src} alt="System icon in circle" className="h-8 w-8 object-contain brightness-0 invert" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-6 items-center">
                {[
                  '/guide/assets/iconography/clock-icon.png',
                  '/guide/assets/iconography/lock-icon.png',
                  '/guide/assets/iconography/warning-icon.png',
                  '/guide/assets/iconography/trash-icon.png',
                  '/guide/assets/iconography/click-icon.png',
                ].map((src) => (
                  <img key={src} src={src} alt="System icon" className="h-9 w-9 object-contain opacity-80" />
                ))}
              </div>
              <div className="grid grid-cols-5 gap-6">
                {[
                  { src: '/guide/assets/iconography/clock-icon.png', bg: 'bg-[#F7C926]' },
                  { src: '/guide/assets/iconography/lock-icon.png', bg: 'bg-[#4C4794]' },
                  { src: '/guide/assets/iconography/warning-icon.png', bg: 'bg-[#A199BA]' },
                  { src: '/guide/assets/iconography/trash-icon.png', bg: 'bg-[#1F78AD]' },
                  { src: '/guide/assets/iconography/click-icon.png', bg: 'bg-[#D3CAC3]' },
                ].map((item) => (
                  <div key={item.src} className={`h-16 w-16 rounded-full ${item.bg} flex items-center justify-center`}>
                    <img src={item.src} alt="System icon in circle" className="h-8 w-8 object-contain brightness-0 invert" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Illustrated icons */}
      <section id="illustrated-icons" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <div>
              <h2 className="text-aia-red font-bold uppercase">Illustrated icons</h2>
              <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                We have an illustrated icon style for non‑UX communication purposes.
              </p>
              <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">Illustrated icons can be used for:</p>
              <ul className="mt-3 text-aia-charcoal/80 text-sm list-disc list-inside space-y-1">
                <li>Product information</li>
                <li>Notifications</li>
                <li>Highlighting content</li>
                <li>Infographics</li>
              </ul>
              <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                Illustrated icons should be made of simple shapes and never be too complex.
              </p>
              <p className="mt-6 text-aia-red font-semibold text-sm">Colour:</p>
              <p className="mt-2 text-aia-charcoal/80 text-sm leading-relaxed">
                You can use secondary colours but AIA Red must always be present. There should be a minimum of two and a
                maximum of three colours used in the illustrated icons.
              </p>
              <p className="mt-6 text-aia-red font-semibold text-sm">Mono:</p>
              <p className="mt-2 text-aia-charcoal/80 text-sm leading-relaxed">
                White mono versions should be created using a mixture of 100% opacity and 80% opacity white, while using
                pathfinder cuts in Adobe Illustrator for more intricate details. Colour mono versions may be created
                using core and secondary colours and two of the selected colour’s tints.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <img
                  src="/guide/assets/iconography/illustrated-icons.png"
                  alt="Illustrated icons"
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="text-xs text-aia-charcoal/60 mb-3">Infographic example</p>
                  <img
                    src="/guide/assets/iconography/inforgraphin-&-product-info-sample.png"
                    alt="Infographic example"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="text-xs text-aia-charcoal/60 mb-3">Product info example</p>
                  <img
                    src="/guide/assets/iconography/product-info-example.png"
                    alt="Product info example"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Iconography;
