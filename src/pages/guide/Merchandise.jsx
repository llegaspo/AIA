import React from 'react';

const Merchandise = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1400px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Merchandise</h1>
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 items-start">
          <figure className="xl:col-span-6">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Tablet covers</figcaption>
            <img src="/assets/applications/merchandise/tablet-cover.png" alt="Tablet cover" className="w-full h-auto" />
          </figure>

          <figure className="xl:col-span-2 xl:pt-16">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Phone cover</figcaption>
            <img src="/assets/applications/merchandise/phone-cover.png" alt="Phone cover" className="w-full h-auto max-w-[120px] mx-auto" />
          </figure>

          <figure className="xl:col-span-2">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Branded socks</figcaption>
            <img src="/assets/applications/merchandise/branded-socks.png" alt="Branded socks" className="w-full h-auto max-w-[170px] mx-auto" />
          </figure>

          <figure className="xl:col-span-2 xl:row-span-2">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Tote bag</figcaption>
            <img src="/assets/applications/merchandise/tote-bag.png" alt="Tote bag" className="w-full h-auto" />
          </figure>

          <figure className="xl:col-span-5">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Branded pen</figcaption>
            <img src="/assets/applications/merchandise/branded-pen.png" alt="Branded pen" className="w-full h-auto" />
          </figure>

          <figure className="xl:col-span-3">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Keyring</figcaption>
            <img src="/assets/applications/merchandise/keyring.png" alt="Keyring" className="w-full h-auto max-w-[250px] mx-auto" />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Merchandise;
