class Register{
  constructor(username,email,pwd){
    this.username=username;
    this.email=email;
    this.pwd=pwd;
    
  }
  set setUsername(username){
    var letters = /^[A-Za-z]+$/;
    if(username.match(letters)){
      
    }
    else{
      alert("name must be alphabet");
      this.flag=false;
    }
  }
  set setEmail(email){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.match(filter)){
      this.email = email;
    }
    else{
      alert("Invalid email")
    }
  }
  set setPwd(pwd){
    var passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if(pwd.match(passReg)){
      this.pwd=pwd;
    }
    else{
      alert("invalid password");
    }
  }
  get getUsername(){
  return this.username;

  }
  get getEmail(){
  return this.email;
  }
  get getPwd(){
  return this.pwd;
  }
  toString(){
    return "this user name is: "+this.username+" and the email is: "+this.email;
  }
}

function register(){
  var username = document.getElementById('username').value;
  var username = document.getElementById('email').value;
  var username = document.getElementById('pwd').value;
  
  
  reg = new Register();
    reg.setEmail = email;
    reg.setUsername = username;
    reg.setPwd = pwd;
    alert(reg.toString());
  
}