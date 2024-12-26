let btn = document.querySelectorAll('button')
let p = document.getElementById('p')
let card = document.querySelector('.card')

btn.forEach(function(bt){
    bt.addEventListener('mouseover',()=>{
    if (bt.classList.contains('three')){
        p.innerHTML = `<p class="product-range">03<span class="highlight"> - 03</span></p>`
        card.innerHTML = ` <div class="video-wrapper">
                <video autoplay muted loop>
                    <source src="./4vid.webm" type="video/webm">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="opone">
                <p>Offer your customers FSCS protected accounts by leveraging our banking licence. We take care of the
                    banking products so you can focus on creating the business that your customers dream of.</p>
            </div>
            <button class="getbtn">Get Started <i class="ri-arrow-right-up-line"></i></button>`
    }
    else if (bt.classList.contains('two')){
        p.innerHTML = `<p class="product-range">02<span class="highlight"> - 03</span></p>`
        card.innerHTML = ` <div class="video-wrapper">
                <video autoplay muted loop>
                    <source src="./3vid.webm" type="video/webm">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="opone">
                <p>Start processing payments faster and more securely by connecting to the payment schemes via our API.</p>
            </div>
            <button class="getbtn">Get Started <i class="ri-arrow-right-up-line"></i></button>`
    }
    else{
        p.innerHTML = `<p class="product-range">01<span class="highlight"> - 03</span></p>`
        card.innerHTML = ` <div class="video-wrapper">
                <video autoplay muted loop>
                    <source src="./2vid.webm" type="video/webm">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="opone">
                <p>Choose the fully regulated accounts that work best for your business and your customers.</p>
            </div>
            <button class="getbtn">Get Started <i class="ri-arrow-right-up-line"></i></button>`
    }
    })
   
})




        