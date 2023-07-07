const oppen = document.getElementById('open');
const cllose = document.getElementById('close');
const container = document.querySelector('.container');

oppen.addEventListener('click', () => {
	container.classList.add('show-nav');
});

cllose.addEventListener('click', () => {
	container.classList.remove('show-nav');
});