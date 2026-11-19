export default function ControlPanel({ onClearGrid }) {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-lg p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
        Controls
      </h2>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          disabled
          className="w-full px-4 py-2 rounded bg-slate-800 text-slate-300 font-medium text-sm opacity-50 cursor-not-allowed border border-slate-700"
        >
          Start
        </button>

        <button
          type="button"
          disabled
          className="w-full px-4 py-2 rounded bg-slate-800 text-slate-300 font-medium text-sm opacity-50 cursor-not-allowed border border-slate-700"
        >
          Pause
        </button>

        <button
          type="button"
          disabled
          className="w-full px-4 py-2 rounded bg-slate-800 text-slate-300 font-medium text-sm opacity-50 cursor-not-allowed border border-slate-700"
        >
          Reset Robot
        </button>

        <button
          type="button"
          onClick={onClearGrid}
          className="w-full px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-200 font-medium text-sm transition-colors border border-slate-700"
        >
          Clear Grid
        </button>

        <button
          type="button"
          className="w-full px-4 py-2 rounded bg-indigo-600/30 text-indigo-300 font-medium text-sm border border-indigo-500/50"
        >
          Set Obstacles (Active)
        </button>
      </div>
    </section>
  )
}
