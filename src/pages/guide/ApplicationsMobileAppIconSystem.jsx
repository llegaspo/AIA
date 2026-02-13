import React from 'react';

const ApplicationsMobileAppIconSystem = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.25fr] gap-12 items-start">
          <div>
            <h1 className="text-aia-red font-bold uppercase text-3xl">Mobile app icon system</h1>
            <p className="mt-4 text-aia-charcoal/80 text-[14px] leading-6 max-w-[560px]">
              We have two sets of app icon design. One for customer and the other for agency.
            </p>

            <h2 className="mt-8 text-aia-red font-semibold text-2xl">App icon for customers</h2>
            <p className="mt-2 text-aia-charcoal/70 text-[14px] leading-6 max-w-[560px]">
              Our AIA white Corporate Logo on AIA Red background design is used as the main customer app icon.
              For other AIA customer apps, use a symbol or AIA Wordmark and app name on a four Moving Mountains background.
            </p>

            <h2 className="mt-6 text-aia-red font-semibold text-2xl">App icon for Agency</h2>
            <p className="mt-2 text-aia-charcoal/70 text-[14px] leading-6 max-w-[560px]">
              Our AIA Red Corporate Logo on a white background design is used as the main Agency app icon.
              For alternative AIA Agency apps, use our AIA Wordmark and app name on a white background.
            </p>

            <h2 className="mt-6 text-aia-red font-semibold text-2xl">Region tag</h2>
            <p className="mt-2 text-aia-charcoal/70 text-[14px] leading-6 max-w-[560px]">
              Add a region tag to indicate markets if needed.
            </p>

            <div className="mt-6 text-[14px] leading-6 text-aia-charcoal/70">
              <p>For further guidance on our AIA Digital Design System, please contact:</p>
              <p className="mt-2">UX design lead – tony-kw.cheung@aia.com</p>
              <p>DDS design lead – designsystem@aia.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 xl:gap-10 items-start">
            <div className="space-y-8">
              <figure>
                <figcaption className="text-sm text-aia-charcoal/70 mb-2">Customer app icons</figcaption>
                <img
                  src="/assets/applications/mobile-icon-system/customer-app-icons.png"
                  alt="Customer app icons"
                  className="w-full max-w-[380px] h-auto"
                />
              </figure>
              <figure>
                <figcaption className="text-sm text-aia-charcoal/70 mb-2">Agency app icon</figcaption>
                <img
                  src="/assets/applications/mobile-icon-system/Agency-app-icon.png"
                  alt="Agency app icon"
                  className="w-full max-w-[380px] h-auto"
                />
              </figure>
              <figure>
                <figcaption className="text-sm text-aia-charcoal/70 mb-2">Region tag</figcaption>
                <img
                  src="/assets/applications/mobile-icon-system/region-tag-icon.png"
                  alt="Region tag icon"
                  className="w-full max-w-[270px] h-auto"
                />
              </figure>
            </div>
            <figure className="md:justify-self-end">
              <img
                src="/assets/applications/mobile-icon-system/mobile-view.png"
                alt="Mobile app view"
                className="w-full max-w-[300px] h-auto"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsMobileAppIconSystem;
