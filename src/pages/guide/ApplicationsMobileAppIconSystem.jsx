import React from 'react';

const IconCard = ({ label, sublabel, variant = 'red' }) => {
  const baseClass = variant === 'white'
    ? 'bg-white border border-gray-200 text-aia-red'
    : 'bg-aia-red text-white';
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`h-20 w-20 rounded-2xl shadow-sm flex items-center justify-center ${baseClass}`}>
        <img src="/assets/logo_std_transparent.png" alt="AIA" className="h-10 w-10 logo-clean" />
      </div>
      <p className="text-[11px] text-aia-charcoal/70 text-center">{label}</p>
      {sublabel && <p className="text-[10px] text-aia-charcoal/50 -mt-1">{sublabel}</p>}
    </div>
  );
};

const ApplicationsMobileAppIconSystem = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-12 md:px-20 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <h1 className="text-aia-red font-bold uppercase text-3xl">Mobile app icon system</h1>
            <p className="mt-4 text-aia-charcoal/80">
              We have two sets of app icon design. One for customer and the other for agency.
            </p>

            <h2 className="mt-8 text-aia-red font-semibold">App icon for customers</h2>
            <p className="mt-2 text-aia-charcoal/70 text-sm">
              Our AIA white Corporate Logo on AIA Red background design is used as the main customer app icon.
              For other AIA customer apps, use a symbol or AIA Wordmark and app name on a four Moving Mountains background.
            </p>

            <h2 className="mt-6 text-aia-red font-semibold">App icon for Agency</h2>
            <p className="mt-2 text-aia-charcoal/70 text-sm">
              Our AIA Red Corporate Logo on a white background design is used as the main Agency app icon.
              For alternative AIA Agency apps, use our AIA Wordmark and app name on a white background.
            </p>

            <h2 className="mt-6 text-aia-red font-semibold">Region tag</h2>
            <p className="mt-2 text-aia-charcoal/70 text-sm">
              Add a region tag to indicate markets if needed.
            </p>

            <div className="mt-6 text-xs text-aia-charcoal/70">
              <p>For further guidance on our AIA Digital Design System, please contact:</p>
              <p className="mt-2">UX design lead – tony-kw.cheung@aia.com</p>
              <p>DDS design lead – designsystem@aia.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10">
            <div className="space-y-10">
              <div>
                <p className="text-sm text-aia-charcoal/60 mb-4">Customer app icons</p>
                <div className="grid grid-cols-3 gap-6">
                  <IconCard label="AIA One" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-20 rounded-2xl shadow-sm bg-aia-red/90 text-white flex items-center justify-center text-xl font-bold">V</div>
                    <p className="text-[11px] text-aia-charcoal/70 text-center">AIA Vitality</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-20 rounded-2xl shadow-sm bg-aia-red text-white flex items-center justify-center text-[11px] font-semibold text-center leading-tight">
                      AIA<br />Employee<br />Care
                    </div>
                    <p className="text-[11px] text-aia-charcoal/70 text-center">Employee Care</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-aia-charcoal/60 mb-4">Agency app icon</p>
                <div className="grid grid-cols-3 gap-6">
                  <IconCard label="Agency icon" variant="white" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-20 rounded-2xl shadow-sm bg-white border border-gray-200 text-aia-red flex items-center justify-center text-[12px] font-bold">
                      AIA<br />iRecruit
                    </div>
                    <p className="text-[11px] text-aia-charcoal/70 text-center">iRecruit</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-20 rounded-2xl shadow-sm bg-white border border-gray-200 text-aia-red flex items-center justify-center text-[12px] font-bold">
                      AIA<br />iPOS
                    </div>
                    <p className="text-[11px] text-aia-charcoal/70 text-center">iPOS</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-aia-charcoal/60 mb-4">Region tag</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-20 rounded-2xl shadow-sm bg-aia-red text-white flex flex-col items-center justify-center text-[10px] font-semibold">
                      <img src="/assets/logo_std_transparent.png" alt="AIA" className="h-8 w-8 logo-clean mb-1" />
                      Hong Kong
                    </div>
                    <p className="text-[11px] text-aia-charcoal/70 text-center">Hong Kong</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-20 rounded-2xl shadow-sm bg-white border border-gray-200 text-aia-red flex flex-col items-center justify-center text-[10px] font-semibold">
                      AIA<br />iPOS
                      <span className="text-[9px] text-aia-charcoal/60">Thailand</span>
                    </div>
                    <p className="text-[11px] text-aia-charcoal/70 text-center">Thailand</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto h-[420px] w-[220px] rounded-[36px] border border-gray-200 shadow-2xl bg-gradient-to-b from-aia-grey to-white p-3">
                <div className="h-full w-full rounded-[28px] bg-white border border-gray-100 p-4 grid grid-cols-3 gap-3">
                  {[...Array(12)].map((_, idx) => (
                    <div key={idx} className="h-10 w-10 rounded-xl bg-aia-red/90 flex items-center justify-center text-white text-[10px] font-semibold">
                      AIA
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-[11px] text-center text-aia-charcoal/60">Mobile app example</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsMobileAppIconSystem;
