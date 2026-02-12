import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';

const Illustration = () => {
  useScrollSpy(['illustration-style', 'illustration-examples', 'illustration-scene', 'illustration-integration', 'illustration-in-use'], 'illustration-style');
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
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight">Illustration</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Everyday surrealism: playful, bold, and unmistakably AIA.
          </p>
        </div>
      </section>

      {/* Style */}
      <section id="illustration-style" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <h2 className="text-aia-red font-bold uppercase">Our illustration style</h2>
            <p className="mt-4 text-aia-red font-semibold">Everyday surrealism</p>
            <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
              AIA as a mentor is working to help our customers to live Healthier, Longer, Better Lives, whatever
              that means to them. Because everyone’s dreams and ambitions are different, we use that as the
              inspiration for our illustration style.
            </p>
            <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
              Everyday surrealism places dreams and ambitions at the heart of our designs and uses scale and
              wit to set us apart from our competitors. Each illustration tells a story and builds on our Purpose
              and customer-centric approach.
            </p>
            <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
              Rather than just mimic what our photography does, we push our illustrations to the more playful
              end of the spectrum.
            </p>
            <p className="mt-4 text-aia-red text-sm font-semibold">
              Everyday surrealism, along with our distinctive colouring and shading style, is what makes our
              illustrations stand out as unmistakably AIA.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <img
              src="/guide/assets/illustration/Illustration/illustration-style.png"
              alt="Illustration style"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="illustration-examples" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h2 className="text-aia-red font-bold uppercase">Illustration examples</h2>
          <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed max-w-4xl">
            When colouring illustrations, AIA Red should always be present, with secondary colours used for other
            elements wherever possible. Should you need to use a colour outside of our core and secondary palettes,
            please pick a colour that complements our colours e.g. for skin tone, vegetables, nature etc.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              '/guide/assets/illustration/Illustration/illustration_example/ill-ex-1.png',
              '/guide/assets/illustration/Illustration/illustration_example/ill-ex-2.png',
              '/guide/assets/illustration/Illustration/illustration_example/ill-ex-3.png',
              '/guide/assets/illustration/Illustration/illustration_example/ill-ex-4.png',
              '/guide/assets/illustration/Illustration/illustration_example/ill-ex-5.png',
              '/guide/assets/illustration/Illustration/illustration_example/ill-ex-6.png',
              '/guide/assets/illustration/Illustration/illustration_example/ill-ex-7.png',
              '/guide/assets/illustration/Illustration/illustration_example/ill-ex-8.png',
              '/guide/assets/illustration/Illustration/illustration_example/ill-ex-9.png',
              '/guide/assets/illustration/Illustration/illustration_example/ill-ex-10.png',
            ].map((asset) => (
              <div key={asset} className="rounded-lg border border-gray-100 p-3 bg-white flex items-center justify-center">
                <img src={asset} alt="Illustration example" className="h-24 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scene example */}
      <section id="illustration-scene" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h2 className="text-aia-red font-bold uppercase">Illustration scene example</h2>
          <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed max-w-3xl">
            When using multiple illustrations to create a scene the background is shown in shades of grey.
            This example was created for the website and mobile app but could be used across all formats.
          </p>
          <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <img
              src="/guide/assets/illustration/Illustration/illustration-scene.png"
              alt="Illustration scene"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Moving Mountains integration */}
      <section id="illustration-integration" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <h2 className="text-aia-red font-bold uppercase">Moving Mountains integration</h2>
            <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
              Should you want to create a scene for your illustrations you can use the Moving Mountains as a backdrop.
            </p>
            <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">This can be done in two ways:</p>
            <p className="mt-4 text-aia-red font-semibold">Cropped mountain landscape</p>
            <p className="mt-2 text-aia-charcoal/80 text-sm leading-relaxed">
              The Moving Mountains become part of the illustrations and our characters interact with them, becoming part of the narrative.
            </p>
            <p className="mt-4 text-aia-red font-semibold">Minimal integration</p>
            <p className="mt-2 text-aia-charcoal/80 text-sm leading-relaxed">
              The Moving Mountains can be used as a simple backdrop for illustrations to add more depth.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <img src="/guide/assets/illustration/Illustration/moving-mountains/cropped-mountain-landscape.png" alt="Cropped mountain landscape" className="w-full h-auto" />
              <p className="mt-3 text-xs text-aia-charcoal/70">Cropped mountain landscape</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <img src="/guide/assets/illustration/Illustration/moving-mountains/minimal-integration.png" alt="Minimal integration" className="w-full h-auto" />
              <p className="mt-3 text-xs text-aia-charcoal/70">Minimal integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Illustration in use */}
      <section id="illustration-in-use" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <h2 className="text-aia-red font-bold uppercase">Illustration in use</h2>
            <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
              Illustrations should only be used where photography is not appropriate. As much as possible we want our
              customers to see themselves in our brand and photography is the best way to do this. Illustrations
              should not be used in any above‑the‑line communications.
            </p>
            <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">Illustrations may be used for:</p>
            <ul className="mt-4 text-aia-charcoal/80 text-sm space-y-2 list-disc list-inside">
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
          <div className="grid grid-cols-2 gap-6 items-start">
            <div className="col-span-1 row-span-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <img src="/guide/assets/illustration/Illustration/illustration-in-use/goal-cp.png" alt="App example" className="w-full h-auto" />
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <img src="/guide/assets/illustration/Illustration/illustration-in-use/weekly-exercise.png" alt="Weekly exercise example" className="w-full h-auto" />
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <img src="/guide/assets/illustration/Illustration/illustration-in-use/difficult-healthy-eating.png" alt="Healthy eating example" className="w-full h-auto" />
            </div>
            <div className="col-span-1 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <img src="/guide/assets/illustration/Illustration/illustration-in-use/instagram.png" alt="Social media example" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Illustration;
