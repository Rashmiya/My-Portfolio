var customerArray = [];

// disable tab key for all textFields using grouping selector
$("#txtCustomerID, #txtCustomerName, #txtCustomerAddress, #txtCustomerContact").on('keydown', function(event){
    if (event.key == 'Tab'){
        event.preventDefault();
    }
});

// Enter/ArrowDown process
$("#txtCustomerID").on('keydown', function(event){
    if(event.key == 'Enter' ||event.key == 'ArrowDown'){
        $("#txtCustomerName").focus();
    }
});
$("#txtCustomerName").on('keydown', function(event){
    if(event.key == 'Enter' ||event.key == 'ArrowDown'){
        $("#txtCustomerAddress").focus();
    }
});
$("#txtCustomerAddress").on('keydown', function(event){
    if(event.key == 'Enter' ||event.key == 'ArrowDown'){
        $("#txtCustomerContact").focus();
    }
});
$("#txtCustomerContact").on('keydown', function(event){
    if(event.key == 'Enter'){
        getValues();
        loadAllCustomers();
        bindRowClickEvents();
        deleteRowDetails();
        clearSaveFormTextFields();
        $("#txtCustomerID").focus();
    }
});

/* $("#txtCustomerID").on('keyup', function(event){
   console.log(event.key);
 });*/

// ArrowUp process
$("#txtCustomerID").on('keyup', function(event){
    if(event.key == 'ArrowUp'){
        $("#txtCustomerContact").focus();
    }
});
$("#txtCustomerName").on('keyup', function(event){
    if(event.key == 'ArrowUp'){
        $("#txtCustomerID").focus();
    }
});
$("#txtCustomerAddress").on('keyup', function(event){
    if(event.key == 'ArrowUp'){
        $("#txtCustomerName").focus();
    }
});
$("#txtCustomerContact").on('keyup', function(event){
    if(event.key == 'ArrowUp'){
        $("#txtCustomerAddress").focus();
    }
});

/*Add Customer*/
$("#btnAddCustomer").click(function (){
    // catch textField values and create object, after push the object into the array
    getValues();
    //  load data into customerTable
    loadAllCustomers();
    //bind click event for added rows
    bindRowClickEvents();
    // bind double click event for delete a row from the table
    deleteRowDetails();

    clearSaveFormTextFields();
    $("#txtCustomerID").focus();
});

function getValues(){
    //step-01 ---- catch values from each input texts.
    var customerID = $("#txtCustomerID").val();
    var customerName = $("#txtCustomerName").val();
    var customerAddress = $("#txtCustomerAddress").val();
    var customerContact = $("#txtCustomerContact").val();

    // step-02 ---- create a customer object and set values to that object
    var customerObject = {
        id :customerID,
        name :customerName,
        address:customerAddress,
        contactNumber:customerContact
    }

    // step-03 ----- push that object values into the global array
    customerArray.push(customerObject);
}
function bindRowClickEvents(){
    $("#tblCustomer>tr").click(function(){
        /*get each texts separately from clicked table row-using traversing*/
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let contactNumber = $(this).children().eq(3).text();

        /*set table values to textFields*/
        $("#inputID").val(id);
        $("#inputName").val(name);
        $("#inputAddress").val(address);
        $("#inputContactNumber").val(contactNumber);
    });
}

function loadAllCustomers(){
    $("#tblCustomer").empty();

    for (var customer of customerArray) {
        var row =  '<tr><td>'+customer.id+'</td><td>'+customer.name+'</td><td>'+customer.address+'</td><td>'+customer.contactNumber+'</td></tr>';
        $("#tblCustomer").append(row);
    }
}

/* when double click the row of the table -  should delete that row from the table*/
function deleteRowDetails(){
    $("#tblCustomer>tr").on('dblclick',function(){
        $(this).remove();     // catch the selected row at that moment
        clearUpdateFormTextFields();
    });
}
function clearUpdateFormTextFields(){
    $("#inputID").val("");
    $("#inputName").val("");
    $("#inputAddress").val("");
    $("#inputContactNumber").val("");
}
function clearSaveFormTextFields(){
    $("#txtCustomerID").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerContact").val("");
}

/*when click getAll button*/
$("#btnViewAll").click(function(){
    loadAllCustomers();
    console.log("viewAll");
});

/*when click refresh icon*/
$("#refreshIcon").on('click', function(){
    clearUpdateFormTextFields();
});