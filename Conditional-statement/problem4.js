let reg_username = "web-22";
let reg_password = "123456";

let enter_username = "web-22";
let enter_password = "123456";

if(enter_username == reg_username){

  if(reg_password == enter_password){
    console.log("Login Successful");
  }

  else{
    console.log("Incorrect Password");
  }
}

else{
  console.log("Incorrect Username");
}