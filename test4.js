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


// OBJECTS
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

