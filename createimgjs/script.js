const btn = document.querySelector('button');
const images = [
    'https://pngimg.com/uploads/pokemon/small/pokemon_PNG157.png',
    'https://pngimg.com/uploads/pokemon/small/pokemon_PNG154.png',
    'https://pngimg.com/uploads/pokemon/small/pokemon_PNG149.png',
    'https://pngimg.com/uploads/pokemon/small/pokemon_PNG148.png',
    'https://pngimg.com/uploads/pokemon/small/pokemon_PNG147.png',
    'https://pngimg.com/uploads/pokemon/small/pokemon_PNG133.png',
    'https://pngimg.com/uploads/pokemon/small/pokemon_PNG94.png',
    'https://pngimg.com/uploads/pokemon/small/pokemon_PNG45.png',
    'https://pngimg.com/uploads/pokemon/small/pokemon_PNG28.png',
    'https://pngimg.com/uploads/pokemon/small/pokemon_PNG25.png',

];

btn.addEventListener('click', () => {

    let index = Math.floor(Math.random() * images.length);

    let valueX = Math.random() * 100;
    let valueY = Math.random() * 100;
    let rotate = Math.random() * 360;

    let img = document.createElement('img');
    img.setAttribute('src', images[index]);

    img.style.height = '200px';
    img.style.width = '200px';
    img.style.position = 'absolute';
    img.style.left = valueX + '%';
    img.style.top = valueY + '%';
    img.style.rotate = rotate + 'deg';

    document.body.appendChild(img);
});
