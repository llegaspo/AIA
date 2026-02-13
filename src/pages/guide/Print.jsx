import React from 'react';

const Print = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1180px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Print</h1>

        <div className="mt-8 lg:hidden space-y-8">
          <figure className="w-full">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Outdoor advertising</figcaption>
            <img src="/assets/applications/print/outdoor-advertising.png" alt="Outdoor advertising" className="w-full h-auto" />
          </figure>
          <figure className="w-full max-w-[320px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Annual report cover</figcaption>
            <img src="/assets/applications/print/annual-report-cover.png" alt="Annual report cover" className="w-full h-auto" />
          </figure>
          <figure className="w-full max-w-[420px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Notebooks</figcaption>
            <img src="/assets/applications/print/notebooks.png" alt="Notebooks" className="w-full h-auto" />
          </figure>
          <figure className="w-full">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Brochure spread</figcaption>
            <img src="/assets/applications/print/brochure-spread.png" alt="Brochure spread" className="w-full h-auto" />
          </figure>
        </div>

        <div className="mt-8 hidden lg:block relative w-[940px] h-[590px]">
          <figure className="absolute left-0 top-0 w-[440px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Outdoor advertising</figcaption>
            <img src="/assets/applications/print/outdoor-advertising.png" alt="Outdoor advertising" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[520px] top-0 w-[190px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Annual report cover</figcaption>
            <img src="/assets/applications/print/annual-report-cover.png" alt="Annual report cover" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[56px] top-[330px] w-[310px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Notebooks</figcaption>
            <img src="/assets/applications/print/notebooks.png" alt="Notebooks" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[575px] top-[265px] w-[320px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Brochure spread</figcaption>
            <img src="/assets/applications/print/brochure-spread.png" alt="Brochure spread" className="w-full h-auto" />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Print;
