Object.prototype.myIndexOf = function (searchValue, fromIndex=0) {
	for (let i=fromIndex; i<this.length; i++) {
		if (this[i] === searchValue) {
			return i
		}
	}
	return -1
}

module.exports = Object

const countEquals = (numbersArray, number) => {
	let count = 0
	for (let i = 0; i<numbersArray.length; i++) {
		if (numbersArray[i]===number) {
			count++
		}
	}
	return count
}

const countDiferents = (numbersArray, number) => {
	let count = 0
	for (let i = 0; i<numbersArray.length; i++) {
		if (numbersArray[i]!==number) {
			count++
		}
	}
	return count
}

const separateArray = (list_numbers, number) => {
	for (let i=1; i<list_numbers.length; i++) {
		const equals = countEquals(list_numbers.slice(0, i), number)
		const diferents = countDiferents(list_numbers.slice(i), number)
		if (equals === diferents) {
			return i
		}
	}
	return -1	
}

module.exports = separateArray