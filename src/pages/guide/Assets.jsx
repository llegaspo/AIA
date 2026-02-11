import React from 'react';

const Assets = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="relative min-h-[40vh] bg-gradient-to-br from-aia-red via-aia-red/90 to-aia-charcoal">
        <div className="relative z-10 px-12 md:px-20 pt-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">Assets</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Asset links and brand contacts.
          </p>
        </div>
      </section>

      <section id="links" className="px-12 md:px-20 py-12 border-t border-aia-red/10">
        <h2 className="text-aia-red font-bold uppercase">Asset links and contacts</h2>
        <p className="mt-4 text-aia-charcoal/80">
          The AIA Brand Standards provide in‑depth instructions to enable everyone at AIA to uphold the integrity of our brand. They should be followed at all times and in all markets.
        </p>
        <p className="mt-4 text-aia-charcoal/80">
          These links are for internal use only. If you need to share links externally please ensure that an MPSA/SOW/NDA has been signed between AIA and any third parties before doing so.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-aia-charcoal/70">
          <div className="rounded-lg border border-gray-100 p-4">Brand Standards assets</div>
          <div className="rounded-lg border border-gray-100 p-4">Cultural Insights research</div>
          <div className="rounded-lg border border-gray-100 p-4">AIA One Billion assets</div>
          <div className="rounded-lg border border-gray-100 p-4">Live with Vitality assets</div>
        </div>
        <p className="mt-6 text-aia-charcoal/80">
          For branding support, please contact the Group Brand Team at: <span className="text-aia-red font-semibold">group.brand@aia.com</span>
        </p>
      </section>
    </main>
  );
};

export default Assets;
