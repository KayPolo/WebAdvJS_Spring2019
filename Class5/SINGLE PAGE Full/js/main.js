window.addEventListener('DOMContentLoaded', function(e){
	e.preventDefault();
	thisEvent();

	console.log("js is linked");

	var navOffset = $("nav").offset().top;
	console.log(navOffset);

	// window.addEventListener("scroll", function(){
	// 	var scrollPos = (window.pageYOffset!=undefined)?window.pageYOffset:
	// 	(document.documentElement || document.body.parentNode||document.body).scrollPos;

	// 	console.log(scrollPos);
	// });

	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		console.log(scrollPos);


		var stickNav = $("nav");
		scrollMenu(stickNav);

		var stickMenu = $(".menubar");
		scrollMenu(stickMenu);

		function scrollMenu(apple){

			if (scrollPos>= navOffset){
			apple.addClass("fixed");
			}else{
			apple.removeClass("fixed");
			}

		}



		var links = [$(".link1"), $(".link2"), $(".link3"), $(".link4"), $(".link5")];

		var firstOff = $("#first").offset().top -30;
		var servOff = $("#second").offset().top -30;
		var testOff = $("#third").offset().top -30;
		var appOff = $("#fourth").offset().top -30;
		var contOff = $("#fifth").offset().top -30;


		//first Page
			if(scrollPos >= firstOff){
				links[0].addClass('purple');
				$('.t1').addClass("appear");

			} else{
				links[0].removeClass('purple');
				$('.t1').removeClass("appear");
			}

		//second Page
			if(scrollPos >= servOff){
				links[0].removeClass('purple');
				links[1].addClass('purple');

				$('.t2').addClass("appear");
			} else{
				links[1].removeClass('purple');

				$('.t2').removeClass("appear");
			}

		//Testimonial Page
			if(scrollPos >= testOff){
				links[1].removeClass('purple');
				links[2].addClass('purple');

				$('.t3').addClass("appear");
			} else{
				links[2].removeClass('purple');

				$('.t3').removeClass("appear");
			}

		//fourth Page
			if(scrollPos >= appOff){
				links[2].removeClass('purple');
				links[3].addClass('purple');

				$('.t4').addClass("appear");
			} else{
				links[3].removeClass('purple');

				$('.t4').removeClass("appear");
			}

		//fifth Page
			if(scrollPos >= contOff){
				links[3].removeClass('purple');
				links[4].addClass('purple');

				$('.t5').addClass("appear");
			} else{
				links[4].removeClass('purple');

				$('.t5').removeClass("appear");
			}



	});	




});

  	function thisEvent(){

  		$('nav li a').click(function(e) {
			e.preventDefault();

	     	var myTarget = $(this.hash);
	     	myTarget = myTarget.length && myTarget
	      			
	        var targetOffset = myTarget.offset().top;
	       	$('html,body').animate({scrollTop: targetOffset}, 1000);
	
	     });

  	}

	









