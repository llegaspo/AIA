import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';
import CopySectionButton from '../../components/ui/CopySectionButton';
import { motion as Motion } from 'framer-motion';

const Personality = () => {
  useScrollSpy(['why-a-mentor', 'why-a-persona', 'what-a-mentor-is', 'personality-traits', 'company-values', 'summary'], 'why-a-mentor');
  return (
    <main className="w-full bg-white guide-page">
      {/* Page 10: Hero */}
      <section className="relative min-h-[80vh] md:min-h-[90vh]">
        <img
          src="/guide/assets/personality/personality-hero.png"
          alt="People kayaking"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
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
            Our Personality
          </h1>
        </div>
      </section>

      {/* Page 11: Brand persona */}
      <section id="why-a-mentor" className="border-t border-aia-red/10">
        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto max-w-[1680px] px-12 md:px-20 py-14"
        >
            <p className="text-aia-red font-bold uppercase tracking-wide">Our Brand Persona</p>
            <h2 className="mt-6 text-5xl md:text-6xl text-aia-red font-bold uppercase text-center">Mentor</h2>
            <p className="mt-6 text-2xl text-aia-midnight text-center max-w-[900px] mx-auto leading-snug">
              Our persona helps us show just what it means to strive for Healthier, Longer, Better Lives.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                'A mentor is active',
                'A mentor is customer-centric',
                'A mentor is personal',
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-full border border-aia-red text-aia-red font-semibold uppercase text-center py-3 text-sm tracking-wide"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-14 flex items-center justify-center">
              <div className="relative w-full max-w-[980px] h-16">
                <svg viewBox="0 0 1000 80" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <line x1="72" y1="40" x2="928" y2="40" stroke="#D31145" strokeWidth="6" />
                  <polygon points="72,40 112,14 112,66" fill="#D31145" />
                  <polygon points="928,40 888,14 888,66" fill="#D31145" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-aia-red bg-white px-6 py-2 text-xs md:text-sm font-semibold text-aia-red uppercase tracking-wide text-center">
                  Healthier, Longer, Better Lives
                </div>
              </div>
            </div>
        </Motion.div>
      </section>

      {/* Page 12: Why a persona is important */}
      <section id="why-a-persona" className="border-t border-aia-red/10">
        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto max-w-[1680px] px-12 md:px-20 py-12"
        >
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14">
              <div>
                <h3 className="text-aia-red font-bold uppercase text-2xl">Why a persona is important</h3>
                <p className="mt-5 text-aia-charcoal/80 text-sm leading-relaxed">
                  Having a persona is one of the most important ways in which we bring our brand to life.
                </p>
                <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                  Thinking of AIA as a mentor enables us to see our brand as a collection of attitudes, behaviours and traits. And it demonstrates that our Purpose is more than just a statement, it is a way of being.
                </p>
                <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                  Our persona reminds us how we should behave in our interactions with our customers and each other. It keeps our offering distinct and consistent wherever it appears.
                </p>
                <p className="mt-4 text-aia-red font-semibold text-sm">
                  It is what makes us unmistakably AIA.
                </p>
              </div>

              <div className="text-aia-midnight">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.9fr_0.9fr] lg:grid-rows-3 lg:gap-x-8 lg:gap-y-8 items-center">
                  <div className="lg:row-start-2 lg:col-start-1 flex items-center justify-center gap-4 text-xl md:text-2xl font-semibold text-center">
                    <span>Healthier, Longer,<br />Better Lives</span>
                    <span className="text-aia-red text-4xl md:text-5xl leading-none">+</span>
                    <span>Mentor</span>
                  </div>

                  <div className="lg:row-start-1 lg:col-start-2 flex items-center gap-4 justify-center lg:justify-start">
                    <span className="text-aia-red text-5xl md:text-6xl leading-none">↗</span>
                    <span className="text-4xl md:text-5xl text-aia-red/60 leading-none -ml-3">│</span>
                    <span className="text-4xl md:text-5xl text-aia-red/45 leading-none -ml-5">│</span>
                    <span className="text-3xl md:text-4xl font-semibold leading-tight">How we<br />behave</span>
                  </div>

                  <div className="lg:row-start-2 lg:col-start-2 flex items-center gap-4 justify-center lg:justify-start">
                    <span className="text-aia-red text-5xl md:text-6xl leading-none">→</span>
                    <span className="text-3xl md:text-4xl font-semibold leading-tight">How we<br />speak</span>
                  </div>

                  <div className="lg:row-start-3 lg:col-start-2 flex items-center gap-4 justify-center lg:justify-start">
                    <span className="text-aia-red text-5xl md:text-6xl leading-none">↘</span>
                    <span className="text-aia-red/60 text-4xl md:text-5xl leading-none -ml-3">│</span>
                    <span className="text-aia-red/45 text-4xl md:text-5xl leading-none -ml-5">│</span>
                    <span className="text-3xl md:text-4xl font-semibold leading-tight">How we<br />look</span>
                  </div>

                  <div className="lg:row-start-2 lg:col-start-3 flex items-center gap-6 justify-center lg:justify-start">
                    <div className="flex flex-col gap-2">
                      <span className="h-4 w-16 rounded-full bg-aia-red" />
                      <span className="h-4 w-16 rounded-full bg-[#F46A7B]" />
                    </div>
                    <span className="text-3xl md:text-4xl font-semibold leading-tight">Unmistakably<br />AIA</span>
                  </div>
                </div>
              </div>
            </div>
        </Motion.div>
      </section>

      {/* Page 13: AIA as a mentor */}
      <section id="what-a-mentor-is" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12">
              <div>
                <h3 className="text-aia-red font-bold uppercase">AIA as a mentor</h3>
                <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                  A mentor is an experienced and trusted adviser. Renowned in their field for their knowledge and expertise, they pass it on to others to help them grow and progress throughout their lives.
                </p>
                <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                  Always there and available for counsel, a mentor is gentle, instructive and guiding. They don’t always tell you which way to go, but help you find your own way. They are never harsh, critical or aggressive.
                </p>
                <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                  The presence of a mentor is comforting. They offer a wealth of knowledge when you need it, but not when you don’t. They adapt their guidance to every individual. They support you without pushing you.
                </p>
                <p className="mt-4 text-aia-charcoal/80 text-sm leading-relaxed">
                  When a mentor speaks, you know it comes from a place of confidence, not arrogance. They are balanced and accepting, but not judgemental. They see how small details contribute to the big picture.
                </p>
                <p className="mt-4 text-aia-red font-semibold text-sm">
                  AIA as a mentor has the ambition of helping customers live Healthier, Longer, Better Lives.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="inline-block rounded-full bg-aia-red text-white px-6 py-2 font-bold uppercase text-sm">A mentor is</div>
                  <ul className="mt-4 space-y-2 text-aia-midnight text-sm">
                    <li>Compassionate</li>
                    <li>Positive</li>
                    <li>Confident</li>
                    <li>Straightforward</li>
                    <li className="mt-4">Encouraging</li>
                    <li>Motivating</li>
                    <li>Guiding</li>
                    <li>On your side</li>
                  </ul>
                </div>
                <div>
                  <div className="inline-block rounded-full bg-aia-red text-white px-6 py-2 font-bold uppercase text-sm">A mentor isn’t</div>
                  <ul className="mt-4 space-y-2 text-aia-midnight text-sm">
                    <li>Harsh</li>
                    <li>Negative</li>
                    <li>Inexperienced</li>
                    <li>Confusing</li>
                    <li className="mt-4">Judgemental</li>
                    <li>Passive</li>
                    <li>In charge</li>
                    <li>Arrogant</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Page 14: Personality traits */}
      <section id="personality-traits" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h3 className="text-aia-red font-bold uppercase">Our personality as a mentor</h3>
            <p className="mt-3 text-aia-charcoal/80 text-sm max-w-[900px]">
              Our personality is how our customers experience our brand. It applies to how we come across visually and how we communicate - in person and on the page.
            </p>
            <div className="mt-4">
              <CopySectionButton
                label="Copy to Clipboard"
                className="bg-white !text-aia-red border border-aia-red hover:bg-aia-red/5 hover:!text-aia-red shadow-none"
                getText={() =>
                  `Brand Personality (AIA as a Mentor)\n\nSummary:\n- Our personality is how our customers experience our brand. It applies to how we come across visually and how we communicate - in person and on the page.\n\nTraits:\n- Compassionate: Compassion is about being empathetic. It means standing in our customers’ shoes and seeing things from their point of view. We are never judgemental.\n- Straightforward: We speak simply and to the point. No matter how complex the subject, we are easy to understand. We are direct and respectful, not long-winded or insensitive.\n- Positive: We are optimistic, enthusiastic and focused on opportunity. We project an infectious sense of energy while staying grounded, practical and realistic.\n- Confident: Confidence means feeling proud of our long-standing history and unrivalled expertise. We are knowledgeable without being arrogant or showing off.\n- Encouraging: Encouraging means being gently supportive, instilling confidence and positivity in our customers. We are never harsh or too directive. We seek to encourage a ‘can do’ mentality.\n- Motivating: Motivation is about being inspiring. We lead by example, always showing, not telling, and providing evidence wherever we can.\n- Guiding: Guiding means indicating a way forward, exercising a subtle influence and providing options. We are instructive but not prescriptive.\n- On your side: On your side means championing the causes that matter to our customers. It means being inclusive, accepting and celebrating individuals, not alienating them.`
                }
              />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Compassionate',
                  body:
                    'Compassion is about being empathetic. It means standing in our customers’ shoes and seeing things from their point of view. We are never judgemental.',
                },
                {
                  title: 'Straightforward',
                  body:
                    'We speak simply and to the point. No matter how complex the subject, we are easy to understand. We are direct and respectful, not long-winded or insensitive.',
                },
                {
                  title: 'Positive',
                  body:
                    'We are optimistic, enthusiastic and focused on opportunity. We project an infectious sense of energy while staying grounded, practical and realistic.',
                },
                {
                  title: 'Confident',
                  body:
                    'Confidence means feeling proud of our long-standing history and unrivalled expertise. We are knowledgeable without being arrogant or showing off.',
                },
                {
                  title: 'Encouraging',
                  body:
                    'Encouraging means being gently supportive, instilling confidence and positivity in our customers. We are never harsh or too directive. We seek to encourage a ‘can do’ mentality.',
                },
                {
                  title: 'Motivating',
                  body:
                    'Motivation is about being inspiring. We lead by example, always showing, not telling, and providing evidence wherever we can.',
                },
                {
                  title: 'Guiding',
                  body:
                    'Guiding means indicating a way forward, exercising a subtle influence and providing options. We are instructive but not prescriptive.',
                },
                {
                  title: 'On your side',
                  body:
                    'On your side means championing the causes that matter to our customers. It means being inclusive, accepting and celebrating individuals, not alienating them.',
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="inline-block rounded-full bg-aia-red text-white px-5 py-2 font-bold text-xs uppercase tracking-wide">
                    {item.title}
                  </div>
                  <p className="mt-4 text-[12px] text-aia-charcoal/80 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="company-values" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h3 className="text-aia-red font-bold uppercase">Company Values</h3>
          <p className="mt-3 text-aia-charcoal/80 text-sm max-w-[900px]">
            A concise values set that supports brand‑aligned messaging and decision making.
          </p>
          <div className="mt-4">
            <CopySectionButton
              label="Copy to Clipboard"
              className="bg-white !text-aia-red border border-aia-red hover:bg-aia-red/5 hover:!text-aia-red shadow-none"
              getText={() =>
                `Company Values\n\n- Customer First: We serve people and communities by putting customer needs at the center of every decision.\n- Integrity: We act with honesty, transparency, and accountability.\n- Excellence: We deliver quality, consistency, and continual improvement.\n- Care & Empathy: We listen, support, and guide with humanity.\n- Collaboration: We work as one team across markets and functions.\n- Innovation: We adapt and create to help people live Healthier, Longer, Better Lives.`
              }
            />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-aia-charcoal/80">
            <div>
              <p className="text-aia-red font-semibold">Customer First</p>
              <p className="mt-2">We serve people and communities by putting customer needs at the center of every decision.</p>
            </div>
            <div>
              <p className="text-aia-red font-semibold">Integrity</p>
              <p className="mt-2">We act with honesty, transparency, and accountability.</p>
            </div>
            <div>
              <p className="text-aia-red font-semibold">Excellence</p>
              <p className="mt-2">We deliver quality, consistency, and continual improvement.</p>
            </div>
            <div>
              <p className="text-aia-red font-semibold">Care & Empathy</p>
              <p className="mt-2">We listen, support, and guide with humanity.</p>
            </div>
            <div>
              <p className="text-aia-red font-semibold">Collaboration</p>
              <p className="mt-2">We work as one team across markets and functions.</p>
            </div>
            <div>
              <p className="text-aia-red font-semibold">Innovation</p>
              <p className="mt-2">We adapt and create to help people live Healthier, Longer, Better Lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page 15: Summary */}
      <section id="summary" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <p className="text-aia-red font-bold uppercase">In summary: the AIA brand</p>
            <h3 className="mt-4 text-4xl md:text-5xl text-aia-midnight font-semibold">AIA is a mentor</h3>
            <p className="mt-2 text-aia-red font-semibold inline-block border-b-2 border-aia-red/30 pb-1">Supports you</p>

            <h3 className="mt-10 text-4xl md:text-5xl text-aia-midnight font-semibold">Helping you live a healthier, longer, better life</h3>
            <p className="mt-2 text-aia-red font-semibold inline-block border-b-2 border-aia-red/30 pb-1">Actively helps you make progress</p>

            <h3 className="mt-10 text-4xl md:text-5xl text-aia-midnight font-semibold">Whatever that means to you</h3>
            <p className="mt-2 text-aia-red font-semibold inline-block border-b-2 border-aia-red/30 pb-1">In a way that is personal</p>
        </div>
      </section>
    </main>
  );
};

export default Personality;
