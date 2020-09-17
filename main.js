function validate(){
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if(username == "null" || username == ""){
        alert("Username needed");
        return false;
    }else if(password == ""){
        alert("Password needed");
        return false;
    }else if(password.length<8){
        alert("Password must be more than eight");
        return false;
        
    };
}