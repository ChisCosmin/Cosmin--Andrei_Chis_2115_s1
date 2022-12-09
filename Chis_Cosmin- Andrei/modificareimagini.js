
var responsiveSlider = function() {
var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

var prevSlide = function() {
  if(count > 1) {
    count = count - 2;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = 1) {
    count = items - 1;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
};

var nextSlide = function() {
  if(count < items) {
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = items) {
    slideList.style.left = "0px";
    count = 1;
  }
};

setInterval(function() {
  nextSlide()
}, 3000);

};

window.onload = function() {
responsiveSlider();  
}

function remove_image(){
	
	var x = document.getElementById("imagini");
	
	if (x.style.display === "none" ){
		x.style.display = "block";
	}else{
		x.style.display = "none";
	}
}

function remove_image2(){
	
	var y = document.getElementById("slider");
	
	if(y.style.display === "block"){
		y.style.display = "none";
	}else{
		y.style.display = "block";
	}
}
