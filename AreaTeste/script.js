const btn_menu = document.getElementById('btn-menu')
const mobileMenu = document.querySelector('.mobile-menu')

btn_menu.addEventListener('click', e => {

    if(mobileMenu.classList.contains('active')){
        mobileMenu.classList.remove('active')
    } else{
        mobileMenu.classList.add('active')
    }

})