function idCard(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;

    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);

    var numberArray = ["age" + "phoneNumber"];
    
    for (var i = 0; i < 4; i++){
        if(numberArray[i] <= 100){
            postAge = age
        }
        else if(numberArray[i] > 100){
            postPhoneNumber = phoneNumber
        }

    }
    document.getElementById("postAge").innerHTML = "Age: " + age;
    document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
   

  }