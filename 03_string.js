// String

// const name = 'vld'
// console.log(typeof name)
//
// const age = 27
//
// const output = `Меня зовут ${name}`
// console.log(output);

// const name = 'vld'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('ld'))
// console.log(name.indexOf('!')) // -1
// console.log(name.startsWith('V'))
// console.log(name.endsWith('ld'))
// console.log(name.repeat(3))

// const string = '     password    '
// console.log(string)
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())


function logPerson(s, name, age) {
    console.log(s, name, age)
    if (age < 0) age = 'еще не родился'
    return `${s[0]} ${name} ${s[1]} ${age}${s[2]}`
}

const personName = 'Vld'
const personAge = 27

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`

console.log(output);




