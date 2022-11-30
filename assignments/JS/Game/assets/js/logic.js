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
runAnimationNumber=0;
runImage=-1;
jumpAnimationNumber=0;
jumpImage=0;

/*when press ArrowRight key, character should run*/
function keyEvent(event){
    if (event.key == 'Tab' || event.key == "Enter"){
        event.preventDefault();
    }
    if(event.key=='ArrowRight'){
        if(runAnimationNumber==0){      /*start the run Animation*/
            startAnimationRun();
        }
        console.log("ArrowRight pressed");

        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackgroundImage,100);
        }
    }
    if(event.key=="ArrowUp"){
        if (jumpAnimationNumber==0){
            startAnimationJump();
        }
        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackgroundImage,100);
        }
    }
}


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
    clearInterval(idleAnimationNumber);
}

/*moving background Image*/
var backgroundImagePositionX = 0;
moveBackgroundAnimationId =0;

function moveBackgroundImage(){
    backgroundImagePositionX = backgroundImagePositionX-20;
    document.getElementById("gamePage").style.backgroundPositionX = backgroundImagePositionX+"px";
}

/*character jump state*/
spriteMarginTop = 430;

function jumpAnimation(){
    jumpImage = jumpImage+1;
    if(jumpImage<=5){
        spriteMarginTop = spriteMarginTop-30;   /*methna me height eka adu wedi krla jump level change krnna pluwn...*/
        document.getElementById("sprite").style.marginTop = spriteMarginTop+"px";
    }
    if(jumpImage>=6){
        spriteMarginTop = spriteMarginTop+30;
        document.getElementById("sprite").style.marginTop = spriteMarginTop+"px";
    }

    if(jumpImage==10){
        jumpImage=0;
        clearInterval(jumpAnimationNumber);  /*clear jump Animation*/
        jumpAnimationNumber=0;
        runImage=0;
        startAnimationRun();
    }
    $("#sprite").attr("src","assets/images/sprite/Jump__00"+jumpImage+".png");
}

function startAnimationJump(){
    clearInterval(idleAnimationNumber);  /*clear the idle animation number*/
    runImage=0;
    clearInterval(runAnimationNumber);  /*clear the run animation*/
    jumpAnimationNumber = setInterval(jumpAnimation,100);
}