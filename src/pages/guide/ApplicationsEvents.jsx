import React from 'react';

const ApplicationsEvents = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-10 md:px-16 py-10 max-w-[1400px] mx-auto">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Events</h1>
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-12 gap-2 items-start">
          <figure className="xl:col-span-4">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Office event</figcaption>
            <img src="/assets/applications/events/office-event.png" alt="Office event" className="w-full h-auto" />
          </figure>

          <figure className="xl:col-span-5">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Internal event</figcaption>
            <img src="/assets/applications/events/internal-events.png" alt="Internal event" className="w-full h-auto" />
          </figure>

          <figure className="xl:col-span-3 xl:row-span-2">
            <figcaption className="text-sm text-aia-charcoal/70 text-right mb-2">Rollup banner</figcaption>
            <img src="/assets/applications/events/rollup-banner.png" alt="Rollup banner" className="w-full h-auto" />
          </figure>

          <figure className="xl:col-start-3 xl:col-span-7">
            <figcaption className="text-sm text-aia-charcoal/70 text-left mt-2 mb-2">Customer event</figcaption>
            <img src="/assets/applications/events/customer-event.png" alt="Customer event" className="w-full h-auto" />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsEvents;
