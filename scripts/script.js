let isClick = false;
let burger = document.querySelector('.burger');
let body = document.querySelector('body');
const burger__click = () => {
    isClick = isClick == false ? isTrue() : isFalse();
    function isTrue() {
        burger.style.zIndex = 1;
        burger.style.display = 'flex';
        burger.style.left = '0';
        burger.style.opacity = '1';
        body.style.overflow = 'hidden';
        return true;
    }
    function isFalse() {
        burger.style.zIndex = -1;
        burger.style.opacity = '0';
        body.style.overflow = 'auto';
        burger.style.left = '500px';
        return false;
    }
}