import React from 'react';
import CopyButton from '../../components/ui/CopyButton';

const Colours = () => {
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
      <section className="border-t border-aia-red/10">
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
      <section className="border-t border-aia-red/10">
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
      <section className="border-t border-aia-red/10">
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

      {/* Page 53: Background colours */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Background colours</h2>
            <p className="mt-4 text-aia-charcoal/80">
              An approved set of background colours may be used sparingly in your designs to add interest, however AIA Red is our lead brand colour and must always be predominant.
            </p>
            <p className="mt-4 text-aia-charcoal/80">
              Only use the secondary colours and tints as shown here. Gradient colour backgrounds should be avoided at all times; the AIA colour palette is not meant to be used in this way.
            </p>
            <p className="mt-4 text-aia-charcoal/80">
              Text, visuals and images should be fully legible with plenty of contrast for accessibility.
            </p>
        </div>
      </section>

      {/* Page 54: Core colours in use */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Core colours in use</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-32 bg-aia-red" />
                <div className="p-4 text-sm text-aia-charcoal/70">Use AIA Red for bold headlines and key highlights.</div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-32 bg-aia-grey" />
                <div className="p-4 text-sm text-aia-charcoal/70">Use white space to create clarity and emphasis.</div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-32 bg-aia-charcoal" />
                <div className="p-4 text-sm text-aia-charcoal/70">Use AIA Charcoal for body copy and hierarchy.</div>
              </div>
            </div>
        </div>
      </section>

      {/* Page 55: Secondary colours in use */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Secondary colours in use</h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['#FF7A85', '#BA0361', '#FF754D', '#F7C926', '#4C4794', '#A199BA', '#1F78AD', '#88B943'].map((hex) => (
                <div key={hex} className="rounded-lg border border-gray-100 overflow-hidden">
                  <div className="h-20" style={{ background: hex }} />
                  <div className="p-2 text-xs text-aia-charcoal/60">{hex}</div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Page 56: Colours don’ts */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Colours don’ts</h2>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-aia-charcoal/70">
              <li>Don’t use gradients; the palette should stay flat and bold.</li>
              <li>Don’t let secondary colours overpower AIA Red.</li>
              <li>Don’t use low-contrast text on coloured backgrounds.</li>
              <li>Don’t introduce unapproved colours.</li>
              <li>Don’t apply Moving Mountains in non-core colours on coloured backgrounds.</li>
              <li>Don’t use tints outside the approved scale.</li>
            </ul>
        </div>
      </section>
    </main>
  );
};

export default Colours;
