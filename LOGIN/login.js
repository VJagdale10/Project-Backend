function validate_signup() {
    var name = document.myform.name1.value;
    var email = document.myform.email.value;
    var firstpassword = document.myform.password1.value;
    var secondpassword = document.myform.password2.value;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    }
    else if (firstpassword.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    else if (email == null || email == "") {
        alert("Please enter your email id");
        return false;
    }
    else {

        if (firstpassword == secondpassword) {
            return true;
        }
        else {
            alert("password must be same!");
            return false;
        }
    }

}
function validate_login(){
    var username = document.myform1.username.value;
    var password = document.myform1.password.value;

    if (username == null || username == "") {
        alert("Enter your email id");
        return false;
    }
    else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

}
