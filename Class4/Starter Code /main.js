/*
 * Original Code by Lucien Huang! 
 */

    //This is the array of the images
var images = [
    "newschoolbuilding.jpg",
    "050615_Festival_052_750x563.jpg",
    "745127-original.jpg",
    "1496605813404.jpeg",
    "bigimg_parsons.png",
    "D10_01.jpg",
    "DnKbS0IX4AEBA5-.jpg",
    "exterior-PortalImages.jpg",
    "newschoolbuilding.jpg",
    "Parsons_about_5607thave.jpg",
    "Parsons-about.jpg",
    "SP16_SummerIntensive_Nector_Parsons.jpg",
    "The-New-School-Student-Life-3.jpg",
    "The-New-School’s-Parsons-School-of-Design-3.jpg",
    "tish.jpg"];

document.addEventListener("DOMContentLoaded", function (event) {
    //Checking if the js file is linked to html
    console.log("hello world");

    //Calling the function
    loadImages();
});

//A variable storing the index in the image array of the image that's being showed in the popup
var imgSwitch = 0;

//Put the images in the columns in the order:1, 2, 3 ... 1, 2 ...
function loadImages() {
    //Getting the columns in html
    var columns = document.getElementsByClassName("column");
    var columnNum = columns.length;

    //putInNum means which column the next image will be put into
    var putInNum = 0;

    //Check the number of images and the number of columns
    console.log("Number of images: "+images.length);
    console.log("Number of columns: "+columns.length);

    //Use a for loop to put all the images into columns
    for(var i = 0; i<images.length; i++){
        //Loading the images into a new <img> tag
        var newImg = document.createElement("img");
        
        newImg.className = "images";

        //Set the src attribute of the new <img> tag
        newImg.src = "./images/"+images[i];

        //ID is for the click event to track which image it is
        newImg.id = i;

        //can't use i here. must use the id of the image
        //because if using i, it will always be the last index of the array when the window is loaded
        newImg.addEventListener("click", function (e){
            popUp(e.target.id);
            imgSwitch = e.target.id;
        });


        //Put the new <img> tag into the column[putInNum]
        columns[putInNum].appendChild(newImg);

        //Move to the next column
        putInNum++;

        //If PutInNum is bigger than the number of columns, put the next image in the first column
        //Why -1?
        //Because the index of array starts from 0
        if(putInNum>columnNum-1){
            putInNum = 0;
        }
    }
}

//function to call popup
function popUp(imgCount){
    //record the index of the image showing in the popup
    imgSwitch = imgCount;

    var popup = document.getElementById("popup");
    var img = document.getElementById("pic");

    //make the popup div appear
    popup.style.zIndex = "1";
    popup.style.display = "block"

    //if click on the image in the popup, the popup will be closed
    img.addEventListener("click", function (e){
        close();
    });

    //put the address of the image in <img>
    img.src = "./images/"+images[imgCount];
}

//close the popup div
function close(){
    var popup = document.getElementById("popup");
    popup.style.zIndex = "-1";
    popup.style.display = "none"
}

//function for switching images
function change(direction){
    var numOfImg = images.length;

    //A variable storing the index of next image
    var next = 0;
    var img = document.getElementById("pic");

    //if direction is 1, switch to the right. If it's -1, switch to the left
    if(direction==1){
        //should be imgSwitch+1>=numOfImg
        //don't use imgSwitch+1, it can be wrong. e.g. imgSwitch is 5, imgSwitch+1 is 51, not 6
        //Careful when using "+"

        //if the next index is larger than the array length, make the next index 0, else, next = imgSwitch+1
        if(imgSwitch>numOfImg-2){
            next = 0;
        }else{
            imgSwitch++;
            next = imgSwitch;
        }
    }else if(direction==-1){
        if(imgSwitch-1<0){
            next = numOfImg-1;
        }else{
            next = imgSwitch-1;
        }
    }

    //store the index of the showing image into imgSwitch
    img.src = "./images/"+images[next];
    imgSwitch = next;
}