import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';
import CopyButton from '../../components/ui/CopyButton';

const Colours = () => {
  useScrollSpy(['core-colours', 'secondary-colours', 'core-shades', 'colour-donts'], 'core-colours');
  return (
    <main className="w-full bg-white guide-page">
      {/* Page 50: Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-gradient-to-br from-aia-red via-aia-red/90 to-aia-charcoal">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -right-20 top-10 h-72 w-72 rotate-12 rounded-3xl bg-white/20" />
          <div className="absolute right-40 bottom-10 h-64 w-64 -rotate-6 rounded-3xl bg-white/10" />
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
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Our Colours
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            AIA Red leads. White and Charcoal support. Secondary colours are used carefully to create hierarchy and energy.
          </p>
        </div>
      </section>

      {/* Page 51: Core colours */}
      <section id="core-colours" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Core colours</h2>
            <p className="mt-4 text-aia-charcoal/80">
              The use of strong core colours gives AIA instant brand recognition and differentiation in the marketplace. To build and maintain our brand recognition, we apply our colour palette consistently across a wide range of media.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-gray-100 p-6 text-center">
                <div className="h-24 rounded bg-[#D31145]" />
                <h3 className="mt-4 font-semibold">AIA Red</h3>
                <p className="text-xs text-aia-charcoal/60">Pantone 200C · C0 M100 Y63 K12 · R211 G17 B69 · #D31145</p>
                <div className="mt-3 flex items-center justify-center">
                  <CopyButton value="#D31145" />
                </div>
              </div>
              <div className="rounded-lg border border-gray-100 p-6 text-center">
                <div className="h-24 rounded bg-white border" />
                <h3 className="mt-4 font-semibold">White</h3>
                <p className="text-xs text-aia-charcoal/60">C0 M0 Y0 K0 · R255 G255 B255 · #FFFFFF</p>
                <div className="mt-3 flex items-center justify-center">
                  <CopyButton value="#FFFFFF" />
                </div>
              </div>
              <div className="rounded-lg border border-gray-100 p-6 text-center">
                <div className="h-24 rounded bg-[#333D47]" />
                <h3 className="mt-4 font-semibold">AIA Charcoal</h3>
                <p className="text-xs text-aia-charcoal/60">Pantone 432C · C78 M62 Y49 K51 · R51 G61 B71 · #333D47</p>
                <div className="mt-3 flex items-center justify-center">
                  <CopyButton value="#333D47" />
                </div>
              </div>
            </div>
            <p className="mt-6 text-aia-charcoal/80">
              AIA Red and white are the dominant colours. We use AIA Charcoal and its tints as an accent to create visual and typographic hierarchies where needed.
            </p>
            <p className="mt-4 text-aia-charcoal/80">
              When thinking about colour choices, we lean towards being bold and impactful and always, unmistakably AIA.
            </p>
            <p className="mt-4 text-aia-charcoal/80">
              When printing spot colours, ensure test prints are provided and reviewed before moving to press. When printing please ensure someone from the artwork team is present at the printers to do a press proof so any adjustments can be agreed.
            </p>
        </div>
      </section>

      {/* Core colour shades */}
      <section id="secondary-colours" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h2 className="text-aia-red font-bold uppercase">Core colour shades</h2>
          <p className="mt-4 text-aia-charcoal/80">
            Use approved tints of AIA Red and AIA Charcoal when you need softer emphasis, background layers, or subtle hierarchy.
          </p>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-aia-red font-semibold uppercase text-sm">AIA Red shades</h3>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                {[
                  '#D31145',
                  '#E13A5D',
                  '#EA657B',
                  '#F28F9E',
                  '#F6B7C2',
                  '#FADDE2',
                  '#FCEFF1',
                  '#FFFFFF',
                ].map((hex) => (
                  <div key={hex} className="rounded-lg border border-gray-100 p-2 text-center">
                    <div className="h-10 rounded" style={{ background: hex }} />
                    <p className="mt-2 text-aia-charcoal/70">{hex}</p>
                    <div className="mt-2 flex items-center justify-center">
                      <CopyButton value={hex} size="xs" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-aia-red font-semibold uppercase text-sm">AIA Charcoal shades</h3>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                {[
                  '#333D47',
                  '#4A5662',
                  '#66717C',
                  '#808B96',
                  '#A4AEB7',
                  '#C8CFD6',
                  '#E7EAEE',
                  '#F7F8FA',
                ].map((hex) => (
                  <div key={hex} className="rounded-lg border border-gray-100 p-2 text-center">
                    <div className="h-10 rounded" style={{ background: hex }} />
                    <p className="mt-2 text-aia-charcoal/70">{hex}</p>
                    <div className="mt-2 flex items-center justify-center">
                      <CopyButton value={hex} size="xs" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 52: Secondary colours */}
      <section id="core-shades" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Secondary colours</h2>
            <p className="mt-4 text-aia-charcoal/80">
              AIA is a red brand first and foremost. There are certain cases, however, when a secondary colour palette is necessary, for example in wayfinding, to establish hierarchies or highlight information, to add more energy to a design, or to make it feel calm and reassuring.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
              {[
                ['AIA Cerise', '#BA0361'],
                ['AIA Orange', '#FF754D'],
                ['AIA Yellow', '#F7C926'],
                ['AIA Purple', '#4C4794'],
                ['AIA Lavender', '#A199BA'],
                ['AIA Blue', '#1F78AD'],
                ['AIA Green', '#88B943'],
                ['AIA Silver', '#D3CAC3'],
                ['AIA Gold', '#CAAF78'],
                ['AIA Salmon', '#FF7A85'],
              ].map(([name, hex]) => (
                <div key={name} className="rounded-lg border border-gray-100 p-3 text-center">
                  <div className="h-10 rounded" style={{ background: hex }} />
                  <p className="mt-2 font-semibold">{name}</p>
                  <p className="text-aia-charcoal/60">{hex}</p>
                  <div className="mt-2 flex items-center justify-center">
                    <CopyButton value={hex} size="xs" />
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Page 56: Colours don’ts */}
      <section id="colour-donts" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Colours don’ts</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  src: '/guide/assets/color-donts/contrast.png',
                  text: "Don’t use colours\nwhere this is no\nvisual contrast.",
                },
                {
                  src: '/guide/assets/color-donts/secondary.png',
                  text:
                    "Don’t apply secondary\ncolours to the Moving\nMountains without\nAIA Red unless you\nare placing the Moving\nMountains on an\nAIA Red background.",
                },
                {
                  src: '/guide/assets/color-donts/four-secondary.png',
                  text:
                    "Don’t use more\nthan four secondary\ncolours on one page\nor section unless\nthey are being used\nas navigation.",
                },
                {
                  src: '/guide/assets/color-donts/incorrect-background.png',
                  text:
                    "Don’t use an incorrect\nbackground colour;\nchoose from the\napproved palette\nand tints.",
                },
                {
                  src: '/guide/assets/color-donts/no-second-if-no-aia-red.png',
                  text:
                    "Don’t use secondary\ncolours without using\nAIA Red.",
                },
              ].map((item) => (
                <div key={item.src} className="space-y-4">
                  <div className="h-28 flex items-center justify-center">
                    <img src={item.src} alt="Colour don’t" className="max-h-28 w-auto object-contain" />
                  </div>
                  <div className="flex items-start gap-3 text-sm text-aia-charcoal/80 leading-relaxed">
                    <span className="text-aia-charcoal/60 text-xl leading-none">✕</span>
                    <span className="whitespace-pre-line">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
    </main>
  );
};

export default Colours;
