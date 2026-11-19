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
} from './utils/gridHelpers'

export default function App() {
  const [grid, setGrid] = useState(() => createGrid(DEFAULT_GRID_SIZE, DEFAULT_GRID_SIZE))
  const [isMouseDown, setIsMouseDown] = useState(false)

  const handleCellMouseDown = (row, col) => {
    setIsMouseDown(true)
    setGrid((prevGrid) => toggleObstacle(prevGrid, row, col))
  }

  const handleCellMouseEnter = (row, col) => {
    if (!isMouseDown) return
    setGrid((prevGrid) => toggleObstacle(prevGrid, row, col))
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleClearGrid = () => {
    setGrid((prevGrid) => clearObstacles(prevGrid))
  }

  const obstacleCount = countObstacles(grid)

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col"
      onMouseUp={handleMouseUp}
    >
      {/* Header section */}
      <Header />

      {/* Main workspace section */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Left column: Controls and Statistics */}
        <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-6 mt-6 lg:mt-0">
          <ControlPanel onClearGrid={handleClearGrid} />
          <StatsPanel obstacleCount={obstacleCount} />
        </div>

        {/* Right / Main column: Grid workspace */}
        <div className="order-1 lg:order-2 lg:col-span-8 flex items-center justify-center">
          <GridBoard
            grid={grid}
            size={DEFAULT_GRID_SIZE}
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
