// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();
     // Username link click
    $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);
    
       // Add User button click
    $('#btnAddUser').on('click', addUser);

});

// Functions =============================================================
function addToTempList(user){
    userListData.push(user);
}
// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {
      userListData = data;
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this._id + '">' + this.name + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};

// Show User Info
function showUserInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');
    
  

    // Get Index of object based on id value
    var arrayPosition = userListData.map(function(arrayItem) { 
       
        return arrayItem._id; }).indexOf(thisUserName);
    
        // Get our User Object
    var thisUserObject = userListData[arrayPosition];
     console.log('user',thisUserObject)
    //Populate Info Box
    $('#name').text(thisUserObject.name);
    $('#email').text(thisUserObject.email);
}

// Add User
function addUser(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addUser input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'name': $('#addUser fieldset input#inputUserName').val(),
            'email': $('#addUser fieldset input#inputUserEmail').val(),
            'password': $('#addUser fieldset input#inputUserPassword').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function( response ) {
          
          if(!!response){
               addToTempList(response);
            var tableContent='';
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + response._id + '">' + response.name + '</a></td>';
            tableContent += '<td>' + response.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + response._id + '">delete</a></td>';
            tableContent += '</tr>';
              $('#userList table tbody').append(tableContent);
          }
            
           

        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};
