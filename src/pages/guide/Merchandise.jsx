import React from 'react';

const Merchandise = () => {
  return (
    <main className="w-full bg-white">
      <section className="relative min-h-[45vh] md:min-h-[55vh] bg-gradient-to-br from-aia-red via-aia-red/90 to-aia-charcoal">
        <div className="relative z-10 px-8 md:px-16 pt-10 text-white">
          <div className="flex items-center gap-3">
            <img src="/assets/assets/logo.png" alt="AIA" className="h-12 w-auto" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
          <h1 className="mt-12 text-5xl md:text-7xl font-bold uppercase">Merchandise</h1>
          <p className="mt-4 max-w-2xl text-white/80">Branded gear should be bold, consistent, and unmistakably AIA.</p>
        </div>
      </section>

      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1200px] px-10 md:px-16 py-12">
          <h2 className="text-aia-red font-bold uppercase">Merchandise applications</h2>
          <p className="mt-4 text-aia-charcoal/80">
            Apply the core logo and palette with restraint. Ensure the logo remains legible and never crowded.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/merch_app.png" alt="Merchandise mockup" className="w-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Merchandise;
