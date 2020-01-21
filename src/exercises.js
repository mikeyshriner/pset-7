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
  if (values == undefined || values.length < 3 || values.length % 2 == 0) {
    return [];
  } else {
    let leftMiddle = values[(values.length - 1) - (Math.ceil(values.length / 2))];
    let middle = values[values.length - (Math.ceil(values.length / 2))];
    let array = [leftMiddle, middle]
    return array;
  }
}

function increasing(numbers) {
  if (numbers == undefined || numbers == []) {
    return undefined;
  } else if (numbers.length < 3 || numbers.some(isNaN)) {
    return undefined;
  } else {
    for (let i = 1; i < numbers.length; i++) {
      if ((numbers[i - 1] + 1) === numbers[i]) {
        i++
        if ((numbers[i - 1] + 1) === numbers[i]) {
          return true;
          break;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    return false;
  }
}

function everywhere(values, x) {
  if (values != undefined && values.length >= 1 && x != undefined) {
    for(let j = 0; j < values.length; j++) {
      if (values[j] === x || values[j - 1] === x || values[j + 1] === x) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  else {
    return false;
  }
}

function consecutive(numbers) {
  if (!numbers || numbers.length < 3) {
     return false;
   }
   let numeral = true;
   for (i = 0; i <= numbers.length - 1; i++) {
     if (isNaN(numbers[i])) {
       numeral = false;
     }
   }
   if (numeral === false) {
     return false;
   }
   let status = false;
   for (h = 0; h <= numbers.length - 1; h++) {
     let one = numbers[h] % 2;
     let two = numbers[h + 1] % 2;
     let three = numbers[h + 2] % 2;
     if (one === 0 && two === 0 && three === 0) {
       return true;
     } else if (one > 0 && two > 0 && three >0) {
       return true;
     } else {
       status = false;
     }
   }
   if (status === false) {
     return false;
   }
}

function balance(numbers) {
  var count = 0;
   var size = 0;
   var sum1 = 0;
   var sum2 = 0;

   if (!numbers || numbers.length < 2) {
     return false;
   }
   for (i = 0; i < numbers.length; i++) {
     if (!(Number.isInteger(numbers[i]))) {
       return false;
     }
   }
   for (z = 0; z < numbers.length; z++) {
     if (numbers[z] == undefined) {
       return true;
     }
   }
   for (x = numbers.length; x > -1; x--) {
     sum1 = 0
     sum2 = 0
     for(y = numbers.length - x; y > -1; y--) {
       sum1 = sum1 + numbers[y]
     }
     for(a = numbers.length - 1; a > numbers.length - x; a--) {
       sum2 = sum2 + numbers[a]
     }
     if (sum2 == sum1) {
       count = 1
       return true;
     }
   }
   if (count == 0) {
     return false;
   }
}

function clumps(values) {
  var clumpFinalIndex;
 var clump = 0;
 var value;
 var sameValues;

 if (!values) {
   return -1;
 }
 else {
    for (let w = 0; w < values.length - 1; w++) {
        let test2 = w + 1;
        let test1 = w;
        value = values[test1];
        sameValues = values[test2];
        if (value === sameValues) {
            while (value === sameValues) {
                value = values[test1++];
                sameValues = values[test2++];
             }
            clump++;
            clumpFinalIndex = test1 - 1;
            w = clumpFinalIndex;
         }
      }
       return clump;
    }
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
