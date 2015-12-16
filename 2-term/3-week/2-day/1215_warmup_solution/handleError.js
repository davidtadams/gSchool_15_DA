module.exports = function(error, res) {
  res.status = res.status || 500;
  res.json({
    message: error.message
  })
}
