const showMore = document.querySelector('.show-products-btn');
const productsLength = document.querySelectorAll('.product__card').length;
let items = 3;

showMore.addEventListener('click', () => {
	items += 3;
	const array = Array.from(document.querySelector('.products__cards').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
});