/*initial state*/
    $("#homeContainer").css('display', 'block');
    $("#customerContainer").css('display', 'none');
    $("#itemContainer").css('display', 'none');
    $("#orderContainer").css('display', 'none');

/*when click customers button in Home Page*/
$("#HomePagecustomerButton").click(function () {
    $("#customerContainer").css('display', 'block');
    $("#homeContainer").css('display', 'none');
    $("#itemContainer").css('display', 'none');
    $("#orderContainer").css('display', 'none');
});
/*when click item button in Home Page*/
$("#HomePageItemButton").click(function () {
    $("#itemContainer").css('display', 'block');
    $("#homeContainer").css('display', 'none');
    $("#customerContainer").css('display', 'none');
    $("#orderContainer").css('display', 'none');
});
/*when click order button in Home Page*/
$("#HomePageOrderButton").click(function () {
    $("#orderContainer").css('display', 'block');
    $("#homeContainer").css('display', 'none');
    $("#customerContainer").css('display', 'none');
    $("#itemContainer").css('display', 'none');
});

