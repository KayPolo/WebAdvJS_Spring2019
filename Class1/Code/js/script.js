console.log("Hello");

var GreetingContainer;

GreetingContainer = "This is a new Variable";

console.log(GreetingContainer);

// alert('Greetings: ' + GreetingContainer);

document.write('<p>' + GreetingContainer + '</p>');

var atributes = ["Black" , "Green", "Blue", "Yellow"];

var arrange = document.getElementsByClassName('msg');


for (var i = 0; i< atributes.length; i++){
	document.write('<p>' + atributes[i] + '</p>');
	

	for (var i = 0; i< arrange.length; i++) {
	arrange[i].innerHTML = atributes[i];
	}
}



