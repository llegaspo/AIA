import React from 'react';

const Welcome = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="relative min-h-[60vh] bg-gradient-to-br from-white via-white to-aia-grey">
        <div className="absolute left-0 top-0 h-full w-1 bg-aia-red" aria-hidden="true" />
        <div className="px-12 md:px-20 py-16">
          <div className="flex items-center gap-3 text-aia-red">
            <img src="/assets/assets/logo_cropped_transparent.png" alt="AIA" className="h-12 w-auto logo-clean mix-blend-multiply" />
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
    </main>
  );
};

export default Welcome;
