import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationsOverview = () => {
  return (
    <main className="w-full bg-white">
      <section className="px-10 md:px-16 py-12">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Applications</h1>
        <p className="mt-4 text-aia-charcoal/80">
          Apply the brand consistently across channels. Choose the right application guidance below.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Digital', text: 'Web, app, and social touchpoints', to: '/digital' },
            { title: 'Print', text: 'Stationery and collateral', to: '/print' },
            { title: 'Merchandise', text: 'Branded gear and physical assets', to: '/merchandise' },
          ].map((card) => (
            <Link key={card.title} to={card.to} className="rounded-lg border border-gray-100 p-6 hover:border-aia-red/40 transition-colors">
              <h2 className="text-aia-red font-semibold">{card.title}</h2>
              <p className="mt-2 text-sm text-aia-charcoal/70">{card.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ApplicationsOverview;
