window.addEventListener('DOMContentLoaded', function(e){
	e.preventDefault(); 

	console.log("js is linked");


	scrollEvent();
	
	// window.addEventListener('scroll', function(){

	// 	var scrollPos = (window.pageYOffset!=undefined)?window.pageYOffset:
	// 	(document.documentElement || document.body.parentNode || document.body).navOffset;

	// 	console.log(scrollPos);
	// });
	var navOffset = $("nav").offset().top;
	console.log(navOffset);	

	//this is equeal to window.addEventListener('scroll', function()
	$(window).scroll(function(){

		var scrollPos = $(window).scrollTop();
		// console.log(scrollPos);


		var stickNav = $("nav");
		scrollMenu(stickNav);

		var stickMenu = $(".menubar");
		scrollMenu(stickMenu);



		function scrollMenu(banana){
			if(scrollPos >= navOffset){

				banana.addClass("fixed");
				
			}else {
				banana.removeClass("fixed");
		
			}

		}




		var firstOff = $('#first').offset().top -50; 
		var secondOff = $('#second').offset().top -50;
		var thirdOff= $('#third').offset().top -50;
		var forthOff= $('#fourth').offset().top -50;
		var fifthOff = $('#fifth').offset().top -50;

		if (scrollPos >= firstOff){

			$('.t1').addClass('appear');

		} else {

			$('.t1').removeClass('appear');
		}


		if (scrollPos >= secondOff){

			$('.t2').addClass('appear');

		} else {

			$('.t2').removeClass('appear');
		}

	});


});


	function scrollEvent(){

		$('nav li a').click(function(){

			var myTarget = $(this.hash);
			myTarget = myTarget.length && myTarget; 

			var targetOffset = myTarget.offset().top;
			console.log('targetOffset = ' + targetOffset);

			$('html , body').animate({scrollTop : targetOffset}, 1000);

		});

	}


	










