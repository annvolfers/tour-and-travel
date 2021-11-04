const loginBtn = document.getElementById('loginBtn');
const loginCloseBtn = document.getElementById('loginCloseBtn');
const loginBlock = document.getElementById('loginBlock');
const loginContainer = document.getElementById('loginContainer');
const registerBtn = document.getElementById('registerBtn');
const registerCloseBtn = document.getElementById('registerCloseBtn');
const registerBlock = document.getElementById('registerBlock');
const registerContainer = document.getElementById('registerContainer');

loginBtn.addEventListener('click', loginForm);
loginCloseBtn.addEventListener('click', loginForm);
loginContainer.addEventListener('click', loginForm);
registerBtn.addEventListener('click', registerForm);
registerCloseBtn.addEventListener('click', registerForm);
registerContainer.addEventListener('click', registerForm);
document.addEventListener('keydown', closeFormEsc);

function loginForm(event) {
    if (event.target === loginBtn && !loginContainer.classList.contains('visible')) {
        loginContainer.classList.add('visible');
    } else if ((event.target === loginCloseBtn || !loginBlock.contains(event.target)) && loginContainer.classList.contains('visible')) {
        loginContainer.classList.remove('visible');
    }
}

function registerForm(event) {
    if (event.target === registerBtn && !registerContainer.classList.contains('visible')) {
        registerContainer.classList.add('visible');
    } else if ((event.target === registerCloseBtn || !registerBlock.contains(event.target)) && registerContainer.classList.contains('visible')) {
        registerContainer.classList.remove('visible');
    }
}

function closeFormEsc(event) {
    if (event.code == 'Escape' && loginContainer.classList.contains('visible')) {
        loginContainer.classList.remove('visible');
    }
    if (event.code == 'Escape' && registerContainer.classList.contains('visible')) {
        registerContainer.classList.remove('visible');
    }
}

// закрываем все селекты при клике на overlay
const overlay = document.getElementById('overlay');
overlay.addEventListener('click', function () {
    for (let i = 0; i < selects.length; i++) {
        const select = selects[i];
        select.parentElement.classList.remove('opened');
    }

    overlay.classList.remove('visible');
});

const selects = document.querySelectorAll('.select');
selects.forEach((select) => {
    select.addEventListener('click', function (e) {
        onSelectClick(select, e);
    });
});

function onSelectClick(select) {
    if (select.parentElement.classList.contains('opened')) {
        select.parentElement.classList.remove('opened');
        overlay.classList.remove('visible');
    } else {
        select.parentElement.classList.add('opened');
        overlay.classList.add('visible');
    }
}

const options = document.querySelectorAll('.dropdown__item');
for (let i = 0; i < options.length; i++) {
    const option = options[i];

    option.addEventListener('click', function (e) {
        onSelectOptionClick(option);
    });
}

function onSelectOptionClick(option) {
    const text = option.innerText;

    const selectWrapper = option.closest('.select-wrapper');
    selectWrapper.classList.remove('opened');
    overlay.classList.remove('visible');

    selectWrapper.querySelector('.select-text').innerText = text;
}