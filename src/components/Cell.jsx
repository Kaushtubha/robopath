export default function Cell({ row, col, isObstacle, onClick }) {
  return (
    <button
      type="button"
      aria-label={`Cell ${row},${col}`}
      onClick={() => onClick(row, col)}
      className={`w-full aspect-square border border-slate-800 ${
        isObstacle ? 'bg-slate-600' : 'bg-slate-900'
      } hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:z-10`}
    />
  )
}
