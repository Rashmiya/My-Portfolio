$(window).on('load', function() {
    startAnimationIdle();
});

/*character breath state*/
idleImage =-1;
function idleAnimation(){
    idleImage = idleImage+1;
    if(idleImage==10){
        idleImage=0;
    }
    $("#sprite").attr("src","assets/images/sprite/idle00"+idleImage+".png");
    /*console.log(idleImage);*/
}

idleAnimationNumber=0;
function startAnimationIdle(){
    idleAnimationNumber = setInterval(idleAnimation,100);
}

/*when press ArrowRight key, character should run*/
function keyEvent(event){
    if (event.key == 'Tab' || event.key == "Enter"){
        event.preventDefault();
    }
    if(event.key=='ArrowRight'){
        clearInterval(idleAnimationNumber);
        idleImage=-1;
        startAnimationRun();    /*start the run Animation*/
        console.log("ArrowRight pressed");

        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackgroundImage,100);
        }
    }
    if(event.key=="ArrowUp"){

    }
}
runAnimationNumber=0;
runImage=-1;

/*character run state*/
function runAnimation(){
    runImage = runImage+1;
    if(runImage==10){
        runImage=0;
    }
    $("#sprite").attr("src","assets/images/sprite/Run__00"+runImage+".png");
    /*console.log("Run__00"+runImage+".png");*/
}
function startAnimationRun(){
    runAnimationNumber = setInterval(runAnimation,100);
}

/*moving background Image*/
var backgroundImagePositionX = 0;
moveBackgroundAnimationId =0;

function moveBackgroundImage(){
    backgroundImagePositionX = backgroundImagePositionX-20;
    document.getElementById("gamePage").style.backgroundPositionX = backgroundImagePositionX+"px";
}
