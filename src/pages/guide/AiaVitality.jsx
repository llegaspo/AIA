import React from 'react';

const AiaVitality = () => {
  return (
    <main className="w-full bg-white">
      <section className="relative min-h-[40vh] bg-gradient-to-br from-aia-charcoal via-aia-charcoal/90 to-aia-red">
        <div className="relative z-10 px-10 md:px-16 pt-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">AIA Vitality</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Supplementary design principles that work in tandem with the AIA Brand Standards.
          </p>
        </div>
      </section>

      <section id="introduction" className="px-10 md:px-16 py-12 border-t border-aia-red/10">
        <h2 className="text-aia-red font-bold uppercase">Introduction</h2>
        <p className="mt-4 text-aia-charcoal/80">
          We are pleased to introduce you to the AIA Vitality design principles. This section explains how AIA Vitality’s design principles work in tandem with the Brand Standards, with the objective of helping you apply the logo and graphics consistently across communications.
        </p>
        <p className="mt-4 text-aia-charcoal/80">
          The AIA Brand Standards remain the primary reference for verbal and visual identity elements. AIA Vitality brand elements are only for use on AIA Vitality projects.
        </p>
      </section>

      {[
        ['about', 'About'],
        ['positioning', 'Positioning'],
        ['logo', 'Logo'],
        ['localised', 'Localised versions'],
        ['brand-elements', 'Brand elements'],
        ['moving-mountains', 'Moving Mountains'],
        ['examples', 'Examples'],
      ].map(([id, title]) => (
        <section key={id} id={id} className="px-10 md:px-16 py-12 border-t border-aia-red/10">
          <h2 className="text-aia-red font-bold uppercase">{title}</h2>
          <p className="mt-4 text-aia-charcoal/70">
            Content for this section will be refined based on the new PDF guidance.
          </p>
        </section>
      ))}
    </main>
  );
};

export default AiaVitality;
