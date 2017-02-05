class Mathematician {

  constructor() {
    throw new Error('This class cannot be instantiated.', 'mathematician.js', 4);
  }

  static sum() {
    let parcels = Object.keys(arguments).map(parecelIndex => arguments[parecelIndex]);
    return Mathematician._applyOperation(parcels, (a, b) => a + b);
  }

  static subtraction() {
    let parcels = Object.keys(arguments).map(parecelIndex => arguments[parecelIndex]);
    return Mathematician._applyOperation(parcels, (a, b) => a - b);
  }

  static _applyOperation(values, operation) {
    return values.reduce(operation);
  }
}

module.exports = Mathematician;
