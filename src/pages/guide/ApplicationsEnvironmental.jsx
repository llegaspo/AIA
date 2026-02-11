import React from 'react';
import MovingMountainsOverlay from '../../components/ui/MovingMountains';

const ApplicationsEnvironmental = () => {
  const tiles = [
    { label: 'Waiting area', span: 'col-span-2' },
    { label: 'Office walls', span: 'col-span-2' },
    { label: 'Furniture', span: 'col-span-1' },
    { label: 'Breakout areas', span: 'col-span-3' },
    { label: 'Office branding', span: 'col-span-2' },
  ];

  return (
    <main className="w-full bg-white guide-page">
      <section className="px-12 md:px-20 py-12">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Environmental</h1>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className={`rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden ${tile.span}`}
            >
              <div className="h-44 bg-gradient-to-br from-aia-red/70 via-aia-red/30 to-aia-grey relative">
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

export default ApplicationsEnvironmental;
