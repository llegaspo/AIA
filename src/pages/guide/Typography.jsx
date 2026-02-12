import React from 'react';
import useScrollSpy from '../../components/guide/useScrollSpy';

const Typography = () => {
  useScrollSpy(['primary-english', 'system-english', 'primary-chinese', 'hierarchy', 'digital-typography'], 'primary-english');
  return (
    <main className="w-full bg-white guide-page">
      {/* Page 72: Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-gradient-to-br from-aia-charcoal via-aia-charcoal/90 to-aia-red">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute left-10 top-10 h-64 w-64 rotate-6 rounded-3xl bg-white/10" />
          <div className="absolute right-10 bottom-10 h-72 w-72 -rotate-12 rounded-3xl bg-white/15" />
        </div>
        <div className="relative z-10 px-12 md:px-20 pt-10">
          <div className="flex items-center gap-3 text-white">
            <img src="/assets/assets/logo_cropped_transparent.png" alt="AIA" className="h-12 w-auto logo-clean mix-blend-multiply" />
            <div className="text-[10px] uppercase tracking-widest">
              <div>Healthier, Longer,</div>
              <div>Better Lives</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 px-12 md:px-20 pt-16 md:pt-24">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Typography
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            AIA Everest defines the brand voice. System fonts and hierarchy rules protect clarity across channels.
          </p>
        </div>
      </section>

      {/* Page 73: Primary typeface (English) */}
      <section id="primary-english" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Primary typeface: English</h2>
            <p className="mt-4 text-aia-charcoal/80">
              AIA Everest is a bespoke font designed to embody our Purpose and personality. It is bold, welcoming, positive and confident. It helps set us apart from our competitors in a crowded marketplace. It is a very important part of our brand expression along with our logo, colours and the Moving Mountains.
            </p>
            <p className="mt-4 text-aia-charcoal/80">
              Design tip: OTF and web fonts are provided and available from our assets links page.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full border border-aia-red px-4 py-2 text-xs uppercase tracking-wide text-aia-red hover:bg-aia-red hover:text-white transition-colors"
              >
                Download AIA Everest (OTF)
              </button>
              <button
                type="button"
                className="rounded-full border border-aia-red px-4 py-2 text-xs uppercase tracking-wide text-aia-red hover:bg-aia-red hover:text-white transition-colors"
              >
                Download Web Font Kit
              </button>
            </div>
            <p className="mt-4 text-aia-charcoal/80">
              Please ensure you have received a signed font release from your creative partners before sharing our font.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-aia-charcoal/70">
              {[
                'AIA Everest Regular',
                'AIA Everest Regular Italic',
                'AIA Everest Medium',
                'AIA Everest Medium Italic',
                'AIA Everest Bold',
                'AIA Everest Condensed',
                'AIA Everest Extra Bold',
                'AIA Everest Condensed Medium',
              ].map((item) => (
                <div key={item} className="rounded-lg border border-gray-100 p-4">
                  <p className="font-semibold text-aia-charcoal">{item}</p>
                  <p className="mt-2 text-xs">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="text-xs">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="text-xs">1234567890?&$@&lt;&gt;’;:.</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Page 74: System typeface (English) */}
      <section id="system-english" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">System typeface: English</h2>
            <p className="mt-4 text-aia-charcoal/80">
              Our system typeface is Arial. The typeface works as an alternative font in certain applications when Everest is not available, including on our Microsoft platform. Arial should only be used when it is not possible to use AIA Everest.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-aia-charcoal/70">
              {[
                'Arial Regular',
                'Arial Regular Italic',
                'Arial Bold',
                'Arial Bold Italic',
              ].map((item) => (
                <div key={item} className="rounded-lg border border-gray-100 p-4">
                  <p className="font-semibold text-aia-charcoal">{item}</p>
                  <p className="mt-2 text-xs">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="text-xs">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="text-xs">1234567890?&$@&lt;&gt;’;:.</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Page 75: Primary typeface (Chinese) */}
      <section id="primary-chinese" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Primary typeface: Chinese</h2>
            <p className="mt-4 text-aia-charcoal/80">
              The recommended AIA corporate Chinese typeface is the Monotype Hei font family. For bilingual communication materials, the following Chinese and English font matches are recommended for their similarity in stroke weight.
            </p>
            <ol className="mt-4 list-decimal list-inside text-aia-charcoal/80">
              <li>MHeiHK-Medium / MHeiPRC-Medium with AIA Everest Regular.</li>
              <li>MHeiHK-Bold / MHeiPRC-Bold with AIA Everest Medium.</li>
              <li>MHeiHK-Xbold / MHeiPRC-Xbold with AIA Everest Bold.</li>
            </ol>
            <p className="mt-4 text-aia-charcoal/80">
              Please check with your creative partners whether they have a commercial licence for your chosen typeface.
            </p>
        </div>
      </section>

      {/* Page 76: Typography hierarchy */}
      <section id="hierarchy" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Typography hierarchy</h2>
            <p className="mt-4 text-aia-charcoal/80">
              Creating a clearly defined hierarchy of content is important when communicating with our customers. Typography and headlines support the decision-making process and fit neatly with the role of AIA as a mentor.
            </p>
            <p className="mt-4 text-aia-charcoal/80">
              Headlines and headings, size, style and colour all play a vital role in visually guiding people through our print and online communications. In particular, setting the headline and most important content in AIA Red makes them instantly stand out to the user.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="rounded-lg border border-gray-100 p-6">
                <h3 className="text-aia-red font-bold uppercase">Headline</h3>
                <p className="mt-4 text-aia-charcoal/70">Sub-heading is 1/3 the point size of the headline.</p>
                <p className="mt-2 text-aia-charcoal/70">Body copy is set at 1/2 the point size of the sub-heading, with a minimum point size of 10pt in print and 15pt in digital.</p>
              </div>
              <div className="rounded-lg border border-gray-100 p-6">
                <h3 className="text-aia-red font-bold uppercase">Colour use</h3>
                <p className="mt-4 text-aia-charcoal/70">AIA Red for headlines</p>
                <p className="mt-2 text-aia-charcoal/70">AIA Charcoal for sub-headings</p>
                <p className="mt-2 text-aia-charcoal/70">Body copy set in AIA Red or AIA Charcoal</p>
                <p className="mt-2 text-aia-charcoal/70">White headlines on AIA Red</p>
              </div>
            </div>
        </div>
      </section>

      {/* Page 77: Typography in use (digital) */}
      <section id="digital-typography" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
            <h2 className="text-aia-red font-bold uppercase">Typography in use: digital</h2>
            <p className="mt-4 text-aia-charcoal/80">
              We use AIA Everest and Open Sans typefaces on our digital platforms.
            </p>
            <p className="mt-4 text-aia-charcoal/80">
              Please use different font weights to add texture and vary the look and legibility of your communications. Noto Sans is the recommended digital font for localisation in languages other than English.
            </p>
            <p className="mt-4 text-aia-charcoal/80">
              For more detailed guidance on our AIA Digital Design System, please contact: designsystem@aia.com
            </p>
        </div>
      </section>
    </main>
  );
};

export default Typography;
