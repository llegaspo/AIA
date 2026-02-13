import React from 'react';

const ApplicationsDigitalSocial = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1180px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Digital: social media</h1>
        <div className="mt-10 lg:hidden space-y-8">
          <figure className="w-full">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-3">Facebook header example</figcaption>
            <img
              src="/assets/applications/digital:social/facebook-header-example.png"
              alt="Facebook header example"
              className="w-full h-auto"
            />
          </figure>
          <figure className="w-full">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-3">Social media examples</figcaption>
            <img
              src="/assets/applications/digital:social/social-media-examples.png"
              alt="Social media examples"
              className="w-full h-auto"
            />
          </figure>
        </div>

        <div className="mt-10 hidden lg:block relative w-[1120px] h-[460px]">
          <figure className="absolute left-0 top-0 w-[511px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-3">Facebook header example</figcaption>
            <img src="/assets/applications/digital:social/facebook-header-example.png" alt="Facebook header example" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[575px] top-0 w-[545px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-3">Social media examples</figcaption>
            <img src="/assets/applications/digital:social/social-media-examples.png" alt="Social media examples" className="w-full h-auto" />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsDigitalSocial;
