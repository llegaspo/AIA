import React from 'react';

const ApplicationsDigitalSocial = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1400px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Digital: social media</h1>
        <div className="mt-10 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-10 xl:gap-12 max-w-[1120px]">
          <figure className="w-full xl:w-[520px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-3">Facebook header example</figcaption>
            <img
              src="/assets/applications/digital:social/facebook-header-example.png"
              alt="Facebook header example"
              className="w-full h-auto"
            />
          </figure>

          <figure className="w-full xl:w-[560px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-center mb-3">Social media examples</figcaption>
            <img
              src="/assets/applications/digital:social/social-media-examples.png"
              alt="Social media examples"
              className="w-full h-auto"
            />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsDigitalSocial;
