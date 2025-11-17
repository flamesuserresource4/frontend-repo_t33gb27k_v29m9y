import { CheckCircle2, AlertTriangle, Eye, MousePointerClick, ImageOff, Layers, Search, Filter, ShieldCheck, BadgeCheck, PhoneCall } from "lucide-react";

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
    <span className="text-sm text-slate-700">{children}</span>
  </li>
);

const Issue = ({ children }) => (
  <li className="flex items-start gap-3">
    <AlertTriangle className="mt-0.5 h-5 w-5 text-rose-600" />
    <span className="text-sm text-slate-700">{children}</span>
  </li>
);

export default function AuditScreen() {
  return (
    <div id="audit-screen" className="mx-auto w-[390px] md:w-[420px] rounded-[28px] bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
      <div className="bg-gradient-to-b from-orange-50 to-amber-50 p-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-amber-700" />
          <h2 className="text-lg font-semibold text-amber-900">UI/UX Audit — Boarding Schools in Dehradun</h2>
        </div>
        <p className="mt-2 text-sm text-amber-800/80">Mobile-first review covering what works and what needs improvement to drive parent trust and conversions.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6">
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-emerald-700" />
            <h3 className="text-base font-semibold text-emerald-900">What works well</h3>
          </div>
          <ul className="space-y-3">
            <Bullet>Clean overall structure and predictable scrolling flow</Bullet>
            <Bullet>Useful categorization by board, location, and school type</Bullet>
            <Bullet>Content density is scannable on mobile with short sections</Bullet>
            <Bullet>Basic details visible in listings: ratings, fees, location</Bullet>
          </ul>
        </section>

        <section className="rounded-2xl border border-rose-200 bg-rose-50 p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-rose-700" />
            <h3 className="text-base font-semibold text-rose-900">What needs improvement</h3>
          </div>
          <ul className="space-y-3">
            <Issue>Outdated hero section with weak visual hierarchy</Issue>
            <Issue>CTAs are unclear or hidden below the fold</Issue>
            <Issue>Missing essential filters for fast narrowing</Issue>
            <Issue>No trust elements (badges, counselors, safety, partners)</Issue>
            <Issue>Inconsistent imagery and low-quality thumbnails</Issue>
            <Issue>Weak emotional appeal for parents choosing for their child</Issue>
          </ul>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <Eye className="h-5 w-5 text-amber-700" />
            <h3 className="text-base font-semibold text-amber-900">Highlighted issues</h3>
          </div>
          <ul className="space-y-3">
            <Issue>Information overload in above-the-fold area</Issue>
            <Issue>Hidden or secondary CTAs; no sticky action</Issue>
            <Issue>Low-quality visuals reduce premium perception</Issue>
            <Issue>No clear comparison flow for shortlisting schools</Issue>
            <Issue>Messaging not tailored to parent concerns and outcomes</Issue>
          </ul>
          <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-amber-900/80">
            <div className="flex items-center gap-1 bg-white/60 rounded-lg px-2 py-1"><Search className="h-3.5 w-3.5"/> Search</div>
            <div className="flex items-center gap-1 bg-white/60 rounded-lg px-2 py-1"><Filter className="h-3.5 w-3.5"/> Filters</div>
            <div className="flex items-center gap-1 bg-white/60 rounded-lg px-2 py-1"><MousePointerClick className="h-3.5 w-3.5"/> CTAs</div>
            <div className="flex items-center gap-1 bg-white/60 rounded-lg px-2 py-1"><ImageOff className="h-3.5 w-3.5"/> Visuals</div>
            <div className="flex items-center gap-1 bg-white/60 rounded-lg px-2 py-1"><Layers className="h-3.5 w-3.5"/> Hierarchy</div>
            <div className="flex items-center gap-1 bg-white/60 rounded-lg px-2 py-1"><PhoneCall className="h-3.5 w-3.5"/> Support</div>
          </div>
        </section>
      </div>
    </div>
  );
}
