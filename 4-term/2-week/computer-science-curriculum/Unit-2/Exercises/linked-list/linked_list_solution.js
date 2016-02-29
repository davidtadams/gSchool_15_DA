function LinkedList() {
  var _this = this;
  this.head = null;
  this.tail = null;
  this.length = 0;

  this.add = function(value) {
    var newNode = new Node(value);

    if (!_this.head) {
      _this.head = newNode;
      _this.tail = newNode;
    } else {
      _this.tail.next = newNode;
      _this.tail = newNode;
    }

    _this.length++;
  };

  this.removeLast = function() {
    if (!_this.head.next) {
      _this.head = null;
      _this.tail = null;
    } else {
      var currentNode = _this.head;
      var newLast = _this.head;

      while (currentNode.next) {
        newLast = currentNode;
        currentNode = currentNode.next;
      }

      newLast.next = null;
    }

    _this.length--;
  };

}

function Node(val) {
  this.next = null;
  this.value = val;
}

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
