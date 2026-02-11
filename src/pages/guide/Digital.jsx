import React from 'react';

const PhoneMock = ({ label }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-40 w-24 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="h-6 bg-aia-red/90 text-white text-[8px] flex items-center justify-center">AIA</div>
      <div className="h-20 bg-aia-grey/30" />
      <div className="p-2 space-y-1">
        <div className="h-2 w-12 bg-aia-charcoal/20 rounded" />
        <div className="h-2 w-16 bg-aia-charcoal/10 rounded" />
      </div>
    </div>
    <p className="text-[11px] text-aia-charcoal/60">{label}</p>
  </div>
);

const Digital = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-12 md:px-20 py-12">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Digital</h1>
        <div className="mt-8 flex flex-wrap gap-6">
          {['Mobile app example', 'Mobile app example', 'Mobile app example', 'Mobile app example', 'Mobile app example'].map((label, idx) => (
            <PhoneMock key={`${label}-${idx}`} label={label} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <div>
            <p className="text-sm text-aia-charcoal/60 text-center mb-3">Website example</p>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <img src="/assets/digital_app.png" alt="Website example" className="w-full" />
            </div>
          </div>
          <div>
            <p className="text-sm text-aia-charcoal/60 text-center mb-3">Website example</p>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <img src="/assets/print_app.png" alt="Website example" className="w-full" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-4 text-xs text-aia-charcoal/70">
          <span className="text-aia-red text-lg font-bold">!</span>
          <p>The Group Digital Experience Team have created clear guidelines for building AIA mobile apps and websites. Please follow the DDS when creating any digital platforms.</p>
        </div>
      </section>
    </main>
  );
};

export default Digital;
