// 햄버거버튼
let btncall = document.querySelector('.btncall');
let menu_mobile = document.querySelector('.menu_mobile');

btncall.addEventListener('click', (e) => {
	e.preventDefault();
	btncall.classList.toggle('on');
	menu_mobile.classList.toggle('on');
});

// 스크롤효과

let sections = document.querySelectorAll('body .scroll');
let sections_array = Array.from(sections);

// let lis = document.querySelectorAll('ul li');
// let lis_array = Array.from(lis);

let position_array = [];
let base = 500;

setPosition();
console.log(position_array);
function setPosition() {
	for (let el of sections_array) {
		position_array.push(el.offsetTop);
	}
}

window.addEventListener('scroll', () => {
	let scroll =
		window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

	sections_array.map((el, index) => {
		if (scroll + base >= position_array[index]) {
			for (let i = 0; i < 8; i++) {
				// lis_array[i].classList.remove('auto');
				// sections_array[i].classList.remove('auto');
			}
			// lis_array[index].classList.add('auto');
			sections_array[index].classList.add('auto');
		}
	});
});
