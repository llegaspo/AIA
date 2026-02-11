import React from 'react';

const HighNetWorth = () => {
  return (
    <main className="w-full bg-white">
      <section className="relative min-h-[40vh] bg-gradient-to-br from-aia-red via-aia-red/90 to-aia-charcoal">
        <div className="relative z-10 px-10 md:px-16 pt-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">High Net Worth</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Specialist, customised solutions for high net worth clients.
          </p>
        </div>
      </section>

      <section id="introduction" className="px-10 md:px-16 py-12 border-t border-aia-red/10">
        <h2 className="text-aia-red font-bold uppercase">Introduction</h2>
        <p className="mt-4 text-aia-charcoal/80">
          AIA High Net Worth provides specialist, customised solutions for high net worth clients. We exist to deliver relevant, high quality services that focus on preserving and nourishing wealth today and cultivating it for future generations.
        </p>
        <p className="mt-4 text-aia-charcoal/80">
          Our distinctive identity represents the level of dedication and care that underpins our bespoke services. It reflects our ambition to become the partner of choice for high net worth clients across Asia.
        </p>
      </section>

      {[
        ['core-colours', 'Core colours'],
        ['moving-mountains', 'Moving Mountains'],
        ['applying-colour', 'Applying colour'],
        ['photography', 'Photography'],
        ['typography', 'Typography'],
        ['applications', 'Applications'],
        ['corporate-gifts', 'Corporate gifts'],
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

export default HighNetWorth;
