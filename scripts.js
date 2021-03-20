function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 3){
    text = "Please Enter a valid Name(Must be over 3 Characters)";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 5){
    text = "Please Enter Correct Subject(Must be over 5 Characters)";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter a valid Phone Number(Must be over 10 Numbers)";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter a valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 30){
    text = "Please Enter More Than 30 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}