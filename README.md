# RoboPath

2D Robot Navigation and Pathfinding Simulator built with React, Vite, and Tailwind CSS.

## Features

- **Interactive Grid System**: Configurable NxN grid with dynamic node rendering.
- **Start & Goal Anchors**: Visual start (emerald) and target (rose) locations for path planning.
- **Dynamic Obstacle Drawing**: Click or drag across cells to place and toggle barriers in real-time.
- **Responsive Dashboard**: Two-column desktop layout that stacks cleanly on mobile screens.
- **Live Statistics**: Displays real-time obstacle count, steps, and system status.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v3 + PostCSS + Autoprefixer
- **State**: React hooks with immutable grid matrix transformations

## Development

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```
