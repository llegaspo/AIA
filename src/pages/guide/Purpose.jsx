import React from 'react';

const Purpose = () => {
  return (
    <main className="w-full bg-white">
      {/* Page 4: Hero */}
      <section className="relative min-h-[70vh] md:min-h-[85vh]">
        <img
          src="/guide/assets/purpose/hero-purpose.jpg"
          alt="Children gardening"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
        <div className="relative z-10 px-8 md:px-16 pt-10">
          <div className="flex items-center gap-3 text-white">
            <img src="/assets/assets/logo.png" alt="AIA" className="h-12 w-auto" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 px-8 md:px-16 pt-20 md:pt-32">
          <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tight">
            Our Purpose
          </h1>
        </div>
      </section>

      {/* Page 5: Purpose statement */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
              <div>
                <h2 className="text-aia-red text-3xl md:text-4xl font-bold uppercase leading-tight">
                  Healthier, Longer,
                  <br />
                  Better Lives
                </h2>
                <p className="mt-4 text-aia-red font-semibold">
                  This is our Purpose. Why? Because Asia is getting wealthier, not healthier. 75% of all deaths are linked to lifestyle-related illnesses.*
                </p>

                <h3 className="mt-8 text-aia-red font-bold">Our Purpose statement</h3>
                <p className="mt-2 text-aia-charcoal/80">
                  This is the Group-approved AIA Purpose statement. Please apply this to collateral and brand touchpoints where appropriate.
                </p>

                <blockquote className="mt-4 text-aia-charcoal/80 leading-relaxed">
                  “For more than a century, AIA has strived to make a significant, positive impact for our customers and communities across Asia. As we look to the future, this commitment is reinforced by our Purpose: to help millions of people live Healthier, Longer, Better Lives. Our Purpose guides the decisions we make and the actions we take as an organisation – empowering and enabling people to understand and manage their health, while meeting their long-term savings and protection needs. We believe that helping to create a healthier Asia is one of the most important and valuable things we can do for our communities, today and in the future.”
                </blockquote>

                <p className="mt-8 text-[11px] text-aia-charcoal/60">
                  *Source: World Health Organization, NCD Country Profiles, 2018
                </p>
                <p className="mt-4 text-[11px] text-aia-charcoal/60">
                  Note:
                  <br />
                  When referring to ‘our Purpose’ or ‘AIA’s Purpose’ the word ‘Purpose’ is always capitalised.
                  <br />
                  When referring to ‘Healthier, Longer, Better Lives’ each word is capitalised.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -top-8 -right-10 w-[120%] h-[90%]">
                  <div className="absolute inset-0 bg-aia-red rotate-[18deg] rounded-[24px]" />
                  <div className="absolute inset-0 bg-aia-red/30 -rotate-[6deg] translate-x-6 translate-y-6 rounded-[24px]" />
                </div>
                <img
                  src="/guide/assets/purpose/purpose-kitchen.jpg"
                  alt="Family cooking together"
                  className="relative z-10 w-full rounded-[28px] shadow-lg"
                />
              </div>
            </div>
        </div>
      </section>

      {/* Page 6: Active */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
              <div>
                <p className="text-aia-red font-bold uppercase">Active</p>
                <h3 className="mt-4 text-4xl md:text-5xl text-aia-midnight font-semibold leading-tight">
                  Healthier, Longer, Better Lives is active. It is not about standing still. We are always moving and making progress.
                </h3>
              </div>
              <img
                src="/guide/assets/purpose/purpose-active.jpg"
                alt="Woman exercising at sunset"
                className="w-full rounded-[18px] shadow-lg"
              />
            </div>
        </div>
      </section>

      {/* Page 7: Customer-centric */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
              <div>
                <p className="text-aia-red font-bold uppercase">Customer-centric</p>
                <h3 className="mt-4 text-4xl md:text-5xl text-aia-midnight font-semibold leading-tight">
                  Healthier, Longer, Better Lives is customer-centric. We put our customers at the heart of everything we do.
                </h3>
              </div>
              <img
                src="/guide/assets/purpose/purpose-customer.jpg"
                alt="Smiling family portrait"
                className="w-full rounded-[18px] shadow-lg"
              />
            </div>
        </div>
      </section>

      {/* Page 8: Personal */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
              <div>
                <p className="text-aia-red font-bold uppercase">Personal</p>
                <h3 className="mt-4 text-4xl md:text-5xl text-aia-midnight font-semibold leading-tight">
                  Healthier, Longer, Better Lives is personal. We recognise that it means something different to everyone.
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-aia-red/20 rounded-[28px] rotate-[12deg]" />
                    <img
                      src="/guide/assets/purpose/purpose-family.png"
                      alt="Family moment"
                      className="relative z-10 w-full"
                    />
                  </div>
                  <p className="mt-4 text-aia-red italic">“For my family”</p>
                </div>
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-aia-red/20 rounded-[28px] rotate-[-8deg]" />
                    <img
                      src="/guide/assets/purpose/purpose-career.png"
                      alt="Career moment"
                      className="relative z-10 w-full"
                    />
                  </div>
                  <p className="mt-4 text-aia-red italic">“For my career”</p>
                </div>
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-aia-red/20 rounded-[28px] rotate-[8deg]" />
                    <img
                      src="/guide/assets/purpose/purpose-future.png"
                      alt="Future moment"
                      className="relative z-10 w-full"
                    />
                  </div>
                  <p className="mt-4 text-aia-red italic">“For my future”</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Page 9: Our ambition */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h3 className="text-aia-red font-bold uppercase">Our ambition</h3>
            <div className="mt-6 space-y-6 text-aia-charcoal/80 text-lg">
              <div>
                <p className="text-aia-red font-semibold">We help people live</p>
                <p>It’s about recognising the small moments and the big. It’s helping people do more, experience more and live more. It’s about striving to make lives better every single day.</p>
              </div>
              <div>
                <p className="text-aia-red font-semibold">We help people grow</p>
                <p>It’s encouraging the first steps towards both near and distant dreams. It’s any size of change for the better. It’s growth for individuals, families and communities.</p>
              </div>
              <div>
                <p className="text-aia-red font-semibold">We are always there</p>
                <p>It’s about being active and present in people’s lives. Here for their today and embracing what that means for their tomorrow. It’s always being there, no matter what.</p>
              </div>
              <div>
                <p className="text-aia-red font-semibold">This is our commitment</p>
                <p>These ambitions are at the heart of everything we do and the decisions we make.</p>
              </div>
              <div>
                <p className="text-aia-red font-semibold">We are AIA</p>
                <p>We stand for Healthier, Longer, Better Lives.</p>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Purpose;
