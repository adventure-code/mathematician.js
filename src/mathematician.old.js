;(function(global) {
  function Mathematician() {};

  Mathematician.prototype.sum = function _sum() {
    return _reduce(Object.entries(arguments), (a, b) => a + b);
  }

  Mathematician.prototype.subtraction = function _subtraction() {
    return _reduce(Object.entries(arguments), (a, b) => a - b);
  }

  Mathematician.prototype.multiply = function _multiply() {
    return _reduce(Object.entries(arguments), (a, b) => a * b);
  }

  Mathematician.prototype.divide = function _divide() {
    return null;
  }

  function _reduce(data, operation) {
    return data.map((tuple) => tuple[1]).reduce(operation);
  }

  window.Mathematician = new Mathematician();
}(window));
