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
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(element => element.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);
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
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// ];

// const email = `sharlenebush@tubesys.com`;

// const getUserWithEmail = users.find(user => user.email === email);

// console.log(getUserWithEmail);
// TASK ==============================================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);

// console.log(`1st even`, eachElementInFirstIsEven);
// console.log(`1st odd`, eachElementInFirstIsOdd);
// console.log(`2nd even`, eachElementInSecondIsEven);
// console.log(`2nd odd`, eachElementInSecondIsOdd);
// console.log(`3rd even`, eachElementInThirdIsEven);
// console.log(`3rd odd`, eachElementInThirdIsEven);

// TASK ==============================================
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: true,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// ];

// const isEveryUserActive = users.every(({ isActive }) => isActive);
// console.log(isEveryUserActive);
// TASK ==============================================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

// console.log(`1st even`, anyElementInFirstIsEven);
// console.log(`1st odd`, anyElementInFirstIsOdd);
// console.log(`2nd even`, anyElementInSecondIsEven);
// console.log(`2nd odd`, anyElementInSecondIsOdd);
// console.log(`3rd even`, anyElementInThirdIsEven);
// console.log(`3rd odd`, anyElementInThirdIsEven);

// TASK ==============================================
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: true,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: false,
// 		balance: 3821,
// 		gender: "female",
// 	},
// ];

// const isAnyUserActive = users.some(({ isActive }) => isActive);

// console.log(isAnyUserActive);
// TASK ==============================================
// const players = {
// 	mango: 1270,
// 	poly: 468,
// 	ajax: 710,
// 	kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((totalTime, time) => {
// 	totalTime = totalTime + time;
// 	return totalTime;
// }, 0);

// console.log(totalPlayTime);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

// TASK ==============================================

// const players = [
// 	{ name: "Mango", playtime: 1270, gamesPlayed: 4 },
// 	{ name: "Poly", playtime: 469, gamesPlayed: 2 },
// 	{ name: "Ajax", playtime: 690, gamesPlayed: 3 },
// 	{ name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// // 1. Rozraxuvaty czas dla kozhnoho hravtsia
// // 2. Zrobyty total
// let gameTimePerPlayer = 0;

// const totalAveragePlaytimePerGame = players.reduce((averageTime, gameTime) => {
// 	gameTimePerPlayer = gameTime.playtime / gameTime.gamesPlayed;
// 	console.log(gameTimePerPlayer);
// 	averageTime += gameTimePerPlayer;
// 	return averageTime;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

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
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// ];

// const calculateTotalBalance = users.reduce((totalBalance, usersBalance) => {
// 	totalBalance += usersBalance.balance;
// 	return totalBalance;
// }, 0);

// console.log(calculateTotalBalance);

// const getTotalFriendCount = users.reduce((totalFriends, friendsCount) => {
// 	// console.log(totalFriends);
// 	// console.log(friendsCount.friends.length);
// 	totalFriends += friendsCount.friends.length;
// 	return totalFriends;
// }, 0);

// console.log(getTotalFriendCount);

// TASK ==============================================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// TASK ==============================================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);
// TASK ==============================================
// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
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

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.table(sortedByDescentingRating);
// TASK ==============================================
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 5811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// ];

// const sortByAscendingBalance = [...users].sort((a, b) => a.balance - b.balance);

// console.log(sortByAscendingBalance);

// const sortByDescendingFriendCount = [...users].sort((a, b) => b.friends.length - a.friends.length);

// console.table(sortByDescendingFriendCount);

// const sortByName = [...users].sort((a, b) => a.name.localeCompare(b.name));

// console.table(sortByName);
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
// 	{
// 		title: "The Dreams in the Witch House",
// 		author: "Howard Lovecraft",
// 		rating: 8.67,
// 	},
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
// 	.sort((a, b) => a.author.localeCompare(b.author))
// 	.filter(author => author.rating > MIN_BOOK_RATING)
// 	.map(author => author.author);

// console.table(names);
// TASK ==============================================
// const users = [
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "female",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// ];

// const getSortedFriends = users
// 	.flatMap(friend => friend.friends)
// 	.filter((element, index, array) => array.indexOf(element) === index)
// 	.sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends);
// const gender = `female`;

// const getTotalBalanceByGender = users.reduce((acc, element) => {
// 	if (element.gender === gender) {
// 		acc += element.balance;
// 	}
// 	return acc;
// }, 0);

// OR -------------------------
// const getTotalBalanceByGender = users
// 	.filter(user => user.gender === gender)
// 	.reduce((acc, element) => (acc += element.balance), 0);

// console.log(getTotalBalanceByGender);
// TASK THIS ==============================================
// const pizzaPalace = {
// 	pizzas: ["Supercheese", "Smoked", "Four meats"],
// 	// Change code below this line
// 	checkPizza(pizzaName) {
// 		return this.pizzas.includes(pizzaName);
// 	},
// 	order(pizzaName) {
// 		const isPizzaAvailable = this.checkPizza(pizzaName);

// 		if (!isPizzaAvailable) {
// 			return `Sorry, there is no pizza named «${pizzaName}»`;
// 		}

// 		return `Order accepted, preparing «${pizzaName}» pizza`;
// 	},
// 	// Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Big Mike"));
// TASK ==============================================
// const customer = {
// 	username: "Mango",
// 	balance: 24000,
// 	discount: 0.1,
// 	orders: ["Burger", "Pizza", "Salad"],
// 	// Change code below this line
// 	getBalance() {
// 		return this.balance;
// 	},
// 	getDiscount() {
// 		return this.discount;
// 	},
// 	setDiscount(value) {
// 		this.discount = value;
// 	},
// 	getOrders() {
// 		return this.orders;
// 	},
// 	addOrder(cost, order) {
// 		this.balance -= cost - cost * this.discount;
// 		this.orders.push(order);
// 	},
// 	// Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// // TASK ==============================================
// const historyService = {
// 	orders: [
// 		{ email: "jacob@hotmail.com", dish: "Burrito" },
// 		{ email: "solomon@topmail.net", dish: "Burger" },
// 		{ email: "artemis@coldmail.net", dish: "Pizza" },
// 		{ email: "solomon@topmail.net", dish: "Apple pie" },
// 		{ email: "jacob@hotmail.com", dish: "Taco" },
// 	],
// 	// Change code below this line
// 	getOrdersLog() {
// 		return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
// 	},
// 	getEmails() {
// 		const emails = this.orders.map(order => order.email);
// 		const uniqueEmails = new Set(emails);
// 		return [...uniqueEmails];
// 	},
// 	getOrdersByEmail(email) {
// 		return this.orders.filter(order => order.email === email);
// 	},
// 	// Change code above this line
// };
// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

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
