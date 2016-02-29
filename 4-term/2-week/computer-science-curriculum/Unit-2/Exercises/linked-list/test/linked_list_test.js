var LinkedList = require('../linked_list').LinkedList;
var Node = require('../linked_list').Node;
var assert = require('assert');

var linkedList;
var node;

describe('linked list', function() {
  beforeEach(function() {
    linkedList = new LinkedList();
  });

  describe('add', function() {
    it('should update the length', function() {
      assert.equal(linkedList.length, 0);
      linkedList.add('First!');
      assert.equal(linkedList.length, 1);
    });

    it('should make head point to the first node, if there is no head', function() {
      assert.equal(linkedList.head, null);
      linkedList.add('First!');
      assert.equal(linkedList.head.value, 'First!');
    });

    it('should make tail point to the last node, if there is no tail', function() {
      assert.equal(linkedList.tail, null);
      linkedList.add('First!');
      assert.equal(linkedList.tail.value, 'First!');
    });

    it('should update the next property on the current tail when adding new nodes', function() {
      linkedList.add('First!');
      assert.equal(linkedList.head.next, null);
      linkedList.add('Last!');
      assert.equal(linkedList.head.next.value, 'Last!');
    });
  });

  describe('removeLast', function() {
    beforeEach(function() {
      linkedList.add('First!');
      node = linkedList.head;
    });

    it('should update the length', function() {
      assert.equal(linkedList.length, 1);
      linkedList.removeLast();
      assert.equal(linkedList.length, 0);
    });

    it('should null head, if this was the last node', function() {
      linkedList.removeLast();
      assert.equal(linkedList.head, null);
    });

    it('should null tail, if this is the last node', function() {
      linkedList.removeLast();
      assert.equal(linkedList.tail, null);
    });

    it('should null the next value on the previous element when removing nodes', function() {
      linkedList.add('Last!');
      assert.equal(node.next.value, 'Last!');
      linkedList.removeLast();
      assert.equal(node.next, null);
    });
  });
});
