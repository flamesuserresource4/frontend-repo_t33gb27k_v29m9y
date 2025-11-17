import { ShieldCheck, Headset, PhoneCall } from "lucide-react";

export default function FinalCTAScreen() {
  return (
    <div id="screen-final-cta" className="mx-auto w-[390px] md:w-[420px] rounded-[28px] bg-gradient-to-b from-white to-amber-50 shadow-xl ring-1 ring-black/5 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 text-amber-800 text-xs">
          <ShieldCheck className="h-4 w-4" /> 100% free, unbiased counseling
        </div>
        <h3 className="mt-2 text-xl font-semibold text-amber-950">Need Help Choosing the Right School?</h3>
        <p className="mt-1 text-sm text-amber-900/80">Speak with a dedicated education advisor who understands your child's needs and goals.</p>

        <button className="mt-4 w-full rounded-xl bg-amber-700 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-700/20 active:scale-[0.98] flex items-center justify-center gap-2">
          <PhoneCall className="h-4 w-4" /> Request Callback
        </button>

        <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-amber-900/80">
          <div className="rounded-lg bg-white/70 px-2 py-1 ring-1 ring-amber-200">Verified partners</div>
          <div className="rounded-lg bg-white/70 px-2 py-1 ring-1 ring-amber-200">Secure data</div>
          <div className="rounded-lg bg-white/70 px-2 py-1 ring-1 ring-amber-200">No spam</div>
        </div>
      </div>
    </div>
  );
}
