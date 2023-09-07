"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		let root = -b / (2 * a);
		arr.push(root);
		return arr;
	} else {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	if (isNaN(percent) || isNaN(percent) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

	const monthlyRate = percent / 100 / 12;
	const payments = amount - contribution;
	const monthlyPayment = payments * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
	const totalMortgage = +((monthlyPayment * countMonths).toFixed(2));

	return totalMortgage;
}