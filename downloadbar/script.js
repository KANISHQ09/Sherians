const btn = document.querySelector('button')
const grow = document.querySelector('.grow')
const h1 = document.querySelector('h1')

let plus = 0
num =  Math.floor(Math.random()*100)

btn.addEventListener('click',()=>{
    let gw = setInterval(() => {
        plus++
        grow.style.width = plus + '%'
        h1.innerHTML = plus + '%'
    },num);

    setTimeout(()=>{
        clearInterval(gw)
        btn.innerHTML = 'Downloaded'
        btn.style.backgroundColor = 'rgb(15, 196, 30)'
        btn.style.pointerEvents = 'none'
    },num*100)
})