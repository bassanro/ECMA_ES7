"use strict";

var bundled = _interopRequireWildcard(require("./utility.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-env
var myName = 'Max';
console.log(myName);
myName = "Roshan";
console.log(myName);
var myName2 = 'Max';
console.log(myName2); // myName2 = "Roshan";
// console.log(myName2);
// Arrow functions. 

function myFunc() {}

var myFunc2 = function myFunc2() {};

function printMyName(name) {
  console.log(name);
}

printMyName("Max");
console.log("*******************"); // 1. Arrow functions. 

var printMyNameAgain = function printMyNameAgain(name) {
  console.log(name);
};

printMyNameAgain("Roshan");

var multiply = function multiply(number) {
  return number * 2;
}; // can be refactored as : 


var multiplyAgain = function multiplyAgain(number) {
  return number * 2;
};

console.log(multiply(2));
console.log(multiplyAgain(2));
console.log("*******************"); // Exporting and importing. 
// DEFAULT Exports can have any name.
// import person from './person.js';
// import prs from './person.js';
// console.log(person.name);
// console.log(prs.name);
// NOTE: When we are not using default export then we need to specify the same name 

console.log(bundled.baseData);
(0, bundled.clean)();
console.log(bundled.baseData);
console.log("*******************"); // CLASSES 
// https://stackoverflow.com/questions/52237855/support-for-the-experimental-syntax-classproperties-isnt-currently-enabled
// npm i --save-dev @babel/plugin-proposal-class-properties
// Add the plugins.

var Human = function Human() {
  var _this = this;

  _classCallCheck(this, Human);

  this.printGender = function () {
    console.log("Gender is " + _this.gender);
  };

  this.gender = "Male";
} // ES7 feature
;

var Person =
/*#__PURE__*/
function (_Human) {
  _inherits(Person, _Human);

  function Person() {
    var _this2;

    _classCallCheck(this, Person);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Person).call(this)); // call the parent constructor.

    _this2.printMyName = function () {
      console.log("Hello " + _this2.name);
    };

    _this2.name = "roshan";
    return _this2;
  } // ES7 feature


  return Person;
}(Human);

var person = new Person();
person.printMyName();
person.printGender();
console.log("*******************"); // Init properties and methods -> skip constructor call. 
// ES7 feature

var Human2 = function Human2() {
  var _this3 = this;

  _classCallCheck(this, Human2);

  this.gender = "Female";

  this.printGender = function () {
    console.log("Gender is " + _this3.gender);
  };
};

;

var Person2 =
/*#__PURE__*/
function (_Human2) {
  _inherits(Person2, _Human2);

  function Person2() {
    var _getPrototypeOf2;

    var _this4;

    _classCallCheck(this, Person2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Person2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this4.name = "Manmeet";

    _this4.printMyName = function () {
      console.log("Hello " + _this4.name);
    };

    return _this4;
  }

  return Person2;
}(Human2);

var person2 = new Person2();
person2.printMyName();
person2.printGender();
console.log("*******************"); // SPREAD & REST OPERATORS. 
//1. SPREAD OPEARTOR

var numbers = [1, 2, 3, 4, 5];
var newnumbers = [].concat(numbers, [4]);
console.log(newnumbers);
var person3 = {
  name: 'Max'
};

var newPerson = _objectSpread({}, person3, {
  age: 28
});

console.log(newPerson); //2. REST OPERATOR. 

var filter = function filter() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args.filter(function (elememt) {
    return elememt === 1;
  });
}; // PRINTS one since the condition returns true on elements.


console.log(filter(1, 2, 3));
console.log("*******************"); // DESTRUCTURING -  arrays and objects. 
// unpack values from arrays, or properties from objects, into distinct variables.

var a = "Hello",
    b = "Max";
console.log(a);
console.log(b);
var num = [1, 2, 3];
var num1 = num[0],
    num2 = num[1];
console.log(num1, num2); // Object destrucutring. 

var obj = {
  name: 'roshan',
  age: 34
};
var p = obj.name,
    q = obj.age;
console.log(p, q);
console.log("*******************"); // Reference and Primitive types. 
// Primitive types are copied 

var number = 1;
var number2 = number;
console.log(number2); // Objects and arrays are reference types. 
// COPY BY REFERENCE

var secondPerson = person;
console.log("PRINTING SECOND ORIGINAL PERSON");
console.log(secondPerson); // Use composition to created by copy.
// COPY BY VALUE

var thirdPerson = _objectSpread({}, person);

person.name = "MAXXX";
console.log("PRINTING SECOND PERSON");
console.log(secondPerson);
console.log("PRINTING THIRD PERSON");
console.log(thirdPerson); // REFRESHING ARRAY FUNCTION. 
// Returns in a new array and implement function on each element.

var Numbers = [1, 2, 3];
var doubleNumArray = Numbers.map(function (num) {
  return num * 2;
});
console.log(Numbers);
console.log(doubleNumArray);