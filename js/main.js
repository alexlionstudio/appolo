$(document).ready(function(){

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки и для меню
	var pull = $('#nav__toggle');
	var menu = $('.nav__menu');

	// Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Открываем/Скрываем меню
	    menu.slideToggle();

	    // Добавляем модификатор --active
	    $(this).toggleClass('nav__toggle---active');
	});
	// При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 992) {
	        menu.removeAttr('style');
	    }
	});
	// При нажатие на ссылку в меню. меню сворачивается обратно
	var w = $(window).width();
	if (w < 992 ) {
		$('nav.nav a').on("click",function(){
			menu.slideToggle();
		});
	};

	// owlcorusel
	$('#slider-container').owlCarousel({
		items: 1,
		autoplay: 4000,
		nav: true,
		navText: ["",""],
		rewind: true,
	});

	//PageScroll2id
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
		highlighSelector:"nav a"
	});
});