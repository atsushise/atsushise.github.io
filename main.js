$(function(){
///////////start////////////



$("#MyPortfolio").fullpage({
    anchors:['m01', 'm02', 'm03', 'm04', 'm05', 'm06', 'm07', 'm08', 'm09'],
	//navigation: true,
    afterLoad: function(origin, destination, direction){
        //console.log(destination.index);
        var idx=destination.index;
        $(".section").eq(idx).addClass("on").siblings().removeClass("on");
        $("nav li").eq(idx).addClass("on").siblings().removeClass("on");
    },
});

$("#intro").YTPlayer({
    
    containment:'.m01',
    autoPlay:true,
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    realfullscreen: false,
    anchor: 'center,center',
    ratio:  '2/3',
});


$("#Portfolio01").YTPlayer({
    containment:'.Portfolio01',
    autoPlay:true,
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    realfullscreen: false,
    anchor: 'center,center',
    ratio:  '2/3',
});

$(".m02 .xi-play").on("click", function(){
    $("#Portfolio01").YTPPlay();
});

$(".m02 .xi-pause").on("click", function(){
    $("#Portfolio01").YTPPause();
});

//포폴동영상제어
$("#Portfolio02").YTPlayer({
    containment:'.Portfolio02',
    autoPlay:true,
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    realfullscreen: false,
    anchor: 'center,center',
    ratio:  '2/3',
});

$(".m03 .xi-play").on("click", function(){
    $("#Portfolio02").YTPPlay();
});

$(".m03 .xi-pause").on("click", function(){
    $("#Portfolio02").YTPPause();
});

//포폴동영상제어
$("#Portfolio03").YTPlayer({
    containment:'.Portfolio03',
    autoPlay:true,
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    realfullscreen: false,
    anchor: 'center,center',
    ratio:  '2/3',
});

$(".m04 .xi-play").on("click", function(){
    $("#Portfolio03").YTPPlay();
});

$(".m04 .xi-pause").on("click", function(){
    $("#Portfolio03").YTPPause();
});

//포폴동영상제어
$("#Portfolio04").YTPlayer({
    containment:'.Portfolio04',
    autoPlay:true,
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    realfullscreen: false,
    anchor: 'center,center',
    ratio:  '2/3',
});

$(".m05 .xi-play").on("click", function(){
    $("#Portfolio04").YTPPlay();
});

$(".m05 .xi-pause").on("click", function(){
    $("#Portfolio04").YTPPause();
});


//photo_slider 슬라이드
$(".photo_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 3,
    autoplay:4000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
});

$(".m07 i.xi-arrow-left").on("click",function(){
    $(".photo_slider").slick("slickPrev")
});

$(".m07 i.xi-arrow-right").on("click",function(){
    $(".photo_slider").slick("slickNext")
});

//full창 open
$("#header i,.m09 img").on("click", function(){
    $("#full").addClass("on")
});

$("#full i,#full a ").on("click", function(){
    $("#full").removeClass("on")
});
//////////////////////

});