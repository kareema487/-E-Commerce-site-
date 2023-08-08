var check_input= document.getElementsByTagName('input')
for (let index = 0; index < check_input.length; index++) {
     check_input[index].addEventListener("blur",function(){
        check_input[index].style.border="2px solid blue"
     })
     check_input[index].addEventListener("input",function(){
        check_input[index].style.border="2px solid red"
     })
    
}
var Name = document.getElementById("name")
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var message = document.getElementById("message")

document.getElementById("myForm").addEventListener('submit',function(e){
    e.preventDefault();
    if (Name.value.length<=2){
        alert("please enter name!");
        
    }
        
    if(email.value.length<=0){
        alert("please enter email!");
        
    }
    if(phone.value.length<=10){
        alert("please enter phone!");
        
    }
    if(message.value.length<=0){
        alert("please enter your message!");
        
    }
    else{
    document.getElementById('result').innerHTML="Thanks for you"; 
}
   
})
       