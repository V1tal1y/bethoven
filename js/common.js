$(function() {
	$('.slider1').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  asNavFor: '.slider2'
	});
	$('.slider2').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  asNavFor: '.slider1',
	  centerMode: true,
	  focusOnSelect: true,
	  vertical: true,
	  responsive: [
		    {
		      breakpoint: 950,
		      settings: {
		        vertical: false,
				adaptiveHeight: true
		      }
		    }
		]
	});

	$('.slider_ex').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: true,
	  infinite: true,
	});

	function explode(){
		$('.shadow, .sf').fadeOut('slow');
	}
	function funcS(){
		$('.sf1, .sf2').fadeOut('slow')
		$('.shadow, .sf3').fadeIn('slow');
		setTimeout(explode, 3000);
	}
	$(".shadow, .close").click(function(){
		explode()
	});
	$(".popap").click(function(){
		$('.shadow, .sf1').fadeIn('slow');
	});
	$(".popap2").click(function(){
		$('.shadow, .sf2').fadeIn('slow');
	});
	$('form').submit(function(event){
		im = '';
		pf = '';
		about = '';
		im = $(this).find('input[name=name]').val();
		pf = $(this).find('input[name=phone]').val();
		about = $(this).find('input[name=about]').val();
		from = $(this).find('input[name=from]').val();
		$.ajax({
			url: "send.php",
			type: "POST",
			data: ({im:im, pf:pf, from:from, about:about}),
			dataType: "html",
			success: funcS
		});
		return false;
	});
	$("input[name=phone]").mask("+7 (999) 999-99-99");
});

