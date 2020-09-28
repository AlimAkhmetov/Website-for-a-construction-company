	// Preloader

	$("html,body").css("overflow","hidden");

	window.onload = function () {
		let preloader = document.getElementById('preloader');
		preloader.style.display = 'none';
		$("html,body").css("overflow-y","visible");
	}

$(document).ready(function () {



	// Form 

	// document.getElementById('ajax-contact-form').addEventListener('submit', function(evt){
 //    var http = new XMLHttpRequest(), f = this;
 //    var th = $(this);
 //    evt.preventDefault();
 //    http.open("POST", "contact.php", true);
 //    http.onreadystatechange = function() {
 //      if (http.readyState == 4 && http.status == 200) {
 //        alert(http.responseText);
 //        if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
 //          th.trigger("reset");
 //        }
 //      }
 //    }
 //    http.onerror = function() {
 //      alert('Ошибка, попробуйте еще раз');
 //    }
 //    http.send(new FormData(f));
 //  }, false);




	// $("#gondon").click(function() {
	// 	alert('Сделай проекты ГОНДОН!!');
	// });

	// Intro__form

	function disableScroll() {
		$("html,body").css("overflow","hidden");
	};

	function enableScroll(){
		$("html,body").css("overflow-y","visible");
	};

	$(".contacts__button").click(function() {
		$(".section__form").fadeIn(400, disableScroll());
	});

	$(".btn__c__resize").click(function() {
		$(".section__form").fadeIn(400, disableScroll());
	});


	$(".section__form").click(function(event) {
		if (event.target == this) {
			$(this).fadeOut(400, enableScroll());
		};
	});

	// $(".bnt__confirmation").click(function() {
	// 	$(".section__confirmation__form").fadeOut(400);
	// });

	// Successfully Form Contact

	$("#btn").click(function() {
		$(".section__confirmation__form").fadeIn(400, disableScroll());
	});

	$(".bnt__confirmation").click(function() {
		$(".section__confirmation__form").fadeOut(400, enableScroll());
	});	

	// Successfully Form Header

	$(".form__button").click(function() {
		$(".section__form").fadeOut(400);
		$(".section__confirmation__form").fadeIn(400, disableScroll());
	});

	$(".bnt__confirmation").click(function() {
		$(".section__confirmation__form").fadeOut(400, enableScroll());
	});	
	

	// Anchor

	$("a[href^='#']").click(function () {
		var target = $(this).attr("href");
		$("html, body").animate ({
			scrollTop: $(target).offset().top-50
		}, 700);
	});

	// Magnific-popup

	$(".slider__link__img").magnificPopup({
		// delegate: 'a',
		type : 'image',
		// gallery:{enabled:true}	
	});

	// Slider

	 $(".section__licenses__slider").slick({
	 	autoplay: true,
	 	autoplaySpeed: 2000,
	 	speed: 1500,
	 	infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 3
  		// arrows: false,
  		// dots: true,
  		// pauseOnDotsHover: true,
  		// responsive: [
		  //   {
		  //     breakpoint: 768,
		  //     settings: {
		  //       arrows: false,
		  //       centerMode: true,
		  //       centerPadding: '40px',
		  //       slidesToShow: 3
		  //     }
		  //   },
		  //   {
		  //     breakpoint: 480,
		  //     settings: {
		  //       arrows: false,
		  //       centerMode: true,
		  //       centerPadding: '40px',
		  //       slidesToShow: 1
		  //     }
		  //   }
  		// ]
	 	// cssEase: 'ease-in',
	 	// fade: true
	 });


	 // AOS (анимация при скроле)

	 AOS.init({
		  // Global settings:
		  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		  initClassName: 'aos-init', // class applied after initialization
		  animatedClassName: 'aos-animate', // class applied on animation
		  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
		  

		  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		  offset: 80, // offset (in px) from the original trigger point
		  delay: 0.9, // values from 0 to 3000, with step 50ms
		  duration: 1500, // values from 0 to 3000, with step 50ms
		  easing: 'ease', // default easing for AOS animations
		  once: false, // whether animation should happen only once - while scrolling down
		  mirror: false, // whether elements should animate out while scrolling past them
		  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});




















	//  $("#ajax-contact-form").submit(function() {
	// var str = $(this).serialize();
	 
	// $.ajax({
	// type: "POST",
	// url: "http://http://prombuildinstallation.mcdir/contact.php",
	// data: str,
	// success: function(msg) {
	// if(msg == 'OK') {
	// result = '<p>Ваш заказ принят</p>';
	// $(".fields").hide();
	// } else {
	// result = msg;
	// }
	// $('.note').html(result);
	// }
	// });
	// return false;
	// });







	//  $("#btn").click(function() {

	// 	$.post( "submite_1.php", 

	// 	{
	// 		Email: $("#Email").val(),
	// 		name: $("#nmae").val(),
	// 		tel: $("#tel").val(),
	// 		textarea: $("#textarea").val()

	// 	}, function(data) {
	// 		$(".result").html(data);
	// 	});
	// });


});