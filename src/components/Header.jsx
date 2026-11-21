export default function Header({ status = 'idle' }) {
  const getBadgeConfig = () => {
    switch (status) {
      case 'searching':
        return { text: 'Searching...', style: 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse' }
      case 'tracing':
        return { text: 'Tracing Path', style: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 animate-pulse' }
      case 'found':
        return { text: 'Path Found', style: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' }
      case 'no-path':
        return { text: 'No Path Found', style: 'bg-rose-500/20 text-rose-300 border-rose-500/40' }
      case 'idle':
      default:
        return { text: 'Idle', style: 'bg-slate-800 text-slate-300 border-slate-700' }
    }
  }

  const badge = getBadgeConfig()

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 px-4 py-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <h1 className="text-xl font-bold tracking-tight text-slate-100">RoboPath</h1>
          <p className="text-xs text-slate-400 hidden sm:inline">2D Robot Navigation Simulator</p>
        </div>
        <div>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors ${badge.style}`}
          >
            {badge.text}
          </span>
        </div>
      </div>
    </header>
  )
}
