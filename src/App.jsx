import AuditScreen from './components/AuditScreen'
import HeroRedesign from './components/HeroRedesign'
import Highlights from './components/Highlights'
import ListingScreen from './components/ListingScreen'
import FinalCTAScreen from './components/FinalCTAScreen'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100/60 via-white to-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-amber-950">Eduminatti — Mobile UI/UX Audit & Redesign</h1>
          <p className="mt-1 text-sm text-amber-900/70">Boarding Schools in Dehradun — audit summary and redesigned mobile screens</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <AuditScreen />
            <HeroRedesign />
          </div>
          <div className="space-y-6">
            <Highlights />
            <ListingScreen />
            <FinalCTAScreen />
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-slate-500">
          Tip: Use your browser's print to save these high-resolution mobile screens as a PDF.
        </div>
      </div>
    </div>
  )
}

export default App