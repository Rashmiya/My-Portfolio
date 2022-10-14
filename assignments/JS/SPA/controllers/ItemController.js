var itemsArray=[];

// disable tab key for all textFields using grouping selector
$("#txtItemCode, #txtDescription, #txtUnitPrice, #txtQtyOnHand").on('keydown', function(event){
    if (event.key == 'Tab'){
        event.preventDefault();
    }
});

// Enter/ArrowDown process
$("#txtItemCode").on('keydown', function(event){
    if(event.key == 'Enter' ||event.key == 'ArrowDown'){
        $("#txtDescription").focus();
    }
});
$("#txtDescription").on('keydown', function(event){
    if(event.key == 'Enter' ||event.key == 'ArrowDown'){
        $("#txtUnitPrice").focus();
    }
});
$("#txtUnitPrice").on('keydown', function(event){
    if(event.key == 'Enter' ||event.key == 'ArrowDown'){
        $("#txtQtyOnHand").focus();
    }
});
$("#txtQtyOnHand").on('keydown', function(event){
    if(event.key == 'Enter'){
        getValues();
        loadAllItems();
        bindRowClickEvents();
        deleteRowDetails();
        clearSaveFormTextFields();
        $("#txtItemCode").focus();
    }
});

// ArrowUp process
$("#txtItemCode").on('keyup', function(event){
    if(event.key == 'ArrowUp'){
        $("#txtQtyOnHand").focus();
    }
});
$("#txtDescription").on('keyup', function(event){
    if(event.key == 'ArrowUp'){
        $("#txtItemCode").focus();
    }
});
$("#txtUnitPrice").on('keyup', function(event){
    if(event.key == 'ArrowUp'){
        $("#txtDescription").focus();
    }
});
$("#txtQtyOnHand").on('keyup', function(event){
    if(event.key == 'ArrowUp'){
        $("#txtUnitPrice").focus();
    }
});

/*Add Item*/
$("#btnAddItem").click(function (){
    var itemCode = $("#txtItemCode").val();
    var itemDescription = $("#txtDescription").val();
    var itemUnitPrice = $("#txtUnitPrice").val();
    var itemQtyOnHand = $("#txtQtyOnHand").val();

    var itemObject={
        code:itemCode,
        description:itemDescription,
        unitPrice:itemUnitPrice,
        qtyOnHand:itemQtyOnHand
    }
    itemsArray.push(itemObject);
    /* console.log(itemArray);*/
    //  load data into itemTable
    loadAllItems();
    bindRowClickEvents();
    deleteRowDetails();

    clearSaveFormTextFields();
    $("#txtItemCode").focus();
});

function getValues(){
    var itemCode = $("#txtItemCode").val();
    var itemDescription = $("#txtDescription").val();
    var itemUnitPrice = $("#txtUnitPrice").val();
    var itemQtyOnHand = $("#txtQtyOnHand").val();

    var itemObject={
        code:itemCode,
        description:itemDescription,
        unitPrice:itemUnitPrice,
        qtyOnHand:itemQtyOnHand
    }
    itemsArray.push(itemObject);
}

function bindRowClickEvents(){
    $("#tblItem>tr").click(function(){
        /*get each texts separately from clicked table row-using traversing*/
        let itemCode = $(this).children().eq(0).text();
        let description = $(this).children().eq(1).text();
        let unitPrice = $(this).children().eq(2).text();
        let qtyOnHand = $(this).children().eq(3).text();

        /*set table values to textFields*/
        $("#inputCode").val(itemCode);
        $("#inputDescription").val(description);
        $("#inputUnitPrice").val(unitPrice);
        $("#inputQtyOnHand").val(qtyOnHand);
    });
}

function loadAllItems(){
    $("#tblItem").empty();

    for (var items of itemsArray) {
        var row = "<tr><td>"+items.code+'</td><td>'+items.description+'</td><td>'+items.unitPrice+'</td><td>'+items.qtyOnHand+'</td></tr>';
        $("#tblItem").append(row);
    }
}

/* when double click the row of the table -  should delete that row from the table*/
function deleteRowDetails(){
    $("#tblItem>tr").on('dblclick',function(){
        $(this).remove();     // catch the selected row at that moment
        clearUpdateFormTextFields();
    });
}
function clearUpdateFormTextFields(){
    $("#inputCode").val("");
    $("#inputDescription").val("");
    $("#inputUnitPrice").val("");
    $("#inputQtyOnHand").val("");
}
function clearSaveFormTextFields(){
    $("#txtItemCode").val("");
    $("#txtDescription").val("");
    $("#txtUnitPrice").val("");
    $("#txtQtyOnHand").val("");
}

/*when click getAll button*/
$("#btnViewAll").click(function(){
    loadAllItems();
    console.log("viewAll");
});

/*when click refresh icon*/
$("#refreshIcon").on('click', function(){
    clearUpdateFormTextFields();
});