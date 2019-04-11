/* To store your JSON file online you can usee http://myjson.com/
 You would get a URL and you can make calls to that URL*/

// You could also use https://jsonlint.com/ to valid the formating of your JSON file. 

// The reason why we preffer to use JSON is because is human readable


// JSON - Stans for Java Script Object Noation 




/*

	1. Understanding how to build an object and call information inside the object.

*/


	// var myData = {"firstName":"Karla", "lastName":"Polo", "age":"29"};

	// console.log(myData);

	// // document.getElementById("json-container").innerHTML = myData.firstName;
	// $(".json-container").append(myData.firstName + " " + myData.lastName + " is " + myData.age + " years ");



/*

	2. creating a data set that contains an array of objects

*/

//  var myData = {"people":[{"firstName":"Karla", "lastName":"Polo", "age":"29"},
//  						{"firstName":"Ann", "lastName":"Marie", "age":"62"}, 
//  						{"firstName":"Chris", "lastName":"Palmer", "age":"25"}]} ;

// console.log(myData);

//  $(".json-container").append(myData.people[0].firstName + " " +myData.people[2].lastName);



 /*

	3. Stringify the JSON Data and converting it back to JSON format

*/
	// var stringpeople = JSON.stringify(myData);
	// console.log(stringpeople);

	// // This can serve to store information, for example in a shopping cart
 // 	$(".json-container").append(stringpeople);


 // 	// To convert the data back to JSON format: 

 // 	var backtojson = JSON.parse(stringpeople);
 // 	console.log(backtojson);
 	
 // 	//This information is not a stering, so it can't be readed by the HTML
 // 	$(".json-container").append(backtojson);


 /*

	4. Understanding for loops and pulling data from a json file.

*/
	// $.getJSON( "../data.json", function(data) {

	//   // console.log(data.people);

	//   var myUsers = data.people;

	//   console.log(myUsers);

	//   for( var x in myUsers){

	//   	console.log( myUsers[x].firstName + " " + myUsers[x].lastName);

	// 	$(".json-container").append(myUsers[x].firstName + " " + myUsers[x].lastName);	

	//   }

	// })



/*

	5. Making ajax calls and pulling information from JSON files stored online. 

*/

	// $(document).ready(function(){

	// 	$("#btn").click(function(){

	// 		// console.log("clicked");

	// 		$.getJSON("https://api.myjson.com/bins/16myp4", function(data){

	// 			// console.log(data);

	// 			//console.log(data.people[0].firstName);

	// 			$.each( data.people, function(index,key){

	// 				console.log(key);

	// 				$(".json-container").append(key.firstName + " " + key.lastName + '<br>');


	// 			});

	// 		});

	// 	});




	// });



/*

	6. Get information from an API 

	you can get a list of public API at: https://github.com/toddmotto/public-apis
	today we're going to use a Jokes api -  http://www.icndb.com/api/

*/


	// $(document).ready(function(){

	// 	$("#btn").click(function(){

	// 		// console.log("clicked");

	// 		$.getJSON("http://api.icndb.com/jokes/random?exclude=[explicit]", function(data){

	// 			console.log(data);

	// 			$(".json-container").append(data.value.joke + "<br>"+ "<br>");

	// 		});

	// 	});




	// });


/*

	7. Get information from another API 

	you can get a list of public API at: https://github.com/toddmotto/public-apis
	today we're going to use a Jokes api -  https://www.mixcloud.com/developers/

*/	


	$(document).ready(function(){

		$("#btn").click(function(){

			// console.log("clicked");

			$.getJSON("https://api.mixcloud.com/new/", function(data){

				console.log(data);

				// $(".json-container").append(data.value.joke + "<br>"+ "<br>");

				$.each( data.data, function(index,key){

					console.log(key);
					//we can not start a key with a numeric value

					$(".json-container").append(key.user.name + '<br>' + "<img src ="+ key.pictures["320wx320h"] +">"  + '<br>' + '<br>');


				});

			});

		});




	});

	












