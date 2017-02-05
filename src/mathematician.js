class Mathematician {

  constructor() {
    throw new Error('This class cannot be instantiated.', 'mathematician.js', 4);
  }

  static sum() {
    Mathematician._findInvalidValues(arguments);
    let parcels = Object.keys(arguments).map(parecelIndex => arguments[parecelIndex]);
    return Mathematician._applyOperation(parcels, (a, b) => a + b);
  }

  static subtraction() {
    let parcels = Object.keys(arguments).map(parecelIndex => arguments[parecelIndex]);
    return Mathematician._applyOperation(parcels, (a, b) => a - b);
  }

  static multiply() {
    let parcels = Object.keys(arguments).map(parecelIndex => arguments[parecelIndex]);
    return Mathematician._applyOperation(parcels, (a, b) => a * b);
  }

  static _applyOperation(values, operation) {
    return values.reduce(operation);
  }

  static _findInvalidValues(parameters) {
    let parametersArray = Object.keys(parameters);
    parametersArray.forEach(function(key) {
      if (typeof parameters[key] !== 'number')
        throw new Error('The [' + parameters[key] + '] is not a valid value.', 'mathematician.js', 34);
    });
  }
}

module.exports = Mathematician;
