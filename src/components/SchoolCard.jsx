import { MapPin, Star, IndianRupee, BookCopy, Heart, Scale, BadgeCheck } from "lucide-react";

export default function SchoolCard({
  name = "Pinewood Residential School",
  location = "Dehradun, Uttarakhand",
  board = "CBSE",
  fees = "₹2.5L - ₹4.0L/yr",
  rating = 4.6,
  highlights = ["Sports Excellence", "STEM Labs", "Pastoral Care"],
  image = "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="relative">
        <img src={image} alt={name} className="h-44 w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-4 py-2 text-white">
          <div className="flex items-center gap-1 text-xs">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-white/80">• {board}</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <BadgeCheck className="h-4 w-4 text-emerald-400" />
            <span>Verified</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div>
          <h4 className="text-base font-semibold text-slate-900">{name}</h4>
          <div className="mt-1 flex items-center gap-1 text-xs text-slate-600">
            <MapPin className="h-3.5 w-3.5" /> {location}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm font-medium text-slate-800">
            <IndianRupee className="h-4 w-4" /> {fees}
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg bg-amber-700 px-3 py-2 text-xs font-semibold text-white shadow-sm active:scale-[0.98]">
              View Details
            </button>
            <label className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
              <input type="checkbox" className="accent-amber-700" /> Compare
            </label>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span key={h} className="inline-flex items-center gap-1 rounded-lg bg-slate-50 px-2 py-1 text-[11px] text-slate-700 ring-1 ring-slate-200">
              <BookCopy className="h-3.5 w-3.5 text-amber-700" /> {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
