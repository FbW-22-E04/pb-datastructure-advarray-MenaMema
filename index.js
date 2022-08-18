const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const total = orders.reduce((total, item) => {
  return total + item.amount;
}, 0);

console.log(total);

console.log("-----------------------------------------------");

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const newArray = arrayOfNumbers.map((item) => item + 1);
console.log(newArray);

console.log("-----------------------------------------------");

function filterEvens(arr) {
  let evenNumbers = arr.filter((item) => item % 2 === 0);
  console.log(evenNumbers);
}

filterEvens([1, 2, 3, 11, 12, 13]); //returns [2,12]
filterEvens([22, 2, 31, 110, 6, 13]); //returns [22,2,110,6]

console.log("-----------------------------------------------");

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterItems(arr, letter) {
  const items = arr.filter((item) => item.includes(letter));
  return items;
}

console.log(filterItems(friends, "ka")); // ["Rika"];
console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];

console.log("-----------------------------------------------");

function sum(arr) {
  const sumNumbers = arr.reduce((total, item) => {
    return total + item;
  }, 0);

  console.log(sumNumbers);
}

sum([1, 2, 3, 4, 5]); //returns 15
sum([6, 7, 7]); //returns 20

console.log("-----------------------------------------------");

const square = [1, 2, 3, 4, 5];

const newSquare = square.map((item) => item * item);

console.log(newSquare);
