const modal = document.querySelector('.modal')
const login = document.querySelector('.login')

login.addEventListener('click', () => {
	modal.classList.add('active')
})

modal.addEventListener('click', e => {
	if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
		modal.classList.remove('active')
	}
})
