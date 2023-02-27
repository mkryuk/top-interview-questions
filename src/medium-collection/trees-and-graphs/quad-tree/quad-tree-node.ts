// Definition for node.

export class QuadTreeNode {
  val: boolean;
  isLeaf: boolean;
  topLeft: QuadTreeNode | null;
  topRight: QuadTreeNode | null;
  bottomLeft: QuadTreeNode | null;
  bottomRight: QuadTreeNode | null;
  constructor(
    val?: boolean,
    isLeaf?: boolean,
    topLeft?: QuadTreeNode,
    topRight?: QuadTreeNode,
    bottomLeft?: QuadTreeNode,
    bottomRight?: QuadTreeNode,
  ) {
    this.val = val === undefined ? false : val;
    this.isLeaf = isLeaf === undefined ? false : isLeaf;
    this.topLeft = topLeft === undefined ? null : topLeft;
    this.topRight = topRight === undefined ? null : topRight;
    this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
    this.bottomRight = bottomRight === undefined ? null : bottomRight;
  }
}
