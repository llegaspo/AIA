import React from 'react';

const ApplicationsCorporate = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1400px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Corporate daily operation items</h1>
        <div className="mt-10 grid grid-cols-1 xl:grid-cols-[0.95fr_1.15fr] gap-12 items-start">
          <figure>
            <figcaption className="text-sm text-aia-charcoal/70 mb-3">Corporate stationery</figcaption>
            <img
              src="/assets/applications/corporate-operations/corporate-stationary.png"
              alt="Corporate stationery"
              className="w-full h-auto"
            />
          </figure>

          <div>
            <figure>
              <figcaption className="text-sm text-aia-charcoal/70 text-left mb-3">Email signature</figcaption>
              <img
                src="/assets/applications/corporate-operations/email-signature.png"
                alt="Email signature"
                className="w-full h-auto"
              />
            </figure>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
              <div className="text-[14px] leading-6 text-aia-charcoal/75">
                <p>If you want to add supporting logos, qualifications, social links or endorsements to your email signature, you may do so beneath the line.</p>
                <p className="mt-2">Under no circumstances may the HLBL Logo Lockup be removed or replaced.</p>
              </div>
              <div className="bg-aia-grey/60 px-5 py-4">
                <h3 className="text-aia-red font-bold uppercase text-lg">Design tips</h3>
                <p className="mt-2 text-sm font-semibold text-aia-charcoal">Colour Scheme For AIA Vitality Status</p>
                <ul className="mt-2 text-sm leading-6">
                  <li className="text-aia-gold">AIA Vitality Status Gold - AIA Gold</li>
                  <li className="text-aia-silver">AIA Vitality Status Silver - AIA Silver</li>
                  <li className="text-aia-orange">AIA Vitality Status Bronze AIA Orange</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsCorporate;
