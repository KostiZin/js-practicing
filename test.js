// let a = 5
// let b = 4
// c = a + b
// console.log(c);

// let name = "Kostia";
// console.log(name.length)

//

// function longestString() {
//       let longest = "";

//       for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i].length > longest.length) {
//           longest = arguments[i];
//         }
//       }

//       return longest;
//     }
//     console.log(longestString(`1`, `12`, `2`, `53535`));

// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// planets.push("Saturn", "Uranus", "Neptune");

// console.log(planets);

// function createArrayOfNumbers(min, max) {
//     const numbers = [];

//   numbers.push(min, max);

//     return numbers;
//   }
//   console.log(createArrayOfNumbers(8, 10));

// const fruits = ["apple", "orange", "banana", "onion", "kiwi"];

// for (let index = 0; index < fruits.length; index += 1) {
//   console.log(`${index}: ${fruits[index]}`);
// }

// total = 0

// for (let i = 1; i <= 10; i += 2) {

//   console.log(i);
//   total = total + i;
//   console.log(`Total is ${total}`);
// }

// console.log(`Total is ${total}`);

// let value = 3;
// let numbers = [1, 2, 3, 4, 5];

// function filterArray(numbers, value) {
// 	for (let i = 0; i > value; i += 1) {
// 		if
// 	}
// }
// console.log(numbers);
// let array1 = [1, 2, 3];
// let array2 = [2, 4];

// function getCommonElements(array1, array2) {
//   let includeBoth = [];
//   let first = [];

//   for (let i = 0; i <= array1.length; i += 1) {
//     first = i;
//   }

//   for (let k = 0; k <= array2.length; k += 1) {
//     console.log(k);
//   }
//   console.log(first);
//   console.log(includeBoth);
// }
// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
// 	console.log(planet);
// }
// let order = [12, 85, 37, 4];

// let total = 0;

// for (let i of order) {
// 	total += i;
// }

// console.log(total);

// let start = 3;
// let end = 11;

// let newNumbers = [];

// for (let i = start; i <= end; i += 1) {
// 	if (i % 2 === 0) {
// 		newNumbers.push(i);
// 	}
// }
// console.log(newNumbers);

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
// 	if (i % 5 === 0) {
// 		number = i;
// 		break;
// 	}
// }
// console.log(number);

// let start = 2;
// let end = 6;
// let divisor = 5;

// // let number;

// for (let i = start; i < end; i += 1) {
// 	if (i % divisor === 0) {
// 	}
// 	retunrconsole.log(i);
// }

// 1. var
// let array = [1, 2, 3, 4, 5];
// let value = 3;
// // let includedNumber = includedNumber.b;
// // 2. cycle
// for (const i of array) {
// 	// includedNumber = i;
// 	// 3. if includes
// 	if (value === i) {
// 		console.log(true);
// 	}
// }
// console.log(i);

// Count the sum of the purchase

// const cart = [54, 28, 105, 70, 92, 17, 120];

// FOR

// let total = 0;
// 1. check all the values from the massive
// for (let i = 0; i < cart.length; i += 1) {
// console.log(cart[i]);

// 	total += cart[i];
// }
// console.log(total);
// 2. sum up all the values from the massive

// FOR...OF

// for (const sum of cart) {
// 	total += sum;
// }

// console.log(`Total: `, total);

// Add 20% of tax
// const cart = [54, 28, 105, 70, 92, 17, 120];

// let newCart = [];
// for (let i = 0; i < cart.length; i += 1) {
// 	// console.log(cart[i]);
// 	newCart = Math.round(cart[i] * 1.1);
// 	// console.log(`Tax: `, tax);

// 	// total = newCart;
// 	console.log(`Total + tax: `, newCart);
// }

// OR
// const cart = [54, 28, 105, 70, 92, 17, 120];

// for (let i = 0; i < cart.length; i += 1) {
// 	// console.log(cart[i]);
// 	cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(`Total + tax: `, cart);

// Write function calculateTotalPrice(items) that takes th emassive of prices and returns the sum

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let total = 0;

// for (const value of cart) {
// 	total += value;
// }

// console.log(`Total: `, total);

// const calculateTotalPrice = function (items) {
// 	console.log(`items inside the function: `, items);

// 	let total = 0;

// 	for (const item of items) {
// 		total += item;
// 	}
// 	return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// TASK

// write func logItems(items) for checking and login a massive (not return)

//TASK X

// Psevdomasyv arguments

// Jak zrobic masyw z psevdomasywa: OLD method

// const fn = function () {
// 	console.log(arguments);

// 	const args = Array.from(arguments);
// 	console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// Jak zrobic masyw z psevdomasywa: NEW method

// const fn = function (...args) {
// 	console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// we add ...rest ONLY at the end

// const fn = function (a, b, c, ...args) {
// 	console.log(`${a} ${b} ${c}`);
// 	console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);
