import { TreeNode } from "../common";

export function maxProduct(root: TreeNode | null): number {
  const MOD: bigint = BigInt(1e9 + 7);

  // compute total sum of the tree
  const totalSum: bigint = getTotalSum(root);

  // compute subtree sums and track best product
  let best: bigint = BigInt(0);
  computeSubtreeSumsAndBest(root, totalSum, (product) => {
    if (product > best) {
      best = product;
    }
  });

  return Number(best % MOD);
}

function getTotalSum(root: TreeNode | null): bigint {
  if (root === null) {
    return BigInt(0);
  }

  // iterative postorder using two stacks to avoid recursion depth issues
  const s1: TreeNode[] = [root];
  const s2: TreeNode[] = [];

  while (s1.length > 0) {
    const node = s1.pop()!;
    s2.push(node);

    if (node.left !== null) {
      s1.push(node.left);
    }
    if (node.right !== null) {
      s1.push(node.right);
    }
  }

  let sum: bigint = BigInt(0);
  while (s2.length > 0) {
    const node = s2.pop()!;
    sum += BigInt(node.val);
  }

  return sum;
}

function computeSubtreeSumsAndBest(
  root: TreeNode | null,
  totalSum: bigint,
  onProduct: (product: bigint) => void,
): void {
  if (root === null) {
    return;
  }

  // postorder with explicit stack + visited flag
  const stack: Array<[TreeNode, boolean]> = [[root, false]];
  const subtreeSum = new Map<TreeNode, bigint>();

  while (stack.length > 0) {
    const [node, visited] = stack.pop()!;

    if (visited === false) {
      stack.push([node, true]);

      if (node.left !== null) {
        stack.push([node.left, false]);
      }
      if (node.right !== null) {
        stack.push([node.right, false]);
      }
    } else {
      let sum: bigint = BigInt(node.val);

      if (node.left !== null) {
        sum += subtreeSum.get(node.left)!;
      }
      if (node.right !== null) {
        sum += subtreeSum.get(node.right)!;
      }

      subtreeSum.set(node, sum);

      // if we cut the edge above this subtree, sums are:
      // a = sum, b = totalSum - sum
      // (we ignore the root cut naturally; it yields product 0)
      const product: bigint = sum * (totalSum - sum);
      onProduct(product);
    }
  }
}
