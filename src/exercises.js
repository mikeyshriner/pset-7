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
  let array = []

  if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
    return array;
  } else {
      if (n === 0) {
        return values;
      }

      for (let i = 0; i < n; i++) {
        if (values[i] !== undefined) {
          array.push(values[i])
        }
      }

      for (let i = n; i > 0; i--) {
        if (values[values.length - i] !== undefined) {
          array.push(values[values.length - i])
        }
      }
      return array;
  }
 }

function difference(numbers) {
  if (numbers == undefined || numbers < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {

    let bigInteger = Math.max.apply(null, numbers)
    let smallInteger = Math.min.apply(null, numbers)

    let difference = bigInteger - smallInteger

    return difference
  }
}

function max(number) {
  if (number == undefined || number <= 2 || number.some(isNaN)) {

  return undefined;

} else if (number.length % 2 == 0) {

  return undefined;

} else {
   let lastElement = number[number.length - 1]
   let middleElement = number[number.length - (Math.ceil(number.length / 2))]
   let firstElement = number[0]

   let array = [firstElement, middleElement, lastElement]

   let largestValue = Math.max.apply(null, array)

   return largestValue;
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
  if (values == undefined || x === undefined) {
    return false;
  } else if (values.length < 1) {
    return false;
  } else if (!values.includes(x)) {
    return false;
  } else {

      for (let y = values.indexOf(x); y < values.length; y++) {
        if (values[y] === values[y + 1] && values[y + 1] !== undefined) {
          return true;
          break;
        } else if (x === 0) {
          return false;
          break;
        } else if (values[y] === values[y + 2] && values[y + 2] !== undefined && values[y + 1] !== values[y]) {
          return true;
          break;
        } else if (values[y] === values[y + 3] && values[y + 3] !== undefined && (values[y + 1] && values[y + 2]) !== values[y + 3]) {
          return true;
          break;
        } else {
          return false;
          break;
        }
      }
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
 * Exports all functions for use in external grader.js file.  Do not modify.
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
