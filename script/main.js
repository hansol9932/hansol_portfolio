// 메인페이지 js 부분

// 헤더 js 부분
let offset = $('#header_top').offset();

console.log(offset.top);

$(window).scroll(function () {
	// console.log($(document).scrollTop());
	if ($(document).scrollTop() > offset.top) {
		$('#header_top').addClass('on');
		$('#header_top img').attr('src', './img/logo(green).png');
	} else {
		$('#header_top').removeClass('on');
		$('#header_top img').attr('src', './img/logo(w).png');
	}
});

//25% 슬라이드
const panel = document.querySelector('.panel');
const lis = document.querySelectorAll('li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let enableClick = false;

panel.prepend(panel.lastElementChild);

prevBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (!enableClick) {
		enableClick = true;
		panel.style.transition = 'margin-left 0.5s';
		panel.style.marginLeft = '0%';
		panel.addEventListener(
			'transitionend',
			() => {
				panel.style.transition = 'margin-left 0s';
				panel.prepend(panel.lastElementChild);
				panel.style.marginLeft = '-25%';
				enableClick = false;
			},
			{ once: true }
		);
	}
});

nextBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (!enableClick) {
		enableClick = true;
		panel.style.transition = 'margin-left 0.5s';
		panel.style.marginLeft = '-50%';

		panel.addEventListener(
			'transitionend',
			() => {
				panel.style.transition = 'margin-left 0s';
				panel.append(panel.firstElementChild);
				panel.style.marginLeft = '-25%';
				enableClick = false;
			},
			{ once: true }
		);
	}
});

// map 중요! : 특정 행동을 반복적으로 처리하도록 도와주는 친구
//
