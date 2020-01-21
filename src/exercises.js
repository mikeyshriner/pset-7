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
  if (!numbers || numbers.length < 1 || !numbers.every(isNumber)) {
   return undefined;
 } else {
   const min = Math.min(...numbers);
   const max = Math.max(...numbers);

   return max - min;
 }
}

function max(number) {
  if (!number || number.length === 0) {
   return undefined;
 }
 if (number.length % 2 === 0 || number.length < 3 ){
   return undefined;
 }
 if (number.some(isNaN)){
   return undefined;
 }
 else{
   var first_element = number[0];
   var middle_element = number[Math.floor(number.length/2)];
   var last_element = number[number.length-1];
   var array = [];
   var largest = Number(Math.max.apply(null, array));
   array.push(first_element, middle_element, last_element);
   return  Number(Math.max.apply(null, array));
 }
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
