var audio;
audio = $("#initial-audio")[0];
/*add a initial background music to the page*/
/*function playInitialAudio(){
    audio.play();
}*/

$("#initialState").css("display","block");
$("#gamePage").css("display","none");
$("#gameOverPage").css("display","none");
$("#successPage").css("display","none");

/*when click play button game window should be view*/
$("#playButton").on('click', function(){
   /*alert("You clicked the play button");*/
    $("#gamePage").css("display","block");
    $("#initialState").css("display","none");
    $("#gameOverPage").css("display","none");
    $("#successPage").css("display","none");
    audio.play();
});

startAnimationIdle();

idleImage =-1;
function idleAnimation(){
    idleImage = idleImage+1;
    if(idleImage==10){
        idleImage=0;
    }
    $("#initial-character").attr("src","assets/images/sprite/idle00"+idleImage+".png");
    /*console.log(idleImage);*/
}

idleAnimationNumber=0;
function startAnimationIdle(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}