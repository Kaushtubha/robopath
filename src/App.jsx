import { useState } from 'react'

// Component imports
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import StatsPanel from './components/StatsPanel'
import GridBoard from './components/GridBoard'
import Footer from './components/Footer'

// Utility imports
import {
  createGrid,
  toggleObstacle,
  clearObstacles,
  countObstacles,
  DEFAULT_GRID_SIZE,
  DEFAULT_START_POS,
  DEFAULT_GOAL_POS,
} from './utils/gridHelpers'
import { generateRandomObstacles, generateRecursiveDivisionMaze } from './utils/mazeGenerators'
import { useSimulator } from './hooks/useSimulator'

export default function App() {
  const [grid, setGrid] = useState(() => createGrid(DEFAULT_GRID_SIZE, DEFAULT_GRID_SIZE))
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('astar')

  const {
    status,
    visitedCells,
    pathCells,
    robotPos,
    speed,
    setSpeed,
    runSimulation,
    resetSimulation,
  } = useSimulator()

  const isRunning = status === 'searching' || status === 'tracing'

  const handleCellMouseDown = (row, col) => {
    if (isRunning) return
    setIsMouseDown(true)
    setGrid((prevGrid) => toggleObstacle(prevGrid, row, col))
  }

  const handleCellMouseEnter = (row, col) => {
    if (!isMouseDown || isRunning) return
    setGrid((prevGrid) => toggleObstacle(prevGrid, row, col))
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleClearGrid = () => {
    if (isRunning) return
    resetSimulation(DEFAULT_START_POS)
    setGrid((prevGrid) => clearObstacles(prevGrid))
  }

  const handleGenerateMaze = () => {
    if (isRunning) return
    resetSimulation(DEFAULT_START_POS)
    setGrid((prevGrid) => generateRecursiveDivisionMaze(prevGrid))
  }

  const handleGenerateRandom = () => {
    if (isRunning) return
    resetSimulation(DEFAULT_START_POS)
    setGrid((prevGrid) => generateRandomObstacles(prevGrid, 0.28))
  }

  const handleStart = () => {
    if (isRunning) return
    runSimulation(selectedAlgorithm, grid, DEFAULT_START_POS, DEFAULT_GOAL_POS)
  }

  const handleReset = () => {
    resetSimulation(DEFAULT_START_POS)
  }

  const obstacleCount = countObstacles(grid)
  const algorithmNames = {
    astar: 'A* Search',
    bfs: 'Breadth-First Search',
    dijkstra: "Dijkstra's",
  }

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col"
      onMouseUp={handleMouseUp}
    >
      {/* Header section */}
      <Header status={status} />

      {/* Main workspace section */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Left column: Controls and Statistics */}
        <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-6 mt-6 lg:mt-0">
          <ControlPanel
            selectedAlgorithm={selectedAlgorithm}
            onSelectAlgorithm={setSelectedAlgorithm}
            speed={speed}
            onChangeSpeed={setSpeed}
            onStart={handleStart}
            onResetRobot={handleReset}
            onClearGrid={handleClearGrid}
            onGenerateMaze={handleGenerateMaze}
            onGenerateRandomObstacles={handleGenerateRandom}
            isRunning={isRunning}
          />
          <StatsPanel
            obstacleCount={obstacleCount}
            pathLength={pathCells.length}
            stepsVisited={visitedCells.length}
            algorithmName={algorithmNames[selectedAlgorithm]}
            status={status}
          />
        </div>

        {/* Right / Main column: Grid workspace */}
        <div className="order-1 lg:order-2 lg:col-span-8 flex items-center justify-center">
          <GridBoard
            grid={grid}
            size={DEFAULT_GRID_SIZE}
            visitedCells={visitedCells}
            pathCells={pathCells}
            robotPos={robotPos}
            onCellMouseDown={handleCellMouseDown}
            onCellMouseEnter={handleCellMouseEnter}
            onMouseUp={handleMouseUp}
          />
        </div>
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  )
}
