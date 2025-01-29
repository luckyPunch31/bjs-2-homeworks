function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = arr[0];
	let avg = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (i = 1; i < arr.length; i++) {
		sum += arr[i];

		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < min) {
			min = arr[i];
		}
	}

	avg = parseFloat((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	}

	const sum = arr.reduce(function(currentSum, currentNumber) {
		return currentSum + currentNumber;
	}, 0)

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else sumOddElement += arr[i];

	}

	return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {

	if (arrOfArr.length === 0) return 0;

	let maxWorkerResult = -Infinity;
	for (const arr of arrOfArr) {
		const result = func(...arr);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}