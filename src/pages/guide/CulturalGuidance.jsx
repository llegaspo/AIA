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
                <h4 className="text-aia-red font-semibold uppercase">Exploration</h4>
                <p className="mt-2">Brunei</p>
                <p>Cambodia</p>
                <p>Thailand</p>
                <p>Vietnam</p>
              </div>
              <div>
                <h4 className="text-aia-red font-semibold uppercase">Empowerment</h4>
                <p className="mt-2">Indonesia</p>
                <p>Malaysia</p>
                <p>Myanmar</p>
                <p>Philippines</p>
                <p>Sri Lanka</p>
              </div>
              <div>
                <h4 className="text-aia-red font-semibold uppercase">Expression</h4>
                <p className="mt-2">China</p>
                <p>India</p>
              </div>
              <div>
                <h4 className="text-aia-red font-semibold uppercase">Emancipation</h4>
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
                  <h4 className="text-aia-red font-semibold uppercase">{item.title}</h4>
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
            <h3 className="text-aia-red font-bold uppercase">Exploration</h3>
            <p className="mt-2 text-aia-charcoal/80">
              Healthier, Longer, Better Lives is about: <strong>Culture and community</strong>
            </p>
            <p className="mt-2 text-aia-charcoal/80">Because people feel: <strong>Uncertain optimism</strong></p>
            <p className="mt-2 text-aia-charcoal/80">And they want: <strong>To do their best within their cultures</strong></p>

            <div className="mt-6 text-sm text-aia-charcoal/80">
              <p className="font-semibold">A mentor:</p>
              <ul className="mt-2 space-y-1">
                <li>Appreciates tradition.</li>
                <li>Recognises the pleasure and joy in modernity.</li>
                <li>Has a deep connection to the natural world.</li>
                <li>Feels familiar.</li>
                <li>Is about simple pleasures.</li>
                <li>Is future-focused and progress-oriented.</li>
              </ul>
              <p className="mt-4">Leading trait: <span className="text-aia-red font-semibold">Encouraging</span></p>
              <p>Supporting traits: Motivating / Guiding / On your side / Compassionate / Straightforward / Positive / Confident</p>
              <p className="mt-4 text-aia-red">Encouraging means being gently supportive, instilling confidence and positivity in our customers. We are never harsh, smug or too directive. We seek to encourage a ‘can do’ mentality.</p>
              <p className="mt-4">Markets: Brunei, Cambodia, Thailand, Vietnam</p>
            </div>
        </div>
      </section>

      {/* Page 27: Empowerment */}
      <section id="empowerment" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase">Empowerment</h3>
            <p className="mt-2 text-aia-charcoal/80">
              Healthier, Longer, Better Lives is about: <strong>Becoming independent</strong>
            </p>
            <p className="mt-2 text-aia-charcoal/80">Because people feel: <strong>Restricted and held back</strong></p>
            <p className="mt-2 text-aia-charcoal/80">And they want: <strong>Independence without judgement</strong></p>

            <div className="mt-6 text-sm text-aia-charcoal/80">
              <p className="font-semibold">A mentor:</p>
              <ul className="mt-2 space-y-1">
                <li>Is about independent individuals.</li>
                <li>Is vibrant, positive and inspiring.</li>
                <li>Shows how to overcome challenges and restrictions.</li>
                <li>Helps you follow your ambitions and define your own path.</li>
                <li>Is about breaking down barriers and perceptions.</li>
              </ul>
              <p className="mt-4">Leading trait: <span className="text-aia-red font-semibold">Motivating</span></p>
              <p>Supporting traits: Encouraging / Guiding / On your side / Compassionate / Straightforward / Positive / Confident</p>
              <p className="mt-4 text-aia-red">Motivating is about being inspiring. We lead by example, always showing, not telling and providing evidence wherever we can.</p>
              <p className="mt-4">Markets: Indonesia, Malaysia, Myanmar, Philippines, Sri Lanka</p>
            </div>
        </div>
      </section>

      {/* Page 28: Expression */}
      <section id="expression" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase">Expression</h3>
            <p className="mt-2 text-aia-charcoal/80">
              Healthier, Longer, Better Lives is about: <strong>Self-expression and enjoyment</strong>
            </p>
            <p className="mt-2 text-aia-charcoal/80">Because people feel: <strong>Emotionally constrained</strong></p>
            <p className="mt-2 text-aia-charcoal/80">And they want: <strong>To enjoy life more</strong></p>

            <div className="mt-6 text-sm text-aia-charcoal/80">
              <p className="font-semibold">A mentor:</p>
              <ul className="mt-2 space-y-1">
                <li>Is about being present in life.</li>
                <li>Is always felt by the individual.</li>
                <li>Is about unique moments.</li>
                <li>Is about finding control.</li>
                <li>Helps with expressing emotions.</li>
              </ul>
              <p className="mt-4">Leading trait: <span className="text-aia-red font-semibold">Guiding</span></p>
              <p>Supporting traits: Encouraging / Motivating / On your side / Compassionate / Straightforward / Positive / Confident</p>
              <p className="mt-4 text-aia-red">Guiding means indicating a way forward, exercising a subtle influence and providing options. It is instructive but not prescriptive.</p>
              <p className="mt-4">Markets: China, India</p>
            </div>
        </div>
      </section>

      {/* Page 29: Emancipation */}
      <section id="emancipation" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase">Emancipation</h3>
            <p className="mt-2 text-aia-charcoal/80">
              Healthier, Longer, Better Lives is about: <strong>Self-confidence and rediscovery</strong>
            </p>
            <p className="mt-2 text-aia-charcoal/80">Because people feel: <strong>Things need to change</strong></p>
            <p className="mt-2 text-aia-charcoal/80">And they want: <strong>To feel achievement and validation</strong></p>

            <div className="mt-6 text-sm text-aia-charcoal/80">
              <p className="font-semibold">A mentor:</p>
              <ul className="mt-2 space-y-1">
                <li>Is about slowing down and reflecting.</li>
                <li>Finds new options.</li>
                <li>Is about individuals defining their own success.</li>
                <li>Is simple, honest and authentic.</li>
                <li>Helps reconnect with a simpler way of life.</li>
              </ul>
              <p className="mt-4">Leading trait: <span className="text-aia-red font-semibold">On your side</span></p>
              <p>Supporting traits: Encouraging / Motivating / Guiding / Compassionate / Straightforward / Positive / Confident</p>
              <p className="mt-4 text-aia-red">On your side means championing the causes that matter to our customers. It’s being inclusive, accepting and celebrating individuals, not alienating them.</p>
              <p className="mt-4">Markets: Australia, Hong Kong, Macau, New Zealand, Singapore, South Korea, Taiwan</p>
            </div>
        </div>
      </section>
    </main>
  );
};

export default CulturalGuidance;
