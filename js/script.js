//<ПОДКЛЮЧЕНИЕ JS ФАЙЛОВ>=======================================================================================================================================================>
new Swiper('.slider-park', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination-f',
		clickable: true,
	},
	speed: 800,
	loop: true,
	effect: 'flip',
	slideToClickedSlide: false,
	simulateTouch: false,
});
//=======================================================================================================================================================>

new Swiper('.slider-text-park', {
	pagination: {
		el: '.swiper-pagination-s',
		clickable: true,
	},
	grabCursor: true,
	nested: true,
});
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

(function () {
	var setting = { "height": 666, "zoom": 11, "queryString": "Волгоградский проспект, 38, Москва, Россия", "place_id": "ChIJWdsVlya1SkERkbOF80benjw", "satellite": false, "centerCoord": [55.71419765219177, 37.710906802193534], "cid": "0x3c9ede46f385b391", "lang": "ru", "cityUrl": "/russia/moscow", "cityAnchorText": "Карта [CITY1], Central Federal District, Россия", "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3", "embed_id": "375323" };
	var d = document;
	var s = d.createElement('script');
	s.src = 'https://1map.com/js/script-for-user.js?embed_id=375323';
	s.async = true;
	s.onload = function (e) {
		window.OneMap.initMap(setting)
	};
	var to = d.getElementsByTagName('script')[0];
	to.parentNode.insertBefore(s, to);
})();
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
	else {
		document.querySelector('body').classList.add('no-webp');
	}
});

AOS.init();

AOS.init({
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 800, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//</ПОДКЛЮЧЕНИЕ JS ФАЙЛОВ>=======================================================================================================================================================>
document.querySelector('.icon-menu').addEventListener('click', () => {
	document.querySelector('.icon-menu').classList.toggle('active');
	document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
});

const menuItem = document.querySelectorAll('.menu__item');

let check = function () {
	menuItem.forEach(item => {
		item.addEventListener('click', (e) => {
			if (e.target == item) {
				document.querySelector('.icon-menu').classList.remove('active');
				document.querySelector('.header__menu').classList.remove('active');
				document.querySelector('body').classList.remove('lock');
			}
		});
	});
}
check();




//=======================================================================================================================================================>
const showAll = document.querySelector('.cost__all');
const card = document.querySelectorAll('.cost__card');

showAll.addEventListener("click", () => {
	card.forEach(function (item) {
		if (getComputedStyle(item).display === "none") {
			if (!(item.classList.contains("cost__card-nomore"))) {
				item.classList.remove('cost__card-more');
				showAll.innerHTML = "Скрыть";
			}
		} else {
			if (!(item.classList.contains("cost__card-nomore"))) {
				item.classList.add('cost__card-more');
				showAll.innerHTML = "Всё цены";
			}
		}
	})
	if ((showAll.innerHtml = "Скрыть") && (showAll.style.color != "rgb(255, 209, 1)")) {
		showAll.style.color = "#FFD101";
	}
	else {
		showAll.style.color = "#333333";
	}
});

//=======================================================================================================================================================>

const showAllBtn = document.querySelector('.reviews__btn');
const reviews = document.querySelectorAll('.reviews__row');

showAllBtn.addEventListener('click', () => {
	for (let i = 1; i < reviews.length; i++) {
		if (reviews[i].classList.contains('hide-row')) {
			reviews[i].classList.remove('hide-row');
			showAllBtn.innerHTML = 'Скрыть отзывы';
		}
		else {
			reviews[i].classList.add('hide-row');
			showAllBtn.innerHTML = 'Показать отзывы';
		}
	}
});

//=======================================================================================================================================================>

let hide = function () {
	let itemBtn = document.querySelectorAll('.item-reviews__btn'),
		hideText = document.querySelectorAll('.hide'),
		dots = document.querySelectorAll('.dots'),
		name;

	itemBtn.forEach(item => {
		item.addEventListener('click', hides);
	});

	function hides() {
		itemBtn.forEach(item => {
			item.classList.remove('hide');
		});
		this.classList.add('hide');
		name = this.getAttribute('data-hide');
		console.log(name);
		selectText(name);
	}

	function selectText(name) {
		hideText.forEach(item => {
			item.classList.contains(name) ?
				item.classList.remove('hide') :
				item.classList.add('hide');
		});
		dots.forEach(item => {
			item.classList.contains(name) ?
				item.classList.add('hide') :
				item.classList.remove('hide');
		});
	}
};

hide();

