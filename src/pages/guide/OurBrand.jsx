import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';

const OurBrand = () => {
  useScrollSpy(['welcome', 'contents'], 'welcome');

  return (
    <main className="w-full bg-white">
      <section id="welcome" className="relative min-h-[60vh] bg-gradient-to-br from-white via-white to-aia-grey">
        <div className="absolute left-0 top-0 h-full w-1 bg-aia-red" aria-hidden="true" />
        <div className="px-10 md:px-16 py-16">
          <div className="flex items-center gap-3 text-aia-red">
            <img src="/assets/assets/logo.png" alt="AIA" className="h-12 w-auto" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
          <h1 className="mt-16 text-4xl md:text-6xl font-semibold text-aia-midnight">
            At AIA, our Purpose is to help people live
          </h1>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-aia-red">
            Healthier, Longer, Better Lives
          </h2>
        </div>
      </section>

      <section id="contents" className="px-10 md:px-16 py-12 min-h-[70vh]">
        <h2 className="text-aia-red font-bold uppercase text-3xl">Contents</h2>
        <p className="mt-4 text-aia-charcoal/70">
          Use this page to jump to any section of the AIA Brand Standards.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-aia-red font-bold uppercase text-sm">Our Brand</h3>
            <ul className="mt-3 space-y-2 text-sm text-aia-charcoal/80">
              <li>Welcome</li>
              <li>Contents</li>
              <li>Our Purpose</li>
              <li>Our Personality</li>
              <li>Our Tone of Voice</li>
              <li>Cultural Guidance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-aia-red font-bold uppercase text-sm">Our Identity</h3>
            <ul className="mt-3 space-y-2 text-sm text-aia-charcoal/80">
              <li>Our logos</li>
            </ul>
          </div>
          <div>
            <h3 className="text-aia-red font-bold uppercase text-sm">Visual Elements</h3>
            <ul className="mt-3 space-y-2 text-sm text-aia-charcoal/80">
              <li>Colours</li>
              <li>Typography</li>
              <li>Moving Mountains</li>
              <li>Photography</li>
              <li>Illustration</li>
              <li>Iconography</li>
            </ul>
          </div>
          <div>
            <h3 className="text-aia-red font-bold uppercase text-sm">Applications</h3>
            <ul className="mt-3 space-y-2 text-sm text-aia-charcoal/80">
              <li>Digital</li>
              <li>Print</li>
              <li>Merchandise</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurBrand;
