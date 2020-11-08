import walk from './walk.js';

const X = false;
const _ = true;
const maze = [
  [X, X, X, X, _, X, X, X, X],
  [X, _, X, _, _, X, _, _, X],
  [X, _, X, X, _, X, _, X, X],
  [_, _, X, _, _, _, _, X, _],
  [X, _, X, _, X, _, X, X, X],
  [X, _, _, _, X, _, _, _, X],
  [X, X, X, X, X, X, X, X, X],
];
const startCell = { x: 0, y: 3 };

const path = walk(maze, startCell);

console.log(path);
