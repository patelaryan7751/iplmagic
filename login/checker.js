var config = {
apiKey: "AIzaSyCcc1rft337qBQNzztirZNC54AMDoNFLzQ",
    authDomain: "iplmagic.firebaseapp.com",
    databaseURL: "https://iplmagic-default-rtdb.firebaseio.com",
    projectId: "iplmagic",
    storageBucket: "iplmagic.appspot.com",
    messagingSenderId: "582560658747",
    appId: "1:582560658747:web:ddf2c4e531b267f43c731e",
    measurementId: "G-S1GJSX28G2"
 
  };
     firebase.initializeApp(config);
    console.log(firebase);
firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
       var user = firebase.auth().currentUser;
       console.log(user);
       if(user.emailVerified!=true)
           {
       user.sendEmailVerification().then(function() {
            
   var emailVerified = user.emailVerified;

        
        window.open('verify-email.html','_self');
           
    
}).catch(function(error) {
  // An error happened.
});
           }
           var cliref = firebase.database().ref('credential/');
       cliref.orderByChild("email").equalTo(user.email).on("value", function(data){
          
           if(data.val()){
               window.open('../index.html','_self');
}
           else{
               window.open('database.html','_self');
           }

   } );
   }
    else{
    window.open('index1.html','_self');
    }
});