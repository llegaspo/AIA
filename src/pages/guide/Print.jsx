import React from 'react';

const Print = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-12 md:px-20 py-12">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Print</h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <div>
            <p className="text-sm text-aia-charcoal/60 text-center mb-3">Outdoor advertising</p>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <img src="/assets/print_app.png" alt="Outdoor advertising" className="w-full" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-aia-charcoal/60 text-center mb-3">Annual report cover</p>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <img src="/assets/assets/asset_5.png" alt="Annual report cover" className="w-full" />
              </div>
            </div>
            <div>
              <p className="text-sm text-aia-charcoal/60 text-center mb-3">Brochure spread</p>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <img src="/assets/assets/asset_6.png" alt="Brochure spread" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm text-aia-charcoal/60 text-center mb-3">Notebooks</p>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <img src="/assets/assets/asset_7.png" alt="Notebooks" className="w-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Print;
