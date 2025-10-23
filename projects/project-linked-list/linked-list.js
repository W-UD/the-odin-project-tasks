class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  appendData(data) {
    const newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      let theHead = this.head;

      while (theHead.next) {
        theHead = theHead.next;
      }

      theHead.next = newNode;
    }
    this.size += 1;

    return this;
  }

  prependData(data) {
    const newNode = new Node(data);

    if (this.size === 0) {
      this.head = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }

    this.size += 1;

    return this;
  }

  getSize() {
    return this.size;
  }

  getTheHead() {
    return this.head;
  }

  getTheTail() {
    if (this.size === 0) return null;

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    return tail;
  }

  getNodeAt(index) {
    if (this.size === 0 || this.size < index) return "No data at that index";

    let indexData = this.head;
    while (index > 0) {
      indexData = indexData.next;
      index -= 1;
    }

    return indexData;
  }

  pop() {
    if (this.size === 0) return "The element is empty";

    let lastNode = this.head;
    while (lastNode.next.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = null;

    this.size -= 1;
    return this;
  }

  contains(value) {
    if (this.size === 0) return "Value is empty";

    let currentValue = this.head;
    let valueFound = currentValue.nodeData;

    if (value === valueFound) return true;

    while (currentValue.next) {
      currentValue = currentValue.next;
      valueFound = currentValue.nodeData;

      if (value === valueFound) return true;
    }

    return false;
  }

  find(value) {
    let index = 0;
    if (this.size === 0) return "There is no node in the link list.";

    let currentValue = this.head;
    let valueFound = currentValue.nodeData;

    if (value === valueFound) return 1;
    while (currentValue.next) {
      index += 1;
      currentValue = currentValue.next;
      valueFound = currentValue.nodeData;

      if (value === valueFound) {
        return index;
      }
    }

    return "There is no data found";
  }

  toString() {
    const nodesArray = [];
    let current = this.head;
    while (current) {
      nodesArray.push(current.nodeData);
      current = current.next;
    }

    const newNodesArray = nodesArray.map((val) => {
      return (val = `(${val})`);
    });
    return `LinkedList { ${newNodesArray.join(" -> ")} } [size: ${this.size}]`;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return "The index is invalid.";
    }

    let newNode = new Node(value);

    if (this.size === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size += 1;

      return this;
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentIndex += 1;
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;

    this.size += 1;
    return this;
  }

  removeAt(index) {
    if (index < 0 || index > this.size)
      return "The index is invalid. Maybe it is less than zero or more than the size of the LinkedList.";

    if (this.size === 0) {
      return "Nothing to remove.";
    }

    if (index === 0) {
      this.head = this.head.next;
      this.size -= 1;

      return this;
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index - 2) {
      current = current.next;
      currentIndex += 1;
    }

    current.next = current.next.next;
    this.size -= 1;
    return this;
  }
}

class Node {
  constructor(data) {
    this.nodeData = data;
    this.next = null;
  }
}

// Testing:
const list = new LinkedList();

list.appendData("dog");
list.appendData("cat");
list.appendData("parrot");
list.appendData("hamster");
list.appendData("snake");
list.appendData("turtle");

console.log(list.toString());

list.removeAt(2);
console.log(list.toString());
