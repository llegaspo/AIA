import React from 'react';
import { Link } from 'react-router-dom';
import useScrollSpy from '../../components/guide/useScrollSpy';

const OurBrand = () => {
  useScrollSpy(['welcome', 'contents'], 'welcome');

  return (
    <main className="w-full bg-white guide-page">
      <section id="welcome" className="relative min-h-[55vh] bg-gradient-to-br from-white via-white to-aia-grey">
        <div className="absolute left-0 top-0 h-full w-1 bg-aia-red" aria-hidden="true" />
        <div className="px-12 md:px-20 py-16">
          <div className="flex items-center gap-3 text-aia-red">
            <img src="/assets/assets/logo_cropped_transparent.png" alt="AIA" className="h-12 w-auto logo-clean mix-blend-multiply" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
          <h1 className="mt-16 text-4xl md:text-6xl font-semibold text-aia-midnight">
            At AIA, our Purpose is to help people live
          </h1>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-aia-red">
            Healthier, Longer, Better Lives
          </h2>
          <p className="mt-8 max-w-2xl text-sm text-aia-charcoal/70">
            This is our single source of truth for brand standards, assets, and applications.
            <br />
            If it is not here, it is not official.
          </p>
        </div>
      </section>

      <section id="contents" className="px-12 md:px-20 py-12 min-h-[70vh] border-t border-aia-red/10">
        <h2 className="text-aia-red font-bold uppercase text-3xl">Contents</h2>
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

export default OurBrand;
