const menu = document.querySelector('#mobile-view')
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
	menu.classList.toggle('is-active')
	menuLinks.classList.toggle('active')
})
