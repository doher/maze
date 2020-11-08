/**
 * class Node
 * @param position - current position
 * @param parentNode - parent node
 * @param g - the cost of moving from the initial cell to the current cell
 * @param h or heuristic value - the estimated cost of moving from the current cell to the final cell
 * @param f - the sum of g and h
 */

class Node {
  constructor(position, parentNode = null) {
    this.position = position;
    this.parentNode = parentNode;
    this.g = 0;
    this.h = 0;
    this.f = 0;
  }
}

export default Node;
