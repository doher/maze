/**
 * getPath(currentNode, maze) - return path from start point to end point
 * @param currentNode - current node
 * @param maze - maze
 */

function getPath(currentNode, maze) {
  let path = [];
  let node = currentNode;
  const rows = maze.length;
  const columns = maze[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const arr = new Array(columns);

    result.push(arr.fill(false));
  }

  while (node) {
    path.push(node.position);
    node = node.parentNode;
  }

  return path.reverse();
}

export default getPath;
