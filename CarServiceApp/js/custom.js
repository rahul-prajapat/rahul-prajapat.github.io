function sendmail(){
    
  var name = $('#brand').val();
  var email = $('#vehicle').val();
  var mobile = $('#mobile').val();
  // var subject = $('#Subject').val();
  // var message = $('#Message').val();
  

  // var body = $('#body').val();

  var Body='<img src="https://rahul-prajapat.github.io/CarServiceApp/assets/img/logo.png  "/>' +'<h4>Brand: '+name+'</h4>'+'<br><h4>Vehicle: '+email+'</h4>'+'<br><h4>Mobile Number: '+mobile+'</h4>';
  //console.log(name, phone, email, message);

  Email.send({
    SecureToken:"7cffed80-7985-443a-9fde-4f92cf48fb38",
    To: 'mvsmsolutions@gmail.com',
    From: "darkfitness2013@gmail.com",
    Cc:"darkfitness2013@gmail.com",
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

// var vehicletype = $('#vehicletype').val();

// $("#submitButton").click(function(){
//   var vehicletype = $('#vehicletype').find(":selected").text()
//  alert(vehicletype);
// });

$(document).ready(function(){
  $("#vehicletype").focusout(function(){
    var vehicletype = $(this).find(":selected").text();
    if(vehicletype == "Select Vehicle Type"){

    }
      else if (vehicletype == "Two Wheeler") {
        $("#bfourwheeler").hide();
        $("#bselect").hide();
      $("#btwowheeler").show();
    } else if (vehicletype == "Four Wheeler") {
      $("#btwowheeler").hide();
      $("#bselect").hide();
      $("#bfourwheeler").show();
    }else{
      $("#bselect").show();
    }
  });
});


$("#btwowheeler").focusout(function(){
  var vehiclemodel = $('#btwowheeler').find(":selected").text();
  if (vehiclemodel == "TVS") {
    $("#tvs").toggle();
    $("#modelselect").toggle();
  } else if (vehiclemodel == "Hero") {
    $("#hero").toggle();
    $("#modelselect").toggle();
  }else if (vehiclemodel == "Honda") {
    $("#honda").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "Bajaj") {
    $("#bajaj").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "Yamaha") {
    $("#yamaha").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "Suzuki") {
    $("#suzuki").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "Royal Enfield") {
    $("#royalenfield").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "Hero Electric") {
    $("#heroelectric").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "Okinawa") {
    $("#okinawa").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "Piaggio") {
    $("#piaggio").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "Mahindra") {
    $("#mahindra").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "KTM") {
    $("#ktm").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "ACTIVA") {
    $("#activa").toggle();
    $("#modelselect").toggle();
  }
  else{
    $("#modelselect").show();
  }
});



$("#bfourwheeler").focusout(function(){
  var vehiclemodel = $('#bfourwheeler').find(":selected").text();
  if (vehiclemodel == "MARUTI SUZUKI") {
    $("#marutisuzuki").toggle();
    $("#modelselect").toggle();
  } else if (vehiclemodel == "MAHINDRA") {
    $("#mahindra").toggle();
    $("#modelselect").toggle();
  }else if (vehiclemodel == "TATA") {
    $("#tata").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "HONDA") {
    $("#honda1").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "TOYOTA") {
    $("#toyota").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "CHEVROLET") {
    $("#chevrolet").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "NISSAN") {
    $("#nissan").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "RANAULT") {
    $("#ranault").toggle();
    $("#modelselect").toggle();
  }else if (vehiclemodel == "FORD") {
    $("#ford").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "SKODA") {
    $("#skoda").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "HYUNDAI") {
    $("#hyundai").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "VOLKSWAGEN") {
    $("#volkswagen").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "LAND ROVER") {
    $("#land-rover").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "BMW") {
    $("#bmw").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "AUDI") {
    $("#audi").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "JEEP") {
    $("#jeep").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "JAGUAR") {
    $("#jaguar").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "MERCEDES-BENZ") {
    $("#mercedes-benz").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "MG") {
    $("#mg").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "KIA") {
    $("#kia").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "DATSUN") {
    $("#datsun").toggle();
    $("#modelselect").toggle();
  }
  else if (vehiclemodel == "FIAT") {
    $("#fiat").toggle();
    $("#modelselect").toggle();
  }
  else{
    $("#modelselect").show();
  }
});
