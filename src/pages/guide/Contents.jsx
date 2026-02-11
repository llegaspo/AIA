import React from 'react';
import { Link } from 'react-router-dom';

const SectionColumn = ({ title, items }) => (
  <div>
    <h3 className="text-aia-red font-bold uppercase text-sm">{title}</h3>
    <ul className="mt-3 space-y-2 text-sm text-aia-charcoal/80">
      {items.map((item) => (
        <li key={item.label}>
          {item.to ? (
            <Link to={item.to} className="hover:text-aia-red">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Contents = () => {
  return (
    <main className="w-full bg-white">
      <section className="px-10 md:px-16 py-12">
        <div className="flex items-center gap-3 text-aia-red">
          <img src="/assets/assets/logo.png" alt="AIA" className="h-10 w-auto" />
          <div className="text-[10px] uppercase tracking-widest">
            <div>Healthier, Longer,</div>
            <div>Better Lives</div>
          </div>
        </div>
        <h1 className="mt-10 text-3xl md:text-5xl font-bold text-aia-red uppercase">Contents</h1>
        <p className="mt-4 text-aia-charcoal/70">
          Use this page to jump to any section of the AIA Brand Standards.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SectionColumn
            title="Our Brand"
            items={[
              { label: 'Welcome', to: '/' },
              { label: 'Our Purpose', to: '/purpose' },
              { label: 'Our Personality', to: '/personality' },
              { label: 'Our Tone of Voice', to: '/tone-of-voice' },
              { label: 'Cultural Guidance', to: '/cultural-guidance' },
            ]}
          />
          <SectionColumn
            title="Our Identity"
            items={[{ label: 'Our Logos', to: '/logos' }]}
          />
          <SectionColumn
            title="Visual Elements"
            items={[
              { label: 'Colours', to: '/colour' },
              { label: 'Typography', to: '/typography' },
              { label: 'Moving Mountains', to: '/moving-mountains' },
              { label: 'Photography', to: '/photography' },
              { label: 'Illustration', to: '/illustration' },
              { label: 'Iconography', to: '/iconography' },
            ]}
          />
          <SectionColumn
            title="Applications"
            items={[
              { label: 'Digital', to: '/digital' },
              { label: 'Print', to: '/print' },
              { label: 'Merchandise', to: '/merchandise' },
            ]}
          />
        </div>
      </section>
    </main>
  );
};

export default Contents;
