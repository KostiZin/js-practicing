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


// TASK

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }

// const something = Object.keys(feedback);

// console.log(something);

// MASYW OBJEKTOW

// const friends = [
//     {name: `Mango`, online: false},
//     {name: `Kiwi`, online: true},
//     {name: `Poly`, online: true},
// ];

// console.table(friends);

// for (friend of friends) {
//     // console.log(friend);

//     console.log(friend.name);

//     // jesli chcesz zobaczyc osobne dane w pewnym kluczu (w tym przypadku zobaczymy dane z klucza name)

//     friend.something = 100;
//     // kiedy mamy object w masywie to za pomoca for...of MOZEMY zmieniac dane w objekcie. BO kiedy for...of przeglada objeckty to on daje nam link, a nie osobny number

    
// }
// console.table(friends);

// TASK

//   const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

//   const keys = [];
//   const values = [];

// for (const key in apartment) {
//    keys.push(key);
// values.push(apartment[key]);
    
// }
// console.log(keys);
// console.log(values);



// TASK


// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//   for (const keys in object) {

//    console.log(keys);
    
//   }
//     // Change code above this line
//     console.log(propCount);
//   }


//   let object = { mail: 'poly@mail.com', isOnline: true, score: 500 };
// let total = 0;
// let keys = [];

//   for (const key in object) {
// // keys.push(key);
// // total = keys.length;
// total =

//   }
//   console.log(keys);
//   console.log(total);


//   console.log(object);
  


// TASK

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);

//   console.log(keys);
  
//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     values.push(apartment[key]);
//     console.log(values);
//   }

//   const book = {
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
  
//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     console.log(book[key]);
//   }


// TASK
// let object = { mail: 'poly@mail.com', isOnline: true, score: 500 };

//     let propCount = 0;
  
//     const keys = Object.keys(object);

//     propCount = keys.length;
 
  
//     console.log(propCount);
//     // Change code above this line
  

//  TASK

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
  
//   const hexColors = [];
//   const rgbColors = [];

//   for (const color of colors) {
//     console.log(color.hex);

//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
      
//   }
//   console.log(hexColors);
//   console.log(rgbColors);



// TASK

//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
// //   let price = 0;
  
//     for (const product of products) {
//       console.log(product);
    
//       if (productName === product.name) {
//           return product.price;
//     //   } else {
//     //     // return product.price;
//     //   }
    
//     };
    
//     // return price;
//     // Change code above this line
//   }
//   return null;
// }
   
  
  
//  console.log(getProductPrice('Scanner'));
  


// TASK

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
    
//     let values = [];

//     for (const product of products) {
        
//         if (product[propName]) {
//         values.push(product[propName]);
//     }
        
//     }
//     return values;
//   }   

//     // Change code above this line
  


//   console.log(getAllPropValues("name"));

// TASK

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
//   let totalPrice = 0;

//   for (product of products) {
// if (productName === product.name) {
//     totalPrice = product.price * product.quantity;
// }
//   }
  
//   return totalPrice;
//     // Change code above this line
//   }

//   console.log(calculateTotalPrice("Radar"));