function sendmail(){
    
  var name = $('#brand').val();
  var email = $('#vehicle').val();
  var mobile = $('#mobile').val();
  // var subject = $('#Subject').val();
  // var message = $('#Message').val();
  

  // var body = $('#body').val();

  var Body='<h4>Brand:'+name+'</h4>'+'<br><h4>Vehicle: '+email+'</h4>'+'<br><h4>Mobile Number'+mobile+'</h4>';
  //console.log(name, phone, email, message);

  Email.send({
    SecureToken:"7cffed80-7985-443a-9fde-4f92cf48fb38",
    To: 'prajapat4.rahul@gmail.com',
    From: "darkfitness2013@gmail.com",
    Subject: "New repair request on contact from "+ mobile + " for " + name + " " + email,
    Body: Body
  }).then(
    message =>{
      //console.log (message);
      if(message=='OK'){
      alert('Your mail has been send. Thank you for connecting.');
      }
      else{
        console.error (message);
        alert('There is error at sending message. ')
        
      }

    }
  );



}