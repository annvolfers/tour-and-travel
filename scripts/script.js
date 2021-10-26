const loginBtn = document.querySelector('.menu__login-btn');
const loginCloseBtn = document.querySelector('.login__close');
const loginBlock = document.querySelector('.login');
const loginContainer = document.querySelector('.login__container');
const registerBtn = document.querySelector('.menu__register-btn');
const registerCloseBtn = document.querySelector('.register__close');
const registerBlock = document.querySelector('.register');
const registerContainer = document.querySelector('.register__container');

loginBtn.addEventListener('click', openForm);
loginCloseBtn.addEventListener('click', closeForm);
loginContainer.addEventListener('click', closeForm);
registerBtn.addEventListener('click', openForm);
registerCloseBtn.addEventListener('click', closeForm);
registerContainer.addEventListener('click', closeForm);
document.addEventListener('keydown', closeFormEsc);

function openForm(event) {
    if (event.target === loginBtn) {
        loginContainer.classList.add('visible');
    } if (event.target === registerBtn) {
        registerContainer.classList.add('visible');
    }
};

function closeForm(event) {
    if (event.target === loginCloseBtn || !loginBlock.contains(event.target)) {
        loginContainer.classList.remove('visible');
    } if (event.target === registerCloseBtn || !registerBlock.contains(event.target)) {
        registerContainer.classList.remove('visible');
    }
};

function closeFormEsc(event) {
    if (event.code == 'Escape' && loginContainer.classList.contains('visible')) {
        loginContainer.classList.remove('visible');
    } if (event.code == 'Escape' && registerContainer.classList.contains('visible')) {
        registerContainer.classList.remove('visible');
    }
}

