// Count  the sum of all even numbers

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;

// // 1. check the massive one by one
// for (const number of numbers) {
// 	// 2. mark the even numbers
// 	if (number % 2 === 0) {
// 		total += number;
// 	}
// }
// // 3. find total
// console.log(`Total: `, total);

// for (let i = 0; i < numbers.length; i += 1) {
// 	const number = numbers[i];

// 	if (number % 2 === 0) {
// 		total += number;
// 	}
// }
// console.log(`Total: `, total);

// OR vice-verse logic

// 1. check the massive one by one
for (const number of numbers) {
	// 2. mark the even numbers
	if (number % 2 !== 0) {
		console.log(`Skip this iteration: `, number);
		continue;
	}

	total += number;
}
// 3. find total
console.log(`Total: `, total);
