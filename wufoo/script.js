const menuBtn = document.getElementsByClassName('menu-btn')[0];
const listContainer = document.getElementsByClassName('list-continer')[0];

menuBtn.addEventListener('click', () => {
    listContainer.classList.toggle('active');
})