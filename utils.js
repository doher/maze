function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function checkBoundaries(node, width, hight) {
  return (node.x > (width - 1) || node.x < 0 || node.y > (hight - 1) || node.y < 0);
}

export {
  compareObjects,
  checkBoundaries,
}
