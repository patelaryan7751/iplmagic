


firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
 console.log(user.email)
     
       var cliref = firebase.database().ref('credential/');
       cliref.orderByChild("email").equalTo(user.email).on("child_added", function(data){
           
          var newVoke = data.val();
           document.getElementById("pname").textContent=`${newVoke.name}`;   
            document.getElementById("fname").textContent=`${newVoke.name}`;
           document.getElementById("email").textContent=`${newVoke.email}`;
           document.getElementById("phone").textContent=`${newVoke.phone}`;
           document.getElementById("coin").textContent=`${newVoke.coins}`;
           
       })
          
           
           
            
}
    
    else{
      window.open('login/index.html','_self');
    }
    
    


        
    });

    

