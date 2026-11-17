export default function ControlPanel() {
  const buttons = [
    "Start",
    "Pause",
    "Reset Robot",
    "Clear Grid",
    "Set Obstacles",
  ]

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-lg p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
        Controls
      </h2>
      <div className="flex flex-col gap-2">
        {buttons.map((label) => (
          <button
            key={label}
            type="button"
            disabled
            className="w-full px-4 py-2 rounded bg-slate-800 text-slate-300 font-medium text-sm opacity-50 cursor-not-allowed border border-slate-700"
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}
