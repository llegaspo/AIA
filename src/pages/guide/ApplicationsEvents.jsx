import React from 'react';
import MovingMountainsOverlay from '../../components/ui/MovingMountains';

const ApplicationsEvents = () => {
  const tiles = [
    { label: 'Office event', span: 'col-span-2' },
    { label: 'Internal event', span: 'col-span-2' },
    { label: 'Rollup banner', span: 'col-span-1' },
    { label: 'Customer event', span: 'col-span-3' },
  ];

  return (
    <main className="w-full bg-white guide-page">
      <section className="px-12 md:px-20 py-12">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Events</h1>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className={`rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden ${tile.span}`}
            >
              <div className="h-44 bg-gradient-to-br from-aia-red/70 via-aia-red/40 to-aia-grey relative">
                <MovingMountainsOverlay className="absolute inset-0 text-white/50" />
              </div>
              <div className="p-3 text-[11px] text-aia-charcoal/60">{tile.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ApplicationsEvents;
