function findModule(file) {
  var reg = /require\((.+)\)/g
  return reg.exec(file)[1]
};
