// асинхронность
// Event Loop

// const timeout = setTimeout(() => {
//     console.log('after timeout');
// }, 2000)
// clearTimeout(timeout)
//
// const interval = setInterval(() => {
//     console.log('after interval');
// }, 2000)
// clearInterval(interval)


// const delay =(callback, wait = 1000) =>{
//     setTimeout(callback, wait)
// }
// delay(() => {
//     console.log('after 2 seconds')
// }, 2000)


const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
            // reject('Чтото пошло не так')
        }, wait)
    })
    return promise
}

// delay(2500)
//     .then(()=>{
//         console.log('after 2 seconds');
//     })
//     .catch(err => console.error('Error: ' + err))
//     .finally(()=> console.log('Finelly'))


const getData = () => new Promise(resolve => resolve([
    1,1,2,3,5,8,13
]))

// getData().then(data => console.log(data))

async function asyncExample() {
    try{
        await delay(3000)
        const data = await getData()
        console.log('Data: ' + data);
    } catch (e) {
        console.log(e);
    } finally {
        console.log('finaly');
    }
}

asyncExample()