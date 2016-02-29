function HashTable(size, prime) {
  size = size || 59;
  prime = prime || 122611;
  this.arr = Array(size);
  this.prime = prime;
}

HashTable.prototype.__hashFunction = function(key) {
  var size = this.arr.length;
  if (typeof key === "function") key = key.toString();
  if (typeof key === "object" && Array.isArray(key)) {
    key = key.reduce(function(acc, el) { return acc + String(el) + ',';}, "[]");
  }
  if (typeof key === "object" && !Array.isArray(key)) {
    key = "{}" + Object.keys(key).join(",");
  }
  if (typeof key === "string") {
    key = key.split("").reduce(function(acc, el) {
      return acc + el.charCodeAt(0);
    }, 0);
  }
  if (typeof key === "number") return (key * this.prime) % size;
  return 0;
}

HashTable.prototype.set = function(key, value) {
  var hashKey = this.__hashFunction(key);
  this.arr[hashKey] = value;
};

HashTable.prototype.get = function(key) {
  var hashKey = this.__hashFunction(key);
  return this.arr[hashKey];
};

HashTable.prototype.exists = function(key) {
  if (this.get(key) !== undefined) return true;
  return false;
};

HashTable.prototype.remove = function(key) {

};

module.exports = HashTable;