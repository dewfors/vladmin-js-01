// Методы массивов

const nums = [1,2,3,4,5,6,7]

const people = [
    {name: 'Vlad', sum: 4200},
    {name: 'Elena', sum: 3500},
    {name: 'Victoria', sum: 1700},
]

const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
console.log(cars);

// Добавление элемента в конец массива
cars.push('Рено')
console.log(cars);

// Добавление элемента в начало массива
cars.unshift('Волга')
console.log(cars);

// Удаление элемента из начала массива
cars.shift()
console.log(cars);

// Удаление элемента из конца массива
cars.pop()
console.log(cars);

// Переворот массива
cars.reverse()
console.log(cars);

// Соединение элементов массива в строку
console.log(cars.join(''))

// Найти элемент массива, хорошо работает с примитивными данными в массиве
// возвращается индекс массива или -1 если не найден
console.log(cars.indexOf('БМВ'));

// аналог findIndex - например для поиска объекта
// получает индекс элемента в массиве
// это цикл по массиву
const index = people.findIndex(function (person) {
    return person.sum === 3500
})
console.log(people[index]);

// Поиск элемента в массиве по условию
// const person = people.find(function (person) {
//     return person.sum === 3500
// })
// const person = people.find((pers) => {
//     return pers.sum === 3500
// })
const person = people.find(pers => pers.sum === 3500)
console.log(person);

// Проверить наличие элемента в массиве
// булево
console.log(cars.includes('Мазда'))

// Преобразование массива в другой массив
const upperCaseCars = cars.map( car => {
    return car.toUpperCase()
})
console.log(upperCaseCars);

// Отфильтровать массив, фильтарция по условию
// возвращает новый массив
filterNums = nums.filter( num => num > 3)
console.log(nums);
console.log(filterNums);


// Задача 1: перевернуть строчку
const text = 'Привет, мы изучаем JavaScript'
const reverceText = text.split('').reverse().join('')
console.log(reverceText);

// Объединение значений массива в одно значение
// Итог по полю в массиве, возможно по условию
// например из массива people просуммировать все суммы, если они больше 2000
// const sumAll = people.reduce( (acc, person) => {
//     if (person.sum > 2000) acc += person.sum
//     return acc
// }, 0)
const sumAll = people
    .filter( person => person.sum > 2000)
    .reduce( (acc, person) => {
    acc += person.sum
    return acc
}, 0)



console.log(people);
console.log(sumAll);



