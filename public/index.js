const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

const handleClick = event => {
	menu.classList.contains('hidden')
		? menu.classList.remove('hidden')
		: menu.classList.add('hidden')
}