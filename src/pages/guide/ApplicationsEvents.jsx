import React from 'react';

const ApplicationsEvents = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1180px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Events</h1>
        <div className="mt-8 lg:hidden space-y-8">
          <figure className="w-full">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Office event</figcaption>
            <img src="/assets/applications/events/office-event.png" alt="Office event" className="w-full h-auto" />
          </figure>
          <figure className="w-full">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Internal event</figcaption>
            <img src="/assets/applications/events/internal-events.png" alt="Internal event" className="w-full h-auto" />
          </figure>
          <figure className="w-full max-w-[320px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Rollup banner</figcaption>
            <img src="/assets/applications/events/rollup-banner.png" alt="Rollup banner" className="w-full h-auto" />
          </figure>
          <figure className="w-full">
            <figcaption className="text-sm text-aia-charcoal/70 text-left mt-2 mb-2">Customer event</figcaption>
            <img src="/assets/applications/events/customer-event.png" alt="Customer event" className="w-full h-auto" />
          </figure>
        </div>

        <div className="mt-8 hidden lg:block relative w-[940px] h-[580px]">
          <figure className="absolute left-0 top-0 w-[330px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Office event</figcaption>
            <img src="/assets/applications/events/office-event.png" alt="Office event" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[340px] top-0 w-[320px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Internal event</figcaption>
            <img src="/assets/applications/events/internal-events.png" alt="Internal event" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[670px] top-0 w-[235px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Rollup banner</figcaption>
            <img src="/assets/applications/events/rollup-banner.png" alt="Rollup banner" className="w-full h-auto" />
          </figure>
          <figure className="absolute left-[175px] top-[290px] w-[478px]">
            <figcaption className="text-sm text-aia-charcoal/70 text-left mt-2 mb-2">Customer event</figcaption>
            <img src="/assets/applications/events/customer-event.png" alt="Customer event" className="w-full h-auto" />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsEvents;
