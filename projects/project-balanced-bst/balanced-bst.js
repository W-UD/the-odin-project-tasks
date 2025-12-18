class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array, shift, end) {
    if (shift > end) return null;

    const midArr = Math.floor((shift + end) / 2);

    const root = new Node(array[midArr]);
    root.left = this.buildTree(array, shift, midArr - 1);
    root.right = this.buildTree(array, midArr + 1, end);

    return root;
  }

  // this prettyPrint function copy paste from odin website.
  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }

    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(value, currentNode = this.root) {
    if (this.root === null) {
      this.root = new Node(value);
      return this.root;
    }

    if (currentNode === null) return new Node(value);

    if (currentNode.data < value) {
      currentNode.right = this.insert(value, currentNode.right);
    } else {
      currentNode.left = this.insert(value, currentNode.left);
    }

    return currentNode;
  }

  deleteItem(currentNode, value) {
    let currentToDel = this.root;
    let parentNode = null;
    let childFromTheDel = null;
    let isFromRightOrLeft = null;

    while (currentToDel !== null && currentToDel.data !== value) {
      if (currentToDel.data > value) {
        parentNode = currentToDel;
        currentToDel = currentToDel.left;
        isFromRightOrLeft = "left";
      } else if (currentToDel.data < value) {
        parentNode = currentToDel;
        currentToDel = currentToDel.right;
        isFromRightOrLeft = "right";
      }
    }

    if (currentToDel === null) return "the value is empty";

    if (currentToDel.left === null && currentToDel.right === null) {
      if (parentNode === null) {
        return (this.root = null);
      } else {
        parentNode[isFromRightOrLeft] = null;
      }
    } else if (currentToDel.left === null || currentToDel.right === null) {
      let currentToDelChild = null;
      if (currentToDel.left) {
        currentToDelChild = currentToDel.left;
      } else {
        currentToDelChild = currentToDel.right;
      }

      if (parentNode === null) {
        this.root = currentToDelChild;
      } else {
        parentNode[isFromRightOrLeft] = currentToDelChild;
      }
    } else {
      const [predecessor, predecessorParent] =
        this.getTheBiggestFromLeft(currentToDel);

      currentToDel.data = predecessor.data;

      if (predecessorParent.right.data === predecessor.data) {
        predecessorParent.right = predecessor.left;
      } else {
        predecessorParent.left = predecessor.left;
      }
    }

    console.log(parentNode);
    return currentToDel;
  }

  getTheBiggestFromLeft(currentNode) {
    let parentNode = null;
    currentNode = currentNode.left;

    while (currentNode !== null && currentNode.right !== null) {
      parentNode = currentNode;
      currentNode = currentNode.right;
    }

    return [currentNode, parentNode];
  }

  find(value) {
    let currentNode = this.root;

    if (currentNode === null) return "No data yet.";

    while (currentNode !== null) {
      if (currentNode === null) return "No data Found.";

      if (currentNode.data > value) {
        currentNode = currentNode.left;
      } else if (currentNode.data < value) {
        currentNode = currentNode.right;
      } else {
        console.log("Oke, we found the value.");
        return currentNode.data;
      }
    }

    return "No data found.";
  }

  // Level Order loop while and for
  levelOrderForEach(callback) {
    if (typeof callback !== "function") return "Callback Function needed.";

    console.log(callback());

    let level = 0;
    const queue = [this.root];
    let currentNode = null;
    const result = [];

    while (queue.length > 0) {
      const levelSize = queue.length;
      const newArrEachLevel = [];

      for (let i = 0; i < levelSize; i++) {
        currentNode = queue.shift();
        newArrEachLevel.push(currentNode.data);

        if (currentNode.left) {
          queue.push(currentNode.left);
        }

        if (currentNode.right) {
          queue.push(currentNode.right);
        }

        level += 1;
      }

      result.push(newArrEachLevel);
    }

    return result;
  }

  // Level Order recursion
  levelOrderRecurcion(callback) {
    if (typeof callback !== "function") return "Callback Function needed.";
    console.log(callback());

    if (!this.root) return "No node yet.";

    let initialDepth = 0;
    let currentNode = this.root;
    const result = [];

    const traverse = (currentNode, depth) => {
      if (!currentNode) return;
      if (!result[depth]) {
        result[depth] = [];
      }

      result[depth].push(currentNode.data);

      traverse(currentNode.left, depth + 1);
      traverse(currentNode.right, depth + 1);
    };

    traverse(currentNode, initialDepth);
    return result;
  }

  preorder(node, callback) {
    if (typeof callback !== "function")
      throw new Error("You dont provide appropriate callback.");
    if (!node) return "Not a node.";

    const stackForPop = [node];
    const preOrderResult = [];

    while (stackForPop.length > 0) {
      const currentNode = stackForPop.pop();
      callback(currentNode);
      preOrderResult.push(currentNode.data);

      if (currentNode.right) stackForPop.push(currentNode.right);
      if (currentNode.left) stackForPop.push(currentNode.left);
    }

    return preOrderResult;
  }

  inorder(node, callback) {
    if (typeof callback !== "function")
      throw new Error("You dont provide appropriate callback.");
    if (!node) return "Not a node.";

    const stackForPop = [];
    const result = [];
    let currentNode = node;

    while (currentNode !== null || stackForPop.length > 0) {
      // Go currentNode left and push it to stack
      while (currentNode !== null) {
        stackForPop.push(currentNode);
        currentNode = currentNode.left;
      }

      // If currentNode left reach the edge pop out from stackForPop and traverse the right
      currentNode = stackForPop.pop();
      callback(currentNode);
      result.push(currentNode.data);

      currentNode = currentNode.right;
    }

    return result;
  }

  postorder(node, callback) {
    if (typeof callback !== "function")
      throw new Error("You dont provide appropriate callback.");
    if (!node) return "Not a node.";

    const stackForPop = [node];
    const result = [];

    while (stackForPop.length > 0) {
      const currentNode = stackForPop.pop();
      callback(currentNode);
      result.push(currentNode.data);

      if (currentNode.left) stackForPop.push(currentNode.left);
      if (currentNode.right) stackForPop.push(currentNode.right);
    }

    return result.reverse();
  }

  height(value) {
    let currentNode = this.root;
    let targetNode = null;

    while (currentNode) {
      if (currentNode.data === value) {
        targetNode = currentNode;
        break;
      } else if (currentNode.data > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (!targetNode) return null;

    const queue = [targetNode];
    let nodeHeight = 0;

    while (queue.length > 0) {
      const levelNode = queue.length;
      nodeHeight += 1;

      for (let i = 0; i < levelNode; i++) {
        const current = queue.shift();
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }

    return nodeHeight;
  }

  depth(value) {
    let currentNode = this.root;
    let depth = 0;

    while (currentNode) {
      if (currentNode.data === value) {
        return depth;
      } else if (currentNode.data < value) {
        currentNode = currentNode.right;
        depth += 1;
      } else {
        currentNode = currentNode.right;
        depth += 1;
      }
    }

    return depth;
  }

  isBalanced(node) {
    if (node === null) {
      return { balanced: true, height: 0 };
    }

    const left = this.isBalanced(node.left);
    const right = this.isBalanced(node.right);

    if (!left || !right) {
      return { balanced: false, height: -1 };
    }

    const leftRightDifference = Math.abs(left.height - right.height);
    const currentBalanced = leftRightDifference <= 1;

    const balanced = currentBalanced && left.balanced && right.balanced;

    const height = Math.max(left.height, right.height) + 1;

    return { balanced, height };
  }

  getSortedNodes() {
    const nodes = [];
    let currentNode = this.root;
    const stack = [];

    while (currentNode !== null || stack.length > 0) {
      while (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      currentNode = stack.pop();
      nodes.push(currentNode.data);
      currentNode = currentNode.right;
    }

    return nodes;
  }

  rebalance() {
    const arrayData = this.getSortedNodes();
    if (arrayData.length === 0) {
      this.root = null;
      return;
    }
    this.root = this.buildTree(arrayData, 0, arrayData.length - 1);
  }
}

// Testing the Tree
const treeTest = new Tree();

// Test 'buildTree' method:
const arrayToTest = [1, 2, 3, 4, 5, 6];
const buildTreeTest = treeTest.buildTree(arrayToTest, 0, arrayToTest.length);
console.log(buildTreeTest);
console.log(treeTest.prettyPrint(buildTreeTest));

// Testing the insert method
const tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);

console.log(tree.root.data); // Should be 10
console.log(tree.root.left.data); // Should be 5
console.log(tree.root.right.data); // Should be 15

// Testing the delete method
const removeTest = tree.deleteItem("oke", 5);
console.log(removeTest);

// Testing the find method
const findTest = tree.find(15);
console.log(findTest);

// Testing levelOrderForEach method
const callbackTestFunction = function () {
  return "This is a callback test for 'levelOrderForEach.";
};

const levelOrderForEachTest = tree.levelOrderForEach(callbackTestFunction);
console.log(levelOrderForEachTest);

// Testing levelOrderRecursion method
const callbackTestFunction2 = function () {
  return "This is a callback test for 'levelOrderRecursion.";
};

const levelOrderRecursionTest = tree.levelOrderRecurcion(callbackTestFunction2);
console.log(levelOrderRecursionTest);

// Tesing preorder method
const preorderTestCallback = (node) => {
  console.log(node);
};
const preorderTest = tree.preorder(tree.root, preorderTestCallback);
console.log("preorder >>>", preorderTest);

// Testing inorder method
const inorderTestCallback = (node) => {
  console.log(node);
};
const inorderTest = tree.inorder(tree.root, inorderTestCallback);
console.log("inorder >>>", inorderTest);

// Testing postorder method
const postorderTestCallback = (node) => {
  console.log(node);
};
const postorderTest = tree.postorder(tree.root, postorderTestCallback);
console.log("postorder >>>", postorderTest);

// Testing height method
const heightTest = tree.height(15);
console.log(heightTest);

// Testing depth method
const depthTest = tree.depth(15);
console.log(depthTest);

// Testing isbalance method
const isBalanceTest = tree.isBalanced(tree.root);
console.log(isBalanceTest);
