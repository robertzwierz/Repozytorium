// -----------------------------------------------PĘTLA FOR------------------------------------------------------------
const arrayOfNames = [
  "Bartek",
  "Mateusz",
  "Paulina",
  "Karol",
  "Damian",
  "Gieniu",
  "Zbyszek",
];

// arrayOfNames.push("Andrzej");
// arrayOfNames.unshift("Heniek");

// for (i = 0; i < arrayOfNames.length; i++) {
//   console.log("Cześć " + arrayOfNames[i]);
// }

// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (i = 10; i > 0; i--) {
//   console.log(i);
// }

// ZADANIE 2
// for (i = 0; i < 16; i++) {
//   console.log(i);
// }

// ZADANIE 3
// const arrayOfNumbers = [0, 1, 2, 3, 4, 5];
// for (i = 5; i > -1; i--) {
//   console.log(i);
// }

// ZADANIE 4
// let number = [3, 6, 55];
// let sum = 0;
// for (i = 0; i < number.length; i++) {
//   //   console.log(i)
//   sum = sum + number[i];
// }
// console.log(sum);

// ZADANIE 5
// const arr = [0, 0, 0, 0, 0];
// for (let i = 0; i < 5; i++) {
//   console.log(i, arr[i]);
// }

// ZADANIE 6
// const array = [true, false, false, true, false, true, false, false];
// const array2 = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === true) {
//     array2.push(1);
//     array[i] = 1;
//   } else {
//     array2.push(0);
//     array[i] = 0;
//   }
// }
// console.log(array);
// console.log(array2);

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === true) {
//     array[i] = 1;
//   } else {
//     array[i] = 0;
//   }
// }
// console.log(array);
// console.log(array2);

// for (let i = 0; i < array.length; i++) {
//   array[i] ? (array2[i] = 1) : (array2[i] = 0);
// }
// console.log(array);
// console.log(array2);

// -----------------------------------------------PĘTLA WHILE-----------------------------------------------------------------

// let i = 0;
// while (i < arrayOfNames.length) {
//   console.log("Cześć " + arrayOfNames[i]);
//   i++;
// }

// ZADANIE 1
// let num = 10;
// let i = 0;
// while (i < 11) {
//   console.log(0 + i);
//   i++;
// }

// ZADANIE 3
// let x = 10;
// let i = 0;
// while (i < 10) {
//   x++;
//   i++;
//   console.log(x, i);
// }

// let num = 1;
// while (num < 8) {
//   console.log(num);
//   num += 2;
// }

// ZADANIE 4
// let i = 0;
// while (i < 3) {
//   console.log("hello");
//   i++;
// }
// console.log("bye");

// ----------------------------------------------PĘTLA DO WHILE----------------------------------------------------
// i = 4;
// do {
//   console.log("Cześć " + arrayOfNames[i]);
//   i++;
// } while (i < arrayOfNames.length);

// -------------------------------------------------BREAK----------------------------------------------------------

// for (i = 0; i < arrayOfNames.length; i++) {
//   const name = arrayOfNames[i];
//   console.log("Cześć " + arrayOfNames[i]);

//   if (name === "Karol") {
//     console.log("Karol nie jest w tej klasie");
//     break;
//   }
// }

// -------------------------------------------------CONTINUE-------------------------------------------------------
// for (let i = 0; i < arrayOfNames.length; i++) {
//   const name = arrayOfNames[i];

//   if (name === "Karol") {
//     continue;
//   }

//   console.log("Cześć " + arrayOfNames[i]);
// }

// -----------------------------------------------FOR ...in---------------------------------------------------------
// for (let key in arrayOfNames) {
//   console.log(key);
// }

// for (let key in arrayOfNames) {
//   console.log(arrayOfNames[key]);
// }

// const person = {
//   name: "Robert",
//   age: 21,
//   hobby: "counter-strike",
// };
// for (let key in person) {
//   console.log(key);
//   console.log(person[key]);
// }

// ZADANIE 2
// const informations = {
//   firstName: "Robert",
//   lastName: "Zwierz",
//   age: 21,
//   profession: "Elektryk",
// };

// ZADANIE 3
// const person = {
//   firstName: "Andrzej",
//   lastName: "Kowalski",
//   age: 46,
//   profession: "Hydraulik",
//   sex: "mężczyzna",
// };
// for (let key in person) {
//   console.log(key);
// }

// -------------------------------------------------------FOR ...of---------------------------------------------------------
// for (let i = 0; i < arrayOfNames.length; i++) {
//   const name = arrayOfNames[i];
//   console.log("Cześć " + name);
// }

// for (let name of arrayOfNames) {
//   console.log("Cześć " + name);
// }
