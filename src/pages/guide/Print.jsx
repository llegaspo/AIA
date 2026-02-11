import React from 'react';

const Print = () => {
  return (
    <main className="w-full bg-white">
      <section className="relative min-h-[45vh] md:min-h-[55vh] bg-gradient-to-br from-aia-charcoal via-aia-charcoal/90 to-aia-red">
        <div className="relative z-10 px-8 md:px-16 pt-10 text-white">
          <div className="flex items-center gap-3">
            <img src="/assets/assets/logo.png" alt="AIA" className="h-12 w-auto" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
          <h1 className="mt-12 text-5xl md:text-7xl font-bold uppercase">Print</h1>
          <p className="mt-4 max-w-2xl text-white/80">Stationery and collateral should reinforce trust and clarity through clean layout and strong hierarchy.</p>
        </div>
      </section>

      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1200px] px-10 md:px-16 py-12">
          <h2 className="text-aia-red font-bold uppercase">Print applications</h2>
          <p className="mt-4 text-aia-charcoal/80">
            Use AIA Red strategically, preserve whitespace, and ensure legibility across formats.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/print_app.png" alt="Print application mockup" className="w-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Print;
