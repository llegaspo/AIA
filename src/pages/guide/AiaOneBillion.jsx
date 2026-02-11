import React from 'react';

const AiaOneBillion = () => {
  return (
    <main className="w-full bg-white">
      <section className="relative min-h-[40vh] bg-gradient-to-br from-aia-red via-aia-red/90 to-aia-charcoal">
        <div className="relative z-10 px-10 md:px-16 pt-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">AIA One Billion</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Our commitment to engage one billion people across Asia to live Healthier, Longer, Better Lives by 2030.
          </p>
        </div>
      </section>

      <section id="introduction" className="px-10 md:px-16 py-12 border-t border-aia-red/10">
        <h2 className="text-aia-red font-bold uppercase">Introduction</h2>
        <p className="mt-4 text-aia-charcoal/80">
          AIA One Billion is our commitment to engage one billion people across Asia to live Healthier, Longer, Better Lives by 2030. The ticker device provides a visual cue to the act of counting up to one billion. We invite our communities to take action, and join us on the journey.
        </p>
        <p className="mt-4 text-aia-charcoal/80">
          You are encouraged to reference AIA One Billion alongside other purpose‑led brand activities that support Healthier, Longer, Better Lives.
        </p>
      </section>

      {[
        ['logo', 'Logo'],
        ['localised', 'Localised versions'],
        ['usage-hlbl', 'Usage with HLBL'],
        ['video', 'Video usage'],
        ['examples', 'Examples'],
        ['assets', 'AOB assets'],
        ['mirror', 'Mirror Moving Mountains'],
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

export default AiaOneBillion;
