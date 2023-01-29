const hamburgerBtn = document.querySelector('.nav__hamburger-btn')
const navMobileList = document.querySelector('.nav__mobile-list')
const navShadow = document.querySelector('.nav__shadow')

const handleBurgerBtn = () => {
	hamburgerBtn.classList.toggle('is-active')
	navMobileList.classList.toggle('nav__mobile-list-active')
	navShadow.classList.toggle('nav__shadow-active')
}

hamburgerBtn.addEventListener('click', handleBurgerBtn)
