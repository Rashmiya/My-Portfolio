/*by default*/
    $(window).on('load', function() {
    $('#dashboardModel').modal('show');
});

/*when click start game button , should remove the modal and starts the game*/
    $("#startGame").on("click", function (){
        $('#dashboardModel').removeClass('show').addClass('fade');
        /*should starts the game*/
    });