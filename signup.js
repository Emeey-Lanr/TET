// using ES6 syntax
let user = []
let getUserInfo = () => {
  if (localStorage.userInfo){
    user = JSON.parse(localStorage.userInfo)
  }
}
let register = () => {
  let ftName = fName.value;
  let ltName = lName.value;
  let eMl = email.value;
  let pWord = password.value;
  // preventing user from inputing nothing  
  if (ftName != '' && ltName != '' && eMl != '' && pWord !=''){
      let newUser = {
        firstName : ftName,
        lastName : ltName,
        eMail : eMl,
        passWord : pWord
      } 
      user.push(newUser)
      localStorage.userInfo = JSON.stringify(user)
      fName.value = '';
      lName.value = '';
      email.value = '';
      password.value = '';
      alert(`Registration Successful`)
      window.location.href = 'dashboard.html';
  }
  else{
    alert(`Complete the information above`)
  }
}