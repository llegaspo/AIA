import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';

const CulturalGuidance = () => {
  useScrollSpy(['introduction', 'clusters', 'application', 'exploration', 'empowerment', 'expression', 'emancipation'], 'introduction');
  return (
    <main className="w-full bg-white guide-page">
      {/* Page 22: Hero */}
      <section className="relative min-h-[80vh] md:min-h-[90vh]">
        <img
          src="/guide/assets/cultural/cultural-hero.png"
          alt="Woman smiling"
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
            Cultural Guidance
          </h1>
        </div>
      </section>

      {/* Page 23: Introduction */}
      <section id="introduction" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
              <div>
                <h2 className="text-aia-red font-bold uppercase">Introducing our cultural insights</h2>
                <p className="mt-3 text-aia-midnight font-semibold">One brand, 18 markets</p>
                <p className="mt-4 text-aia-charcoal/80">
                  The pursuit of a ‘healthier, longer, better life’ has always been central to who we are as people. It’s a core human desire. An ultimate aspiration. At AIA, we embrace it as central to our Purpose as a business.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  As culture continues to change, shifting us from the surety of tradition towards the uncertainties of the modern world, it brings with it a sense of opportunity, progress and optimism. It brings a shift in perceptions of what a healthier, longer, better life is.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  We conducted an extensive programme of research in all our markets and found that Healthier, Longer, Better Lives is expressed in many different ways. For some markets it’s about tradition at the core, for others it’s about independence.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  Understanding these differences is key to how we engage with people across the region. Whilst ensuring consistency in how we communicate, we must allow for differences that recognise what a healthier, longer, better life means to people in each of our markets.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  You can download the Full Cultural Insights Research Reports from our asset links page.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-[380px] md:max-w-[520px] lg:max-w-none mx-auto lg:mx-0">
                <img src="/guide/assets/cultural/cultural-intro-000.png" alt="Portrait" className="w-full h-28 sm:h-36 md:h-44 lg:h-52 object-cover rounded-none" />
                <img src="/guide/assets/cultural/cultural-intro-001.png" alt="Portrait" className="w-full h-28 sm:h-36 md:h-44 lg:h-52 object-cover rounded-none" />
                <img src="/guide/assets/cultural/cultural-intro-002.png" alt="Portrait" className="w-full h-28 sm:h-36 md:h-44 lg:h-52 object-cover rounded-none" />
                <img src="/guide/assets/cultural/cultural-intro-003.png" alt="Portrait" className="w-full h-28 sm:h-36 md:h-44 lg:h-52 object-cover rounded-none" />
              </div>
            </div>
        </div>
      </section>

      {/* Page 24: Cultural clusters */}
      <section id="clusters" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase">The cultural clusters</h3>
            <p className="mt-2 text-aia-charcoal/80">Each of our markets falls into one of the following cultural clusters.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
              <div>
                <h4 className="inline-flex rounded-lg bg-aia-red px-4 py-2 text-white font-semibold uppercase">Exploration</h4>
                <p className="mt-2">Brunei</p>
                <p>Cambodia</p>
                <p>Thailand</p>
                <p>Vietnam</p>
              </div>
              <div>
                <h4 className="inline-flex rounded-lg bg-aia-red px-4 py-2 text-white font-semibold uppercase">Empowerment</h4>
                <p className="mt-2">Indonesia</p>
                <p>Malaysia</p>
                <p>Myanmar</p>
                <p>Philippines</p>
                <p>Sri Lanka</p>
              </div>
              <div>
                <h4 className="inline-flex rounded-lg bg-aia-red px-4 py-2 text-white font-semibold uppercase">Expression</h4>
                <p className="mt-2">China</p>
                <p>India</p>
              </div>
              <div>
                <h4 className="inline-flex rounded-lg bg-aia-red px-4 py-2 text-white font-semibold uppercase">Emancipation</h4>
                <p className="mt-2">Australia</p>
                <p>Hong Kong</p>
                <p>Macau</p>
                <p>New Zealand</p>
                <p>Singapore</p>
                <p>South Korea</p>
                <p>Taiwan</p>
              </div>
            </div>
        </div>
      </section>

      {/* Page 25: Cultural application */}
      <section id="application" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase">The cultural application of our Purpose</h3>
            <p className="mt-2 text-aia-charcoal/80">How our Purpose applies across our markets…</p>
            <p className="mt-4 text-aia-charcoal/80">
              Healthier, Longer, Better Lives is about a balance between comfort and progress across four entry points:
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
              {[
                {
                  title: 'Exploration',
                  body: 'Culture and community',
                  trait: 'Encouraging',
                },
                {
                  title: 'Empowerment',
                  body: 'Becoming independent',
                  trait: 'Motivating',
                },
                {
                  title: 'Expression',
                  body: 'Self-expression and enjoyment',
                  trait: 'Guiding',
                },
                {
                  title: 'Emancipation',
                  body: 'Self-confidence and rediscovery',
                  trait: 'On your side',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="inline-flex rounded-lg bg-aia-red px-4 py-2 text-white font-semibold uppercase">{item.title}</h4>
                  <p className="mt-2 text-aia-charcoal/80">{item.body}</p>
                  <p className="mt-4 text-aia-charcoal/60">Mentor leading trait:</p>
                  <p className="text-aia-red font-semibold">{item.trait}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Page 26: Exploration */}
      <section id="exploration" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase text-lg">Exploration</h3>
            <h4 className="mt-8 text-aia-midnight font-bold uppercase text-2xl md:text-3xl tracking-tight">Healthier, Longer, Better Lives</h4>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_0.55fr] gap-6 text-aia-charcoal/85">
              <div>
                <p className="text-aia-red font-bold text-lg">It’s about:</p>
                <p className="mt-2 text-lg">Culture and community</p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Because people feel:</p>
                <p className="mt-2 text-lg">Uncertain optimism</p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">And they want:</p>
                <p className="mt-2 text-lg">To do their best within their cultures</p>
              </div>
              <div className="lg:text-right text-aia-red font-semibold text-lg leading-tight">
                <p>Brunei</p>
                <p className="mt-3">Cambodia</p>
                <p className="mt-3">Thailand</p>
                <p className="mt-3">Vietnam</p>
              </div>
            </div>

            <div className="mt-10 border-t border-aia-red/40" />

            <h4 className="mt-8 text-aia-midnight font-bold uppercase text-2xl md:text-3xl tracking-tight">AIA as a mentor</h4>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-aia-charcoal/85">
              <div>
                <p className="text-aia-red font-bold text-lg">A mentor:</p>
                <ul className="mt-3 space-y-1 text-base list-disc pl-6">
                  <li>Appreciates tradition.</li>
                  <li>Recognises the pleasure and joy in modernity.</li>
                  <li>Has a deep connection to the natural world.</li>
                  <li>Feels familiar.</li>
                  <li>Is about simple pleasures.</li>
                  <li>Is future-focused and progress-oriented.</li>
                </ul>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Leading trait:</p>
                <p className="mt-3 text-lg">Encouraging</p>
                <p className="mt-4 text-base text-aia-charcoal/85">
                  Encouraging means being gently supportive, instilling confidence and positivity in our customers. We are never harsh, smug or too directive. We seek to encourage a ‘can do’ mentality.
                </p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Supporting traits:</p>
                <p className="mt-3 text-base text-aia-charcoal/85">
                  Motivating / Guiding / On your side / Compassionate / Straightforward / Positive / Confident
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Page 27: Empowerment */}
      <section id="empowerment" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase text-lg">Empowerment</h3>
            <h4 className="mt-8 text-aia-midnight font-bold uppercase text-2xl md:text-3xl tracking-tight">Healthier, Longer, Better Lives</h4>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_0.65fr] gap-6 text-aia-charcoal/85">
              <div>
                <p className="text-aia-red font-bold text-lg">It’s about:</p>
                <p className="mt-2 text-lg">Becoming independent</p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Because people feel:</p>
                <p className="mt-2 text-lg">Restricted and held back</p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">And they want:</p>
                <p className="mt-2 text-lg">Independence without judgement</p>
              </div>
              <div className="lg:text-right text-aia-red font-semibold text-lg leading-tight">
                <p>Indonesia</p>
                <p className="mt-2">Malaysia</p>
                <p className="mt-2">Myanmar</p>
                <p className="mt-2">Philippines</p>
                <p className="mt-2">Sri Lanka</p>
              </div>
            </div>

            <div className="mt-10 border-t border-aia-red/40" />

            <h4 className="mt-8 text-aia-midnight font-bold uppercase text-2xl md:text-3xl tracking-tight">AIA as a mentor</h4>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-aia-charcoal/85">
              <div>
                <p className="text-aia-red font-bold text-lg">A mentor:</p>
                <ul className="mt-3 space-y-1 text-base list-disc pl-6">
                  <li>Is about independent individuals.</li>
                  <li>Is vibrant, positive and inspiring.</li>
                  <li>Shows how to overcome challenges and restrictions.</li>
                  <li>Helps you follow your ambitions and define your own path.</li>
                  <li>Is about breaking down barriers and perceptions.</li>
                </ul>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Leading trait:</p>
                <p className="mt-3 text-lg">Motivating</p>
                <p className="mt-4 text-base text-aia-charcoal/85">
                  Motivating is about being inspiring. We lead by example, always showing, not telling and providing evidence wherever we can.
                </p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Supporting traits:</p>
                <p className="mt-3 text-base text-aia-charcoal/85">
                  Encouraging / Guiding / On your side / Compassionate / Straightforward / Positive / Confident
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Page 28: Expression */}
      <section id="expression" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase text-lg">Expression</h3>
            <h4 className="mt-8 text-aia-midnight font-bold uppercase text-2xl md:text-3xl tracking-tight">Healthier, Longer, Better Lives</h4>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_0.45fr] gap-6 text-aia-charcoal/85">
              <div>
                <p className="text-aia-red font-bold text-lg">It’s about:</p>
                <p className="mt-2 text-lg">Self-expression and enjoyment</p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Because people feel:</p>
                <p className="mt-2 text-lg">Emotionally constrained</p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">And they want:</p>
                <p className="mt-2 text-lg">To enjoy life more</p>
              </div>
              <div className="lg:text-right text-aia-red font-semibold text-lg leading-tight">
                <p>China</p>
                <p className="mt-3">India</p>
              </div>
            </div>

            <div className="mt-10 border-t border-aia-red/40" />

            <h4 className="mt-8 text-aia-midnight font-bold uppercase text-2xl md:text-3xl tracking-tight">AIA as a mentor</h4>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-aia-charcoal/85">
              <div>
                <p className="text-aia-red font-bold text-lg">A mentor:</p>
                <ul className="mt-3 space-y-1 text-base list-disc pl-6">
                  <li>Is about being present in life.</li>
                  <li>Is always felt by the individual.</li>
                  <li>Is about unique moments.</li>
                  <li>Is about finding control.</li>
                  <li>Helps with expressing emotions.</li>
                </ul>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Leading trait:</p>
                <p className="mt-3 text-lg">Guiding</p>
                <p className="mt-4 text-base text-aia-charcoal/85">
                  Guiding means indicating a way forward, exercising a subtle influence and providing options. It is instructive but not prescriptive.
                </p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Supporting traits:</p>
                <p className="mt-3 text-base text-aia-charcoal/85">
                  Encouraging / Motivating / On your side / Compassionate / Straightforward / Positive / Confident
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Page 29: Emancipation */}
      <section id="emancipation" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase text-lg">Emancipation</h3>
            <h4 className="mt-8 text-aia-midnight font-bold uppercase text-2xl md:text-3xl tracking-tight">Healthier, Longer, Better Lives</h4>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_0.7fr] gap-6 text-aia-charcoal/85">
              <div>
                <p className="text-aia-red font-bold text-lg">It’s about:</p>
                <p className="mt-2 text-lg">Self-confidence and rediscovery</p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Because people feel:</p>
                <p className="mt-2 text-lg">Things need to change</p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">And they want:</p>
                <p className="mt-2 text-lg">To feel achievement and validation</p>
              </div>
              <div className="lg:text-right text-aia-red font-semibold text-lg leading-tight">
                <p>Australia</p>
                <p className="mt-2">Hong Kong</p>
                <p className="mt-2">Macau</p>
                <p className="mt-2">New Zealand</p>
                <p className="mt-2">Singapore</p>
                <p className="mt-2">South Korea</p>
                <p className="mt-2">Taiwan</p>
              </div>
            </div>

            <div className="mt-10 border-t border-aia-red/40" />

            <h4 className="mt-8 text-aia-midnight font-bold uppercase text-2xl md:text-3xl tracking-tight">AIA as a mentor</h4>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-aia-charcoal/85">
              <div>
                <p className="text-aia-red font-bold text-lg">A mentor:</p>
                <ul className="mt-3 space-y-1 text-base list-disc pl-6">
                  <li>Is about slowing down and reflecting.</li>
                  <li>Finds new options.</li>
                  <li>Is about individuals defining their own success.</li>
                  <li>Is simple, honest and authentic.</li>
                  <li>Helps reconnect with a simpler way of life.</li>
                </ul>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Leading trait:</p>
                <p className="mt-3 text-lg">On your side</p>
                <p className="mt-4 text-base text-aia-charcoal/85">
                  On your side means championing the causes that matter to our customers. It’s being inclusive, accepting and celebrating individuals, not alienating them.
                </p>
              </div>
              <div>
                <p className="text-aia-red font-bold text-lg">Supporting traits:</p>
                <p className="mt-3 text-base text-aia-charcoal/85">
                  Encouraging / Motivating / Guiding / Compassionate / Straightforward / Positive / Confident
                </p>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default CulturalGuidance;
