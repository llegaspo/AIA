import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';

const ToneOfVoice = () => {
  useScrollSpy(['introduction', 'principles', 'principles-in-use', 'spectrum', 'spectrum-in-use'], 'introduction');
  const spectrumItems = [
    {
      title: 'Product documentation',
      icon: '/assets/tone-of-voice/spectrum/product-documentation-icon.png',
      inUseLabel: 'Covering letter',
      examples: ['Policies', 'Claims documentation', 'Covering letters'],
      mentor: 'A mentor can be assuring, calm and professional.',
      like: 'We have received your first life insurance premium. In the next few weeks, we’ll send you a Fund Statement, which will confirm the total amount you have invested.',
      because: 'It’s our job to be straightforward and easy to understand.',
    },
    {
      title: 'Corporate comms',
      icon: '/assets/tone-of-voice/spectrum/comms-icon.png',
      inUseLabel: 'Annual report',
      examples: ['Announcements', 'Earnings results', 'Annual report'],
      mentor: 'A mentor can be professional, confident and inspiring.',
      like: 'We strive to make a positive difference by helping people to live Healthier, Longer, Better Lives is more relevant now than ever.',
      because: 'It makes sense to be confident and big picture (without being arrogant).',
    },
    {
      title: 'Marketing comms',
      icon: '/assets/tone-of-voice/spectrum/marketing-icon.png',
      inUseLabel: 'Social media post',
      examples: ['Advertising campaigns', 'Product information', 'Social / blogs'],
      mentor: 'A mentor can be inspiring, compassionate and emotional.',
      like: 'This chunky Vietnamese pickle with coriander seeds recipe is a fun, tasty way to a healthier diet.',
      because: 'We have an opportunity to be positive and infectiously enthusiastic.',
    },
    {
      title: 'Customer interactions',
      icon: '/assets/tone-of-voice/spectrum/customer-int-icon.png',
      inUseLabel: 'App message (competition winner)',
      examples: ['Customer service', 'Customer emails', 'App alerts'],
      mentor: 'A mentor can be emotional, conversational and familiar.',
      like: 'We knew you could do it Amy! You’re this week’s Healthy Living Challenge winner – and we’re in awe of your fabulous food and fitness efforts!',
      because: 'We are naturally on your side and readily celebratory.',
    },
  ];

  return (
    <main className="w-full bg-white guide-page">
      {/* Page 16: Hero */}
      <section className="relative min-h-[80vh] md:min-h-[90vh]">
        <img
          src="/guide/assets/tone/tone-hero.png"
          alt="Woman outdoors"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        <div className="relative z-10 px-12 md:px-20 pt-10">
          <div className="flex items-center gap-3 text-white">
            <img src="/assets/assets/logo_cropped_transparent.png" alt="AIA" className="h-12 w-auto logo-clean mix-blend-multiply" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 px-12 md:px-20 pt-20 md:pt-32">
          <h1 className="text-white/70 text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Our Tone of Voice
          </h1>
        </div>
      </section>

      {/* Page 17: Introduction */}
      <section id="introduction" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div>
                <h2 className="text-aia-red font-bold uppercase">Our tone of voice as a mentor</h2>
                <p className="mt-4 text-aia-charcoal/80">
                  Our tone of voice is how we bring our brand and persona to life through words.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  It is what guides us to say the right thing in the right moment to demonstrate our qualities as a mentor.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  Whether we want to sound optimistic and encouraging or confident and inspiring, our tone of voice is what connects us with our customers as individuals.
                </p>
              </div>
              <img
                src="/guide/assets/tone/tone-intro.png"
                alt="Smiling older man"
                className="w-full aspect-square object-cover"
              />
            </div>
        </div>
      </section>

      {/* Page 18: Principles */}
      <section id="principles" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase">Tone of voice: principles</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 text-sm lg:divide-x lg:divide-aia-red/40">
              {[
                {
                  title: 'Use simple language',
                  body:
                    'Even when dealing with complex or technical matters we use clear, conversational language that is easily understood by our customers.',
                  list: ['Short sentences.', 'Simple words.', 'Avoid acronyms.', 'Avoid jargon.', 'Easy to understand.'],
                },
                {
                  title: 'Speak to the individual',
                  body:
                    'We understand our customers’ needs, respect their individuality and talk to them directly in a relevant and personalised way.',
                  list: ['Referring to customers as “you” not “customers.”', 'Use names and titles.', 'Respecting cultural differences.'],
                },
                {
                  title: 'Strengthen with proof',
                  body:
                    'We use proof to back up our statements and assertions because it’s better to “show” through evidence rather than “tell” with assumptions.',
                  list: ['Show examples.', 'Back up with insight.', 'Support with facts.', 'Avoid generalisation.', 'Avoid being vague.'],
                },
                {
                  title: 'Focus on the future',
                  body:
                    'We use future-focused language to show how choices today can impact the bigger picture and desired future outcomes.',
                  list: ['Talk about the future not the past.', 'Refer to “why” we are doing this, not just “what” we are doing.'],
                },
                {
                  title: 'Be positive and inclusive',
                  body:
                    'We are optimistic about the future and never negative about others. We are all on this journey together.',
                  list: ['Making bold statements.', 'Being part of something bigger.', 'Not excluding anyone.'],
                },
              ].map((item) => (
                <div key={item.title} className="lg:px-6">
                  <h4 className="text-aia-red font-bold leading-tight text-2xl">{item.title}</h4>
                  <p className="mt-6 text-aia-charcoal/80 text-base leading-relaxed">{item.body}</p>
                  <p className="mt-8 text-aia-red font-bold text-xl">It means:</p>
                  <ul className="mt-4 space-y-1 text-aia-red font-semibold text-lg leading-snug">
                    {item.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Page 19: Principles in use */}
      <section id="principles-in-use" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase">Tone of voice: principles in use</h3>
            <div className="mt-8">
              <div className="hidden lg:grid lg:grid-cols-[1.15fr_0.14fr_1.45fr_0.14fr_1.45fr] gap-x-6 items-end text-sm">
                <div />
                <div />
                <h4 className="text-aia-red font-semibold uppercase">Like this</h4>
                <div />
                <h4 className="text-aia-red font-semibold uppercase">Not like this</h4>
              </div>

              <div className="mt-4 grid gap-y-7 text-sm">
                {[
                  {
                    principle: 'Use simple language',
                    like: 'Thank you for getting in touch. We are now looking into the matter. To ensure a thorough investigation, please allow us two to three weeks to respond to your enquiry.',
                    notLike: 'Thank you for your letter. To facilitate a thorough investigation we will gather more information and review all relevant documents and records. It is estimated it will take 5-6 weeks to complete the process.',
                  },
                  {
                    principle: 'Speak to the individual',
                    like: 'It’s always good to get a second opinion, so we suggest you speak to your financial adviser about our cover offer to make sure you’re 100% happy before accepting it.',
                    notLike: 'Customers are advised as a matter of standard protocol to seek independent financial advice before accepting AIA’s conditional offer of life insurance cover.',
                  },
                  {
                    principle: 'Strengthen with proof',
                    like: 'AIA annual research reveals that the average adult in the Asia-Pacific region sleeps 1.2 hours less each night than they want.',
                    notLike: 'Most people report they don’t get enough sleep each night and would like to feel better rested.',
                  },
                  {
                    principle: 'Focus on the future',
                    like: 'The healthier you start, the stronger you go on.',
                    notLike: 'It’s never too soon to prepare for medical challenges and expenses.',
                  },
                  {
                    principle: 'Be positive and inclusive',
                    like: 'Living longer means living better with AIA – whatever that means for you.',
                    notLike: 'Will you have enough savings to fund a long retirement?',
                  },
                ].map((item) => (
                  <div key={item.principle} className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.14fr_1.45fr_0.14fr_1.45fr] gap-x-6 gap-y-3 items-start">
                    <p className="text-aia-red font-semibold text-xl lg:text-2xl leading-tight">{item.principle}</p>
                    <div className="flex items-start gap-3 lg:hidden">
                      <img src="/assets/check-icon.png" alt="Like this" className="h-7 w-7 object-contain" />
                      <p className="text-aia-charcoal/85 leading-snug"><span className="text-aia-red font-semibold uppercase text-xs mr-2">Like this</span>{item.like}</p>
                    </div>
                    <div className="flex items-start gap-3 lg:hidden">
                      <img src="/assets/x-icon.png" alt="Not like this" className="h-7 w-7 object-contain" />
                      <p className="text-aia-charcoal/85 leading-snug"><span className="text-aia-red font-semibold uppercase text-xs mr-2">Not like this</span>{item.notLike}</p>
                    </div>

                    <div className="hidden lg:flex items-start justify-center pt-1">
                      <img src="/assets/check-icon.png" alt="Like this" className="h-10 w-10 object-contain" />
                    </div>
                    <p className="hidden lg:block text-aia-charcoal/85 leading-snug">{item.like}</p>
                    <div className="hidden lg:flex items-start justify-center pt-1">
                      <img src="/assets/x-icon.png" alt="Not like this" className="h-10 w-10 object-contain" />
                    </div>
                    <p className="hidden lg:block text-aia-charcoal/85 leading-snug">{item.notLike}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Page 20: Spectrum */}
      <section id="spectrum" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase">Tone of voice: spectrum</h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-[13px]">
              {spectrumItems.map((item) => (
                <div key={item.title}>
                  <div className="mx-auto h-20 w-20 flex items-center justify-center">
                    <img src={item.icon} alt={item.title} className="h-16 w-16 object-contain" />
                  </div>
                  <h4 className="mt-4 text-aia-red font-bold text-[22px] leading-tight">{item.title}</h4>
                </div>
              ))}
            </div>
            <div className="mt-10 relative h-10">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-aia-red rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-aia-red text-4xl">←</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 text-aia-red text-4xl">→</div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-[13px] text-aia-charcoal/80">
              {spectrumItems.map((item) => (
                <div key={`${item.title}-details`}>
                  <p className="text-aia-charcoal/60 text-xs">e.g.</p>
                  <ul className="mt-1 space-y-1">
                    {item.examples.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <p className="mt-6 text-aia-red font-semibold leading-snug text-[15px]">{item.mentor}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-aia-red text-xs font-semibold uppercase">
              <span>More corporate</span>
              <span>More conversational</span>
            </div>
        </div>
      </section>

      {/* Page 21: Spectrum in use */}
      <section id="spectrum-in-use" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase">Tone of voice: spectrum in use</h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-[13px]">
              {spectrumItems.map((item) => (
                <div key={item.title} className="text-aia-charcoal/80">
                  <div className="mx-auto h-20 w-20 flex items-center justify-center">
                    <img src={item.icon} alt={item.title} className="h-16 w-16 object-contain" />
                  </div>
                  <h4 className="mt-4 text-aia-red font-bold text-[22px] leading-tight">{item.title}</h4>
                  <p className="text-aia-charcoal/70 text-[12px]">{item.inUseLabel}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-[13px] text-aia-charcoal/80">
              {spectrumItems.map((item) => (
                <div key={`${item.title}-like`}>
                  <p className="mt-5 text-aia-red font-semibold uppercase text-xs">Like this</p>
                  <p className="mt-2 leading-snug">{item.like}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 relative h-10">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-aia-red rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-aia-red text-4xl">←</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 text-aia-red text-4xl">→</div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-[13px] text-aia-charcoal/80">
              {spectrumItems.map((item) => (
                <div key={`${item.title}-because`}>
                  <p className="text-aia-red font-semibold text-xs uppercase">Because</p>
                  <p className="mt-2 leading-snug">{item.because}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-aia-red text-xs font-semibold uppercase">
              <span>More corporate</span>
              <span>More conversational</span>
            </div>
        </div>
      </section>
    </main>
  );
};

export default ToneOfVoice;
