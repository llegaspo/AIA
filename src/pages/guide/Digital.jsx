import React from 'react';

const Digital = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1400px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Digital</h1>
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-[1.06fr_0.24fr] gap-6 items-start">
          <figure>
            <figcaption className="text-sm text-aia-charcoal/70 text-left mb-2">Mobile app example</figcaption>
            <img src="/assets/applications/digital/mobile-app-example.png" alt="Mobile app examples" className="w-full h-auto" />
          </figure>
          <figure>
            <figcaption className="text-sm text-aia-charcoal/70 text-left mb-2">Customer email example</figcaption>
            <img src="/assets/applications/digital/customer-email-example.png" alt="Customer email example" className="w-full h-auto" />
          </figure>
        </div>
        <figure className="mt-6">
          <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Website example</figcaption>
          <img src="/assets/applications/digital/website-example.png" alt="Website example" className="w-full h-auto" />
        </figure>
        <div className="mt-8 flex items-start gap-4 text-sm text-aia-charcoal/75">
          <span className="text-aia-red text-lg font-bold">!</span>
          <p>The Group Digital Experience Team have created clear guidelines for building AIA mobile apps and websites. Please follow the DDS when creating any digital platforms.</p>
        </div>
      </section>
    </main>
  );
};

export default Digital;
