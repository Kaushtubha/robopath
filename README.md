# RoboPath

2D Robot Navigation and Pathfinding Simulator built with React, Vite, Tailwind CSS, and C++ reference algorithms.

## Key Features

- **Interactive 2D Grid**: 15x15 responsive grid canvas with dynamic visual feedback.
- **Multiple Pathfinding Algorithms**:
  - **A* Search**: Fast heuristic-guided pathfinding using Manhattan distance.
  - **Breadth-First Search (BFS)**: Complete level-by-level shortest path explorer.
  - **Dijkstra's Algorithm**: Systematic shortest path graph search.
- **Animated Robot Traversal**: Step-by-step frontier exploration and animated robot movement along calculated path.
- **Terrain & Maze Generation**:
  - Recursive Division maze generator.
  - Randomized obstacle generator with configurable barrier density.
  - Interactive click-and-drag drawing to place custom obstacles.
- **Configurable Speed Controls**: Slow (60ms), Normal (30ms), and Fast (10ms) animation modes.
- **Live Diagnostics**: Real-time obstacle counters, step explorer counters, path length metrics, and navigation statuses.
- **C++ Reference Core**: High-performance A* search implementation located in `cpp/` directory.

## Project Structure

```text
robopath/
├── cpp/                     # C++ native pathfinding implementation
│   ├── astar.hpp
│   └── pathfinding.cpp
├── docs/                    # Architectural and algorithmic documentation
│   └── ALGORITHMS.md
├── src/
│   ├── components/          # React presentation & layout components
│   │   ├── Cell.jsx
│   │   ├── ControlPanel.jsx
│   │   ├── Footer.jsx
│   │   ├── GridBoard.jsx
│   │   ├── Header.jsx
│   │   └── StatsPanel.jsx
│   ├── hooks/               # Custom hooks for simulation lifecycle
│   │   └── useSimulator.js
│   ├── pathfinding/         # Pathfinding engine implementations
│   │   ├── astar.js
│   │   ├── bfs.js
│   │   ├── dijkstra.js
│   │   └── index.js
│   └── utils/               # Grid transformations and maze generators
│       ├── gridHelpers.js
│       └── mazeGenerators.js
```

## Quick Start

Install dependencies:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```
