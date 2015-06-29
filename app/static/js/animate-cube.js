var hourRot = 0;
var minRot = 0;
var string = 'what';
var secRot = 0;
var clock = document.getElementById("clock");

$( window ).resize(function() {
    sizeClock();
});

window.onload = function() {
	var time = new Date();
	var hour = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	sizeClock();

	minutes = minutes % 60;
	hour = hour % 12;
	seconds = seconds % 60;
	hourRot = hour/12*360;
	minRot = minutes/60*360;
	secRot = seconds/60*360;
	infiniteHour();
	infiniteMinute();
	infiniteSecond();

	var can = document.getElementById("ed");
	can.style.marginLeft = (document.getElementById("education").offsetWidth - 2) + "px";

	var proj = document.getElementById("proj");
	proj.style.marginLeft = (document.getElementById("projects").offsetWidth - 2) + "px";

	var tabs = document.getElementById("tabs");
	tabs.style.marginLeft = can.style.marginLeft;


	$('.front').hover( function(){
		$('#ed').addClass('hovered');
		$('.tab').addClass('hovered');
		setTimeout(function() {$('#one').addClass('one');}, 1000);
		setTimeout(function() {$('#two').addClass('two');}, 1000);
		setTimeout(function() {$('#three').addClass('three');}, 1000);
		setTimeout(function() {$('#four').addClass('four');}, 1000);
		setTimeout(function() {$('#five').addClass('five');}, 1000);
		$('.proj').removeClass('hovered');
		//$('.work').removeClass('hovered');
	})

	$('#education').hover( function(){
		$('#ed').addClass('hovered');
		$('.tab').addClass('hovered');
	})

	$('.left').hover( function(){
		$('#ed').removeClass('hovered');
		$('.tab').removeClass('hovered');
		$('.tab').removeClass('hovered');
		$('#one').removeClass('one');
		$('#two').removeClass('two');
		$('#three').removeClass('three');
		$('#four').removeClass('four');
		$('#five').removeClass('five');
		$('.proj').addClass('hovered');
	})
}

function infiniteMinute(){
	$('.minute').css({ 'transform' : 'rotateZ('+ (minRot) + 'deg)'});
	minRot = minRot+(1/60*360);
	document.getElementById('minute').innerHTML = parseInt(((minRot/360 * 60) - 1) % 60);
	if(minRot % 360 == 0){
		infiniteHour();
	}
}

function infiniteHour(){
	$('.hour').css({ 'transform' : 'rotateZ('+ (hourRot) + 'deg)'});
	hourRot = hourRot+(1/24*360);
}

function infiniteSecond(){
	$('.second').css({ 'transform' : 'rotateZ('+ (secRot) + 'deg)'});
	setTimeout(function() {
		secRot = secRot+(1/60*360);
		$('.second').css({ 'transform' : 'rotateZ(' + (secRot%360) + 'deg)' });
		infiniteSecond(secRot);
		if(secRot % 360 == 0){
			infiniteMinute()
		}
	}, 1000);

}

function sizeClock(){
	var val = ($('.clock').innerWidth());
	clock.style.height = val + "px";
	clock.style.borderRadius = val / 2 + "px";
	$('.second').height(val / 2);
	$('.minute').height(val / 2);
	$('.hour').height(val / 2);
}