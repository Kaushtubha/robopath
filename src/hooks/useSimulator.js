import { useState, useRef, useEffect, useCallback } from 'react'
import { astar, bfs, dijkstra } from '../pathfinding'

export function useSimulator() {
  const [status, setStatus] = useState('idle') // 'idle' | 'searching' | 'tracing' | 'moving' | 'found' | 'no-path'
  const [visitedCells, setVisitedCells] = useState([])
  const [pathCells, setPathCells] = useState([])
  const [robotPos, setRobotPos] = useState(null)
  const [speed, setSpeed] = useState(30) // ms per tick

  const timersRef = useRef([])

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  useEffect(() => {
    return () => clearAllTimers()
  }, [clearAllTimers])

  const resetSimulation = useCallback((startPos) => {
    clearAllTimers()
    setStatus('idle')
    setVisitedCells([])
    setPathCells([])
    setRobotPos(startPos || null)
  }, [clearAllTimers])

  const runSimulation = useCallback(
    (algorithmName, grid, startPos, goalPos) => {
      clearAllTimers()
      setStatus('searching')
      setVisitedCells([])
      setPathCells([])
      setRobotPos(startPos)

      let result
      switch (algorithmName) {
        case 'bfs':
          result = bfs(grid, startPos, goalPos)
          break
        case 'dijkstra':
          result = dijkstra(grid, startPos, goalPos)
          break
        case 'astar':
        default:
          result = astar(grid, startPos, goalPos)
          break
      }

      const { visitedNodesInOrder, shortestPath, found } = result

      // Animate visited nodes
      visitedNodesInOrder.forEach((node, index) => {
        const timer = setTimeout(() => {
          setVisitedCells((prev) => [...prev, `${node.row}-${node.col}`])

          // If last visited node reached
          if (index === visitedNodesInOrder.length - 1) {
            if (!found || shortestPath.length === 0) {
              setStatus('no-path')
            } else {
              setStatus('tracing')
              animatePath(shortestPath)
            }
          }
        }, index * speed)

        timersRef.current.push(timer)
      })

      function animatePath(path) {
        path.forEach((node, pIdx) => {
          const pathTimer = setTimeout(() => {
            setPathCells((prev) => [...prev, `${node.row}-${node.col}`])
            setRobotPos(node)

            if (pIdx === path.length - 1) {
              setStatus('found')
            }
          }, pIdx * (speed * 1.5))

          timersRef.current.push(pathTimer)
        })
      }
    },
    [clearAllTimers, speed]
  )

  return {
    status,
    visitedCells,
    pathCells,
    robotPos,
    speed,
    setSpeed,
    runSimulation,
    resetSimulation,
  }
}
