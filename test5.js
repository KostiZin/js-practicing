// const arr = [1, 2, 3, 6];

// // Mamy funkcje, ktore perebyraje dani

// function each(arr, x) {
// 	let total = 0;
// 	for (const item of arr) {
// 		total = x(total, item);
// 		// console.log(item);
// 	}
// 	return total;
// }

// console.log(each(arr, add));

// console.log(each(arr, sum));

// function add(first, second) {
// 	return first + second;
// }

// function sum(first, second) {
// 	return first * second;
// }

// TASK ==============================================

// function deliverPizza(pizzaName) {
// 	return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
// 	return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
// 	return callback(pizzaName);
// }

// return callback(pizzaName); to jest po prostu zmienna w srodku ktorej moga byc rozne funkcje.

// console.log(makeMessage("Royal Grand", deliverPizza));

// TASK ==============================================

// function makePizza(pizzaName, callback) {
// 	console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// 	callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
// 	console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
// 	return `Eating pizza ${pizzaName}`;
// });

// TASK ==============================================

// const pizzaPalace = {
// 	pizzas: ["Ultracheese", "Smoked", "Four meats"],
// 	order(pizzaName, onSuccess, onError) {
// 		for (let pizza of this.pizzas) {
// 			if (pizza.includes(pizzaName)) {
// 				return onSuccess(pizzaName);
// 			}
// 		}
// 		return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
// 	},
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
// 	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError

// function onOrderError(error) {
// 	return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// TASK ==============================================

// const arr = [1, 2, 9, 45, 5];
// // console.log(arr);

// // item - objekt masywu, ktory mozna iterowac
// // index - indeks masywu
// // array - sam masyw

// arr.forEach(function (item, index, array) {
// 	// console.log(`item`, item);
// 	// console.log(`index`, index);
// 	// console.log(`array`, array);

// 	// chcemy zwiekszyc items w masywie na 2

// 	arr[index] = item * 2;
// 	// bierzemy kazdy index w masywie i zwiekszamy items pod tym indeksem na 2
// 	console.log(arr[index]);
// 	// tu zobaczymy kazde numerki osobno
// });

// console.log(arr);

// tu zobaczymy zmutowany stary masyw z nowymi numerkami

// TASK ==============================================

// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;
// 	// Change code below this line

// 	orderedItems.forEach(function (item) {
// 		totalPrice += item;
// 	});

// 	// Change code above this line
// 	return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// TASK ==============================================

// function filterArray(numbers, value) {
// 	const filteredNumbers = [];
// 	// Change code below this line

// 	numbers.forEach(function (item) {
// 		if (item > value) {
// 			filteredNumbers.push(item);
// 		}
// 	});

// 	// Change code above this line
// 	return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// TASK ==============================================

// function getCommonElements(firstArray, secondArray) {
// 	const commonElements = [];
// 	// Change code below this line

// 	firstArray.forEach(function (item) {
// 		if (secondArray.includes(item)) {
// 			commonElements.push(item);
// 		}
// 	});

// 	return commonElements;
// 	// Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// TASK ==============================================

// Change code below this line
// const calculateTotalPrice = orderedItems => {
// 	let totalPrice = 0;

// 	orderedItems.forEach(item => {
// 		totalPrice += item;
// 	});

// 	return totalPrice;
// };
// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// TASK ==============================================
// const changeEven = (numbers, value) => {
// 	// Change code below this line
// 	let newArray = [];
// 	let newNumber = [...numbers];
// 	// console.log(`new number`, newNumber);

// 	newNumber.forEach(item => {
// 		if (item % 2 === 0) {
// 			item = item + value;
// 		}
// 		newArray.push(item);
// 		// console.log(`new array`, newArray);

// 	});
// 	return newArray;

// };

// Change code above this line

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// TASK ==============================================
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(item => item.length);

// console.log(planetsLengths);
// TASK ==============================================
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(item => item.title);

// console.log(titles);
// TASK ==============================================
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		skills: ["ipsum", "lorem"],
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// 		gender: "female",
// 		age: 34,
// 	},
// ];

// const getUserNames = users.map(item => item.email);

// console.log(getUserNames);
// TASK ==============================================
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(item => !(item % 2));
// const oddNumbers = numbers.filter(item => item % 2);

// console.log(evenNumbers);
// console.log(oddNumbers);
// TASK ==============================================
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		genres: ["adventure", "history"],
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		genres: ["fiction", "mysticism"],
// 	},
// 	{
// 		title: "Redder Than Blood",
// 		author: "Tanith Lee",
// 		genres: ["horror", "mysticism", "adventure"],
// 	},
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// console.log(allGenres);
// console.log(uniqueGenres);
// TASK ==============================================
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);
// TASK ==============================================
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// ];
// // const allFriends = users.flatMap(item => item.friends);
// const getFriends = users
// 	.flatMap(item => item.friends)
// 	.filter((friend, index, array) => array.indexOf(friend) === index);

// console.log(getFriends);
// TASK ==============================================
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// ];

// const getActiveUsers = users.filter(({ isActive }) => isActive);

// console.log(getActiveUsers);
// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================
// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================
// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================
// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================
// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================
// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================
// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================
// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================
// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================

// TASK ==============================================
