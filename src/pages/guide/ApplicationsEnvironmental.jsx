import React from 'react';

const ApplicationsEnvironmental = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1400px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Environmental</h1>
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-12 gap-2">
          <figure className="xl:col-span-5">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Waiting area</figcaption>
            <img src="/assets/applications/environment/waiting-area-1.png" alt="Waiting area" className="w-full h-auto" />
          </figure>

          <figure className="xl:col-span-5">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Office walls</figcaption>
            <img src="/assets/applications/environment/office-walls-1.png" alt="Office walls" className="w-full h-auto" />
          </figure>

          <figure className="xl:col-span-2 xl:row-span-2">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Furniture</figcaption>
            <img src="/assets/applications/environment/furniture.png" alt="Furniture" className="w-full h-auto" />
          </figure>

          <figure className="xl:col-span-5">
            <img src="/assets/applications/environment/waiting-area-2.png" alt="Waiting area alternate" className="w-full h-auto" />
          </figure>

          <figure className="xl:col-span-5">
            <img src="/assets/applications/environment/breakout-room.png" alt="Breakout areas" className="w-full h-auto" />
            <figcaption className="text-sm text-aia-charcoal/70 text-right mt-2">Breakout areas</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsEnvironmental;
