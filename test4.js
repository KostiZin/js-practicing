// TASK 1

// об“єднати масиви в один рядок by using for and join (comma)

// const friends = [`Mango`, `Poly`, `Kiwi`, `Apple`];

// FOR

// let string = "";

// for (const friend of friends) {
// 	string += friend + ",";
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// OR

// let string = friends.join(",");

// console.log(string);

// TASK 2

// Напиши скрипт який замінює регістр кожного символа (JavaScript to jAVAsCRIPT)

// const string = `FgyruTGF`;
// let letters = string.split(``);
// // create a new string
// let invertedString = ``;

// for (let letter of letters) {
// 	// if (letter === letter.toLowerCase()) {
// 	// 	invertedString += letter.toUpperCase();
// 	// } else {
// 	// 	invertedString += letter.toLowerCase();
// 	// }

// 	// OR

// 	invertedString += letter === letter.toLocaleLowerCase() ? letter.toLocaleUpperCase() : letter.toLocaleLowerCase();
// }
// console.log(invertedString);

// TASK 3

// To do slug in URL from an article's name.
// We have only letters and spaces

// 1. Normilize the string
// 2. Cut the string by words
// 3. Connect words with -

//

// let slug = title.toLowerCase().split(" ").join("-");
// console.log(slug);

//  OR

// let normilizedString = title.toLowerCase();
// let words = normilizedString.split(" ");
// let slug = words.join("-");
// console.log(slug);

// TASK 4
//  Find a sum of elements of two massives

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// // I want to connect two massives

// let arrays = array1.concat(array2);
// let total = 0;

// // find a sum

// for (const array of arrays) {
// 	total += array;
// }

// console.log(total);

// TASK 5

// SPLICE() method

// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];

// DELETE BY INDEX (indexOf)

// const cardToRemove = "card-3";

// const indexCards = cards.indexOf(cardToRemove);
// cards.splice(indexCards, 1);

// console.log(indexCards);
// console.log(cards);

// INSERT BY INDEX

// const cardToInsert = "card-6";
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.log(cards);

// UPDATE BY INDEX

// const cardToUpdate = "card-4";
// const indexCard = cards.indexOf(cardToUpdate);

// console.log(indexCard);
// cards.splice(3, 1, "updated card-4");

// console.log(cards);

// OBJECTS =================================================
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   apartment.area = 60;
//   apartment.rooms = 3;

//   apartment.location = {}
//   apartment.location.city = "Kingston";
// apartment.location.country = "Peru";

//   console.log(apartment);

// TASK =================================================

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// TASK ===============================================

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// TASK ================================================

// const defaultSettings = {
// 	theme: "light",
// 	public: true,
// 	withPassword: false,
// 	minNumberOfQuestions: 10,
// 	timePerQuestion: 60,
// };
// const overrideSettings = {
// 	public: false,
// 	withPassword: true,
// 	timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// TASK =============================================

// function makeTask(data) {
// 	const completed = false;
// 	const category = "General";
// 	const priority = "Normal";
// 	// Change code below this line

// 	let group = {
// 		completed,
// 		category,
// 		priority,
// 	};
// 	const finalObject = { ...group, ...data };
// 	return finalObject;
// 	// Change code above this line
// }

// console.log(makeTask({ text: "Buy bread" }));
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));

// TASK =================================================

// Change code below this line
// function add(...args) {
// 	// console.log(rest);
// 	let total = 0;

// 	for (const number of args) {
// 		total += number;
// 	}

// 	return total;
// 	// Change code above this line
// }

// console.log(add(32, 6, 13, 19, 8));

// TASK ==========================================

// function addOverNum(firstNumber, ...args) {
// 	let total = 0;

// 	for (const arg of args) {
// 		if (firstNumber < arg) {
// 			total += arg;
// 		}
// 	}

// 	return total;
// 	// Change code above this line
// }

// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// TASK ==============================================

// function findMatches(firstData, ...args) {
// 	// console.log(args);
// 	// console.log(firstData);

// 	const matches = []; // Don't change this line
// 	for (const arg of args) {
// 		console.log(arg);
// 		if (firstData.includes(arg)) {
// 			matches.push(arg);
// 		}
// 	}

// 	// Change code above this line
// 	return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5, 7], 1, 8, 2, 7, 458));

// TASK =================================================
// const bookShelf = {
// 	// Change code below this line
// 	books: ["The last kingdom", "The guardian of dreams"],
// 	getBooks() {
// 		return "Returning all books";
// 	},
// 	addBook(bookName) {
// 		return `Adding book ${bookName}`;
// 	},
// 	removeBook(bookName) {
// 		return `Deleting book ${bookName}`;
// 	},
// 	updateBook(oldName, newName) {
// 		return `Updating book ${oldName} to ${newName}`;
// 	},

// 	// Change code above this line
// };
// console.log(bookShelf.removeBook("Red sunset"));

// TASK =========================================

// const bookShelf = {
// 	books: ["The last kingdom", "Haze", "The guardian of dreams"],
// 	updateBook(oldName, newName) {
// 		// Change code below this line
// 		let indexOfName = this.books.indexOf(oldName);
// 		// console.log(indexOfName);

// 		this.books.splice(indexOfName, 1, newName);
// 		return this.books;

// 		// Change code above this line
// 	},
// };

// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);

// TASK ==========================================

// const atTheOldToad = {
// 	potions: [
// 		{ name: "Speed potion", price: 460 },
// 		{ name: "Dragon breath", price: 780 },
// 		{ name: "Stone skin", price: 520 },
// 	],

// 	addPotion(newPotion) {
// 		for (let potion of this.potions) {
// 						if (potion.name === newPotion.name) {
// 				return "Error! Potion " + newPotion.name + " is already in your inventory!";
// 			}
// 		}
// 		this.potions.push(newPotion);
// 	},
// };

// 	removePotion(potionName) {
// 		for (let potion of this.potions.name) {
// 			console.log(potion);
// 			let indexPotion = this.potion.name.indexOf(potionName.name);
// 			console.log(indexPotion);
// 		}
// 	},
// };
// 	const potionIndex = this.potions.indexOf(potionName);

// 	if (potionIndex === -1) {
// 		return `Potion ${potionName} is not in inventory!`;
// 	}

// 	this.potions.splice(potionIndex, 1);
// },
// 	updatePotionName(oldName, newName) {
// 		const potionIndex = this.potions.indexOf(oldName);

// 		if (potionIndex === -1) {
// 			return `Potion ${oldName} is not in inventory!`;
// 		}

// 		this.potions.splice(potionIndex, 1, newName);
// 	},
// 	// Change code above this line

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
