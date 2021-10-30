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
    } if (event.code == 'Escape' && registerContainer.classList.contains('visible')) {
        registerContainer.classList.remove('visible');
    }
}


const overlay = document.getElementById('overlay');
const searchForm = document.querySelectorAll('.search__form-item');

searchForm.forEach((item) => {
    item.addEventListener('click', searchFormDropdown);
})
overlay.addEventListener('click', searchFormDropdown);

let dropdown;
let arrow;
let searchFormItem;

function searchFormDropdown(event) {
    if (event.target.closest('.search__form-item')) {
        
        searchFormItem = document.getElementById(event.target.closest('.search__form-item').id);
        let str = searchFormItem.id.substr("searchFormItem".length);
        dropdown = document.getElementById('dropdown' + str);
        arrow = searchFormItem.querySelector('.arrow');

        overlay.classList.add('visible');
        
        let box = searchFormItem.getBoundingClientRect();
        if (box.bottom + dropdown.offsetHeight < window.innerHeight) {
            dropdown.style.top = box.bottom + 'px';
            dropdown.style.left = box.left + 'px';
            dropdown.classList.add('visible-down');
        } else {
            dropdown.style.top = box.top - dropdown.offsetHeight + 'px';
            dropdown.style.left = box.left + 'px';
            dropdown.classList.add('visible-up');
        }

        arrow.classList.add('rotate');
        dropdown.addEventListener('mousedown', choice);
        window.addEventListener('scroll', scrollListener);
        
    } else {
        overlay.classList.remove('visible');
        if (dropdown.classList.contains('visible-down')) { dropdown.classList.remove('visible-down') };
        if (dropdown.classList.contains('visible-up')) { dropdown.classList.remove('visible-up') };
        arrow.classList.remove('rotate');
        window.removeEventListener('scroll', scrollListener);
    };

    function choice(event) {
        if (event.target.parentElement === dropdown) {
            let selectText = searchFormItem.querySelector('.select-text');
            selectText.textContent = event.target.textContent;
            selectText.classList.add('chosen');
            dropdown.removeEventListener('mousedown', choice);
        }
    };  
};

function scrollListener() {
    box = searchFormItem.getBoundingClientRect();
    if (dropdown.classList.contains('visible-down')) {
        dropdown.style.top = box.bottom + 'px';
        dropdown.style.left = box.left + 'px';
    } else if (dropdown.classList.contains('visible-up')) {
        dropdown.style.top = box.top - dropdown.offsetHeight + 'px';
        dropdown.style.left = box.left + 'px';
    }
};

