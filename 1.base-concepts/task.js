"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let des;
	des = (b ** 2) - 4 * a * c;
	if (des === 0) {
		let x1;
		x1 = -b / (2 * a);
		arr.push(x1);
	} else if (des > 0) {
		let x1, x2;
		x1 = (-b + Math.sqrt(des)) / (2 * a);
		x2 = (-b - Math.sqrt(des)) / (2 * a);
		arr.push(x1, x2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let monthlyPayment;
	let P;
	let res;
	let S;

	P = (percent / 100) / 12;
	S = amount - contribution;

	monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
	res = monthlyPayment * countMonths;
	res = parseFloat(res.toFixed(2));


	return res;
}



