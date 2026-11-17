export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 px-4 py-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-100">RoboPath</h1>
          <p className="text-xs text-slate-400">2D Robot Navigation Simulator</p>
        </div>
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
            Idle
          </span>
        </div>
      </div>
    </header>
  )
}
