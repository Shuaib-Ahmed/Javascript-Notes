let val;

// Number to string
val = String(555);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
// true false and null return 1 0 0
val = Number(true);
val = Number(false);
val = Number(null);
// string and array return NaN(not a number)
val = Number('hello');
val = Number([1,2,3]);

// return integer values
val = parseInt('100.30');
// return floating values
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));


// Auto type conversion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
