const users = [
    {
        name: 'Kantik',
        profilePhoto: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwd2l0aCUyMHNwZWNzfGVufDB8fDB8fHww',
        story: 'https://images.unsplash.com/photo-1721332153370-56d7cc352d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
        timeAgo: '2 hours ago'
    },
    {
        name: 'John Doe',
        profilePhoto: 'https://randomuser.me/api/portraits/men/1.jpg',
        story: 'https://images.unsplash.com/photo-1731432247068-8f7a97773aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
        timeAgo: '1 hour ago'
    },
    {
        name: 'Jane Doe',
        profilePhoto: 'https://randomuser.me/api/portraits/women/1.jpg',
        story: 'https://images.unsplash.com/photo-1733591486986-2a9c1086c5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
        timeAgo: '3 hours ago'
    },
    {
        name: 'Bob Smith',
        profilePhoto: 'https://randomuser.me/api/portraits/men/2.jpg',
        story: 'https://images.unsplash.com/photo-1733592688551-5ba7804a9634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
        timeAgo: '4 hours ago'
    },
    {
        name: 'Alice Johnson',
        profilePhoto: 'https://randomuser.me/api/portraits/women/2.jpg',
        story: 'https://images.unsplash.com/photo-1734366965512-0f7ec347ab36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
        timeAgo: '5 hours ago'
    },
    {
        name: 'Mike Brown',
        profilePhoto: 'https://randomuser.me/api/portraits/men/3.jpg',
        story: 'https://images.unsplash.com/photo-1704791079652-f4e9043b20f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
        timeAgo: '6 hours ago'
    },
    {
        name: 'Emily Davis',
        profilePhoto: 'https://randomuser.me/api/portraits/women/3.jpg',
        story: 'https://images.unsplash.com/photo-1732823130947-ac30acee3e39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
        timeAgo: '7 hours ago'
    },
    {
        name: 'Tom White',
        profilePhoto: 'https://randomuser.me/api/portraits/men/4.jpg',
        story: 'https://images.unsplash.com/photo-1732221560326-f6c8cb063e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
        timeAgo: '8 hours ago'
    },
    {
        name: 'Lily Martin',
        profilePhoto: 'https://randomuser.me/api/portraits/women/4.jpg',
        story: 'https://images.unsplash.com/photo-1731952161702-3c15716ce06e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
        timeAgo: '9 hours ago'
    },
    {
        name: 'David Lee',
        profilePhoto: 'https://randomuser.me/api/portraits/men/5.jpg',
        story: 'https://images.unsplash.com/photo-1731174219400-a47a6b6ad929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D',
        timeAgo: '10 hours ago'
    }
];

let sum = ''
let plus = 0

let contacts = document.querySelector('.contacts')
let container = document.querySelector('.container')

users.forEach(function(elem,idx){
    sum += `<div class="contact" onclick="showFull(${idx})">
                    <div class="image"><img src="${elem.profilePhoto}"></div>
                    <div class="text">
                        <h3>${elem.name}</h3>
                        <h4>${elem.timeAgo}</h4>
                    </div>
                </div>`
})

contacts.innerHTML += sum
let full = document.querySelector('.full')

function showFull(idx) {
    full.style.display = 'block';
    full.style.backgroundImage = `url(${users[idx].story})`;
    full.querySelector('h4').textContent = users[idx].name;
    full.querySelector('.fullimg').src = users[idx].profilePhoto;
    container.style.display = 'none'

    let interval = setInterval(() => {
        plus++
        document.querySelector('.grow').style.width = plus + '%'
        if (plus >= 92.5) {
            clearInterval(interval);
            plus = 0
        }
    }, 30);

    setTimeout(() => {
        full.style.display = 'none'
        container.style.display = 'block'
    }, 3000)
}
