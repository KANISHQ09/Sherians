let theme = localStorage.getItem('theme') || 'light'; // Default to 'light' if no theme is set

let main = document.querySelector('.main');
let btn = document.querySelector('.btn');

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark') {
        main.style.backgroundColor = 'black';
        main.style.color = 'white';
        btn.textContent = 'Switch to Light';
    } else {
        main.style.backgroundColor = 'white';
        main.style.color = 'black';
        btn.textContent = 'Switch to Dark';
    }
}

// Apply the theme on page load
applyTheme(theme);

// Add event listener for button click
btn.addEventListener('click', () => {
    let newTheme;
    if (theme === 'dark') {
        newTheme = 'light';
    } else {
        newTheme = 'dark';
    }
    theme = newTheme; // Update the current theme
    localStorage.setItem('theme', theme);
    applyTheme(theme);
});
