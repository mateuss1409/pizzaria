const btnMenu = document.querySelector('.btn-menu')
const navBar = document.querySelector('.nav_bar')
const menuItem = document.querySelectorAll('.nav_bar a')


btnMenu.addEventListener('click', () => {
    navBar.classList.toggle('nav-active')
    btnMenu.classList.toggle('fa-xmark')
})

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        navBar.classList.remove('nav-active')
        btnMenu.classList.remove('fa-xmark')
    })
});

