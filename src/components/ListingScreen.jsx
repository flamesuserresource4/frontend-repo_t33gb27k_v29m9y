import SchoolCard from "./SchoolCard";
import { Filter, SortAsc, Search } from "lucide-react";

export default function ListingScreen() {
  const schools = [
    { name: "Pinewood Residential School", rating: 4.6, board: "CBSE", fees: "₹2.5L - ₹4.0L/yr", location: "Mussoorie Rd, Dehradun", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" },
    { name: "Dehradun Valley International", rating: 4.4, board: "ICSE", fees: "₹3.0L - ₹4.8L/yr", location: "Rajpur Rd, Dehradun", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop" },
    { name: "Himalayan Scholars Academy", rating: 4.7, board: "CBSE", fees: "₹2.8L - ₹4.2L/yr", location: "Clement Town, Dehradun", image: "https://images.unsplash.com/photo-1641987664442-b45e028f5cea?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQaW5ld29vZCUyMFJlc2lkZW50aWFsJTIwU2Nob29sfGVufDB8MHx8fDE3NjMzNTY2NDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  ];

  return (
    <div id="screen-listing" className="mx-auto w-[390px] md:w-[420px] rounded-[28px] bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="flex items-center gap-2 p-4">
          <div className="flex items-center gap-2 flex-1 rounded-xl bg-slate-50 p-2 ring-1 ring-slate-200">
            <Search className="h-5 w-5 text-slate-600" />
            <input placeholder="Search schools" className="w-full bg-transparent text-sm outline-none" />
          </div>
          <button className="rounded-xl bg-white px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200 flex items-center gap-1">
            <Filter className="h-4 w-4" /> Filters
          </button>
          <button className="rounded-xl bg-white px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200 flex items-center gap-1">
            <SortAsc className="h-4 w-4" /> Sort
          </button>
        </div>
      </div>

      <div className="space-y-4 p-4">
        {schools.map((s) => (
          <SchoolCard key={s.name} {...s} highlights={["STEM Labs", "Sports", "Hostel"]} />
        ))}
      </div>
    </div>
  );
}
