import React from 'react';

const Print = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1400px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Print</h1>

        <div className="mt-8 grid grid-cols-1 xl:grid-cols-[1.25fr_1fr] gap-x-10 gap-y-8 items-start">
          <figure>
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Outdoor advertising</figcaption>
            <img src="/assets/applications/print/outdoor-advertising.png" alt="Outdoor advertising" className="w-full h-auto" />
          </figure>
          <figure className="xl:max-w-[360px] xl:justify-self-start">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Annual report cover</figcaption>
            <img src="/assets/applications/print/annual-report-cover.png" alt="Annual report cover" className="w-full h-auto" />
          </figure>
          <figure className="xl:max-w-[520px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Notebooks</figcaption>
            <img src="/assets/applications/print/notebooks.png" alt="Notebooks" className="w-full h-auto" />
          </figure>
          <figure>
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Brochure spread</figcaption>
            <img src="/assets/applications/print/brochure-spread.png" alt="Brochure spread" className="w-full h-auto" />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Print;
