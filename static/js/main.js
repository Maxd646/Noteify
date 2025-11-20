
const darkModeKey = 'noteify-dark-mode';


if (localStorage.getItem(darkModeKey) === 'enabled') {
    document.body.classList.add('dark-mode');
}


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem(darkModeKey, 'enabled');
    } else {
        localStorage.setItem(darkModeKey, 'disabled');
    }
}


const darkModeBtn = document.getElementById('darkModeToggle');
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', toggleDarkMode);
}


const loginForm = document.querySelector('.login-form');
const btn = document.querySelector('.btn');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

   
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

   
    if (email && password) {
        btn.textContent = 'Signing in...';
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';

       
        setTimeout(() => {
           
            window.location.href = 'main.html';
        }, 1000);
    } else {
        alert('Please enter both email and password.');
    }
});


const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('input-focused');
    });

    input.addEventListener('blur', () => {
        input.parentElement.classList.remove('input-focused');
    });
});
