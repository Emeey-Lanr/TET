let delProfileBtn = () => {
  delProfile.classList.remove('delprofileNone')
  userEdit = JSON.parse(localStorage.userInfo)
  i = JSON.parse(localStorage.index)
}
let saveDelProfileBtn = () => {
    if(emAil.value == '' && pword.value == ''){
      alert('Fill the information above')
    }
    else if(userEdit[i].eMail != emAil.value && userEdit[i].passWord != pword.value){
      alert('Incorrect email or password')
    }
    else{
      userEdit.splice(i,1)
      localStorage.userInfo = JSON.stringify(userEdit)
      alert("Account successfully deleted")
      window.location.href = "signup.html"
    }
}
