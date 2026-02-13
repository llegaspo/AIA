import React from 'react';

const Merchandise = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1180px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Merchandise</h1>
        <div className="mt-8 lg:hidden space-y-8">
          <figure className="w-full">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Tablet covers</figcaption>
            <img src="/assets/applications/merchandise/tablet-cover.png" alt="Tablet cover" className="w-full h-auto" />
          </figure>
          <figure className="w-full max-w-[160px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Phone cover</figcaption>
            <img src="/assets/applications/merchandise/phone-cover.png" alt="Phone cover" className="w-full h-auto mx-auto" />
          </figure>
          <figure className="w-full max-w-[170px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Branded socks</figcaption>
            <img src="/assets/applications/merchandise/branded-socks.png" alt="Branded socks" className="w-full h-auto mx-auto" />
          </figure>
          <figure className="w-full max-w-[340px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Tote bag</figcaption>
            <img src="/assets/applications/merchandise/tote-bag.png" alt="Tote bag" className="w-full h-auto" />
          </figure>
          <figure className="w-full">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Branded pen</figcaption>
            <img src="/assets/applications/merchandise/branded-pen.png" alt="Branded pen" className="w-full h-auto" />
          </figure>
          <figure className="w-full max-w-[220px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Keyring</figcaption>
            <img src="/assets/applications/merchandise/keyring.png" alt="Keyring" className="w-full h-auto mx-auto" />
          </figure>
        </div>

        <div className="mt-8 hidden lg:block relative w-[940px] h-[620px]">
          <figure className="absolute left-0 top-0 w-[305px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Tablet covers</figcaption>
            <img src="/assets/applications/merchandise/tablet-cover.png" alt="Tablet cover" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[335px] top-[62px] w-[88px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Phone cover</figcaption>
            <img src="/assets/applications/merchandise/phone-cover.png" alt="Phone cover" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[470px] top-[0px] w-[108px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Branded socks</figcaption>
            <img src="/assets/applications/merchandise/branded-socks.png" alt="Branded socks" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[620px] top-[0px] w-[290px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Tote bag</figcaption>
            <img src="/assets/applications/merchandise/tote-bag.png" alt="Tote bag" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[8px] top-[420px] w-[330px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Branded pen</figcaption>
            <img src="/assets/applications/merchandise/branded-pen.png" alt="Branded pen" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[375px] top-[375px] w-[182px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-2">Keyring</figcaption>
            <img src="/assets/applications/merchandise/keyring.png" alt="Keyring" className="w-full h-auto" />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Merchandise;
