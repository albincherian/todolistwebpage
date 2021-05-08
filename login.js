
let user = document.getElementById("user");
let err = document.getElementById("err");
function userValidation (){
    const name="admin";
    if(user.value==name ){
        err.innerHTML = "Valid";
        err.style.color ="green";
        return true;
    }
    else{
        alert("Username is not valid!!!");
        return false;
        
    }
    
}

function passwordValidation() {
    var pwd = document.getElementById("pass");
    var err1 = document.getElementById("err1");
    var pass="12345";
    if (pwd.value==pass){
        err1.innerHTML="Valid";
        err1.style.color="green";
        return true;    
    } 
    else {
        alert("Password you entered is Wrong!!!");
        return false;
    }
}
