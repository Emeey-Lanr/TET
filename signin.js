/*let user = []
let getUserInfo = () => {
  user = JSON.parse(localStorage.userInfo)
}
let signin = () => {
  let eMl = email.value;
  let pWord = password.value;
  // using check to check if it true then sign in
  let check = false;
  if (eMl != '' && pWord != '') {
    for (let i = 0; i < user.length; i++) {
      if (eMl == user[i].eMail && pWord == user[i].passWord) {
        check = true;
        // setting email and password back to empty after signin in 
        email.value = '';
        password.value = '';
        break
      }
    }
    if (check == true) {
      window.location.href = "dashboard.html"
    }
    else {
      alert('Invalid Email or Password')
    }
  }
  else {
    alert('Complete the above information')
  }
}*/
