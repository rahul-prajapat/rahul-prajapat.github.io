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
  $("#vehicletype").click(function(){
    var vehicletype = $(this).find(":selected").text();
    if(vehicletype == "Select Vehicle Type"){
      $("#bfourwheeler").hide();
      $("#btwowheeler").hide();
      $(".test").hide();
      $("#bselect").show();
      $("#modelselect").show();
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


$("#btwowheeler").click(function(){
  var vehiclemodel = $('#btwowheeler').find(":selected").text();
  
  if (vehiclemodel == "TVS") {
    $(".test").hide();
    $("#tvs").toggle();
    $("#modelselect").hide();
  } else if (vehiclemodel == "Hero") {
    $(".test").hide();
    $("#hero").toggle();
    $("#modelselect").hide();
  }else if (vehiclemodel == "Honda") {
    $(".test").hide();
    $("#honda").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "Bajaj") {
    $(".test").hide();
    $("#bajaj").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "Yamaha") {
    $(".test").hide();
    $("#yamaha").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "Suzuki") {
    $(".test").hide();
    $("#suzuki").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "Royal Enfield") {
    $(".test").hide();
    $("#royalenfield").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "Hero Electric") {
    $(".test").hide();
    $("#heroelectric").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "Okinawa") {
    $(".test").hide();
    $("#okinawa").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "Piaggio") {
    $(".test").hide();
    $("#piaggio").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "Mahindra") {
    $(".test").hide();
    $("#mahindra").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "KTM") {
    $(".test").hide();
    $("#ktm").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "ACTIVA") {
    $(".test").hide();
    $("#activa").toggle();
    $("#modelselect").hide();
  }
  else{
    $("#modelselect").show();
  }
});



$("#bfourwheeler").click(function(){
  var vehiclemodel = $('#bfourwheeler').find(":selected").text();
  if (vehiclemodel == "MARUTI SUZUKI") {
    $(".test").hide();
    $("#marutisuzuki").toggle();
    $("#modelselect").hide();
  } else if (vehiclemodel == "MAHINDRA") {
    $(".test").hide();
    $("#mahindra").toggle();
    $("#modelselect").hide();
  }else if (vehiclemodel == "TATA") {
    $(".test").hide();
    $("#tata").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "HONDA") {
    $(".test").hide();
    $("#honda1").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "TOYOTA") {
    $(".test").hide();
    $("#toyota").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "CHEVROLET") {
    $(".test").hide();
    $("#chevrolet").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "NISSAN") {
    $(".test").hide();
    $("#nissan").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "RANAULT") {
    $(".test").hide();
    $("#ranault").toggle();
    $("#modelselect").hide();
  }else if (vehiclemodel == "FORD") {
    $(".test").hide();
    $("#ford").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "SKODA") {
    $(".test").hide();
    $("#skoda").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "HYUNDAI") {
    $(".test").hide();
    $("#hyundai").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "VOLKSWAGEN") {
    $(".test").hide();
    $("#volkswagen").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "LAND ROVER") {
    $(".test").hide();
    $("#land-rover").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "BMW") {
    $(".test").hide();
    $("#bmw").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "AUDI") {
    $(".test").hide();
    $("#audi").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "JEEP") {
    $(".test").hide();
    $("#jeep").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "JAGUAR") {
    $(".test").hide();
    $("#jaguar").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "MERCEDES-BENZ") {
    $(".test").hide();
    $("#mercedes-benz").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "MG") {
    $(".test").hide();
    $("#mg").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "KIA") {
    $(".test").hide();
    $("#kia").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "DATSUN") {
    $(".test").hide();
    $("#datsun").toggle();
    $("#modelselect").hide();
  }
  else if (vehiclemodel == "FIAT") {
    $(".test").hide();
    $("#fiat").toggle();
    $("#modelselect").hide();
  }
  else{
    $("#modelselect").show();
  }
});
