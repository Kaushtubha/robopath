# RoboPath Algorithms Guide

RoboPath incorporates three foundational graph traversal and pathfinding algorithms designed for 2D robotic grid navigation:

## 1. A* (A-Star) Search
- **Heuristic**: Manhattan Distance ($|x_1 - x_2| + |y_1 - y_2|$)
- **Completeness**: Guaranteed optimal path
- **Characteristics**: Focuses exploration toward the goal, minimizing unnecessary node evaluations.

## 2. Breadth-First Search (BFS)
- **Strategy**: Unweighted level-order traversal using FIFO queue
- **Completeness**: Guaranteed shortest path on unweighted grid
- **Characteristics**: Explores evenly in concentric rings from start node.

## 3. Dijkstra's Algorithm
- **Strategy**: Greedy priority queue by shortest distance from root
- **Completeness**: Guaranteed shortest path
- **Characteristics**: Baseline uniform-cost search without heuristic bias.

## Maze Generation
- **Recursive Division**: Generates complex corridors and wall dividers.
- **Random Obstacles**: Configurable density randomized terrain.
