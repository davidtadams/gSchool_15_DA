function findModule(file) {
  return new Promise(function (resolve, reject) {
    var reg = /require\((.+)\)/g
    resolve(reg.exec(file)[1])
  })
}
