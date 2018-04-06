require('../src')
const assert = require('assert')

suite('myIndexOfMethod', () => {

	test('Should return -1 when number is not found in array', () => {
		assert.equal(-1, [1,2,3].myIndexOf(4))
	})

	test('Should return -1 when number is not found after de index passed as argument', () => {
		assert.equal(-1, [1,2,3].myIndexOf(1, 1))
	})

	test('Should return 2 when number passed as argument its in index position 2', () => {
		assert.equal(2, [1,2,3].myIndexOf(3))
	})

	test('Should return 4 when number passed as argument its in position 1 and 4 and the index passed as argument its 2', () => {
		assert.equal(4, [1,2,3,1,2,3].myIndexOf(2, 2))
	})

	test('Should return 1 when string passed as argument its in position 1 in array', () => {
		assert.equal(1, ['Hello', 'world'].myIndexOf('world'))
	})

	test('Should return -1 when string passed as argument its not found in string to search', () => {
		assert.equal(-1, 'Hello'.myIndexOf('P'))
	})

	test('Should return -1 when string passed as argument its in lowercase but in string to search its in uppercase ', () => {
		assert.equal(-1, 'Hello'.myIndexOf('h'))
	})

	test('Should return 0 when when the string passed is in index position 0', () => {
		assert.equal(0, 'Hello'.myIndexOf('H'))
	})
})