import React from 'react';

const BrandChecklist = () => {
  return (
    <main className="w-full bg-white">
      <section className="relative min-h-[40vh] bg-gradient-to-br from-aia-charcoal via-aia-charcoal/90 to-aia-red">
        <div className="relative z-10 px-10 md:px-16 pt-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">Brand Checklist</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Use these checklists to ensure every touchpoint is unmistakably AIA.
          </p>
        </div>
      </section>

      <section id="introduction" className="px-10 md:px-16 py-12 border-t border-aia-red/10">
        <h2 className="text-aia-red font-bold uppercase">Introduction</h2>
        <p className="mt-4 text-aia-charcoal/80">
          The Brand Standards help ensure precision and consistency in how we present AIA across all touchpoints. Use the checklist pages to verify your materials against the standards.
        </p>
      </section>

      {[
        ['positioning', 'Positioning checklist'],
        ['identity', 'Identity checklist'],
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

export default BrandChecklist;
