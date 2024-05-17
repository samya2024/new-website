// function userMatch(){
//     var username=["samya,qadir"];
//     var passcode=[2560,1893];
   
//     var inputValue=document.getElementById('name').value
//     var passInput=document.getElementById('pass').value
    
//     var position= username.indexOf(inputValue)

//     //  console.log(position)

// if(inputValue == username[position]&&passInput==passcode(position)){
//     alert("Matched")
//     window.location.href="index.html"
// }
//      else{
//         alert("Not does not match")
//      }
//      function match () {
//      var username = document.getElementById('UserName')
//      username.innerText=username[position];

//      }

//     }





// regester.html
function register(){
    var username = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password')
    var confirm  = document.getElementById('confirm').value

    if(username==''||email==''||password==''|| confirm==''){
    alert("fill the field accordingly");
    }
    else if(password.value.length >= 8 && password.value.length < 20 && password.value.match(numericcase) && password.value.match(uppercase) && password.value.match(lowercase) && password.value.match(specialcase) && password.value==confirm)
        
    {


        localStorage.setItem("username",username);
        localStorage.setItem("email",email);
        localStorage.setItem ("password",password.value);
        localStorage.setItem ("confirm password",confirm);
        // to redirect on login page
        window.location.href="login.html"
    }
    else
    {
        alert("enter the same password in column")
    }
}


// login.html
function login(){
          var useremail=document.getElementById("email").value;
          var userPassword =document.getElementById("password").value;

          var localEmail=localStorage.getItem("email")
          var localPassword=localStorage.getItem("password")
    
          if(useremail==localEmail& localPassword==userPassword){
            alert("login Successful")
            // to redirect on home page
            window.location.href="index.html"
         }
         else{
            alert("credential does not match")
         }
         }


function match(){
    var LocalName = localStorage.getItem("UserName");
    var name = document.getElementById('userName');
    
    if(LocalName){
        name.innerText= LocalName
    }
}
// regular expression

var uppercase=/[A-Z]/;
var numericcase=/[0-9]/;
var specialcase=/^[A-Za-z0-9]/;
var lowercase=/[a-z]/;

function validation(){
    var password = document.getElementById('password')
    var uc = document.getElementById('uc')
    var lc = document.getElementById('lc')
    var nc = document.getElementById('nc')
    var len = document.getElementById('len')
    if(password.value.match(uppercase)){
        uc.style.color="green"
    }
    else{
        uc.style.color="red"
    }
    if(password.value.match(lowercase)){
        lc.style.color="green"
    }
    else{
        lc.style.color="red"
    }
    
    if(password.value.match(numericcase)){
        nc.style.color="green"
    }
    else{
        nc.style.color="red"
    }
    if(password.value.match(specialcase)){
        sc.style.color="green"
    }
    else{
        sc.style.color="red"
    }
    if(password.value.length>8&& password.value.length<20){
        len.style.color="green"
    }
    else{
        len.style.color="red"
    }
   
   if(password.value.length>=8 && password.value.length<20 && password.value.match(numericcase) && password.value.match(uppercase) && password.value.match(lowercase) && password.value.match(specialcase)){
    box.style.display ="none"
   }
   else(
    box.style.display="block"
   )
}
function listbox(){
    var box=document.getElementById('listbox')
    box.style.display="block" 

}
