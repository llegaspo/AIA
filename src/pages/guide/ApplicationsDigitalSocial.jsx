import React from 'react';

const SocialPhone = ({ label }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-48 w-28 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="h-6 bg-aia-red/90 text-white text-[8px] flex items-center justify-center">AIA</div>
      <div className="h-28 bg-aia-grey/30" />
      <div className="p-2 space-y-1">
        <div className="h-2 w-12 bg-aia-charcoal/20 rounded" />
        <div className="h-2 w-16 bg-aia-charcoal/10 rounded" />
      </div>
    </div>
    <p className="text-[11px] text-aia-charcoal/60">{label}</p>
  </div>
);

const ApplicationsDigitalSocial = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-12 md:px-20 py-12">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Digital: social media</h1>
        <div className="mt-10 grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <p className="text-sm text-aia-charcoal/60 text-center mb-3">Facebook header example</p>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="h-12 bg-[#3b5998] flex items-center px-4">
                <span className="text-white text-xs font-semibold">facebook</span>
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center gap-4">
                  <img src="/assets/logo_std_transparent.png" alt="AIA" className="h-10 w-10 logo-clean" />
                  <div>
                    <p className="text-aia-red font-bold uppercase text-sm">Find your healthier, longer, better life</p>
                    <p className="text-xs text-aia-charcoal/60">Cover built around the way you live.</p>
                  </div>
                </div>
                <div className="mt-6 h-40 rounded-xl bg-gradient-to-br from-aia-red/70 via-aia-red/40 to-aia-grey" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-aia-charcoal/60 text-center mb-3">Social media examples</p>
            <div className="grid grid-cols-3 gap-4">
              <SocialPhone label="Instagram" />
              <SocialPhone label="Instagram" />
              <SocialPhone label="Instagram" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsDigitalSocial;
