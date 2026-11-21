export default function ControlPanel({
  selectedAlgorithm = 'astar',
  onSelectAlgorithm,
  speed = 30,
  onChangeSpeed,
  onStart,
  onResetRobot,
  onClearGrid,
  onGenerateMaze,
  onGenerateRandomObstacles,
  isRunning = false,
}) {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-lg p-4 shadow-sm flex flex-col gap-4">
      <h2 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
        Controls & Settings
      </h2>

      {/* Algorithm Selection */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="algorithm-select" className="text-xs font-medium text-slate-400">
          Pathfinding Algorithm
        </label>
        <select
          id="algorithm-select"
          disabled={isRunning}
          value={selectedAlgorithm}
          onChange={(e) => onSelectAlgorithm && onSelectAlgorithm(e.target.value)}
          className="bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          <option value="astar">A* Search (Heuristic)</option>
          <option value="bfs">Breadth-First Search (BFS)</option>
          <option value="dijkstra">Dijkstra's Algorithm</option>
        </select>
      </div>

      {/* Speed Controller */}
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center text-xs text-slate-400">
          <span>Animation Speed</span>
          <span className="font-mono text-slate-300">
            {speed <= 15 ? 'Fast' : speed <= 40 ? 'Normal' : 'Slow'}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <button
            type="button"
            disabled={isRunning}
            onClick={() => onChangeSpeed && onChangeSpeed(60)}
            className={`px-2 py-1 text-xs rounded border transition-colors ${
              speed > 40
                ? 'bg-indigo-600/40 text-indigo-200 border-indigo-500'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
            }`}
          >
            Slow
          </button>
          <button
            type="button"
            disabled={isRunning}
            onClick={() => onChangeSpeed && onChangeSpeed(30)}
            className={`px-2 py-1 text-xs rounded border transition-colors ${
              speed > 15 && speed <= 40
                ? 'bg-indigo-600/40 text-indigo-200 border-indigo-500'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
            }`}
          >
            Normal
          </button>
          <button
            type="button"
            disabled={isRunning}
            onClick={() => onChangeSpeed && onChangeSpeed(10)}
            className={`px-2 py-1 text-xs rounded border transition-colors ${
              speed <= 15
                ? 'bg-indigo-600/40 text-indigo-200 border-indigo-500'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'
            }`}
          >
            Fast
          </button>
        </div>
      </div>

      <div className="border-t border-slate-800/80 pt-3 flex flex-col gap-2">
        {/* Main Action Button */}
        <button
          type="button"
          disabled={isRunning}
          onClick={onStart}
          className="w-full py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <span>▶ Start Navigation</span>
        </button>

        <button
          type="button"
          disabled={isRunning}
          onClick={onResetRobot}
          className="w-full py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors border border-slate-700 disabled:opacity-50"
        >
          Reset Simulation
        </button>
      </div>

      {/* Grid Management & Mazes */}
      <div className="border-t border-slate-800/80 pt-3 flex flex-col gap-2">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
          Terrain Generation
        </span>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            disabled={isRunning}
            onClick={onGenerateMaze}
            className="py-1.5 px-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors disabled:opacity-50"
          >
            Recursive Maze
          </button>
          <button
            type="button"
            disabled={isRunning}
            onClick={onGenerateRandomObstacles}
            className="py-1.5 px-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors disabled:opacity-50"
          >
            Random Walls
          </button>
        </div>

        <button
          type="button"
          disabled={isRunning}
          onClick={onClearGrid}
          className="w-full mt-1 py-1.5 rounded bg-slate-800/60 hover:bg-slate-700/60 text-slate-400 hover:text-slate-200 text-xs font-medium border border-slate-700/60 transition-colors disabled:opacity-50"
        >
          Clear All Obstacles
        </button>
      </div>
    </section>
  )
}
