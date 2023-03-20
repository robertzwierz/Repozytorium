// const zmienna = document.getElementById("header");
// zmienna.innerHTML = "BUG";
// console.log(zmienna);

// const name = "Robert";
// let age = 20;
// console.log(name, age);
// const surname = "Zwierz";
// const secondName = "Mateusz";
// console.log(name, secondName, surname, age);

// TYPY PROSTE ZMIENNYCH
// const a = 20;
// let b = a;
// b = b + 10;
// console.log(a);
// console.log(b);

// let surname;
// surname = null;
// surname = undefined;
// const number = 10;
// const value = true;
// const value2 = false;

// TYPY ZŁOŻONE ZMIENNYCH
// let arrayOfNumbers = [];
// arrayOfNumbers = [1, 2, 3, 4, 5, "string"];
// const sum = 10 + arrayOfNumbers[4];
// arrayOfNumbers[0] = 10;
// arrayOfNumbers[6] = 100;
// arrayOfNumbers.reverse();
// arrayOfNumbers.push(100);
// console.log(arrayOfNumbers, sum);

// const styles = {
//   display: "inline",
//   color: "blue",
//   border: "10px solid black",
//   width: 10,
//   inherited: {
//     fontSize: "10px",
//   },
//   margin: [10, 20, 30, 40],
// };
// styles.border;
// const border = styles.border;
// styles.imie = "Robert";
// console.log(border);
// console.log(styles);

// const shoppingList = ["potato", "tomato", "candy", "onion", "chicken"];
// // dodaje na końcu
// shoppingList.push("milk", "beer");
// // dodaje na początku
// shoppingList.unshift("sugar");
// // alfabetycznie
// shoppingList.sort();
// // usuwa ostatni
// shoppingList.pop();
// // usuwa pierwszy
// shoppingList.shift();
// console.log(shoppingList);

// // ZADANIA Z ARTYKUŁU
// const aboutMe = {
//   pierwszeimie: "Robert",
//   nazwisko: "Zwierz",
//   wiek: 20,
//   szczęśliwaliczba: 12,
// };
// console.log(aboutMe);
// const liczba = aboutMe.szczęśliwaliczba;
// const wiek = aboutMe["wiek"];
// console.log(liczba, wiek);
// // ZADANIA Z ARTYKUŁU

// // OPERATORY PORÓWNANIA
// const wiek = 30;
// let osoby = {
//   Andrzej: 31,
//   Jakub: 25,
//   Krysia: 30,
//   Marysia: 42,
// };
// const weryfikacja = wiek == osoby.Andrzej;
// const weryfikacja2 = wiek == osoby.Jakub;
// const weryfikacja3 = wiek == osoby.Krysia;
// const weryfikacja4 = wiek == osoby.Marysia;
// console.log(weryfikacja, weryfikacja2, weryfikacja3, weryfikacja4);

// const wer = wiek != osoby.Andrzej;
// const wer2 = wiek != osoby.Jakub;
// const wer3 = wiek != osoby.Krysia;
// const wer4 = wiek != osoby.Marysia;
// console.log(wer, wer2, wer3, wer4);

// let check = osoby.Krysia + osoby.Marysia < osoby.Andrzej + osoby.Jakub;
// console.log(check);

// // ZADANIA IF, ELSE
// let dochód = 3500;
// if (dochód > 6000) {
//   console.log("A gdyby tak dodać jeszcze jedno zero do tej kwoty?!");
// } else {
//   console.log("Musimy nad tym jeszcze popracować");
// }

// let age = 15;
// if (age < 5) {
//   console.log("Przedszkolak");
// }
// if (age < 14) {
//   console.log("Uczeń szkoły podstawowej");
// }
// if (age < 18) {
//   console.log("Licealista");
// }
// if (age < 23) {
//   console.log("Student");
// } else {
//   console.log("Karierowicz");
// }

// switch (age) {
//   case age < 5:
//     console.log("Przedszkolak");
//     break;
//   case age < 14:
//     console.log("Uczeń szkoły podstawowej");
//     break;
//   case age < 18:
//     console.log("Licealista");
//     break;
//   case age < 23:
//     console.log("Student");
//     break;
//   case age > 15:
//     console.log("Karierowicz");
//     break;
// }

// let age = 9;
// if (age >= 9 && age <= 24) {
//   console.log("Dziecko zostało przyjęte do żłobka");
// } else {
//   console.log("Dziecko nie zostało przyjęte do żłobka");
// }

// let wynik;
// const number = 2;
// if (number % 2 == 0) {
//   console.log("Liczba parzysta");
// } else {
//   console.log("Liczba nieparzysta");
// }

// const wynik = number % 2 == 0 ? "Liczba parzysta" : "Liczba nieparzysta";
// console.log(wynik);
// // ZADANIA IF, ELSE
