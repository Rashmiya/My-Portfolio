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
var boxAnimationID = 0;
var birdAnimationID=0;
var walkingDragonID=0;

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
        if(boxAnimationID == 0){
            boxAnimationID = setInterval(boxAnimation,100);
        }
        if(birdAnimationID == 0){
            birdAnimationID = setInterval(birdAnimation,100);
        }
        if(walkingDragonID==0){
            walkingDragonID = setInterval(walkingDragonID,100);
        }
    }
    if(event.key=="ArrowUp"){
        if (jumpAnimationNumber==0){
            startAnimationJump();
        }
        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackgroundImage,100);
        }
        if(boxAnimationID == 0){
            boxAnimationID = setInterval(boxAnimation,100);
        }
        if(birdAnimationID==0){
            birdAnimationID = setInterval(birdAnimation,100);
        }

        if(walkingDragonID==0){
            walkingDragonID=setInterval(walkingDragonAnimation,100)
        }
    }
    if(event.key=="ArrowDown"){
        if (slideAnimationNumber==0){
            startAnimationSlide();
        }
        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackgroundImage,100);
        }
        if(boxAnimationID == 0){
            boxAnimationID = setInterval(boxAnimation,100);
        }
        if(birdAnimationID==0){
            birdAnimationID = setInterval(birdAnimation,100);
        }

        if(walkingDragonID==0){
            walkingDragonID=setInterval(walkingDragonAnimation,100)
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
    scoreBoard();
}

/*character jump state*/
spriteMarginTop = 430;

function jumpAnimation(){
    jumpImage = jumpImage+1;
    if(jumpImage<=5){
        spriteMarginTop = spriteMarginTop-45;   /*methna me height eka adu wedi krla jump level change krnna pluwn...*/
        document.getElementById("sprite").style.marginTop = spriteMarginTop+"px";
    }
    if(jumpImage>=6){
        spriteMarginTop = spriteMarginTop+45;
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

/*slide Animation State*/
slideAnimationNumber=0;
slideImage=-1;

function slideAnimation(){
    slideImage = slideImage+1;

    if(slideImage==10){
        slideImage=0;
        clearInterval(slideAnimationNumber);  /*clear slide Animation*/
        slideAnimationNumber=0;
        runImage=0;
        startAnimationRun();
    }
    $("#sprite").attr("src","assets/images/sprite/Slide__00"+slideImage+".png");
   /* $("#sprite").css("border","1px solid red");*/
  /*  $("#sprite").css("height","120");
    $("#sprite").css("width","150");*/
   /* $("#sprite").css("margin-top","750");*/
}

function startAnimationSlide(){
    clearInterval(idleAnimationNumber);  /*clear the idle animation number*/
    runImage=0;
    clearInterval(runAnimationNumber);  /*clear run nimation*/
    jumpImage=0;
    clearInterval(jumpAnimationNumber);   /*clear jump Animation*/
    slideAnimationNumber = setInterval(slideAnimation,100);
}

boxMarginLeft=1400;
birdMarginLeft=200;
dragonMarginLeft = 550;

createDragon();
creteBirds();
createWalkingDragons();

/*create challenge dragon*/
function createDragon(){
    for(var i=0; i<=20; i++){
        var enimy = document.createElement("div");  /*create a new div*/
        enimy.className = 'enimy';                          /*add a class name for that div*/
        $("#gamePage").append(enimy);
        enimy.style.marginLeft = boxMarginLeft+"px";
        enimy.id="enimy"+i;
        boxMarginLeft = boxMarginLeft+1200;                 /*boxes wala equal distance thiyagenimata*/

    }
}

/*create bird challenges*/
function creteBirds(){
    for (let i = 0; i < 20; i++) {
        var birds = document.createElement("div");
        birds.className = "birds";
        $("#gamePage").append(birds);
        birds.style.marginLeft = birdMarginLeft+"px";
        birds.id="birds"+i;
        birdMarginLeft=birdMarginLeft+600;
    }
}
/*cretae walking dragon*/
function createWalkingDragons(){
    for (let i = 0; i < 40; i++) {
        var walkingDragon = document.createElement("div");
        walkingDragon.className = "walkingDragon";
        $("#gamePage").append(walkingDragon);
        walkingDragon.style.marginLeft = dragonMarginLeft+"px";
        walkingDragon.id="walkingDragon"+i;
        dragonMarginLeft=dragonMarginLeft+600;
    }
}

function boxAnimation() {
    for (let i = 0; i < 40; i++) {
        var enimy = document.getElementById("enimy" + i);
        /* console.log("enimy");*/
        var currentMarginLeft = getComputedStyle(enimy).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 45;
        /*  console.log(newMarginLeft);*/
        enimy.style.marginLeft = newMarginLeft + "px";

        if(newMarginLeft>=-100 & newMarginLeft <= 110){
            if(spriteMarginTop > 430){
                clearInterval(boxAnimationID);

                clearInterval(runAnimationNumber);
                runAnimationNumber=0;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber=0;

                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId=-1;

                clearInterval(birdAnimationID);
                birdAnimationID=0;

                deadAnimationNumber = setInterval(deadAnimation,100);
            }
          }
        }
    }

function birdAnimation() {
    for (let i = 0; i < 40; i++) {
        var birds = document.getElementById("birds" + i);
        var currentBirdMarginLeft = getComputedStyle(birds).marginLeft;
        var newBirdMarginLeft = parseInt(currentBirdMarginLeft) - 45;
        birds.style.marginLeft = newBirdMarginLeft + "px";
    }
}

function walkingDragonAnimation(){
    for (let i = 0; i < 40; i++) {
        var walkingDragon = document.getElementById("walkingDragon"+i);
        var currentDragonMarginLeft = getComputedStyle(walkingDragon).marginLeft;
        var newDragonMarginLeft = parseInt(currentDragonMarginLeft)-45;
        walkingDragon.style.marginLeft = newDragonMarginLeft+"px";
    }
}

deadImage = -1;
deadAnimationNumber=0;

function deadAnimation(){
    deadImage = deadImage+1;

    if(deadImage==10){
        deadImage = 0;
    }
    $("#sprite").attr("src","assets/images/sprite/Dead__00"+deadImage+".png");
}

var score = 0;
function scoreBoard(){
    score=score+1;
    document.getElementById("score").innerHTML = score;
}