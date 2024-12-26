const users = [
    {
        name: 'Kanishq',
        profilePhoto: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwd2l0aCUyMHNwZWNzfGVufDB8fDB8fHww',
        story: 'https://images.unsplash.com/photo-1721332153370-56d7cc352d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
    },
    {
        name: 'John Doe',
        profilePhoto: 'https://randomuser.me/api/portraits/men/1.jpg',
        story: 'https://images.unsplash.com/photo-1731432247068-8f7a97773aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'
    },
    {
        name: 'Jane Doe',
        profilePhoto: 'https://randomuser.me/api/portraits/women/1.jpg',
        story: 'https://images.unsplash.com/photo-1733591486986-2a9c1086c5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8'
    },
    {
        name: 'Bob Smith',
        profilePhoto: 'https://randomuser.me/api/portraits/men/2.jpg',
        story: 'https://images.unsplash.com/photo-1733592688551-5ba7804a9634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8'
    },
    {
        name: 'Alice Johnson',
        profilePhoto: 'https://randomuser.me/api/portraits/women/2.jpg',
        story: 'https://images.unsplash.com/photo-1734366965512-0f7ec347ab36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Mike Brown',
        profilePhoto: 'https://randomuser.me/api/portraits/men/3.jpg',
        story: 'https://images.unsplash.com/photo-1704791079652-f4e9043b20f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Emily Davis',
        profilePhoto: 'https://randomuser.me/api/portraits/women/3.jpg',
        story: 'https://images.unsplash.com/photo-1732823130947-ac30acee3e39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Tom White',
        profilePhoto: 'https://randomuser.me/api/portraits/men/4.jpg',
        story: 'https://images.unsplash.com/photo-1732221560326-f6c8cb063e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Lily Martin',
        profilePhoto: 'https://randomuser.me/api/portraits/women/4.jpg',
        story: 'https://images.unsplash.com/photo-1731952161702-3c15716ce06e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'David Lee',
        profilePhoto: 'https://randomuser.me/api/portraits/men/5.jpg',
        story: 'https://images.unsplash.com/photo-1731174219400-a47a6b6ad929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D'
    }
];

let sum = ''
let plus = 0

users.forEach(function (elem, idx) {
    sum += ` <div class="story">
                <div class="story-ring">
                    <img id='${idx}' src="${elem.profilePhoto}" class="story-image">
                </div>
                <span class="story-username">${elem.name}</span>
            </div>`
})


let stry = document.querySelector('.stories')
stry.innerHTML += sum


let full = document.querySelector('.full')
let f = document.querySelector('.full img')
let f4 = document.querySelector('.full h4')

stry.addEventListener('click', (dets) => {
    let value = users[dets.target.id].story
    let text = users[dets.target.id].name
    let pht = users[dets.target.id].profilePhoto
    
    f4.textContent = `${text}`
    full.style.display = 'block'
    full.style.backgroundImage = `url(${value})`
    f.src = `${pht}`

    let interval = setInterval(() => {
        plus++
        document.querySelector('.grow').style.width = plus + '%'
        if (plus >= 90) {
            clearInterval(interval);
            plus = 0
        }
    }, 30);

    setTimeout(() => {
        full.style.display = 'none'
    }, 3000)
})


let mystry = document.querySelector('.my-story-ring')
let input = document.querySelector('.fileInput')
let b = document.querySelector('.close')

mystry.addEventListener('click', () => {
    input.style.display = 'block'
    b.style.display = 'block'
})

b.addEventListener('click', () => {
    input.style.display = 'none'
})


let upload = document.querySelector('#fileInput')
let cl = document.querySelector('.close')
upload.addEventListener('change', () => {
    if (upload.files.length > 0) {
        cl.textContent = 'Upload'
        cl.style.backgroundColor = 'blue'
        cl.style.color = 'white'
    }
    else {
        cl.textContent = 'Close'
        cl.style.backgroundColor = 'white'
        cl.style.color = 'black'
    }

})
cl.addEventListener('click', () => {
    upload.value = ''
    if (cl.textContent === 'Upload') {
        cl.textContent = 'Close'
        cl.style.backgroundColor = 'white'
        cl.style.color = 'black'
    }
})

