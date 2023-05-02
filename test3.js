const numbers = [45, 6, 56, 67, 7, 9, 23, 5];
let biggestNumber = numbers[0];

for (const number of numbers) {
	// console.log(number);

	if (number > biggestNumber) {
		biggestNumber = number;
	}
}
console.log(`The biggest number is `, biggestNumber);
