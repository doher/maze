import { compareObjects } from './utils.js';

function searchEndNodes(maze, startCoords) {
  const nodes = [];
  const up = maze[0];
  const down = maze[maze.length - 1];
  const left = maze.map((item) => item[0]);
  const right = maze.map((item) => item[item.length - 1]);

  up.forEach((item, index) => {
    if (item) {
      nodes.push({ x: index, y: 0 });
    }
  });

  down.forEach((item, index) => {
    if (item) {
      nodes.push({ x: index, y: maze.length - 1 });
    }
  });

  left.forEach((item, index) => {
    if (item) {
      nodes.push({ x: 0, y: index });
    }
  });

  right.forEach((item, index) => {
    if (item) {
      nodes.push({ x: maze[0].length - 1, y: index });
    }
  });

  return nodes.filter((item) => !compareObjects(item, startCoords));
}

export default searchEndNodes;
