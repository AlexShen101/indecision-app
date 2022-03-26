const multiplier  = {
    numbers: [10, 20, 30],
    multiplyBy: 2,

    multiply() {
        return this.numbers.map((number) => number*this.multiplyBy);
    }
};

function multiply2(numberArr, multiplyBy) {
    return numberArr.map((number) => number*multiplyBy);
}

console.log(multiplier.multiply());