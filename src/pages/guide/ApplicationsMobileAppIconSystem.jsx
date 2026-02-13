import React from 'react';

const ApplicationsMobileAppIconSystem = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_560px] gap-8 items-start">
          <div>
            <h1 className="text-aia-red font-bold uppercase text-3xl">Mobile app icon system</h1>
            <p className="mt-4 text-aia-charcoal/80 text-[13px] leading-6 max-w-[500px]">
              We have two sets of app icon design. One for customer and the other for agency.
            </p>

            <h2 className="mt-8 text-aia-red font-semibold text-[40px] leading-none">App icon for customers</h2>
            <p className="mt-2 text-aia-charcoal/70 text-[13px] leading-6 max-w-[500px]">
              Our AIA white Corporate Logo on AIA Red background design is used as the main customer app icon.
              For other AIA customer apps, use a symbol or AIA Wordmark and app name on a four Moving Mountains background.
            </p>

            <h2 className="mt-6 text-aia-red font-semibold text-[40px] leading-none">App icon for Agency</h2>
            <p className="mt-2 text-aia-charcoal/70 text-[13px] leading-6 max-w-[500px]">
              Our AIA Red Corporate Logo on a white background design is used as the main Agency app icon.
              For alternative AIA Agency apps, use our AIA Wordmark and app name on a white background.
            </p>

            <h2 className="mt-6 text-aia-red font-semibold text-[40px] leading-none">Region tag</h2>
            <p className="mt-2 text-aia-charcoal/70 text-[13px] leading-6 max-w-[500px]">
              Add a region tag to indicate markets if needed.
            </p>

            <div className="mt-6 text-[13px] leading-6 text-aia-charcoal/70">
              <p>For further guidance on our AIA Digital Design System, please contact:</p>
              <p className="mt-2">UX design lead – tony-kw.cheung@aia.com</p>
              <p>DDS design lead – designsystem@aia.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[334px_251px] gap-6 items-start">
            <div className="space-y-6">
              <figure className="w-full md:w-[334px]">
                <figcaption className="text-sm text-aia-charcoal/70 mb-1">Customer app icons</figcaption>
                <img
                  src="/assets/applications/mobile-icon-system/customer-app-icons.png"
                  alt="Customer app icons"
                  className="w-full h-auto"
                />
              </figure>
              <figure className="w-full md:w-[334px]">
                <figcaption className="text-sm text-aia-charcoal/70 mb-1">Agency app icon</figcaption>
                <img
                  src="/assets/applications/mobile-icon-system/Agency-app-icon.png"
                  alt="Agency app icon"
                  className="w-full h-auto"
                />
              </figure>
              <figure className="w-full md:w-[190px]">
                <figcaption className="text-sm text-aia-charcoal/70 mb-1">Region tag</figcaption>
                <img
                  src="/assets/applications/mobile-icon-system/region-tag-icon.png"
                  alt="Region tag icon"
                  className="w-full h-auto"
                />
              </figure>
            </div>
            <figure className="w-full md:w-[251px] md:justify-self-end">
              <img
                src="/assets/applications/mobile-icon-system/mobile-view.png"
                alt="Mobile app view"
                className="w-full h-auto"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsMobileAppIconSystem;
