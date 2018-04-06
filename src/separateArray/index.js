const separateArray = (list_numbers, number) => {
	for (let i=1; i<list_numbers.length; i++) {
		const equals = countEqualNumbers(list_numbers.slice(0, i), number)
		const diferents = countDiferentNumbers(list_numbers.slice(i), number)
		if (equals === diferents) {
			return i
		}
	}
	return -1	
}

const countEqualNumbers = (numbersArray, number) => {
	let count = 0
	for (let i = 0; i<numbersArray.length; i++) {
		if (numbersArray[i]===number) {
			count++
		}
	}
	return count
}

const countDiferentNumbers = (numbersArray, number) => {
	let count = 0
	for (let i = 0; i<numbersArray.length; i++) {
		if (numbersArray[i]!==number) {
			count++
		}
	}
	return count
}

module.exports = separateArray