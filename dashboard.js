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

//===================================
//let paraGraph = `<p id="paragraph"  onclick="loadNoteContent()></p>`

let loadNoteTitle = () => {
    for (let l = 0; l < user.length; l++) {
        if (email.value == user[l].eMail && password.value == user[l].passWord) {

            for (let nt = 0; nt < user[l].note[l].noteInfo.length; nt++) {
                pp.innerHTML += `<p id="paragraph" class="paraG"  onclick="loadNoteContent()">${user[l].note[l].noteInfo[nt].noteTitle}</p> <br>`;
            }


        }
    }



}





let First_Name = (first_Name,) => {
    firName1.innerHTML = first_Name;
    firName2.innerHTML = first_Name;
    firName3.innerHTML = first_Name;
    firName4.innerHTML = first_Name;
    firName4.innerHTML = first_Name;

}
let Last_Name = (last_Name) => {
    lstName1.innerHTML = last_Name;
    lstName2.innerHTML = last_Name;
    lstName3.innerHTML = last_Name;
    lstName4.innerHTML = last_Name;
    lstName5.innerHTML = last_Name;
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
                First_Name(user[i].firstName);
                Last_Name(`@${user[i].lastName}`);
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
    loadNoteTitle();
}



//CONTACT
const contactPage = document.querySelector('.contactPage');
const createNewContact = document.querySelector('.createNewContact')

//EVENT PAGE
const eventPage = document.querySelector('.eventPage');


//NOTE PAGE
const notePage = document.querySelector('.Notes');
const noteTitle = document.querySelector('.notetitle');
const note = document.querySelector('.note');
const noteTitleBoardHouse = document.querySelector('.nottileboardhouse');

noteTitleBoardHouse.classList.remove('nottileboardhouseNon');

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
                localStorage.userInfo = JSON.stringify(user)
                tbd1.innerHTML = `<tr>`
                tbd1.innerHTML += `<td>${contactFirstName.value}</td>
                                   <td>${contactLastName.value}</td>
                                    <td>${contactPhone.value}</td>
                                    <td>${contactEmail.value}</td>`

                tbd1.innerHTML += `</tr>`
            }

            console.log(tbd1.innerHTML)
        }
    }
    contactFirstName.value = '';
    contactLastName.value = '';
    contactPhone.value = '';
    contactEmail.value = ''

}




//EVENT
let eventBtn = () => showEventPage();

//NOTE
let notesBtn = () => showNotePage();

const showNote = () => {
    noteTitle.classList.remove('noteTitleNone');
    note.classList.remove('noteNone');
}

const hideNote = () => {
    noteTitle.classList.add('noteTitleNone');
    note.classList.add('noteNone');
}
let writenote = () => {
    noteTitleBoardHouse.classList.add('nottileboardhouseNon')
    showNote();
}
let saveNoteBtn = () => {
    hideNote();
    // const noteMemory = {
    //  noteInfo: [{ noteTitle: noteTitleName.value, noteContent: notePad.value }],
    //}
    const noteMemory = { noteTitle: noteTitleName.value, noteContent: notePad.value }
    for (let Index = 0; Index < user.length; Index++) {
        if (email.value == user[Index].eMail && password.value == user[Index].passWord) {
            if (noteTitleName.value == '' && notePad.value == '') {
                alert('nothing to save')
            } else {

                user[Index].note[0].noteInfo.push(noteMemory);
                localStorage.userInfo = JSON.stringify(user);
                noteTitleBoardHouse.classList.remove('nottileboardhouseNon');

                pp.innerHTML += `<p>${noteTitleName.value} <p>`

            }

        }
    }


    bb[0].note[0].note1.push(bbc)
    console.log(bb)
    //noteTitleBoard.innerHTML = noteTitleName.value;
    //noteTitlep.classList.remove('noteTitlepNone');
}

//when th p is 



let loadNoteContent = () => {
    alert('20')
    for (let m = 0; m < user.length; m++) {
        if (email.value == user[m].eMail && password.value == user[m].passWord) {
            for (let tn = 0; tn < user[m].note[m].noteInfo.length; tn++) {
                //if (paragraph.innerText == user[m].note[m].noteInfo[tn].noteTitle) {
                console.log(50)
                note.classList.remove('noteNone');
                noteTitleBoardHouse.classList.add('nottileboardhouseNon')
                notePad.value += user[m].note[m].noteInfo[tn].noteContent;
                text.value += user[m].note[m].noteInfo[tn].noteTitle;
                // }
            }


        }
    }
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





