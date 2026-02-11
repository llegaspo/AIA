import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';

const Personality = () => {
  useScrollSpy(['why-a-mentor', 'why-a-persona', 'what-a-mentor-is', 'personality-traits', 'summary'], 'why-a-mentor');
  return (
    <main className="w-full bg-white">
      {/* Page 10: Hero */}
      <section className="relative min-h-[70vh] md:min-h-[85vh]">
        <img
          src="/guide/assets/personality/personality-hero.png"
          alt="People kayaking"
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
          <h1 className="text-white/70 text-5xl md:text-7xl font-bold uppercase tracking-tight">
            Our Personality
          </h1>
        </div>
      </section>

      {/* Page 11: Brand persona */}
      <section id="why-a-mentor" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <p className="text-aia-red font-bold uppercase">Our Brand Persona</p>
            <h2 className="mt-4 text-5xl md:text-6xl text-aia-red font-bold uppercase">Mentor</h2>
            <p className="mt-6 text-xl text-aia-midnight">
              Our persona helps us show just what it means to strive for Healthier, Longer, Better Lives.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'A mentor is active',
                'A mentor is customer-centric',
                'A mentor is personal',
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border-2 border-aia-red text-aia-red font-semibold uppercase text-center py-4"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-center">
              <div className="relative w-full max-w-[900px] h-8">
                <div className="absolute inset-x-6 top-1/2 h-1 -translate-y-1/2 bg-aia-red" />
                <div className="absolute left-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[10px] border-y-transparent border-r-[18px] border-r-aia-red" />
                <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[10px] border-y-transparent border-l-[18px] border-l-aia-red" />
              </div>
            </div>
            <p className="mt-4 text-center text-aia-red font-semibold">Healthier, Longer, Better Lives</p>
        </div>
      </section>

      {/* Page 12: Why a persona is important */}
      <section id="why-a-persona" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12">
              <div>
                <h3 className="text-aia-red font-bold uppercase text-xl">Why a persona is important</h3>
                <p className="mt-4 text-aia-charcoal/80">
                  Having a persona is one of the most important ways in which we bring our brand to life.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  Thinking of AIA as a mentor enables us to see our brand as a collection of attitudes, behaviours and traits. And it demonstrates that our Purpose is more than just a statement, it is a way of being.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  Our persona reminds us how we should behave in our interactions with our customers and each other. It keeps our offering distinct and consistent wherever it appears.
                </p>
                <p className="mt-4 text-aia-red font-semibold">
                  It is what makes us unmistakably AIA.
                </p>
              </div>

              <div className="flex flex-col gap-6 text-aia-midnight">
                <div className="flex items-center justify-center gap-4 text-2xl font-semibold">
                  <span>Healthier, Longer, Better Lives</span>
                  <span className="text-aia-red text-3xl">+</span>
                  <span>Mentor</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <span className="text-aia-red text-2xl">↗</span>
                    <span>How we behave</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-aia-red text-2xl">→</span>
                    <span>How we speak</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-aia-red text-2xl">↘</span>
                    <span>How we look</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-lg font-semibold">
                  <div className="h-2 w-10 rounded-full bg-aia-red" />
                  <div className="h-2 w-10 rounded-full bg-aia-red/50" />
                  <span>Unmistakably AIA</span>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Page 13: AIA as a mentor */}
      <section id="what-a-mentor-is" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
              <div>
                <h3 className="text-aia-red font-bold uppercase">AIA as a mentor</h3>
                <p className="mt-4 text-aia-charcoal/80">
                  A mentor is an experienced and trusted adviser. Renowned in their field for their knowledge and expertise, they pass it on to others to help them grow and progress throughout their lives.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  Always there and available for counsel, a mentor is gentle, instructive and guiding. They don’t always tell you which way to go, but help you find your own way. They are never harsh, critical or aggressive.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  The presence of a mentor is comforting. They offer a wealth of knowledge when you need it, but not when you don’t. They adapt their guidance to every individual. They support you without pushing you.
                </p>
                <p className="mt-4 text-aia-charcoal/80">
                  When a mentor speaks, you know it comes from a place of confidence, not arrogance. They are balanced and accepting, but not judgemental. They see how small details contribute to the big picture.
                </p>
                <p className="mt-4 text-aia-red font-semibold">
                  AIA as a mentor has the ambition of helping customers live Healthier, Longer, Better Lives.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="inline-block rounded-full bg-aia-red text-white px-4 py-2 font-bold uppercase">A mentor is</div>
                  <ul className="mt-4 space-y-2 text-aia-midnight">
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
                  <div className="inline-block rounded-full bg-aia-red text-white px-4 py-2 font-bold uppercase">A mentor isn’t</div>
                  <ul className="mt-4 space-y-2 text-aia-midnight">
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
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h3 className="text-aia-red font-bold uppercase">Our personality as a mentor</h3>
            <p className="mt-2 text-aia-charcoal/80">
              Our personality is how our customers experience our brand. It applies to how we come across visually and how we communicate - in person and on the page.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="inline-block rounded-full bg-aia-red text-white px-4 py-2 font-bold">
                    {item.title}
                  </div>
                  <p className="mt-4 text-sm text-aia-charcoal/80">{item.body}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Page 15: Summary */}
      <section id="summary" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <p className="text-aia-red font-bold uppercase">In summary: the AIA brand</p>
            <h3 className="mt-4 text-4xl md:text-5xl text-aia-midnight font-semibold">AIA is a mentor</h3>
            <p className="mt-2 text-aia-red font-semibold">Supports you</p>

            <h3 className="mt-8 text-4xl md:text-5xl text-aia-midnight font-semibold">Helping you live a healthier, longer, better life</h3>
            <p className="mt-2 text-aia-red font-semibold">Actively helps you make progress</p>

            <h3 className="mt-8 text-4xl md:text-5xl text-aia-midnight font-semibold">Whatever that means to you</h3>
            <p className="mt-2 text-aia-red font-semibold">In a way that is personal</p>
        </div>
      </section>
    </main>
  );
};

export default Personality;
