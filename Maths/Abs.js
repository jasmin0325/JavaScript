/**
 * @function abs
 * @description This script will find the absolute value of a number.
 * @param {number} num - The input integer
 * @return {number} - Absolute number of num.
 * @see https://en.wikipedia.org/wiki/Absolute_value
 * @example abs(-10) = 10
 * @example abs(50) = 50
 * @example abs(0) = 0
 */

function abs(num) {
    const validNumber = +num // converted to number, also can use - Number(num)

    if (Number.isNaN(validNumber)) {
        throw new TypeError('Argument is NaN - Not a Number')
    }

    return validNumber < 0 ? -validNumber : validNumber // if number is less then zero mean negative then it converted to positive. i.e -> n = -2 = -(-2) = 2
}

export { abs }
console.log(abs(-10))
console.log(abs(5))

console.log(abs(-2))