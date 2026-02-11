import React from 'react';

const Logos = () => {
  return (
    <main className="w-full bg-white">
      {/* Page 31: Overview */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h1 className="text-aia-red font-bold uppercase text-3xl">Our Logos</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <img src="/assets/logo_lockup.png" alt="HLBL Logo Lockup" className="mx-auto h-20" />
                <h3 className="mt-4 font-semibold text-aia-charcoal">HLBL Logo Lockup</h3>
                <p className="mt-2 text-sm text-aia-charcoal/70">
                  The HLBL Logo Lockup is a combination of our Corporate Logo and our Purpose statement. It is our preferred logo and should be used in most circumstances.
                </p>
              </div>
              <div>
                <img src="/assets/logo_std.png" alt="Corporate Logo" className="mx-auto h-20" />
                <h3 className="mt-4 font-semibold text-aia-charcoal">Corporate Logo</h3>
                <p className="mt-2 text-sm text-aia-charcoal/70">
                  The AIA Corporate Logo is a recognisable symbol of our brand’s heritage, success and longevity.
                </p>
              </div>
              <div>
                <img src="/assets/logo_wordmark.svg" alt="Wordmark" className="mx-auto h-20" />
                <h3 className="mt-4 font-semibold text-aia-charcoal">Wordmark</h3>
                <p className="mt-2 text-sm text-aia-charcoal/70">
                  The AIA Wordmark evolved from our Corporate Logo to address issues of legibility. It is also used when creating sub-brands.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Page 32: HLBL Logo Lockup */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h2 className="text-aia-red font-bold uppercase">HLBL Logo Lockup</h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
              <div className="text-aia-charcoal/80 text-sm">
                <p>
                  Our Purpose — Healthier, Longer, Better Lives — is central to everything we do. It is our reason for being. We lock it up with our Corporate Logo to make our commitment in a clear and unwavering manner.
                </p>
                <p className="mt-4">
                  The HLBL Logo Lockup comes in a horizontal format. The elements within it are defined in relation to each other and should never be altered, redrawn or modified.
                </p>
                <p className="mt-4 text-aia-red font-semibold">
                  The height of the Corporate Logo is the Y-height. Y-height defines the size and distance between our Corporate Logo and our Purpose.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img src="/assets/logo_lockup.png" alt="HLBL Logo Lockup" className="h-32" />
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-gray-100 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-aia-charcoal/70 items-center">
                <div>
                  <h4 className="font-semibold">Clear space</h4>
                  <div className="mt-4 relative w-full max-w-[360px] h-40 mx-auto">
                    <div className="absolute inset-6 border border-dashed border-aia-red/40" />
                    <div className="absolute inset-10 border border-aia-red/30" />
                    <img
                      src="/assets/logo_lockup.png"
                      alt="HLBL Logo Lockup clear space"
                      className="absolute inset-0 m-auto h-12"
                    />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-aia-red text-xs">0.25 Y</span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-aia-red text-xs">0.25 Y</span>
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 text-aia-red text-xs">0.25 Y</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-aia-red text-xs">0.25 Y</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Minimum size</h4>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-aia-red font-semibold">10mm</span>
                      <img src="/assets/logo_lockup.png" alt="Print minimum size" className="h-6" />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-aia-red font-semibold">24px</span>
                      <img src="/assets/logo_lockup.png" alt="Digital minimum size" className="h-5" />
                    </div>
                    <p className="text-xs text-aia-charcoal/50">*Not to scale</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Page 33: Localised versions */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h2 className="text-aia-red font-bold uppercase">HLBL Logo Lockup: Localised versions</h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_0.7fr] gap-10">
              <div className="text-aia-charcoal/80 text-sm">
                <p>
                  Only approved language versions of the HLBL Logo Lockup may be used. Please refer to the Group Brand Team for advice.
                </p>
                <p className="mt-4">
                  The examples on this page show localised HLBL Logo Lockups for China, Hong Kong and Taiwan.
                </p>
                <p className="mt-4 text-aia-red font-semibold">Do not create an additional local version without a strong reason.</p>
                <p className="mt-4 text-aia-charcoal/70">Please consider:</p>
                <ul className="mt-2 space-y-2">
                  <li>Variations and versions risk becoming inconsistent.</li>
                  <li>Local language may not fully capture the meaning of the original English positioning.</li>
                  <li>Ask the Group Brand Team for help if you are unsure.</li>
                  <li>For global consistency and recognisability, we want to use the English version of the HLBL Logo Lockup whenever possible.</li>
                  <li>All localised versions of the HLBL Logo Lockup must be approved by the Group Brand Team and Group CMO.</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-100 p-6 text-center text-xs text-aia-charcoal/60">
                <p className="mb-4 font-semibold">Lockup construction</p>
                <div className="text-aia-red font-semibold">1.6 Y / 0.10 Y / 0.20 Y / 0.15 Y</div>
                <p className="mt-4">
                  Point of snow base of the mountain (a) aligned to cap height of characters (h)
                </p>
              </div>
              <div className="space-y-8 text-center">
                <div>
                  <p className="text-xs text-aia-charcoal/60">Chinese HLBL Logo Lockup</p>
                  <div className="mx-auto mt-2 h-20 flex items-center justify-center rounded border border-dashed border-aia-red/40 text-xs text-aia-charcoal/50">
                    Localised lockup asset needed
                  </div>
                </div>
                <div>
                  <p className="text-xs text-aia-charcoal/60">Hong Kong HLBL Logo Lockup</p>
                  <div className="mx-auto mt-2 h-20 flex items-center justify-center rounded border border-dashed border-aia-red/40 text-xs text-aia-charcoal/50">
                    Localised lockup asset needed
                  </div>
                </div>
                <div>
                  <p className="text-xs text-aia-charcoal/60">Taiwanese HLBL Logo Lockup</p>
                  <div className="mx-auto mt-2 h-20 flex items-center justify-center rounded border border-dashed border-aia-red/40 text-xs text-aia-charcoal/50">
                    Localised lockup asset needed
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Page 34: Corporate Logo */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h2 className="text-aia-red font-bold uppercase">Corporate Logo</h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">
              <div className="text-aia-charcoal/80 text-sm">
                <p>
                  The AIA Corporate Logo is a recognisable symbol of our brand’s heritage, success and longevity. It demonstrates the strength, stability and protection which have defined over 100 years of our business.
                </p>
                <p className="mt-4">
                  Our Corporate Logo is a representation of the Himalayas — a mountain range made up of many mountains which we use to represent our customers’ many goals, dreams and challenges.
                </p>
                <p className="mt-4 text-aia-red font-semibold">
                  The AIA Wordmark and the Himalayas illustration are designed and scaled to complement each other. They should not be altered, redrawn or modified.
                </p>
                <p className="mt-4">
                  To maintain its integrity, our Corporate Logo should never be crowded by graphics or text. It is protected by a minimum clear space, which is also the closest it can be positioned to the edge of a page.
                </p>
                <p className="mt-4">
                  A minimum size restriction is also in place to ensure the Corporate Logo can be reproduced well. As long as you don’t go below the minimum size, you may resize the logo to fit your specific requirements.
                </p>
                <p className="mt-4 text-aia-red font-semibold">
                  The Corporate Logo must remain legible and fully visible at all times. If legibility is in doubt, please use the Wordmark.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img src="/assets/logo_std.png" alt="AIA Corporate Logo" className="h-44" />
              </div>
            </div>
            <div className="mt-8 rounded-lg bg-gray-100 p-6 text-sm text-aia-charcoal/70">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h4 className="font-semibold">Clear space</h4>
                  <div className="mt-4 relative w-full max-w-[320px] h-40 mx-auto">
                    <div className="absolute inset-6 border border-dashed border-aia-red/40" />
                    <div className="absolute inset-10 border border-aia-red/30" />
                    <img
                      src="/assets/logo_std.png"
                      alt="Corporate logo clear space"
                      className="absolute inset-0 m-auto h-16"
                    />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-aia-red text-xs">0.25 Y</span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-aia-red text-xs">0.25 Y</span>
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 text-aia-red text-xs">0.25 Y</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-aia-red text-xs">0.25 Y</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Minimum size</h4>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-aia-red font-semibold">10mm</span>
                      <img src="/assets/logo_std.png" alt="Print minimum size" className="h-7" />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-aia-red font-semibold">24px</span>
                      <img src="/assets/logo_std.png" alt="Digital minimum size" className="h-6" />
                    </div>
                    <p className="text-xs text-aia-charcoal/50">*Not to scale</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Page 35: Wordmark */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h2 className="text-aia-red font-bold uppercase">Wordmark</h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">
              <div className="text-aia-charcoal/80 text-sm">
                <p>
                  Our Wordmark was developed to address some visibility issues associated with the Corporate Logo.
                </p>
                <p className="mt-4">
                  Our Wordmark is protected by a minimum clear space. The equivalent of 0.35 of the height of the letter A is used to define the minimum clear space.
                </p>
                <p className="mt-4">
                  Minimum size restrictions should be observed to ensure that it can be reproduced well.
                </p>
                <p className="mt-4 text-aia-red font-semibold">
                  We use our Wordmark when there is limited space for applying the Corporate Logo or when there will be legibility issues with the Corporate Logo.
                </p>
                <p className="mt-4 text-aia-red font-semibold">See next page for detailed usage guidelines.</p>
              </div>
              <div className="flex items-center justify-center">
                <img src="/assets/logo_wordmark.svg" alt="AIA Wordmark" className="h-24" />
              </div>
            </div>
            <div className="mt-8 rounded-lg bg-gray-100 p-6 text-sm text-aia-charcoal/70">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h4 className="font-semibold">Clear space</h4>
                  <div className="mt-4 relative w-full max-w-[320px] h-40 mx-auto">
                    <div className="absolute inset-6 border border-dashed border-aia-red/40" />
                    <div className="absolute inset-10 border border-aia-red/30" />
                    <img
                      src="/assets/logo_wordmark.svg"
                      alt="Wordmark clear space"
                      className="absolute inset-0 m-auto h-10"
                    />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-aia-red text-xs">0.35 Y</span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-aia-red text-xs">0.35 Y</span>
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 text-aia-red text-xs">0.35 Y</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-aia-red text-xs">0.35 Y</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Minimum size</h4>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-aia-red font-semibold">3mm</span>
                      <img src="/assets/logo_wordmark.svg" alt="Print minimum size" className="h-5" />
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-aia-red font-semibold">15px</span>
                      <img src="/assets/logo_wordmark.svg" alt="Digital minimum size" className="h-4" />
                    </div>
                    <p className="text-xs text-aia-charcoal/50">*Not to scale</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Page 36: Wordmark usage (use extracted images) */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h2 className="text-aia-red font-bold uppercase">Wordmark usage</h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">
              <div className="text-aia-charcoal/80 text-sm">
                <p>There are only two instances in which the AIA Wordmark should be used.</p>
                <p className="mt-4">
                  Firstly, when there is limited space or if there would be legibility issues when viewed from a distance, for example on external signage.
                </p>
                <p className="mt-4">
                  Secondly, when creating sub-brands, brand programmes or in joint ventures. In these cases we use the Wordmark for consistency, legibility and simplicity.
                </p>
                <p className="mt-4 text-aia-red font-semibold">
                  Remember our Corporate Logo and HLBL Logo Lockup are extremely important to our brand and should be used wherever possible.
                </p>
                <p className="mt-4 text-aia-red font-semibold">
                  All sub-brands that use the Wordmark must be approved by the Group Brand Team.
                </p>
              </div>
              <div className="space-y-6">
                <img src="/guide/assets/logos/logos-wordmark-usage-000.png" alt="Spurs partnership" className="w-full rounded-lg" />
                <img src="/guide/assets/logos/logos-wordmark-usage-001.png" alt="Branded pen" className="w-full rounded-lg" />
                <img src="/guide/assets/logos/logos-wordmark-usage-003.png" alt="External signage" className="w-full rounded-lg" />
              </div>
            </div>
        </div>
      </section>

      {/* Page 37: Logo usage (flow) */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h2 className="text-aia-red font-bold uppercase">Logo usage</h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">
              <div className="text-aia-charcoal/80 text-sm">
                <p className="text-aia-red font-semibold">
                  The HLBL Logo Lockup is the preferred version and the one you should reach for first.
                </p>
                <p className="mt-4">
                  In instances where there is not enough space, the Corporate Logo can be used in its place.
                </p>
                <p className="mt-4">
                  For legal, regulatory and T&Cs documents please use the Corporate Logo.
                </p>
                <p className="mt-4">
                  If there are legibility issues with the Corporate Logo the Wordmark may be used, see here for details.
                </p>
                <p className="mt-4">
                  If you are unsure which logo you should use please contact the Group Brand Team for advice.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 p-6 text-sm text-aia-charcoal/80">
                  <p className="text-center font-semibold uppercase text-aia-charcoal/70">Are you able to use the HLBL Logo Lockup?</p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded border border-aia-red/30 p-4 text-center">
                      <p className="text-aia-red font-semibold">Yes</p>
                      <p className="mt-2 text-xs">Great! This is our preferred version in almost all instances.</p>
                      <img src="/assets/logo_lockup.png" alt="HLBL Logo Lockup" className="mx-auto mt-3 h-8" />
                    </div>
                    <div className="rounded border border-aia-red/30 p-4 text-center">
                      <p className="text-aia-red font-semibold">No</p>
                      <p className="mt-2 text-xs">Can you use the Corporate Logo?</p>
                      <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                        <div className="rounded border border-gray-200 p-2">
                          <p className="text-aia-red font-semibold">Yes</p>
                          <p className="mt-1">Use the Corporate Logo when space is limited.</p>
                          <img src="/assets/logo_std.png" alt="Corporate logo" className="mx-auto mt-2 h-8" />
                        </div>
                        <div className="rounded border border-gray-200 p-2">
                          <p className="text-aia-red font-semibold">No</p>
                          <p className="mt-1">Use the Wordmark.</p>
                          <img src="/assets/logo_wordmark.svg" alt="Wordmark" className="mx-auto mt-2 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="/guide/assets/logos/logos-usage-002.png" alt="Corporate logo example" className="w-full rounded-lg" />
                  <img src="/guide/assets/logos/logos-usage-004.png" alt="Wordmark signage" className="w-full rounded-lg" />
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Page 38: Placement */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h2 className="text-aia-red font-bold uppercase">Placement</h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">
              <div className="text-aia-charcoal/80 text-sm">
                <p>
                  For flexibility, the Corporate Logo and HLBL Logo Lockup can be used in the following positions in digital and print layouts:
                </p>
                <ul className="mt-4 space-y-1 text-aia-red font-semibold">
                  <li>Top left, centre, right</li>
                  <li>Centred in the middle of the page</li>
                  <li>Bottom left, centre, right</li>
                </ul>
                <p className="mt-4">
                  Always remember hierarchy of information and ensure that the placement of the Corporate Logo or HLBL Logo Lockup is not getting lost in the layout.
                </p>
                <p className="mt-4">
                  For stationery, legal and regulatory documents the Corporate Logo should be placed in the top left-hand corner only.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-xs uppercase text-aia-charcoal/60">General HLBL Logo Lockup placement options</p>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <div key={idx} className="h-16 border border-gray-100 rounded relative">
                        <img src="/assets/logo_lockup.png" alt="HLBL placement" className="absolute top-2 left-2 h-4" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-xs uppercase text-aia-charcoal/60">General Corporate Logo placement options</p>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <div key={idx} className="h-16 border border-gray-100 rounded relative">
                        <img src="/assets/logo_std.png" alt="Corporate placement" className="absolute top-2 left-2 h-5" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-xs uppercase text-aia-charcoal/60">Corporate Logo placement – top left</p>
                  <div className="h-32 border border-gray-100 rounded relative">
                    <img src="/assets/logo_std.png" alt="Corporate placement top left" className="absolute top-3 left-3 h-6" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Page 39: Logo don'ts */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h2 className="text-aia-red font-bold uppercase">Logo don’ts</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              {[
                'Don’t alter or redesign any element of our logos.',
                'Don’t place our logo on a colour background without sufficient contrast.',
                'Don’t deconstruct our logo to create other identities.',
                'Don’t apply other colours to our logo besides AIA Red and white.',
                'Don’t place text so close to the Corporate Logo that it can be confused with the HLBL Logo Lockup.',
                'Don’t use other colours. Our logos are always in one colour: AIA Red or white.',
                'Don’t alter the HLBL Logo Lockup. The elements have been set in a defined relationship with one another.',
                'Don’t outline the logo to make it stand out against a background; use a different image or alter the logo position if legibility is a problem.',
                'Don’t add an outline to the logo.',
              ].map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <span className="text-aia-charcoal/60">✕</span>
                  <p className="text-aia-charcoal/70">{text}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Page 40: Wordmark don'ts */}
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1400px] px-10 md:px-16 py-12">
            <h2 className="text-aia-red font-bold uppercase">Wordmark don’ts</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              {[
                'Don’t alter or redesign our Wordmark.',
                'Don’t place our Wordmark on a colour background without sufficient contrast.',
                'Don’t lock the Wordmark up with our Purpose.',
                'Don’t apply other colours to our Wordmark besides AIA Red and white.',
                'Don’t use the Wordmark when the Corporate Logo or HLBL Logo Lockup should be used.',
              ].map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <span className="text-aia-charcoal/60">✕</span>
                  <p className="text-aia-charcoal/70">{text}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
    </main>
  );
};

export default Logos;
