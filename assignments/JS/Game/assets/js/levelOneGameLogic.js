idleImageNumber=0;

function idleAnimation(){
    $("#sprite").attr("src","assets/images/sprite/Idle00"+idleImageNumber+".png");
    idleImageNumber=idleImageNumber+1;

    if(idleImageNumber==10){
        idleImageNumber=0;
    }
 /*   console.log("ended");*/
}

idleAnimationNumber=0;
function idleAnimationStart(){
    /*console.log("started");*/
     idleAnimationNumber = setInterval(idleAnimation,50);
}