const loginLink = document.querySelector('.login-link');
const modalLogin = document.querySelector('.modal-login');
const modalClose = document.querySelector('.modal-close');
const modalMap = document.querySelector('.modal-map');
const openMap = document.querySelector(".open-map");
const modalCloseMap = document.querySelector('.modal-close-map');


loginLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalLogin.classList.add('modal-vision');
})

modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalLogin.classList.remove('modal-vision');
})

openMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.add('modal-vision');
})
modalCloseMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.remove('modal-vision');

})