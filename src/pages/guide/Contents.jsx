import React from 'react';
import { Link } from 'react-router-dom';

const Contents = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-12 md:px-20 py-12 min-h-[70vh]">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Contents</h1>
        <p className="mt-4 text-aia-charcoal/70">
          Use this page to jump to any section of the AIA Brand Standards.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-aia-red font-bold uppercase text-sm">Our Brand</h3>
            <ul className="mt-3 space-y-2 text-sm text-aia-charcoal/80">
              <li><Link className="hover:text-aia-red" to="/our-brand#welcome">Welcome</Link></li>
              <li><Link className="hover:text-aia-red" to="/our-brand#contents">Contents</Link></li>
              <li><Link className="hover:text-aia-red" to="/purpose#why-our-purpose">Our Purpose</Link></li>
              <li><Link className="hover:text-aia-red" to="/personality#why-a-mentor">Our Personality</Link></li>
              <li><Link className="hover:text-aia-red" to="/tone-of-voice#introduction">Our Tone of Voice</Link></li>
              <li><Link className="hover:text-aia-red" to="/cultural-guidance#introduction">Cultural Guidance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-aia-red font-bold uppercase text-sm">Our Identity</h3>
            <ul className="mt-3 space-y-2 text-sm text-aia-charcoal/80">
              <li><Link className="hover:text-aia-red" to="/logos">Our logos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-aia-red font-bold uppercase text-sm">Visual Elements</h3>
            <ul className="mt-3 space-y-2 text-sm text-aia-charcoal/80">
              <li><Link className="hover:text-aia-red" to="/colour">Colours</Link></li>
              <li><Link className="hover:text-aia-red" to="/typography">Typography</Link></li>
              <li><Link className="hover:text-aia-red" to="/moving-mountains">Moving Mountains</Link></li>
              <li><Link className="hover:text-aia-red" to="/photography">Photography</Link></li>
              <li><Link className="hover:text-aia-red" to="/illustration">Illustration</Link></li>
              <li><Link className="hover:text-aia-red" to="/iconography">Iconography</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-aia-red font-bold uppercase text-sm">Applications</h3>
            <ul className="mt-3 space-y-2 text-sm text-aia-charcoal/80">
              <li><Link className="hover:text-aia-red" to="/applications/mobile-app-icon-system">Mobile app icon system</Link></li>
              <li><Link className="hover:text-aia-red" to="/applications/digital-social">Digital: social media</Link></li>
              <li><Link className="hover:text-aia-red" to="/applications/corporate">Corporate</Link></li>
              <li><Link className="hover:text-aia-red" to="/applications/print">Print</Link></li>
              <li><Link className="hover:text-aia-red" to="/applications/merchandise">Merchandise</Link></li>
              <li><Link className="hover:text-aia-red" to="/applications/environmental">Environmental</Link></li>
              <li><Link className="hover:text-aia-red" to="/applications/events">Events</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contents;
