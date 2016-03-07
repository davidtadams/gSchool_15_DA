module.exports = function stddev(samples) {
  var populationLength = populationSize(samples)
  var average = calculateAverage(samples)
  var numerator = samples.reduce(function (sum, sample) {
    return sum + Math.pow(sample - average, 2)
  }, 0)
  var stdDev = Math.sqrt(numerator/populationLength)
  return stdDev
}

function calculateAverage(samples) {
  var populationLength = populationSize(samples)
  var sum = samples.reduce(function (sum, sample) {
    return sum + sample
  }, 0)
  return sum / populationLength
}

function populationSize (samples) {
  return samples.length
}
