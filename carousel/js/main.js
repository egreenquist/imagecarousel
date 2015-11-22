/// create list of images

var imageList = ["images/image_1.jpg",
			"images/image_2.jpg",
			"images/image_3.jpg",
			"images/image_4.jpg",
			"images/image_5.jpg",
			"images/image_6.jpg"];

var curImg = 0;


//When you press the next button, add one to image src
	//until end, stop

$("#next").on('click', function(event){
	
	if(curImg < imageList.length - 1) {
		curImg += 1;	
	}
	else{
		//curImg += 0;
	}
	$("img").attr("src",imageList[curImg]);   
	console.log(curImg);

});

//When you press the prev button, minus one to imag scr
	//until beginning, stop


$("#prev").on('click', function(event){

if(curImg > 0){
	curImg -= 1;
}
else {
	//curImg +=0;
}
	$("img").attr("src",imageList[curImg])
	console.log(curImg);

});

//I am shocked I figured the above out! :D

//rate

// array = your-vote in HTML file

