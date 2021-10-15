$(function() {

	$("#nav-toggle").click(function() {
		$("#nav-toggle").toggleClass("active");
		if ($(".top_menu").is(":hidden")) {
			$(".top_menu").addClass("visible");
		} else {
			$(".top_menu").removeClass("visible");
		}
		return false;
	});
	$(".top_menu ul a, .support a").click(function() {
		$(".top_menu").removeClass("visible");
		$("#nav-toggle").removeClass("active");
	});

$(".registration_form").scrollLeft("359");

	$(document).ready(function(){
		$(".top_menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
