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