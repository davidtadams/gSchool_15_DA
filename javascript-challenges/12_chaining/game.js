module.exports = {
  score: 0,

  hit: function() {
    this.score += 1;
    return this;
  },

  miss: function() {
    this.score -= 1;
    return this;
  }
}
