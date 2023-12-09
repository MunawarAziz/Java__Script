const form = document.querySelector('form');
const emailinput = form.email 
const passwordinput = form.password

form.addEventListener('submit', function(event){
        event.preventDefault()
       if(!emailinput.value || !passwordinput.value){
         window.alert("input filed should be fill")
         return false;
       }
       if(passwordinput.value.length<6){
         window.alert("password should be at least six digits")
         return false
       }
       console.log("login successfully")
})