let i;
let userEdit;
const settingsBtn = () => {
  settingsPage.classList.remove('settingpageNone');
  notePage.classList.add('notesNone');
  mainPage.classList.add('mainPageNone');
  contactPage.classList.add('contactPageNone');
  eventPage.classList.add('eventPageNone'); 
}
let editProfileBtn = () => {
  editProfile.classList.remove('editprofileNone')
  userEdit = JSON.parse(localStorage.userInfo)
  i = JSON.parse(localStorage.index)  
}
const saveEditProfileBtn = () => {
  let firstName = ftName.value;
  let lastName = ltName.value;
  let eMail = eMl.value;
  let passWord = pWord.value;
  console.log(firstName ,lastName,eMail,passWord)
}