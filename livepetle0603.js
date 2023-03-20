const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersDoubled = [];

// for (let i = 0; i < numbers.length; i++) {
//   numbersDoubled[i * 2] = numbers[i] * 2;
//   numbersDoubled.push();
// }
// // console.log(numbersDoubled);
// console.log(numbers);
// console.log(numbers.reverse());

// for (let i = 0; i < numbers.length; i++) {
//   if (i % 3 === 0) {
//     numbersDoubled.push(parseFloat((numbers[i] / 3).toFixed(2)));
//   } else {
//     numbersDoubled.push(numbers[i]);
//   }
// }

// console.log("numbersDoubled", numbersDoubled);

// 1.
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// 2. Tabliczka mnożenia
// 1  2  3  4  5  6  7  8  9  10
// 2  4  6  8  10 12 14 16 18 20

const arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = [];
}

// funkcje

function fn(arr, item) {
  let isInArray = false;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el === item) {
      console.log("Element znajduje się już w tablicy");
      isInArray = true;
      return arr;
      break;
    }
  }

  if (!isInArray) {
    return [...arr, item];
  }

  return arr;
}

console.log(fn([1, 4, 2, 3], 4));
console.log(fn([1, 2, 3, 4], 4));
console.log(fn([], 4));
console.log(fn([1, 2, 3, 5, 6], 4));
