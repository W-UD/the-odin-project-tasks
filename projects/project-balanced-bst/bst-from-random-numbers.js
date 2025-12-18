// Generate Random Numbers
function generateRandNum(count = 10, max = 100) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * max));
  }

  return numbers;
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const sortedArr = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedArr, 0, sortedArr.length - 1);
  }

  buildTree(arrayData, start, end) {
    if (start > end) return null;
    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(arrayData[mid]);

    root.left = this.buildTree(arrayData, start, mid - 1);
    root.right = this.buildTree(arrayData, mid + 1, end);

    return root;
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
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

  insert(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.data) {
      node.left = this.insert(node.left, value);
    } else if (value > node.data) {
      node.right = this.insert(node.right, value);
    }

    return node;
  }

  deleteItem(value) {
    let node = this.root;

    const findNodeHelper = (currentNode) => {
      while (currentNode.left !== null) {
        currentNode = currentNode.left;
      }

      return currentNode;
    };

    const deleteHelper = (currentNode, value) => {
      if (currentNode === null) {
        return null;
      }

      if (value < currentNode.data) {
        currentNode.left = deleteHelper(currentNode.left, value);
        return currentNode;
      } else if (value > currentNode.data) {
        currentNode.right = deleteHelper(currentNode.right, value);
        return currentNode;
      } else {
        if (currentNode.left === null && currentNode.right === null) {
          return null;
        }

        if (currentNode.left === null) {
          return currentNode.right;
        }

        if (currentNode.right === null) {
          return currentNode.left;
        }

        let successor = findNodeHelper(currentNode.right);
        currentNode.data = successor.data;
        currentNode.right = deleteHelper(currentNode.right, successor.data);
      }
    };

    this.root = deleteHelper(node, value);
    return this;
  }

  find(currentNode = this.root, value) {
    if (currentNode === null) return null;

    if (value === currentNode.data) {
      return currentNode;
    } else if (value < currentNode.data) {
      return this.find(currentNode.left, value);
    } else {
      return this.find(currentNode.right, value);
    }
  }

  levelOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Not a callback.");
    }

    function iterateLevel(nodes) {
      if (nodes.length === 0) return 0;

      const nextLevel = [];

      for (const node of nodes) {
        callback(node);
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      }

      iterateLevel(nextLevel);
    }

    if (this.root) iterateLevel([this.root]);
  }

  preOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Not a callback.");
    }

    function traverse(node) {
      if (node === null) return;
      callback(node);

      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);
  }

  inOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Not a callback.");
    }

    function traverse(node) {
      if (node === null) return;

      traverse(node.left);

      callback(node);

      traverse(node.right);
    }

    traverse(this.root);
  }

  getSortedNodes() {
    const sortedNodes = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left);

      sortedNodes.push(node.data);

      traverse(node.right);
    }

    traverse(this.root);
    return sortedNodes;
  }

  postOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Not a callback.");
    }

    function traverse(node) {
      if (node !== null) return;

      traverse(node.left);
      traverse(node.right);
      callback(node);
    }

    traverse(this.root);
  }

  height(value) {
    let targetNodeHeight = null;
    let found = false;

    const traverse = (node) => {
      if (node === null) return -1;

      const leftHeight = traverse(node.left);
      const rightHeight = traverse(node.right);

      const currentHeight = Math.max(leftHeight, rightHeight) + 1;

      if (node.data === value) {
        targetNodeHeight = currentHeight;
        found = true;
      }

      return currentHeight;
    };

    traverse(this.root);
    if (found) {
      return targetNodeHeight;
    } else {
      return null;
    }
  }

  depth(value) {
    let depthValue = null;
    let found = false;

    const search = (node, currentNodeDepth) => {
      if (node === null || found) return;

      if (node.data === value) {
        depthValue = currentNodeDepth;
        found = true;
        return;
      }

      if (value < node.data) {
        search(node.left, currentNodeDepth + 1);
      } else {
        search(node.right, currentNodeDepth + 1);
      }
    };

    search(this.root, 0);
    return depthValue;
  }

  isBalanced() {
    const checkBalance = (node) => {
      if (node === null) {
        return { balanced: true, height: -1 };
      }

      const leftNode = checkBalance(node.left);
      if (!leftNode.balanced) {
        return { balanced: false, height: 0 };
      }

      const rightNode = checkBalance(node.right);
      if (!rightNode.balanced) {
        return { balanced: false, height: 0 };
      }

      const heightDiff = Math.abs(leftNode.height - rightNode.height);
      const currentNodeBalanced = heightDiff <= 1;

      return {
        balanced:
          currentNodeBalanced && leftNode.balanced && rightNode.balanced,
        height: Math.max(leftNode.height, rightNode.height) + 1,
      };
    };

    return checkBalance(this.root).balanced;
  }

  rebalance() {
    const sortedArrayNodes = this.getSortedNodes();
    this.root = this.buildTree(
      sortedArrayNodes,
      0,
      sortedArrayNodes.length - 1,
    );

    return this;
  }
}

// Random Number Test
const randomNumArr = generateRandNum().sort((a, b) => a - b);
console.log(randomNumArr);

// Testing
const treeTest = new Tree(randomNumArr);

// PrettyPrint Test
treeTest.prettyPrint();

// insert Test
treeTest.root = treeTest.insert(treeTest.root, 50);
treeTest.prettyPrint();

// delete Test
treeTest.deleteItem(50);
treeTest.prettyPrint();

// find test
treeTest.root = treeTest.insert(treeTest.root, 100);
console.log(treeTest.find(100));

// levelOrderForEach test
treeTest.levelOrderForEach((node) => {
  console.log(node.data);
});

// preOrderForEach test
console.log("----");
treeTest.preOrderForEach((node) => {
  console.log(node.data);
});

// inOrderForEach test
console.log("----");
treeTest.inOrderForEach((node) => {
  console.log(node.data);
});

// postOrderForEach test
console.log("----");
treeTest.postOrderForEach((node) => {
  console.log(node.data);
});

// height test
console.log("----");
console.log(treeTest.height(treeTest.root.data));

// depth test
console.log("----");
console.log(treeTest.depth(treeTest.root.right.left.data));
console.log(treeTest.depth(treeTest.root.left.left.data));

// isBalanced test
console.log("----");
console.log(treeTest.isBalanced());

// rebalance and getSortedNodes test
console.log("---");
console.log(treeTest.prettyPrint()); // before
console.log(treeTest.rebalance());
console.log(treeTest.prettyPrint()); // after
