import React from 'react';

const ApplicationsCorporate = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1180px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Corporate daily operation items</h1>
        <div className="mt-10 lg:hidden space-y-8">
          <figure className="w-full">
            <figcaption className="text-sm text-aia-charcoal/70 mb-3">Corporate stationery</figcaption>
            <img
              src="/assets/applications/corporate-operations/corporate-stationary.png"
              alt="Corporate stationery"
              className="w-full h-auto"
            />
          </figure>

          <div className="w-full">
            <figure className="w-full">
              <figcaption className="text-sm text-aia-charcoal/70 text-left mb-3">Email signature</figcaption>
              <img
                src="/assets/applications/corporate-operations/email-signature.png"
                alt="Email signature"
                className="w-full h-auto"
              />
            </figure>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-4 items-start">
              <div className="text-[13px] leading-5 text-aia-charcoal/75">
                <p>If you want to add supporting logos, qualifications, social links or endorsements to your email signature, you may do so beneath the line.</p>
                <p className="mt-2">Under no circumstances may the HLBL Logo Lockup be removed or replaced.</p>
              </div>
              <div className="bg-aia-grey/60 px-4 py-3">
                <h3 className="text-aia-red font-bold uppercase text-base">Design tips</h3>
                <p className="mt-2 text-xs font-semibold text-aia-charcoal">Colour Scheme For AIA Vitality Status</p>
                <ul className="mt-1 text-xs leading-5">
                  <li className="text-aia-gold">AIA Vitality Status Gold - AIA Gold</li>
                  <li className="text-aia-silver">AIA Vitality Status Silver - AIA Silver</li>
                  <li className="text-aia-orange">AIA Vitality Status Bronze AIA Orange</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 hidden lg:block relative w-[1120px] h-[640px]">
          <figure className="absolute left-0 top-0 w-[510px]">
            <figcaption className="text-sm text-aia-charcoal/70 mb-3">Corporate stationery</figcaption>
            <img src="/assets/applications/corporate-operations/corporate-stationary.png" alt="Corporate stationery" className="w-full h-auto" />
          </figure>

          <figure className="absolute left-[560px] top-0 w-[598px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-left mb-3">Email signature</figcaption>
            <img src="/assets/applications/corporate-operations/email-signature.png" alt="Email signature" className="w-full h-auto" />
          </figure>

          <div className="absolute left-[560px] top-[360px] w-[330px] text-[13px] leading-6 text-aia-charcoal/75">
            <p>If you want to add supporting logos, qualifications, social links or endorsements to your email signature, you may do so beneath the line.</p>
            <p className="mt-2">Under no circumstances may the HLBL Logo Lockup be removed or replaced.</p>
          </div>

          <div className="absolute left-[920px] top-[360px] w-[238px] bg-aia-grey/60 px-4 py-3">
            <h3 className="text-aia-red font-bold uppercase text-base">Design tips</h3>
            <p className="mt-2 text-xs font-semibold text-aia-charcoal">Colour Scheme For AIA Vitality Status</p>
            <ul className="mt-1 text-xs leading-5">
              <li className="text-aia-gold">AIA Vitality Status Gold - AIA Gold</li>
              <li className="text-aia-silver">AIA Vitality Status Silver - AIA Silver</li>
              <li className="text-aia-orange">AIA Vitality Status Bronze AIA Orange</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsCorporate;
