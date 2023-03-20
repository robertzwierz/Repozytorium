// const names = [
//   "Krysia",
//   "Kamil",
//   "Zosia",
//   "Krystian",
//   "Kasia",
//   "Sebastian",
//   "Basia",
// ];

// // const firstName = names[0];
// // console.log(firstName[firstName.length - 1]);

// function getGender(name) {
//   const lastChar = name[name.length - 1];
//   if (lastChar === "a") {
//     return "female";
//   }

//   return "male";
// }

// const namesMapped2 = names.map((name, index) => {
//   return {
//     name: name,
//     gender: getGender(name),
//   };
// });

// // const namesMapped = [];
// // for (i = 0; i < names.length; i++) {
// //   const name = names[i];
// //   const person = {
// //     name: name,
// //     gender: getGender(name),
// //   };

// //   namesMapped.push(person);
// // }

// // console.log(namesMapped);
// console.log(namesMapped2);

// function warmWelcome(person) {
//   const join = person.gender === "female" ? "dołączyłaś" : "dołączyłeś";

//   const welcome = `Witaj ${person.name}, bardzo nam miło, że do nas ${join}`;
//   console.log(welcome);
// }

// for (let i = 0; i < namesMapped2.length; i++) {
//   warmWelcome(namesMapped2[i]);
// }

// Array.prototype.filter = function (callbackFn) {
//   const results = [];
//   for (i = 0; i < this.length; i++) {
//     if (callbackFn(this[i])) {
//       results.push(this[i]);
//     }
//   }

//   return results;
// };

// const namesFiltered = namesMapped2.filter(
//   (person) => person.gender === "female"
// );

// console.log(namesFiltered);

// ZAKOMENTOWANE JEST ZROBIONE ZA POMOCĄ PĘTLI FOR

// --------------------------------------------------------REKURENCJA
// zadanie7
// const numbers = [2, 4, 5, 67, 122, 456];

// const highestNumber = (arr, index, topValue) => {
//   if (arr.length === index) {
//     return topValue;
//   }

//   if (arr[index] > topValue) {
//     return highestNumber(arr, index + 1, arr[index]);
//   }
//   return highestNumber(arr, index + 1, topValue);
// };

// console.log(highestNumber(numbers, 0, 0));

//  ---------------------------------------TO SAMO ZADANIE CO WYŻEJ ALE ZA POMOCĄ REDUCE
// const numbers = [2, 4, 5, 67, 123, 45];

// const result = numbers.reduce((result, current) => {
//   if (current > result) {
//     return current;
//   }
//   return result;
// });
// console.log(result);

//  ZADANIE 8
// const array = [2, 5, 8, 3, 6, 12, 6, 4];
// console.log(Math.max(...array));

// ZADANIE 10
const array = [4, 6, 7, 5, 12, 1, 7, 5, 6, 3, 5, 6, 4, 2];

const arrayWithoutDuplications = array.reduce((result, current) => {
  if (result.indexOf(current) < 0) {
    result.push(current);
  }
  return result;
});

console.log(arrayWithoutDuplications);
