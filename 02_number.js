// 01 - Number


// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3

// console.log('Number.MAX_SAFE_INTEGER: ', Number.MAX_SAFE_INTEGER);
// console.log('Number.MIN_SAFE_INTEGER: ', Number.MIN_SAFE_INTEGER);
// console.log('Number.MAX_VALUE: ', Number.MAX_VALUE);
// console.log('Number.MIN_VALUE: ', Number.MIN_VALUE);
// console.log('Number.POSITIVE_INFINITY: ', Number.POSITIVE_INFINITY);
// console.log('Number.NEGATIVE_INFINITY: ', Number.NEGATIVE_INFINITY);
// console.log(isFinite(Infinity));
//
// console.log(Number.NaN); // специальное значение: Not A Number
// console.log(typeof NaN);
// console.log(2 / undefined);
// console.log(2 / 'undefined');
// const weird = 2 / undefined
// console.log(isNaN(weird));
//
// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(Number.parseFloat(stringFloat) + 2)

// работа с дробными числами
// console.log(0.4 + 0.2) // 0.6000000000000001
// console.log(parseFloat((0.4 + 0.2).toFixed(2)))

// 02 - BigInt

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(typeof 90071992547409919999);
//
// console.log(typeof 90071992547409919999n);
//
// console.log(90071992547409919999n - 9007199254740991999n);
// console.log(-9007199254740991999n);
// // console.log(-9007199254740991999.223n);  // error
//
// // console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)


// 03 - Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.random())

// example
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42))