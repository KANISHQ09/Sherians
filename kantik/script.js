let body = document.querySelector('body')
let cursor = document.querySelector('.cursor')
let h1 = document.querySelector('h1')

body.addEventListener('mousemove',function(dets){
    cursor.style.left = dets.x + 'px'
    cursor.style.top = dets.y + 'px'
   
})

h1.addEventListener('mouseenter',()=>{
    cursor.style.scale = '3'
    cursor.style.display = 'flex'
})

h1.addEventListener('mouseleave',()=>{
    cursor.style.scale = '1'
    cursor.style.display = 'none'
})
