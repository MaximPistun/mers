const showServisce = document.querySelector('.show-services-btn');
const servisceLength = document.querySelectorAll('.servisce__card').length;
let itemsServisce = 3;

showServisce.addEventListener('click', () => {
	itemsServisce += 3;
	const array = Array.from(document.querySelector('.servisces__cards').children);
	const visItems = array.slice(0, itemsServisce);

	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === servisceLength) {
		showServisce.style.display = 'none';
	}
});