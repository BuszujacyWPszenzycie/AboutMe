const hamburgerBtn = document.querySelector('.nav__hamburger-btn')
const navMobileList = document.querySelector('.nav__mobile-list')
const navShadow = document.querySelector('.nav__mobile-shadow')
const helloPage = document.querySelector('.hello__wrapper')

const handleBurgerBtn = () => {
	hamburgerBtn.classList.toggle('is-active')
	navMobileList.classList.toggle('nav__mobile-list-active')
	navShadow.classList.toggle('nav__mobile-shadow-active')
}

const deacitvateHelloPage = () => {
	helloPage.classList.add('hello__wrapper-deactivate')
}

hamburgerBtn.addEventListener('click', handleBurgerBtn)
setTimeout(deacitvateHelloPage, 2000)
