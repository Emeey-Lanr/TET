'use strict'
let message = document.querySelector('.textContent');
setTimeout(() => {
    message.classList.remove('textContentNone');
}, 5000)

setTimeout(() => {
    window.location.href = 'signup.html'
}, 8000)