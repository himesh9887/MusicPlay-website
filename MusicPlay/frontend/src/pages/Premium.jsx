import React from 'react';
import { premiumPerks, premiumPlans } from '../data/musicData';

const Premium = () => {
  return (
    <div className="min-h-screen px-4 pb-44 pt-6 md:px-6 md:pb-32 lg:px-8">
      <div className="w-full">
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#f2c078_0%,_#cd7a32_46%,_#3b1d14_100%)] p-6 text-[#23130c] md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em]">Premium</p>
          <h1 className="mt-3 text-[2rem] font-semibold leading-none tracking-[-0.06em] md:text-[3rem]">
            Ad-free retro sessions, offline too.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#351d11]/80 md:text-base">
            Match the same warm mobile look, but with fewer interruptions and better control.
          </p>
        </div>

        <section className="rounded-[1.8rem] border border-white/8 bg-[#181818] p-5">
          <h2 className="text-[1.45rem] font-semibold tracking-[-0.05em] text-white">Why it feels better</h2>
          <div className="mt-4 space-y-3">
            {premiumPerks.map((perk) => (
              <div key={perk} className="rounded-[1.2rem] bg-black/22 px-4 py-3 text-sm leading-6 text-white/72">
                {perk}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8">
        <h2 className="mb-4 text-[1.45rem] font-semibold tracking-[-0.05em] text-white">Plans</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {premiumPlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-[1.5rem] border border-white/8 bg-[#181818] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[1.1rem] font-semibold text-white">{plan.name}</p>
                  <p className="mt-1 text-sm leading-6 text-white/58">{plan.detail}</p>
                </div>
                <p className="text-[1.25rem] font-semibold text-white">{plan.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Premium;
