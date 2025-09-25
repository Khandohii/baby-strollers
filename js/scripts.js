$(function(){

	// Моб. меню
	$('.open_link_menu').click(function(e){
		e.preventDefault()

		if( $(this).hasClass('active') ){
			$(this).removeClass('active').next().removeClass('visible').slideUp(200)
		} else {
			$(this).addClass('active').next().addClass('visible').slideDown(300)
		}
	})

	//Адаптация меню каталога
	$(".main_page header .line_bottom .b-left").each(function(){
		if ( $(window).width() < 1024 ) {
			$(this).find(".link_catalog a").addClass("mini_modal_link").removeClass("active");	
			$(this).find(".cat_menu").addClass("mini_modal").addClass("close");	
		}
		else{
			$(this).find(".link_catalog a").removeClass("mini_modal_link").addClass("active");	
			$(this).find(".cat_menu").removeClass("mini_modal").removeClass("close");	
		}
    	
	})

	// Мини всплывающие окна
	 firstClick = false
	 $('.mini_modal_link').click(function(e){
	     e.preventDefault()

	     var modalId = $(this).attr('data-modal-id')

	     if($(this).hasClass('active')){
	         $(this).removeClass('active')
	         $('.mini_modal').fadeOut(200).removeClass('open')
	         firstClick = false

	            if( $(window).width() < 1024 ){
	                $('body').css('cursor', 'default')
	            }
	     }else{
	         $('.mini_modal_link').removeClass('active')
	         $(this).addClass('active')

	         $('.mini_modal').fadeOut(200).removeClass('open')
	         $(modalId).fadeIn(300).addClass('open')
	         firstClick = true

	            if( $(window).width() < 1024 ){
	                $('body').css('cursor', 'pointer')
	            }
	     }
	 })

	 //Закрываем всплывашку при клике вне неё
	 $(document).click(function(e){
	     if (!firstClick && $(e.target).closest('.mini_modal').length == 0){
	         $('.mini_modal').fadeOut(300).removeClass('open')
	         $('.mini_modal_link').removeClass('active')

	            if( $(window).width() < 1024 ){
	                $('body').css('cursor', 'default')
	            }
	     }
	     firstClick = false
	 })

	//Main slider
	$('.main_slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		margin: 20,
		loop: true,
	})

	// Фильтр цены
    $('#price_range').ionRangeSlider({
        type     : 'double',
        min      : 10,
        max      : 50000,
        from     : 4000,
	    to       : 21000,
        step     : 100,
		prettify_enabled : true,
        onStart : function (data) {
			$('.price_filterPrice input.ot').val( data.from.toLocaleString())
	        $('.price_filterPrice input.do').val( data.to.toLocaleString())

	    },
        onChange : function (data) {
			$('.price_filterPrice input.ot').val( data.from.toLocaleString())
	        $('.price_filterPrice input.do').val( data.to.toLocaleString())
	    }
    })


	$('.sect_comparsions .slider_comparsions.owl-carousel').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		responsive: {
			// breakpoint from 1170 up
			1170 : {
				items: 4,
				margin: 30,
			},
			// breakpoint from 1024 up
			1024 : {
				items: 3,
				margin: 20,
			},
			// breakpoint from 900 up
			900 : {
				items: 3,
				margin: 20,
			},
			// breakpoint from 550 up
			550 : {
				items: 2,
				margin: 20,
			},
			// breakpoint from 320 up
			0 : {
				items: 1,
				margin: 20,
			},			
		},
	})

	var sliderFeatures = $('.sect_comparsions .sliders_features .slider.owl-carousel');

	sliderFeatures.owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		responsive: {
			// breakpoint from 1170 up
			1170 : {
				items: 4,
				margin: 30,
			},
			// breakpoint from 1024 up
			1024 : {
				items: 3,
				margin: 20,
			},
			// breakpoint from 900 up
			900 : {
				items: 3,
				margin: 20,
			},
			// breakpoint from 550 up
			550 : {
				items: 2,
				margin: 20,
			},
			// breakpoint from 320 up
			0 : {
				items: 1,
				margin: 20,
			},			
		},
	})

	// Go to the next item
	$('.slider_comparsions.owl-carousel .owl-nav .owl-next').click(function() {
	    sliderFeatures.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.slider_comparsions.owl-carousel .owl-nav .owl-prev').click(function() {
	    sliderFeatures.trigger('prev.owl.carousel');
	})
	

	$('.open_link_btn').click(function(e){
		e.preventDefault()

		if( $(this).hasClass('active') ){
			$(this).removeClass('active').next().slideUp(200)
		} else {
			$(this).addClass('active').next().slideDown(300)
		}
	})

	//Изменение количества товара
	$('body').on('click', '.amount .minus', function(e) {
		e.preventDefault()

		var input = $(this).parents('.amount').find('input')
		var inputVal = parseInt(input.val())
		var minimum = parseInt(input.attr('data-minimum'))

		if(inputVal > minimum){
			input.val(inputVal-1)
		}
	})

	//Изменение количества товара
	$('body').on('click', '.amount .plus', function(e) {
		e.preventDefault()

		var input = $(this).parents('.amount').find('input')
		var inputVal = parseInt(input.val())
		var maximum = parseInt(input.attr('data-maximum'))

		if(inputVal < maximum){
			input.val(inputVal-(-1))
		}
	})

	//Маска телефона
	$('input[type=tel]').mask('+7 (999) 999 - 99 - 99')

	 // Acordion 
	$('.list_order .item .open_sub').click(function(e){
		e.preventDefault()

		if($(this).hasClass('active')){
			$(this).removeClass('active').next().slideUp(300)
		}else{
			$('.list_order .item .open_sub').removeClass('active')
			$('.list_order .item .on').slideUp(300)
			$(this).addClass('active').next().slideDown(300)
		}
	})

	if ( $(window).width() < 1024 ){
		$('header .line_bottom .open_sub').click(function(e){
			e.preventDefault()

			if($(this).hasClass('active')){
				$(this).removeClass('active').next().slideUp(300)
			}else{
				$('header .line_bottom .open_sub').removeClass('active')
				$('header .line_bottom .on').slideUp(300)
				$(this).addClass('active').next().slideDown(300)
			}
		})
	}
	
	// Слайдер товара
	$('.sect_product .product_view .thumbs').owlCarousel({
		nav: true,
		dots: true,
		loop: false,
		responsive : {
			// breakpoint from 1200 up
			1200 : {
				items: 4,
				margin: 10,
			},
			// breakpoint from 1100 up
			1100 : {
				items: 3,
				margin: 10,
			},
			// breakpoint from 1024 up
			1024 : {
				items: 3,
				margin: 10,
			},
			// breakpoint from 766 up
			766 : {
				items: 4,
				margin: 7,
			},
			// breakpoint from 480 up
			480 : {
				items: 3,
				margin: 15,
			},
			// breakpoint from 320 up
			0 : {
				items: 2,
				margin: 15,
			},

		}
	})

	$owl = $('.sect_product .slider_view .slider').owlCarousel({
		loop: false,
		margin: 20,
		dots: true,
		nav: true,
		navSpeed: 500,
		smartSpeed: 500,
		items: 1,
		onTranslate: callback
	})

	function callback(event) {
		var page = event.page.index;
		if (page != $('.product_view .thumbs a').prop('data-slide-index')) {

			$('.product_view .thumbs a').removeClass('active')
			$('.product_view .thumbs a:eq(' + page + ')').addClass('active')
		}
	}

	$('.product_view .thumbs a').click(function(e) {
		e.preventDefault()

		$('.product_view .thumbs a').removeClass('active')
		$(this).addClass('active')

		$owl.trigger('to.owl.carousel', $(this).attr('data-slide-index'))
	})

	//Селект
	$('.box_select select').selectbox()
	
	//Табы
	$(".tabs_container").each(function(){
    	$(this).find(".tab_content:first").show()	
	})
	$(".tabs_container .tabs li").click(function() {
    	var parentBox = $(this).closest('.tabs_container')
    
    	$(parentBox).find(".tabs li").removeClass("active")
    	$(this).addClass("active");
    	$(parentBox).find(".tab_content").hide();
    
    	var activeTab = $(this).find("a").attr("href")
    	$(activeTab).fadeIn()
	    return false;
	})
});

$(window).resize(function(){
	//Адаптация меню каталога
	$("header .line_bottom .b-left").each(function(){
		if ( $(window).width() < 1024 ) {
			$(this).find(".link_catalog a").addClass("mini_modal_link").removeClass("active");	
			$(this).find(".cat_menu").addClass("mini_modal").addClass("close");	
		}
		else{
			$(this).find(".link_catalog a").removeClass("mini_modal_link").addClass("active");	
			$(this).find(".cat_menu").removeClass("mini_modal").removeClass("close");	
		}
    	
	})
})

$(window).load(function(){

	if( $(window).width() > 1023 ){
	//ф-я offset возвращает координаты отн-но начала страницы	
	var sidebartop = $('#info_product').offset().top;	
	var sidebarHeight = $('#info_product').height();	
	var sidebarbottom = $('.sect_product .box_flex').outerHeight(true);	
	var wrapTop = $('.sect_product .box_flex').offset().top;	
	var wrapHeight = sidebarbottom + wrapTop - sidebarHeight - 60;

				
		$(window).scroll(function(){
							  
			if( $(window).scrollTop() > sidebartop && $(window).scrollTop() < wrapHeight) 
			    { // ф-я scrollTop() возвращает величину вертикального скроллинга
			        $('#info_product').css({position: 'fixed', top: '15px',});

		    }    
			else{
				if ( $(window).scrollTop() > wrapHeight) {
					$('#info_product').css({position: 'absolute', top: 'auto', bottom: 0, height: "auto" });
				}
					else
					{
		        		$('#info_product').css({position: 'static'});
					}
	    	}
		});
	    
	}

})