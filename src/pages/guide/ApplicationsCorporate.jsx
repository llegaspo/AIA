import React from 'react';

const SignatureCard = ({ label }) => (
  <div className="text-center">
    <p className="text-[10px] text-aia-red font-semibold">{label}</p>
    <div className="mt-3 rounded-xl border border-gray-200 bg-white p-3 text-[10px] text-aia-charcoal/70">
      <div className="flex items-center justify-center gap-2">
        <img src="/assets/logo_lockup_transparent.png" alt="AIA" className="h-6 logo-clean" />
        <span>First Last Name</span>
      </div>
      <p className="mt-1">Job Title · Department</p>
      <p>AIA Group</p>
      <p className="mt-2">T: +00 0000 0000</p>
      <p>E: email@aia.com</p>
    </div>
  </div>
);

const ApplicationsCorporate = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="px-12 md:px-20 py-12">
        <h1 className="text-aia-red font-bold uppercase text-3xl">Corporate daily operation items</h1>
        <div className="mt-10 grid grid-cols-1 xl:grid-cols-[1.1fr_1fr] gap-12">
          <div>
            <p className="text-sm text-aia-charcoal/60">Corporate stationery</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-200 bg-white p-4 h-56">
                <div className="h-3 w-20 bg-aia-red/70 rounded" />
                <div className="mt-6 space-y-2">
                  <div className="h-2 w-32 bg-aia-charcoal/10 rounded" />
                  <div className="h-2 w-40 bg-aia-charcoal/10 rounded" />
                  <div className="h-2 w-36 bg-aia-charcoal/10 rounded" />
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 h-56">
                <div className="h-3 w-20 bg-aia-red/70 rounded" />
                <div className="mt-6 space-y-2">
                  <div className="h-2 w-28 bg-aia-charcoal/10 rounded" />
                  <div className="h-2 w-36 bg-aia-charcoal/10 rounded" />
                  <div className="h-2 w-32 bg-aia-charcoal/10 rounded" />
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 h-40 col-span-2">
                <div className="h-3 w-20 bg-aia-red/70 rounded" />
                <div className="mt-6 h-2 w-48 bg-aia-charcoal/10 rounded" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-aia-charcoal/60 text-center">Email signature</p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <SignatureCard label="Standard corporate email signature" />
              <SignatureCard label="With social media icons" />
              <SignatureCard label="With qualifications" />
              <SignatureCard label="With AIA Vitality status" />
            </div>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-aia-grey/40 p-4 text-xs text-aia-charcoal/70">
              <p>If you want to add supporting logos, qualifications, social links or endorsements to your email signature, you may do so beneath the line.</p>
              <p className="mt-2">Under no circumstances may the HLBL Logo Lockup be removed or replaced.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplicationsCorporate;
