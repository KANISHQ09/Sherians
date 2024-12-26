const btn = document.querySelector('button')
const img1 = document.querySelector('.one')
const img2 = document.querySelector('.two')

btn.addEventListener('click', () =>{
    let img1src = img1.getAttribute('src')
    let img2src = img2.getAttribute('src')

    img1.setAttribute('src',img2src)
    img2.setAttribute('src',img1src)

})
