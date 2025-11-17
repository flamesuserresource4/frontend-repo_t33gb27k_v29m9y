import { ShieldCheck, Search, PhoneCall, Stars, Award } from "lucide-react";

export default function HeroRedesign() {
  return (
    <div id="screen-hero" className="mx-auto w-[390px] md:w-[420px] rounded-[28px] overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50 to-white shadow-xl ring-1 ring-black/5">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,190,120,0.35),transparent_55%)]" />
        <div className="relative p-6">
          <div className="flex items-center gap-2 text-amber-800 text-xs">
            <ShieldCheck className="h-4 w-4" />
            Trusted by 50,000+ parents this year
          </div>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-amber-950">
            Find the Best Boarding Schools in Dehradun
          </h1>
          <p className="mt-2 text-sm text-amber-900/80">
            Compare fees, facilities, and reviews to make the right decision for your child.
          </p>

          <div className="mt-4 flex items-center gap-2 rounded-xl bg-white p-2 shadow-sm ring-1 ring-amber-200">
            <Search className="h-5 w-5 text-amber-700" />
            <input
              placeholder="Search school name or area"
              className="w-full bg-transparent text-sm outline-none placeholder:text-amber-900/50"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="rounded-xl bg-amber-700 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-700/20 active:scale-[0.98]">
              Explore Schools
            </button>
            <button className="rounded-xl bg-white py-3 text-sm font-semibold text-amber-800 ring-1 ring-amber-200 shadow-sm active:scale-[0.98] flex items-center justify-center gap-2">
              <PhoneCall className="h-4 w-4" />
              Talk to an Advisor
            </button>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 text-[11px] text-amber-900/80">
            <div className="flex items-center gap-1 rounded-lg bg-white/70 px-2 py-1 ring-1 ring-amber-200"><Stars className="h-3.5 w-3.5"/> Top-rated guidance</div>
            <div className="flex items-center gap-1 rounded-lg bg-white/70 px-2 py-1 ring-1 ring-amber-200"><Award className="h-3.5 w-3.5"/> Verified data</div>
            <div className="flex items-center gap-1 rounded-lg bg-white/70 px-2 py-1 ring-1 ring-amber-200"><ShieldCheck className="h-3.5 w-3.5"/> Safe & secure</div>
          </div>
        </div>
      </div>
    </div>
  );
}
