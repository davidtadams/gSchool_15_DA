function Node(val, next, prev) {
  this.val = val;

  if (!!next) {
    this.next = next;
  } else {
    this.next = null;
  }
  if (!!prev) {
    this.prev = prev;
  } else {
    this.prev = null;
  }
}

function DoublyLinkedList() {

  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.__getNodeAt = function(index) {
  if (typeof index !== "number" || index >= this.length || index < 0) return undefined;

  var mid = this.length / 2;
  var goForward = true;
  if (index > mid) goForward = false;

  var i;
  var curNode;
  if (goForward) {
    i = 0;
    curNode = this.head;
  } else {
    i = this.length - 1;
    curNode = this.tail;
  }

  while (i != index) {
    if (goForward) {
      curNode = curNode.next;
      i++;
    } else {
      curNode = curNode.prev;
      i--;
    }
  }

  return curNode;
};

DoublyLinkedList.prototype.push = function(val) {
  var newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;

  return this;
};

DoublyLinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

DoublyLinkedList.prototype.pop = function() {
  if (!this.head) return undefined;
  if (this.length === 1) {
    var value = this.head.val;
    this.clear();
    return value;
  }

  var value = this.tail.val
  var prevNode = this.tail.prev;
  prevNode.next = null;
  this.tail.prev = undefined;
  this.tail = prevNode;
  this.length--;
  return value;
};

DoublyLinkedList.prototype.unshift = function(val) {
  if (!this.head) {
    return this.push(val);
  }

  var newNode = new Node(val);

  this.head.prev = newNode;
  newNode.next = this.head;
  this.head = newNode;
  this.length++;

  return this;
};

DoublyLinkedList.prototype.shift = function() {
  if (this.length <= 1) return this.pop();

  var value = this.head.val
  var nextNode = this.head.next;
  nextNode.prev = null;
  this.head.next = undefined;
  this.head = nextNode;
  this.length--;
  return value;
};

DoublyLinkedList.prototype.get = function(index) {
  var node = this.__getNodeAt(index);
  if (!node) return undefined;
  return node.val;
};

DoublyLinkedList.prototype.set = function(index, val) {
  var node = this.__getNodeAt(index);
  if (node) node.val = val;
};

DoublyLinkedList.prototype.insert = function(index, val) {
  if (index < 0 || index > this.length) return;
  if (index === 0) { return this.unshift(val); }
  else if (index === this.length) { return this.push(val); }
  else {
    var node = this.__getNodeAt(index);
    var prevNode = node.prev;
    var newNode = new Node(val, prevNode, node);
    prevNode.next = newNode;
    node.prev = newNode;
    this.length++;
    return this;
  }
};

DoublyLinkedList.prototype.forEach = function(callback) {
  curNode = this.head;
  while (curNode) {
    callback(curNode.val);
    curNode = curNode.next;
  }
};

DoublyLinkedList.prototype.remove = function(index) {
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();
  
  var node = this.__getNodeAt(index);
  if (node) {
    var prev = node.prev;
    var next = node.next;
    prev.next = next;
    next.prev = prev;
    node.prev = undefined;
    node.next = undefined;
    this.length--;
    return node.val;
  }
};

DoublyLinkedList.prototype.mostFrequent = function() {

  var curNode = this.head;
  var values = {};
  var key;
  var index = 0;

  while (curNode !== null) {
    if (typeof  curNode.val === "number") {
      key = "" + curNode.val;
    } else {
      key = curNode.val.toString();
    }
    if (values[key]) {
      values[key].count++;
    } else {
      values[key] = {count: 1, index: index};
    }

    curNode = curNode.next;
    index++;
  }

  var maxCount = 0;
  var maxIndex;
  for (key in values) {
    if (values[key].count > maxCount) {
      maxCount = values[key].count;
      maxIndex = values[key].index;
    }
  }

  var node = this.__getNodeAt(maxIndex);
  if (!node) return undefined;

  return node.val;
};

DoublyLinkedList.prototype.rotate = function(positions, forward) {
  if (positions <= 0) return;
  for (var i = 0; i < positions; i++) {
    if (forward) {
      var val = this.pop();
      this.unshift(val);
    } else {
      var val = this.shift();
      this.push(val);
    }
  }
};

module.exports = DoublyLinkedList;
