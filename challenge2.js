var height = 60, weight = 180;

function bmi(height, weight) {
    var bmi = 703 * (weight / Math.pow(height, 2));

    return bmi;
  }

console.log(bmi(height, weight))