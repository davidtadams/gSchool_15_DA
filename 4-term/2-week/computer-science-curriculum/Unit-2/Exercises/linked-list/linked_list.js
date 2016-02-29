function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(val) {
  this.next = null;
  this.value = val;
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
