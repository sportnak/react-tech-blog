var left = 0,
    h = parseInt(document.documentElement.clientHeight, 10),
    w = parseInt(document.documentElement.clientWidth, 10);

w = w > screen.width / 2 ? w : screen.width / 2;


//a function to control the resizing of the elements. This is mostly for the width. Once it drops below a certain
// point it doesn't move the line to the right.
$( window ).resize(function() {
    if(document.documentElement.clientWidth < ( screen.width / 2)){
        document.getElementById('line').setAttribute('style', 'width:' + (screen.width/2) + 'px');
        console.log(screen.width/2);
    } else {
        document.getElementById('line').setAttribute('style', 'width:' + document.documentElement.clientWidth * 0.80 + 'px');
    }
});

$(document).ready(function() {
    $('.quoteBox').hover(function() {
        $('.text').show();
    }, function() {
        $('.text').hide();
    });
});

$('#tech').hover(function() {
    if( !$('#test1').is($('.techBox'))){
        var $div = $("<div>", {class: "techBox", style: "position:absolute;  background-image: url(../background3.jpg);", id: "test1"});
        var $div2 = $("<div>", {class: "techBox", id: "test2"});
        var $div3 = $("<div>", {class: "techBox", id: "test3"});
        $('#test1').remove();
        $('#test2').remove();
        $('#test3').remove();
        $('#wow').append($div);
        $('#wow').append($div2);
        $('#wow').append($div3);
    }
}, function() {
    
});

$('#adv').hover(function() {
    if( !$('#test1').is($('.advBox'))){
        var $div = $("<div>", {class: "advBox", style: "position:absolute;  background-image: url(../background3.jpg);", id: "test1"});
        var $div2 = $("<div>", {class: "advBox", id: "test2"});
        var $div3 = $("<div>", {class: "advBox", id: "test3"});
        $('#test1').remove();
        $('#test2').remove();
        $('#test3').remove();
        $('#wow').append($div);
        $('#wow').append($div2);
        $('#wow').append($div3);
    }
}, function () {
    
});

$('#aboutme').hover(function() {
    if( !$('#test1').is($('.aboutBox'))){
        var $div = $("<div>", {class: "aboutBox", style: "position:absolute;  background-image: url(../background3.jpg);", id: "test1"});
        var $div2 = $("<div>", {class: "aboutBox", id: "test2"});
        var $div3 = $("<div>", {class: "aboutBox", id: "test3"});
        $('#test1').remove();
        $('#test2').remove();
        $('#test3').remove();
        $('#wow').append($div);
        $('#wow').append($div2);
        $('#wow').append($div3);
    }
}, function() {
    
});