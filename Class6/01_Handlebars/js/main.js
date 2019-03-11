/*------------------------------------------------*/
// 	Handlebars Intro
//	http://handlebarsjs.com/
//	Learn more: http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/
/*------------------------------------------------*/

//	Our Data Object
var data = {
	title: "My First Post",
	description: "Why is this so easy?!"
};


var source = $('#myfirst-template').html();

var templete = Handlebars.compile(source); 

var results = templete(data);

$('body').append(results);


console.log("It's working");