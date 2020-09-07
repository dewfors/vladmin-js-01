const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('h2')
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello') // возвращает всегда первый один элемент

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[h2List.length - 1]

console.dir(h2List)

// console.log(heading)
// console.dir(heading.textContent)


setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1000)
setTimeout(() => {
    addStylesTo(heading2, 'Практикуйся')
}, 2000)

const link = heading3.querySelector('a')

link.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})

setTimeout(() => {
    addStylesTo(link, 'И все получится')
}, 3000)

function addStylesTo(node, text) {
    node.textContent = text
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'blue'
}


heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'red') {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'red'
        heading2.style.backgroundColor = '#000'
    }
})
