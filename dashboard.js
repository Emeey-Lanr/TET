'use strict'
//SIGN UP PAGE
const signPage = document.querySelector('.signIn');
signPage.classList.remove('signInNone');

//LANDING PAGE
const mainPage = document.querySelector('.mainPage');
//let user = [];
let user = JSON.parse(localStorage.userInfo)
let getUserInfo = () => {
    user = JSON.parse(localStorage.userInfo)

}

//this a function that loads up the the user's contact info when he or she signs up and 
//it get invoked in the signup button
let saveContact = () => {
    console.log(user[0].contact[0].contactFirstName)
    tbd.innerHTML = `<tr>`
    for (let ct = 0; ct < user.length; ct++) {
        if (email.value == user[ct].eMail && password.value == user[ct].passWord) {
            for (let contactindex = 0; contactindex < user[ct].contact.length; contactindex++) {
                tbd.innerHTML += `<td>${user[ct].contact[contactindex].contactFirstName}</td>
                           <td>${user[ct].contact[contactindex].contactLastName}</td>
                          <td>${user[ct].contact[contactindex].contactPhoneNumber}</td>
                             <td>${user[ct].contact[contactindex].contactEmailAd}</td>`


            }

            console.log(user[ct])
        }
        tbd.innerHTML += `</tr>`
        console.log(tbd.innerHTML)

    }
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
                firName.innerHTML = user[i].firstName;
                lstName.innerHTML = `@${user[i].lastName}`;
                // setting email and password back to empty after signin in 
                //email.value = '';
                //password.value = '';
                break
            }
        }
        if (check == true) {
            // window.location.href = "dashboard.html"
            signPage.classList.add('signInNone');
            mainPage.classList.remove('mainPageNone');

        }
        else {
            alert('Invalid Email or Password')
        }
    }
    else {
        alert('Complete the above information')
    }
    saveContact();
}









//CONTACT
const contactPage = document.querySelector('.contactPage');
const createNewContact = document.querySelector('.createNewContact')

//EVENT PAGE
const eventPage = document.querySelector('.eventPage');

//NOTE PAGE
const notePage = document.querySelector('.Notes');

//SETTING PAGE
const settingsPage = document.querySelector('.settingpage');
const editProfile = document.querySelector('.editprofile');
const delProfile = document.querySelector('.delprofile');



//it hides the remaing pages except for the contact page
const showContactPage = () => {
    contactPage.classList.remove('contactPageNone');
    mainPage.classList.add('mainPageNone');
    eventPage.classList.add('eventPageNone');
    notePage.classList.add('notesNone');
    settingsPage.classList.add('settingpageNone');
}
////it hides the remaing pages except for the event page
const showEventPage = () => {
    eventPage.classList.remove('eventPageNone');
    mainPage.classList.add('mainPageNone');
    contactPage.classList.add('contactPageNone');
    notePage.classList.add('notesNone');
    settingsPage.classList.add('settingpageNone');
}
////it hides the remaing pages except for the note page
const showNotePage = () => {
    notePage.classList.remove('notesNone');
    mainPage.classList.add('mainPageNone');
    contactPage.classList.add('contactPageNone');
    eventPage.classList.add('eventPageNone');
    settingsPage.classList.add('settingpageNone');
}
////it hides the remaing pages except for the Setting page
const showSettingPage = () => {
    settingsPage.classList.remove('settingpageNone');
    notePage.classList.add('notesNone');
    mainPage.classList.add('mainPageNone');
    contactPage.classList.add('contactPageNone');
    eventPage.classList.add('eventPageNone');
}
//CONTACT
let contactBtn = () => showContactPage();

let addContactBtn = () => {
    createNewContact.classList.remove('createNewContactNone');
}


//it saves the contact when the input are filled up and it gets displayed in the table;

let saveContactBtn = () => {


    var contactInfo = {
        contactFirstName: contactFirstName.value,
        contactLastName: contactLastName.value,
        contactPhoneNumber: contactPhone.value,
        contactEmailAd: contactEmail.value,

    }
    if (contactFirstName.value == '' || contactPhone.value == '') {
        alert('Input a name and phone number')
    } else {
        createNewContact.classList.add('createNewContactNone');
        for (let c = 0; c < user.length; c++) {
            console.log(user[c])


            if (email.value == user[c].eMail && password.value == user[c].passWord) {
                user[c].contact.push(contactInfo);
                //console.log(user[0].contact[0].contactFirstName); 
                user[c].contact.push(contactInfo);
                console.log(user[c])
                //localStorage.userInfo = JSON.stringify(user.splice(user[c], 1))
                tbd.innerHTML = `<tr>`
                //console.log(user[c].contact.length)

                tbd.innerHTML = `<td>${user[c].contact[c].contactFirstName}</td>
                                   <td>${user[c].contact[c].contactLastName}</td>
                                  <td>${user[c].contact[c].contactPhoneNumber}</td>
                                     <td>${user[c].contact[c].contactEmailAd}</td>`

                tbd.innerHTML += `</tr>`
            }

            console.log(tbd.innerHTML)
        }
    }
}




//EVENT
let eventBtn = () => showEventPage();

//NOTE
let notesBtn = () => showNotePage();


let saveNoteBtn = () => {

}

//SETTINGS
let settingsBtn = () => showSettingPage();


let editProfileBtn = () => {
    editProfile.classList.remove('editprofileNone')
}

let delProfileBtn = () => {
    delProfile.classList.remove('delprofileNone')
}
let saveEditProfileBtn = () => {
    editProfile.classList.add('editprofileNone')
}
let saveDelProfileBtn = () => {
    window.location.href = 'signup.html';
}


