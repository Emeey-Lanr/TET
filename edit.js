let i;
let userEdit;
let editProfileBtn = () => {
  editProfile.classList.remove('editprofileNone')
  userEdit = JSON.parse(localStorage.userInfo)
  i = JSON.parse(localStorage.index)
  ftName.value = userEdit[i].firstName
  ltName.value = userEdit[i].lastName;
  eMl.value = userEdit[i].eMail;
  pWord.value = userEdit[i].passWord;
}
const saveEditProfileBtn = () => {
  let fName = ftName.value;
  let lName = ltName.value;
  let eml = eMl.value;
  let pwd = pWord.value;
  userEdit[i] = {
    firstName : fName ,
    lastName : lName,
    eMail : eml,
    passWord : pwd
  }
  localStorage.userInfo = JSON.stringify(userEdit)
  alert('Account details sucessfully changed')
  window.location.href = "dashboard.html"
}