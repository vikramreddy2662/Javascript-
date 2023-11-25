function validateLogin(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="vikram reddy" && password=="Vikram@2662"){
        window.location.href="welcome.html";
        alert("logged in successfully");
       
    }
    else{
        alert("Invalid Login Credentials");
    }

}

function register(){
    window.location.href="register.html";
    var name=document.getElementById("name").value;
    var pass=document.getElementById("pass").value;
    var email=document.getElementById("email").value;
    var dob=document.getElementById("dob").value;

   }

   