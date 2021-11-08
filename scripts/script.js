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
    if (event.code == 'Escape') {
        if (loginContainer.classList.contains('visible')) {
            loginContainer.classList.remove('visible');
        }
        if (registerContainer.classList.contains('visible')) {
            registerContainer.classList.remove('visible');
        }
        if (overlay.classList.contains('visible')) {
            const select = document.querySelector('.select-wrapper.opened');
            select.classList.remove('opened', 'opened-down', 'opened-up');
            overlay.classList.remove('visible');
        }
    }
}

// закрываем все селекты при клике на overlay
const overlay = document.getElementById('overlay');
overlay.addEventListener('click', function () {
    for (let i = 0; i < selects.length; i++) {
        const select = selects[i];
        select.parentElement.classList.remove('opened', 'opened-down', 'opened-up');
    }

    overlay.classList.remove('visible');
});

const selects = document.querySelectorAll('.select');
selects.forEach((select) => {
    select.addEventListener('click', function (e) {
        onSelectClick(select);
    });
});

function onSelectClick(select) {
    const dropdown = select.parentElement.querySelector('.dropdown');

    if (select.parentElement.classList.contains('opened')) {
        select.parentElement.classList.remove('opened', 'opened-down', 'opened-up');
        overlay.classList.remove('visible');
    } else {
        select.parentElement.classList.add('opened');
        if (select.getBoundingClientRect().bottom + dropdown.offsetHeight < window.innerHeight) {
            select.parentElement.classList.add('opened-down');
        } else {
            select.parentElement.classList.add('opened-up');
        }
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
    selectWrapper.classList.remove('opened', 'opened-down', 'opened-up');
    overlay.classList.remove('visible');

    const selectText = selectWrapper.querySelector('.select-text');
    selectText.innerText = text;
    selectText.style.fontWeight = 'bold';
}


const nextImageBtn = document.getElementById('nextImageBtn');
const nextImageBtnActive = document.getElementById('nextImageBtnActive');
const previousImageBtn = document.getElementById('previousImageBtn');
const previousImageBtnActive = document.getElementById('previousImageBtnActive');
const imagesCarousel = document.getElementById('imagesCarousel');
const images = document.querySelectorAll('.testimonials__image');
const imageWidth = 394;
let position = 0;

nextImageBtnActive.addEventListener('click', function () {
    if (Math.abs(position) < imageWidth * (images.length - 1)) {
        position -= imageWidth;
        imagesCarousel.style.transform = 'translateX(' + position + 'px)';

        previousImageBtn.classList.remove('display');
        previousImageBtnActive.classList.add('display');

        if (Math.abs(position) === imageWidth * (images.length - 1)) {
            nextImageBtnActive.classList.remove('display');
            nextImageBtn.classList.add('display');
        }
    }
});

previousImageBtnActive.addEventListener('click', function () {
    position += imageWidth;
    imagesCarousel.style.transform = 'translateX(' + position + 'px)';

    nextImageBtn.classList.remove('display');
    nextImageBtnActive.classList.add('display');

    if (Math.abs(position) === 0) {
        previousImageBtnActive.classList.remove('display');
        previousImageBtn.classList.add('display');
    }
});




// указания контекста для выполняемой функции

// class MyClass {
//     x = 0;

//     onClick(e) {
//         this.x++;
//         this.print();
//     }

//     print() {
//         console.log('clicked', this.x);
//     }
// }

// const t = new MyClass();

// document.addEventListener('click', t.onClick.bind(t));