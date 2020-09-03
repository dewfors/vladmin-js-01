const person = {
    name: 'Vld',
    age: 27,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    'complex key': 'Complex value',
    ['key_' +(1 + 3)]: 'Computed key',
    greet(){
        console.log('greet from person')
    },
    info(){
        console.info('Информация про человека по имени: ' + this.name)
    }
}

console.log(person.name)
console.log(person['complex key'])
console.log(person.key_4)
person.greet()

console.log(person);

// Удаление свойства объекта
delete person['key_4']
console.log(person);

// Деструктуризация
const {name, age: personAge, languages} = person
console.log(name, personAge, languages)

// Итерация по ключам объекта
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// Получение ключей объекта
// получаем массив со значениями ключей
const keys = Object.keys(person)
console.log(keys);

keys.forEach((key) =>{
    console.log(key);
})


person.info()


// Context
const logger = {
    keys(){
        console.log('Object keys: ' + Object.keys(this))
    },
    keysAndValues(){
        Object.keys(this).forEach(key =>{
            console.log(`${key}: ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false){
        if (top){
            console.log('-------Start-------')
        }
        Object.keys(this).forEach((key, index,array) =>{
            console.log(`${key}: ${this[key]}`)
            if (between && index !== array.length-1){
                console.log('--------------')
            }
        })
        if (bottom){
            console.log('-------End-------')
        }
    }
}
// создается функция
const bound = logger.keys.bind(person)
// затем вызывается
bound()


// или .call

// создаем и вызываем сразу
logger.keys.call(person)

logger.keysAndValues.call(person)

logger.withParams.call(person, true, true, true)

// или .apply
// принимает всегда два параметра
logger.withParams.apply(person, [true, true, true])