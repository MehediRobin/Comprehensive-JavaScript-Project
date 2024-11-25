// JavaScript Number Methods

//Number()

const num = 1234;
const num2 = 23.45;
const numString = "1234";

const numberResult = Number(numString);

console.log("This is the result of the Number() method: " + numberResult);

// parseInt();

const parseIntResult = parseInt(numString);
const parseIntResult2 = parseInt(num2);

console.log(
  "This is the result of the parseInt() method converting a string: " +
    parseIntResult
);

console.log(
  "This is the result of the parseInt() method parsing 23.45: " +
    parseIntResult2
);

// parseFloat();

const parseFloatResult = parseFloat(num);
const parseFloatResult2 = parseFloat(numString);

console.log(
  "This is the result of the parseFloat() method parsing 1234: " +
    parseFloatResult
);

console.log(
  "This is the result of the parseFloat() method parsing a string int number: " +
    parseFloatResult2
);

// Number.isNaN();

const isNanMethod = Number.isNaN(num);

console.log("This is the result of Number.isNan method on num: " + isNanMethod);

// toPrecision();

// Number.isFinite();
// Number.isInteger();
// Number.isSafeInteger();
// Number.MAX_VALUE;
// Number.MIN_VALUE;
// Number.MAX_SAFE_INTEGER;
// Number.MIN_SAFE_INTEGER;
// Number.POSITIVE_INFINITY;
// Number.NEGATIVE_INFINITY;
// Number.NaN;
// toString();
// toFixed();
// toExponential();

// Intl.NumberFormat;
// Object.is();
// Number.EPSILON;
// Math.trunc();
// Math.sign();
// Math.cbrt();
// Math.clz32();
// valueOf();
// DataView.getFloat32();
// DataView.getFloat64();
