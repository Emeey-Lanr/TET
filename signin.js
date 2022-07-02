let user = []
let getUserInfo = () => {
  user = JSON.parse(localStorage.userInfo)
}
let signin = () => {
  let eMl = email.value;
  let pWord = password.value;
  // using check to check if it true then sign in
  let check = false;
  if (eMl != '' && pWord != ''){
    for (let index = 0; index < user.length; index++) {
      if (eMl == user[index].eMail && pWord == user[index].passWord){
        check = true;
        // setting email and password back to empty after signin in 
        email.value = '';
        password.value = '';
        break
      }
    }
    if (check == true){
      window.location.href = "dashboard.html"
    }
    else{
      alert('Invalid Email or Password')
    }
  }
  else{
    alert('Complete the above information')
  }
}
