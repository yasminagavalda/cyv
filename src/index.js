Object.prototype.myIndexOf = function (searchValue, fromIndex=0) {
	for (let i=fromIndex; i<this.length; i++) {
		if (this[i] === searchValue) {
			return i
		}
	}
	return -1
}

module.exports = Object
