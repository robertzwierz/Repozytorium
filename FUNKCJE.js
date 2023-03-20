// function triangleArea(base, height) {
//   const area = (1 / 2) * base * height;
//   return area;
// }

// const area = triangleArea(15, 10);
// console.log(area);

// const area2 = triangleArea(50, 100);
// console.log(area2);

// ZADANIE 1
// function sum(a, b) {
//   const suma = a + b;
//   return suma;
// }
// const suma = sum(5, 6);
// console.log(suma);

// ZADANIE 2
// function showAlert(name) {
//   alert(`Witaj $(name)`);
// }

// showAlert(Robert);

// ZADANIE 3
// function yourAge(a) {
//   if (a < 0) {
//     alert("Twój wiek nie może być ujemny");
//   }
//   const age = a * 365;
//   return age;
// }

// const age = yourAge(-7);
// console.log(age);

// ZADANIE 4
// function equ(a, b) {
//   if (a + b == 12 || a == 12 || b == 12) {
//     console.log(true);
//   }
//   const equals = a + b;
//   return equals;
// }
// const equals = equ(12, 10);
// console.log(equals);

// ZADANIE 5
// const names = ["Karol", "Agata", "Tomasz", "Kasia"];

// const checkLetter = (arr, letter) => {
//   //   let containsLetter = true;

//   arr.forEach((name) => {
//     if (name.indexOf(letter) < 0) {
//       console.log(false);
//       //   containsLetter = false;
//     } else {
//       console.log(true);
//     }
//   });

//   return null;
// };
// console.log(checkLetter(names, "a"));

// ZADANIE 6
// const things = ["monitor", "czapka", "plecak", "nóż"];

// function checkArrays(arr, thing) {
//   if (things.indexOf(thing) < 0) {
//     things.push(thing);
//   } else {
//     console.log("element jest w tablicy");
//   }
// }
// console.log(checkArrays(things, "monitor"));
// console.log(things);
// --------------------------------------------------------------------------------------------
// const example = "Sample string";

// for (let i = 0; i < example.length; i++) {
//   console.log(example[i]);
// }
// --------------------------------------------------FUNKCJA STRZAŁKOWA--------------------------------------------------
// const triangleArea = (base, height) => {
//   const area = (1 / 2) * base * height;
//   return area;
// };
// const area = triangleArea(15, 10);
// console.log(area);

// ZADANIE 3
// const halfNumber = (a) => {
//   const half = (1 / 2) * a;
//   return half;
// };
// const half = halfNumber(5);
// console.log(half);

// ZADANIE 4
// const number = (liczba) => {
//   if (liczba > 0) {
//     console.log("Liczba dodatnia");
//   } else if (liczba < 0) {
//     console.log("Liczba ujemna");
//   } else if (liczba == 0) {
//     console.log("liczba równa 0");
//   }
// };
// const num = number(-2);

// ZADANIE 5
// const numbers = (a, b, c) => {
//   const stringA = a.toString();
//   const stringB = b.toString();
//   const stringC = c.toString();

//   if (
//     (a.stringA()[a.toString().length - 1] ===
//       b.toString()[b.toString().length - 1]) ===
//     c.toString()[c.toString().length - 1]
//   ) {
//     return true;
//   }
//   return false;
// };

// const result = numbers(7, 17, 77);
// console.log(result);

// ZADANIE 7
const arr = [
  {
    name: "Adrian",
    age: "23",
    job: "Uber driver",
  },
  {
    name: "Szymon",
    age: "21",
    job: "Mechanik",
  },
  {
    name: "Tadek",
    age: "20",
    job: "Magazynier",
  },
];

const description = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(
      "Mój przyjaciel " +
        array[i].name +
        " to z zawodu " +
        array[i].job +
        " i ma " +
        array[i].age +
        " lat"
    );
  }
};
