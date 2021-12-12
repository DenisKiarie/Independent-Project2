function validate(){
    var date = document.forms["fillForm"]["date"].value;
    var gender = document.forms["fillForm"]["gender"].value;

    if(date == "") {
        alert("enter date");
        return false;
    }

    if(gender == ""){
        alert("select a gender");
        return false;
    }
    
}

