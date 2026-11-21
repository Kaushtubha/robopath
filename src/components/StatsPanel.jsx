export default function StatsPanel({
  obstacleCount = 0,
  pathLength = 0,
  stepsVisited = 0,
  algorithmName = 'A* Search',
  status = 'idle',
}) {
  const getStatusText = () => {
    switch (status) {
      case 'searching':
        return 'Searching grid...'
      case 'tracing':
        return 'Tracing shortest path...'
      case 'found':
        return 'Target reached!'
      case 'no-path':
        return 'No route to goal'
      case 'idle':
      default:
        return 'Ready to navigate'
    }
  }

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-lg p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
        Statistics
      </h2>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm py-1 border-b border-slate-800/60">
          <span className="text-slate-400">Algorithm</span>
          <span className="font-medium text-slate-200">{algorithmName}</span>
        </div>
        <div className="flex justify-between items-center text-sm py-1 border-b border-slate-800/60">
          <span className="text-slate-400">Path Length</span>
          <span className="font-mono text-emerald-400 font-semibold">
            {pathLength > 0 ? `${pathLength} units` : '—'}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm py-1 border-b border-slate-800/60">
          <span className="text-slate-400">Explored Nodes</span>
          <span className="font-mono text-indigo-300 font-semibold">
            {stepsVisited > 0 ? stepsVisited : '—'}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm py-1 border-b border-slate-800/60">
          <span className="text-slate-400">Obstacles</span>
          <span className="font-mono text-slate-200">{obstacleCount}</span>
        </div>
        <div className="flex justify-between items-center text-sm py-1">
          <span className="text-slate-400">Status</span>
          <span className="text-slate-200 font-medium">{getStatusText()}</span>
        </div>
      </div>
    </section>
  )
}
