import React from 'react';

const Merchandise = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-12 md:px-20 py-12">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Merchandise</h1>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <div>
            <p className="text-sm text-aia-charcoal/60 text-center mb-3">Tablet covers / phone cover</p>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <img src="/assets/merch_app.png" alt="Merchandise items" className="w-full" />
            </div>
            <p className="mt-8 text-sm text-aia-charcoal/60 text-center mb-3">Branded pen</p>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <img src="/assets/assets/asset_8.png" alt="Branded pen" className="w-full" />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-aia-charcoal/60 text-center mb-3">Branded socks</p>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <img src="/assets/assets/asset_9.png" alt="Branded socks" className="w-full" />
              </div>
            </div>
            <div>
              <p className="text-sm text-aia-charcoal/60 text-center mb-3">Tote bag</p>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <img src="/assets/assets/asset_10.png" alt="Tote bag" className="w-full" />
              </div>
            </div>
            <div>
              <p className="text-sm text-aia-charcoal/60 text-center mb-3">Keyring</p>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <img src="/assets/assets/asset_2.png" alt="Keyring" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Merchandise;
