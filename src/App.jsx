// Component imports
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import StatsPanel from './components/StatsPanel'
import GridBoard from './components/GridBoard'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header section */}
      <Header />

      {/* Main workspace section */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Left column: Controls and Statistics (stacked; on mobile renders after GridBoard) */}
        <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-6 mt-6 lg:mt-0">
          <ControlPanel />
          <StatsPanel />
        </div>

        {/* Right / Main column: Grid workspace (on mobile renders first before controls) */}
        <div className="order-1 lg:order-2 lg:col-span-8 flex items-center justify-center">
          <GridBoard />
        </div>
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  )
}
