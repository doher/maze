import Node from './node.js';
import getPath from './get-path.js';
import { compareObjects, checkBoundaries } from './utils.js';
import searchEndNodes from './search-end-nodes.js';

/**
 * walk(maze, startCell) - return paths list
 * @param maze - current node
 * @param startCoords - start coordinates
 */

function walk(maze, startCoords) {
  const endNodes = searchEndNodes(maze, startCoords);
  const result = [];

  nodesList: for (const coords of endNodes) {
    const startNode = new Node(startCoords);
    const endNode = new Node(coords);
    const nodesList = [];
    const visitedNodesList = [];
    const rows = maze.length;
    const columns = maze[0].length;
    const maxCounts = (Math.floor(rows / 2)) ** 10;

    let count = 0;
    let currentNode;

    const directions = [
      { x: -1, y: 0 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ];

    nodesList.push(startNode);

    while (nodesList.length > 0) {
      let currentIndex = 0;

      count += 1;
      currentNode = nodesList[0];

      nodesList.forEach((item, index) => {
        if (item.f < currentNode.f) {
          currentNode = item;
          currentIndex = index;
        }
      });

      if (count > maxCounts) {
        result.push(getPath(currentNode, maze));
        continue nodesList;
      }

      nodesList.splice(currentIndex, 1);
      visitedNodesList.push(currentNode);

      if (compareObjects(currentNode.position, endNode.position)) {
        result.push(getPath(currentNode, maze));
        continue nodesList;
      }

      const children = [];
      let nodePosition;

      for (const direction of directions) {
        nodePosition = {
          x: currentNode.position.x + direction.x,
          y: currentNode.position.y + direction.y,
        }

        if (checkBoundaries(nodePosition, columns, rows)) {
          continue;
        }

        if (!maze[nodePosition.y][nodePosition.x]) {
          continue;
        }

        const node = new Node(nodePosition, currentNode);

        children.push(node);
      }

      for (const child of children) {
        const cost = 1;

        if (visitedNodesList.some((item) => compareObjects(item.position, child.position))) {
          continue;
        }

        child.g = currentNode.g + cost;
        child.h = (child.position.x - endNode.position.x) ** 2 + (child.position.y - endNode.position.y) ** 2;
        child.f = child.g + child.h;

        if (nodesList.some((item) => compareObjects(item.position, child.position) && (child.g > item.g))) {
          continue;
        }

        nodesList.push(child);
      }
    }
  }

  return result;
}

export default walk;
