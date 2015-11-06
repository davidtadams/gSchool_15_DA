module.exports = {
  calculate: function(num){
    if (num <= 10 && num > 0) {
      return num * 0.1;
    }
    else if (num <= 20) {
      return 1 + ((num - 10) * 0.07);
    }
    else if (num <= 30) {
      return 1 + 0.7 + ((num - 20) * 0.05);
    }
    else {
      return 1 + 0.7 + 0.5 + ((num - 30) * 0.03);
    }

    return "error";
  }
}
