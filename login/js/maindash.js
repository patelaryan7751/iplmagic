
document.querySelector('#mchn').onclick = function(){
                firebase.auth().signOut();          
        
}

firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
 console.log(user.email)
document.getElementById("login").style.display="none";       
       document.getElementById("mchn").style.display="block";  
       document.getElementById("name").style.display="block";  

   } 
    else{
       document.getElementById("login").style.display="block";        
   document.getElementById("mchn").style.display="none";  
       document.getElementById("name").style.display="none";  
    }
    
    


        
    });

function buy(){
  if(document.getElementById("mchn").style.display=="block"){
      alert("It costs 250 coins do you want to buy?");
}
    else{
        alert("please login first to buy!!");
         window.open('login/index.html','_self');
    }
}
    

