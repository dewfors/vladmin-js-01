// 01 - function

// // Способы создания функций
// // 01 - Function Declaration
// function greet(name) {
//     console.log('Привет - ' + name)
// }
//
// // 02 - Function Expression
// const greet2 = function (name) {
//     console.log('Привет 2 - ' + name)
// }
// const greet3 = function greet3() {}
//
//
// // Функция созданная способом Function Declaration всплывает
// // к ней можно обращаться в любом месте кода
// // например до того как ее создали в коде
//
// // К функции созданной способом Function Expression
// // можно обращаться только после ее инициализации
//
// greet('Лена')
// greet2('Лена')
//
// console.log(typeof greet)
// console.dir(greet)


// 02 - Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) clearInterval(interval)
//     else console.log(++counter)
// }, 1000)


// 03 - Стрелочные функции
// const arrow = () => {
//     console.log('text')
// }
// const arrow2 = (name) => {
//     console.log(name)
// }
// // const arrow2 = name => console.log(name)
// // если один параметр - круглые скобки можно опустить
// // если одно действие - фигурные скобки можно опустить
//
// const pow2 = num => num ** 2
//
// console.log(pow2(5));


// 04 - Параметры по умолчанию
// const sum = (a, b = 1) => a + b
//
// console.log(sum(41))
// console.log(sum(41, 4))
//
// const sunAll = (...all) => {
//     console.log(all)
//     let result = 0
//     for (let num of all){
//         result += num
//     }
//     console.log(result);
// }
//
// sunAll(1,2,3,4,5)

// 05 - Замыкания
// Замыкание это явление когда мы из одной функции возвращаем другую
// с сохранением некоторого контекста

function createMember(name) {
    return function (lastName) {
        console.log(name + ' ' + lastName)
    }
}

const logWithLasnName = createMember("Vld")

console.log(logWithLasnName("Minin"))








