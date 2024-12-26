const img = document.querySelector('img')
let moveX = 0
let moveY = 0
document.addEventListener('keydown',function(dets){
    if(dets.code == 'ArrowRight'){
        moveX++
        if(moveX > 87.65) moveX = 87.65
        img.style.left = moveX + '%'
    }
    else if(dets.code == 'ArrowLeft'){
        moveX--
        if(moveX < 0) moveX = 0
        img.style.left = moveX + '%'
    }
    else if(dets.code == 'ArrowDown'){
        moveY++
        if(moveY > 71) moveY = 71
        img.style.top = moveY + '%'
    }
    else if(dets.code == 'ArrowUp'){
        moveY--
        if(moveY < 0) moveY = 0
        img.style.top = moveY + '%'
    }
    else{
        console.log('other key pressed')
    }
})