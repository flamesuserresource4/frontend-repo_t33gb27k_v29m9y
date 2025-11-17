import { BadgeCheck, IndianRupee, Users, Scale, CheckCircle2 } from "lucide-react";

const HighlightCard = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 ring-1 ring-amber-200">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <p className="text-xs text-slate-600">{subtitle}</p>
    </div>
  </div>
);

export default function Highlights() {
  return (
    <div id="screen-highlights" className="mx-auto w-[390px] md:w-[420px] rounded-[28px] bg-slate-50 p-6 shadow-xl ring-1 ring-black/5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Why parents choose Eduminatti</h3>
        <p className="text-sm text-slate-600">Key benefits designed for a confident decision</p>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <HighlightCard icon={BadgeCheck} title="Verified information" subtitle="Up-to-date school data reviewed by our team" />
        <HighlightCard icon={IndianRupee} title="Fee transparency" subtitle="Clear ranges and breakdowns—no surprises" />
        <HighlightCard icon={Users} title="Parent reviews" subtitle="Real experiences from families like yours" />
        <HighlightCard icon={CheckCircle2} title="Counseling support" subtitle="Talk to an expert for unbiased guidance" />
        <HighlightCard icon={Scale} title="Easy comparison" subtitle="Compare fees, facilities, and ratings side by side" />
      </div>
    </div>
  );
}
