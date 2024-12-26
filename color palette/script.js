const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const btn = document.querySelector('button')
const h1 = document.querySelector('h1')

btn.addEventListener('click',()=>{
    var c1 = Math.floor(Math.random()*255)
    var c2 = Math.floor(Math.random()*255)
    var c3 = Math.floor(Math.random()*255)

    one.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    two.style.backgroundColor = `rgb(${c1+50},${c2+50},${c3+50})`
    three.style.backgroundColor = `rgb(${c1+100},${c2+100},${c3+100})`
    four.style.backgroundColor = `rgb(${c1+150},${c2+150},${c3+150})`
    five.style.backgroundColor = `rgb(${c1+200},${c2+200},${c3+200})`
    h1.style.color = `rgb(${c1},${c2},${c3})`
    btn.style.backgroundColor = 'transparent'
    btn.style.color = 'black'
})