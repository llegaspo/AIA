import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';

const Purpose = () => {
  useScrollSpy(['why-our-purpose', 'active', 'customer-centric', 'personal', 'our-ambition'], 'why-our-purpose');
  return (
    <main className="w-full bg-white guide-page">
      {/* Page 4: Hero */}
      <section className="relative min-h-[80vh] md:min-h-[90vh]">
        <img
          src="/guide/assets/purpose/hero-purpose.jpg"
          alt="Children gardening"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
        <div className="relative z-10 px-12 md:px-20 pt-10">
          <div className="flex items-center gap-3 text-white">
            <img src="/assets/assets/logo_cropped.png" alt="AIA" className="h-12 w-auto logo-clean mix-blend-multiply" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 px-12 md:px-20 pt-20 md:pt-32">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Our Purpose
          </h1>
        </div>
      </section>

      {/* Page 5: Purpose statement */}
      <section id="why-our-purpose" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
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
                <div className="absolute -top-10 -right-12 w-[125%] h-[95%]">
                  <div className="absolute inset-0 bg-aia-red rotate-[18deg]" />
                  <div className="absolute inset-0 bg-aia-red/30 -rotate-[6deg] translate-x-6 translate-y-6" />
                </div>
                <img
                  src="/guide/assets/purpose/purpose-kitchen.jpg"
                  alt="Family cooking together"
                  className="relative z-10 w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
        </div>
      </section>

      {/* Page 6: Active */}
      <section id="active" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div>
                <p className="text-aia-red font-bold uppercase">Active</p>
                <h3 className="mt-4 text-3xl md:text-4xl text-aia-midnight font-semibold leading-tight">
                  Healthier, Longer, Better Lives is active. It is not about standing still. We are always moving and making progress.
                </h3>
              </div>
              <img
                src="/guide/assets/purpose/purpose-active.jpg"
                alt="Woman exercising at sunset"
                className="w-full aspect-square object-cover"
              />
            </div>
        </div>
      </section>

      {/* Page 7: Customer-centric */}
      <section id="customer-centric" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div>
                <p className="text-aia-red font-bold uppercase">Customer-centric</p>
                <h3 className="mt-4 text-3xl md:text-4xl text-aia-midnight font-semibold leading-tight">
                  Healthier, Longer, Better Lives is customer-centric. We put our customers at the heart of everything we do.
                </h3>
              </div>
              <img
                src="/guide/assets/purpose/purpose-customer.jpg"
                alt="Smiling family portrait"
                className="w-full aspect-square object-cover"
              />
            </div>
        </div>
      </section>

      {/* Page 8: Personal */}
      <section id="personal" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div>
                <p className="text-aia-red font-bold uppercase">Personal</p>
                <h3 className="mt-4 text-3xl md:text-4xl text-aia-midnight font-semibold leading-tight">
                  Healthier, Longer, Better Lives is personal. We recognise that it means something different to everyone.
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
                {[
                  {
                    src: '/guide/assets/purpose/purpose-family.png',
                    label: '“For my family”',
                    rotate: 'rotate-[12deg]',
                  },
                  {
                    src: '/guide/assets/purpose/purpose-career.png',
                    label: '“For my career”',
                    rotate: 'rotate-[-8deg]',
                  },
                  {
                    src: '/guide/assets/purpose/purpose-future.png',
                    label: '“For my future”',
                    rotate: 'rotate-[8deg]',
                  },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="relative mx-auto w-[260px] h-[260px] bg-white">
                      <img
                        src={item.src}
                        alt={item.label}
                        className="relative z-10 w-full h-full object-contain bg-transparent cutout-clean"
                      />
                    </div>
                    <p className="mt-4 text-aia-red italic">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Page 9: Our ambition */}
      <section id="our-ambition" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h3 className="text-aia-red font-bold uppercase">Our ambition</h3>
          <div className="mt-8 space-y-8">
            {[
              {
                title: 'We help people live',
                body:
                  'It’s about recognising the small moments and the big. It’s helping people do more, experience more and live more. It’s about striving to make lives better every single day.',
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10 text-aia-red" fill="currentColor" aria-hidden="true">
                    <path d="M24 42s-14-8.5-18-16.5C3 20 5 13 12 11c4-1 8 1 10 4 2-3 6-5 10-4 7 2 9 9 6 14.5C38 33.5 24 42 24 42z" />
                  </svg>
                ),
              },
              {
                title: 'We help people grow',
                body:
                  'It’s encouraging the first steps towards both near and distant dreams. It’s any size of change for the better. It’s growth for individuals, families and communities.',
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10 text-aia-red" fill="currentColor" aria-hidden="true">
                    <path d="M24 6l14 14h-9v22h-10V20h-9L24 6z" />
                  </svg>
                ),
              },
              {
                title: 'We are always there',
                body:
                  'It’s about being active and present in people’s lives. Here for their today and embracing what that means for their tomorrow. It’s always being there, no matter what.',
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10 text-aia-red" fill="currentColor" aria-hidden="true">
                    <path d="M24 4c-8 0-14 6-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-8-6-14-14-14zm0 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
                  </svg>
                ),
              },
              {
                title: 'This is our commitment',
                body: 'These ambitions are at the heart of everything we do and the decisions we make.',
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10 text-aia-red" fill="currentColor" aria-hidden="true">
                    <path d="M18 32l-10-10 4-4 6 6 18-18 4 4-22 22z" />
                  </svg>
                ),
              },
              {
                title: 'We are AIA',
                body: 'We stand for Healthier, Longer, Better Lives.',
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10 text-aia-red" fill="currentColor" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path d="M14 28l10-12 10 12h-4l-6-7-6 7h-4z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="grid grid-cols-[48px_220px_1fr] items-start gap-6">
                <div className="flex items-start justify-center">{item.icon}</div>
                <div className="text-aia-red font-semibold">{item.title}</div>
                <p className="text-aia-charcoal/80 text-base">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Purpose;
