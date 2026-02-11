import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';

const ToneOfVoice = () => {
  useScrollSpy(['introduction', 'principles', 'principles-in-use', 'spectrum', 'spectrum-in-use'], 'introduction');
  return (
    <main className="w-full bg-white">
      {/* Page 16: Hero */}
      <section className="relative min-h-[70vh] md:min-h-[85vh]">
        <img
          src="/guide/assets/tone/tone-hero.png"
          alt="Woman outdoors"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
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
          <h1 className="text-white/70 text-5xl md:text-7xl font-bold uppercase tracking-tight">
            Our Tone of Voice
          </h1>
        </div>
      </section>

      {/* Page 17: Introduction */}
      <section id="introduction" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
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
                className="w-full rounded-[18px] shadow-lg"
              />
            </div>
        </div>
      </section>

      {/* Page 18: Principles */}
      <section id="principles" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h3 className="text-aia-red font-bold uppercase">Tone of voice: principles</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-sm">
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
                <div key={item.title}>
                  <h4 className="text-aia-red font-semibold uppercase text-xs">{item.title}</h4>
                  <p className="mt-3 text-aia-charcoal/80">{item.body}</p>
                  <p className="mt-4 text-aia-charcoal/60 uppercase text-[10px]">It means:</p>
                  <ul className="mt-2 space-y-1 text-aia-charcoal/70">
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
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h3 className="text-aia-red font-bold uppercase">Tone of voice: principles in use</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
              <div>
                <h4 className="text-aia-red font-semibold uppercase">Like this</h4>
                <div className="mt-4 space-y-6 text-aia-charcoal/80">
                  <p>
                    Thank you for getting in touch. We are now looking into the matter. To ensure a thorough investigation, please allow us two to three weeks to respond to your enquiry.
                  </p>
                  <div>
                    <p className="text-aia-red font-semibold">Speak to the individual</p>
                    <p>It’s always good to get a second opinion, so we suggest you speak to your financial adviser about our cover offer to make sure you’re 100% happy before accepting it.</p>
                  </div>
                  <div>
                    <p className="text-aia-red font-semibold">Strengthen with proof</p>
                    <p>AIA annual research reveals that the average adult in the Asia-Pacific region sleeps 1.2 hours less each night than they want.</p>
                  </div>
                  <div>
                    <p className="text-aia-red font-semibold">Use simple language</p>
                    <p>The healthier you start, the stronger you go on.</p>
                  </div>
                  <div>
                    <p className="text-aia-red font-semibold">Focus on the future</p>
                    <p>Living longer means living better with AIA – whatever that means for you.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-aia-red font-semibold uppercase">Not like this</h4>
                <div className="mt-4 space-y-6 text-aia-charcoal/80">
                  <p>
                    Thank you for your letter. To facilitate a thorough investigation we will gather more information and review all relevant documents and records. It is estimated it will take 5-6 weeks to complete the process.
                  </p>
                  <div>
                    <p className="text-aia-red font-semibold">Speak to the individual</p>
                    <p>Customers are advised as a matter of standard protocol to seek independent financial advice before accepting AIA’s conditional offer of life insurance cover.</p>
                  </div>
                  <div>
                    <p className="text-aia-red font-semibold">Strengthen with proof</p>
                    <p>Most people report they don’t get enough sleep each night and would like to feel better rested.</p>
                  </div>
                  <div>
                    <p className="text-aia-red font-semibold">Use simple language</p>
                    <p>It’s never too soon to prepare for medical challenges and expenses.</p>
                  </div>
                  <div>
                    <p className="text-aia-red font-semibold">Focus on the future</p>
                    <p>Will you have enough savings to fund a long retirement?</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-aia-red font-semibold">Be positive and inclusive</p>
        </div>
      </section>

      {/* Page 20: Spectrum */}
      <section id="spectrum" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h3 className="text-aia-red font-bold uppercase">Tone of voice: spectrum</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              {[
                {
                  title: 'Product documentation',
                  items: ['Policies', 'Claims documentation', 'Covering letters'],
                  desc: 'A mentor can be assuring, calm and professional.',
                },
                {
                  title: 'Corporate comms',
                  items: ['Announcements', 'Earnings results', 'Annual report'],
                  desc: 'A mentor can be professional, confident and inspiring.',
                },
                {
                  title: 'Marketing comms',
                  items: ['Advertising campaigns', 'Product information', 'Social / blogs'],
                  desc: 'A mentor can be inspiring, compassionate and emotional.',
                },
                {
                  title: 'Customer interactions',
                  items: ['Customer service', 'Customer emails', 'App alerts'],
                  desc: 'A mentor can be emotional, conversational and familiar.',
                },
              ].map((block) => (
                <div key={block.title} className="text-aia-charcoal/80">
                  <h4 className="text-aia-midnight font-semibold">{block.title}</h4>
                  <ul className="mt-3 space-y-1">
                    {block.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-aia-charcoal/70">{block.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between text-aia-charcoal/70 text-xs uppercase">
              <span>More corporate</span>
              <span>More conversational</span>
            </div>
        </div>
      </section>

      {/* Page 21: Spectrum in use */}
      <section id="spectrum-in-use" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h3 className="text-aia-red font-bold uppercase">Tone of voice: spectrum in use</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
              {[
                {
                  title: 'Product documentation',
                  like: 'We have received your first life insurance premium. In the next few weeks, we’ll send you a Fund Statement, which will confirm the total amount you have invested.',
                  because: 'It’s our job to be straightforward and easy to understand.',
                },
                {
                  title: 'Corporate comms',
                  like: 'We strive to make a positive difference by helping people to live Healthier, Longer, Better Lives is more relevant now than ever.',
                  because: 'It makes sense to be confident and big picture (without being arrogant).',
                },
                {
                  title: 'Marketing comms',
                  like: 'This chunky Vietnamese pickle with coriander seeds recipe is a fun, tasty way to a healthier diet.',
                  because: 'We have an opportunity to be positive and infectiously enthusiastic.',
                },
                {
                  title: 'Customer interactions',
                  like: 'We knew you could do it Amy! You’re this week’s Healthy Living Challenge winner – and we’re in awe of your fabulous food and fitness efforts!',
                  because: 'We are naturally on your side and readily celebratory.',
                },
              ].map((block) => (
                <div key={block.title} className="text-aia-charcoal/80">
                  <h4 className="text-aia-midnight font-semibold">{block.title}</h4>
                  <p className="mt-3 text-aia-red font-semibold">Like this</p>
                  <p className="mt-2">{block.like}</p>
                  <p className="mt-4 text-aia-red font-semibold">Because</p>
                  <p className="mt-2">{block.because}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between text-aia-charcoal/70 text-xs uppercase">
              <span>More corporate</span>
              <span>More conversational</span>
            </div>
        </div>
      </section>
    </main>
  );
};

export default ToneOfVoice;
