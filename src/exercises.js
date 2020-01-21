function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  } else {
    const firstValueA = a[0];
    const firstValueB = b[0];

    const lastValueA = a[a.length - 1];
    const lastValueB = b[b.length - 1];

    if (firstValueA === firstValueB || lastValueA === lastValueB) {
      return true;
    } else {
      return false;
    }
  }

}

function endsMeet(values, n) {
  var returnMe = [];
 if (!values || values.length < n || !Number.isInteger(n) || n < 0){
     return returnMe;
 } else if (n === 0) {
   return returnMe;
 } else {

   for (var i = 0; i < n; i++) {
     returnMe.push(values[i]);
   }
   for (var i = 0; i < n; i++) {
     returnMe.push(values[((values.length - n) + i)])
   }
 }

 return returnMe;
}

function difference(numbers) {
  // write your code here
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
