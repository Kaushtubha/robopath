export default function StatsPanel() {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-lg p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
        Statistics
      </h2>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm py-1 border-b border-slate-800/60">
          <span className="text-slate-400">Path Length</span>
          <span className="font-mono text-slate-200">—</span>
        </div>
        <div className="flex justify-between items-center text-sm py-1 border-b border-slate-800/60">
          <span className="text-slate-400">Steps</span>
          <span className="font-mono text-slate-200">—</span>
        </div>
        <div className="flex justify-between items-center text-sm py-1">
          <span className="text-slate-400">Status</span>
          <span className="text-slate-200">Waiting for grid</span>
        </div>
      </div>
    </section>
  )
}
