/*by default*/
   /* $(window).on('load', function() {
    $('#dashboardModel').modal('show');
       /!* $("#gamePage").css("filter","brightness(100%)");*!/
});*/

/*when click start game button , should remove the modal and starts the game*/
    $("#startGame").on("click", function (){
        $('#dashboardModel').removeClass('show').addClass('fade');
       /* $("#gamePage").css("filter","brightness(20%)");*/
        /*should starts the game*/
    });