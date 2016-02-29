var HashTable = require('../hash_table');

describe("Hash Table", function() {
  var table;
  var size;
  var prime;
  beforeEach(function() {
    size = 5;
    prime = 1;
    table = new HashTable(size, prime);
  });

  var strToCharCode = function(str) {
    return str.split("").reduce(function(acc, el) {
      return acc + el.charCodeAt(0);
    }, 0);
  }

  describe("new HashTable", function() {
    it("has the correct properties", function() {
      expect(Array.isArray(table.arr)).toBe(true);
      expect(table.arr.length).toEqual(size);
      expect(table.prime).toEqual(prime);
    });
  });

  describe("__hashFunction", function() {
    it("hashes a number", function() {
      expect(table.__hashFunction(1)).toEqual(1)
      expect(table.__hashFunction(6)).toEqual(1)
      expect(table.__hashFunction(25)).toEqual(0)
    });

    it("hashes non numbers that are of type number", function() {
      var nanHash = strToCharCode("NaN") % size;
      expect(table.__hashFunction(NaN)).toEqual(nanHash);

      var infinityHash = strToCharCode("Infinity") % size;
      expect(table.__hashFunction(Infinity)).toEqual(infinityHash);
    });

    it("hashes a string", function() {
      expect(table.__hashFunction("aB=")).toEqual(strToCharCode("aB=")%size);
      expect(table.__hashFunction("zzzzzzzzz")).toEqual(strToCharCode("zzzzzzzzz")%size);
      expect(table.__hashFunction("")).toEqual(0);
    });

    it("hashes a function", function() {
      var f = function() {var i = 0; console.log(i);};
      var total = strToCharCode(f.toString());
      expect(table.__hashFunction(f)).toEqual(total % size);
    });

    it("hashes an object", function() {
      var hash = strToCharCode("{}") % size;
      expect(table.__hashFunction({})).toEqual(hash);
      expect(table.__hashFunction({a: 5}) !== hash).toBe(true);
    });

    it("hashes an array", function() {
      var hash = strToCharCode("[]") % size;
      expect(table.__hashFunction([])).toEqual(hash);
      expect(table.__hashFunction([1,5,9,55]) !== hash).toBe(true);
    })
  });

  describe("get, set and exists", function() {
    it("sets and gets a simple key", function() {
      var key = 1, value = "value";
      expect(table.set(key, value)).toBe(undefined);
      expect(table.get(key)).toEqual(value);
    });

    it("exists returns true if a key exists in the hash, false otherwise", function() {
      var key = 1;
      expect(table.exists(key)).toBe(false);
      expect(table.set(key, key)).toBe(undefined);
      expect(table.exists(key)).toBe(true);
    });

    it("can handle collisions", function() {
      var key1 = 0, key2 = 5, key3 = 10,
          val1 = 'a', val2 = 'b', val3 = 'c';
      expect(table.exists(key1)).toBe(false);
      expect(table.exists(key2)).toBe(false);
      expect(table.exists(key3)).toBe(false);
      expect(table.set(key1, val1)).toBe(undefined);
      expect(table.get(key1)).toBe(val1);
      expect(table.set(key2, val2)).toBe(undefined);
      expect(table.get(key1)).toBe(val1);
      expect(table.get(key2)).toBe(val2);
      expect(table.set(key3, val3)).toBe(undefined);
      expect(table.get(key1)).toBe(val1);
      expect(table.get(key2)).toBe(val2);
      expect(table.get(key3)).toBe(val3);
    });
  });

  describe("remove", function() {
    it("should have some tests", function() {
      expect("Rewrite this section to have some real tests").toBe(0);
    })
  });

});
