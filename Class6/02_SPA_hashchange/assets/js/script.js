
var app = app || {};

app.main = (function() {

	var students = [];

	function attachEvents() {

		$('.filters button.abt').click(function(e){
			e.preventDefault();

			window.location.hash = '#about';

		});

	}



	function loadData(){

		$.getJSON("../students.json", function(data){

			students = data;

			generateAllStudentsHTML(students);

			$(window).trigger('hashchange');


		});
	}


	function generateAllStudentsHTML(data){

		var list = $('.all-students .students-list');

		var source = $("#students-template").html();

		var template = Handlebars.compile(source);

		list.append(template(data));

	}





	function render(url) {

		var temp = url.split('/')[0];

		$('.main-content .page').removeClass('visible');

		var map = {
			//this is the landing page

			'': function(){

				$('.main-content .all-students').addClass('visible');
				console.log('load students');
			},

			'#about': function(){	
				renderAboutPage();
			}


		};


			map[temp]();

		// if(map[temp]){
		// 	map[temp]();
		// 


	}



	// These are my pages!!!

	function renderAboutPage(){
		var page = $('.about');
		page.addClass('visible');
	}




	var init = function(){
		console.log('Initializing app.');


		attachEvents();

		loadData();



		$(window).on('hashchange', function(){
			render(decodeURI(window.location.hash));
		}).trigger('hashchange');

	};




	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);
