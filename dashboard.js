'use strict'
//SIGN UP PAGE
const signPage = document.querySelector('.signIn');
signPage.classList.remove('signInNone');

//LANDING PAGE
const mainPage = document.querySelector('.mainPage');
//let user = [];

let user = JSON.parse(localStorage.userInfo);
let getUserInfo = () => {
    if (localStorage.userInfo) {
        user = JSON.parse(localStorage.userInfo)

    }
}
getUserInfo();

//this a function that loads up the the user's contact info when he or she signs up and 
//it get invoked in the signup button

let saveContact = () => {

    tbd.innerHTML = `<tr>`
    for (let ct = 0; ct < user.length; ct++) {
        if (email.value == user[ct].eMail && password.value == user[ct].passWord) {
            for (let contactindex = 0; contactindex < user[ct].contact.length; contactindex++) {
                tbd.innerHTML += `<td>${user[ct].contact[contactindex].contactFirstName}  </td>
                           <td>${user[ct].contact[contactindex].contactLastName}</td>
                          <td>${user[ct].contact[contactindex].contactPhoneNumber}</td>
                             <td>${user[ct].contact[contactindex].contactEmailAd}</td>
                              <td><button class= "editbtn" onclick="editContact()">${user[ct].contact[contactindex].contactEdit}</button></td>
                              <td><button>Delete</button></td>`


            }

            console.log(user[ct])
        }
        tbd.innerHTML += `</tr > `
        console.log(tbd.innerHTML)

    }
}
//====EVENT======
let loadEventPage = () => {
    alert(50);
    for (let lE = 0; lE < user.length; lE++) {

        if (email.value == user[lE].eMail && password.value == user[lE].passWord) {
            user[lE].event.map((items, contactIndex) => {
                eventHouseing.innerHTML += `<div class="event" id = "eventhouse">
                <div>
                     <button class="but1">
                       <span class="material-icons">star</span>
                       </button>
                 <span class="subName">${items.eventName}</span>
                </div>
               <div>
                 <span class="date">${items.eventDate}</span>
               </div >
               <div>
                <button onclick="eventEdit(${contactIndex})" style="width: 30px;">
               <span class="material-icons ps-2">edit_pen</span>
                </button>
              <button onclick="eventDelete(${contactIndex})">
               <span class="material-icons">delete_outline</span>
               </button>
              </div>
     </div >
     </div>`;
            });
        }
    }

}

//===================================

//DONT USE H1
let loadNoteTitle = () => {
    let h = false
    user.map((item, index) => {
        if (item.eMail == email.value) {
            h = true;
            user[index].note.map((dex, indd) => {
                if (h) {
                    user[index].note[indd].noteInfo.map((c, n) => {
                        console.log(c.noteTitle)
                        noteTexxtt2.innerHTML += `<h4>${c.noteTitle}</h4>
                                                   <p>${c.noteContent}</p>
                                                   <button onclick="editNote(${n})">Edit Note</button>
                                                   <button onclick="editDelete(${n})">Delete Note</button> <hr>`
                        tt.innerHTML = `<button onclick="saveEdit(${n})">Save Edit</button>`
                    })
                }


            })
        }
    })


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
            if (/*eMl*/email.value == user[i].eMail && /*pWord*/ password.value == user[i].passWord) {
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
    eventEmail.innerHTML = email.value;
    loadEventPage();


}



//CONTACT
const contactPage = document.querySelector('.contactPage');
const createNewContact = document.querySelector('.createNewContact')
const saveNewContactBtn = document.querySelector('.saveContactBtn');
const editContactBtnn = document.querySelector('.editContactBtn');


//EVENT PAGE
const eventPage = document.querySelector('.eventPage');


//NOTE PAGE
const notePage = document.querySelector('.Notes');
const noteTitle = document.querySelector('.notetitle');
const note = document.querySelector('.note');
const noteTitleBoardHouse = document.querySelector('.nottileboardhouse');
const eventList = document.querySelector('.eventList');
const notetext2 = document.querySelector('.noteTexxtt2')
const editSave = document.querySelector('.tt')

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

let contactBtn = () => {
    saveContact();
    showContactPage();
    var edit = document.querySelectorAll('.editbtn');
    for (let u = 0; u < user.length; u++) {
        if (email.value == user[u].eMail && password.value == user[u].passWord) {
            for (let m = 0; m < user[u].contact.length; m++) {
                for (let b = 0; b < edit.length; b++) {
                    edit[b].addEventListener('click', function () {
                        if (user[u].contact[m].contactEdit) {
                            editContactBtnn.classList.remove('editContactBtnNone')
                            createNewContact.classList.remove('createNewContactNone');
                            contactFirstName.value = user[u].contact[m].contactFirstName;
                            contactLastName.value = user[u].contact[m].contactLastName;
                            contactPhone.value = user[u].contact[m].contactPhoneNumber;
                            contactEmail.value = user[u].contact[m].contactEmailAd;
                        }
                    })
                }

            }
        }
    }


}
let editContactBtn = () => {
    var contactInfo = {
        contactFirstName: contactFirstName.value,
        contactLastName: contactLastName.value,
        contactPhoneNumber: contactPhone.value,
        contactEmailAd: contactEmail.value,
        contactEdit: 'Edit',

    }
    for (let u = 0; u < user.length; u++) {
        if (email.value == user[u].eMail && password.value == user[u].passWord) {
            for (let m = 0; m < user[u].contact.length; m++) {
                user[m].contact.splice(m, 1)
                user[m].contact.push(contactInfo);
                localStorage.userInfo = JSON.stringify(user);
                createNewContact.classList.add('createNewContactNone');

            }

        }
    }
}

let addContactBtn = () => {
    createNewContact.classList.remove('createNewContactNone');
    newContext.innerHTML = `Create New Conatact`
    saveNewContactBtn.classList.remove('saveContactBtnNone');
}


//it saves the contact when the input are filled up and it gets displayed in the table;

let saveContactBtn = () => {
    bbbtn.innerHTML = `<button>Delete<button>`

    var contactInfo = {
        contactFirstName: contactFirstName.value,
        contactLastName: contactLastName.value,
        contactPhoneNumber: contactPhone.value,
        contactEmailAd: contactEmail.value,
        contactEdit: 'Edit',

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
                                    <td>${contactEmail.value}</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>`

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

let contactBackBtn = () => {
    createNewContact.classList.add('createNewContactNone')
    contactFirstName.value = '';
    contactLastName.value = '';
    contactPhone.value = '';
    contactEmail.value = ''
}



//EVENT


let eventBtn = () => {
    showEventPage()

};
let addEvent = () => {
    eventList.classList.remove('eventListNone')
}
let exitEvent = () => {
    eventList.classList.add('eventListNone')
    eventTitleInput.value = '';
    eventDate.value = '';
}
let saveEvent = () => {
    let eventInfo = {
        eventName: eventTitleInput.value, eventDate: eventDate.value, eventTime: eventTime.value
    }
    let h = false;
    for (let e = 0; e < user.length; e++) {
        if (email.value == user[e].eMail && password.value == user[e].passWord) {
            if (eventTitleInput.value !== '') {
                console.log(30)
                user[e].event.push(eventInfo);
                localStorage.userInfo = JSON.stringify(user)
                eventList.classList.add('eventListNone')
                loadEventMaker.innerHTML += `<div class="event" id = "eventhouse">
                <div>
                     <button class="but1">
                       <span class="material-icons">star</span>
                       </button>
                 <span class="subName">${eventTitleInput.value}</span>
                </div>
               <div>
                 <span class="date">${eventDate.value}</span>
               </div >
               <div>
                   <button>
                    <span class="material-icons">content_copy</span>
                  </button>
                <button style="width: 30px;">
               <span class="material-icons ps-2">edit_pen</span>
                </button>
              <button>
               <span class="material-icons">delete_outline</span>
               </button>
              </div>
     </div >
     </div>`
            } else {
                alert('Input a title and date')
            }

            // h = true
            // break
        }

    }

}


let eventDelete = (eventDeleteIndex) => {
    let h = false;
    console.log(30)

}
//NOTE
let notesBtn = () => {

    showNotePage()
    //loadNoteTitle();
    notetext2.classList.remove('noteTexxtt2None');
}
    ;

const showNote = () => {
    noteTitle.classList.remove('noteTitleNone');
    note.classList.remove('noteNone');
}

const hideNote = (rr) => {
    noteTitle.classList.add('noteTitleNone');
    note.classList.add('noteNone');
    noteTitle.textContent = rr;
    note.textContent = rr
}
let writenote = () => {
    noteTitleBoardHouse.classList.add('nottileboardhouseNon')
    notetext2.classList.add('noteTexxtt2None');
    showNote();
}

let noteTexxt = document.querySelector('.noteTexxt');


let saveNoteBtn = () => {
    hideNote();
    notetext2.classList.remove('noteTexxtt2None')
    const noteMemory = { noteTitle: noteTitleName.value, noteContent: notePad.value }
    for (let Index = 0; Index < user.length; Index++) {
        if (email.value == user[Index].eMail && password.value == user[Index].passWord) {
            if (noteTitleName.value == '' && notePad.value == '') {
                alert('nothing to save')
            } else {
                user[Index].note[0].noteInfo.push(noteMemory);
                localStorage.userInfo = JSON.stringify(user);
                noteTitleBoardHouse.classList.remove('nottileboardhouseNon');
                noteTexxt.classList.remove('noteTexxtNone')

                //pp.innerHTML += `<p>${noteTitleName.value} <p>`
                noteTexxt.innerHTML += `<h4>${noteTitleName.value}</h4> <br> <p>${notePad.value}</p>`

            }

        }
    }


}

//when th p is 



let loadNoteContent = () => {
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

//It loads up the note for you for editing
const editNote = (editIndex) => {
    showNote();
    editSave.classList.remove('ttnone');
    notetext2.classList.add('noteTexxtt2None');
    user.filter((yy, index) => {
        let h = false
        if (yy.eMail == email.value) {
            h = true;
            user[index].note.filter((jj, indd) => {

                if (h) {

                    //let newArray = 
                    user[index].note[indd].noteInfo.filter((c, n) => editIndex != n);
                    for (let k = 0; k < user[index].note[indd].noteInfo.length; k++) {
                        if (editIndex == k) {
                            noteTitleName.value = user[index].note[indd].noteInfo[k].noteTitle;
                            notePad.value = user[index].note[indd].noteInfo[k].noteContent
                        }
                    }

                }

            })


        }
    })


}

//It saves the edited noted for u;
const saveEdit = (saveEditIndex) => {
    var ray = { noteTitle: noteTitleName.value, noteContent: notePad.value }
    user.filter((kk, userindex) => {
        let h = false
        if (kk.eMail == email.value) {
            h = true;
            user[userindex].note.filter((jj, lk) => {
                if (h) {

                    user[userindex].note[lk].noteInfo[saveEditIndex] = { noteTitle: noteTitleName.value, noteContent: notePad.value };
                    noteTexxtt2.innerHTML = "";
                    loadNoteTitle()
                    notetext2.classList.remove('noteTexxtt2None');
                    for (let z = 0; z < user[userindex].note[lk].noteInfo.length; z++) {
                        if (saveEditIndex == z) {
                            user[userindex].note[lk].noteInfo.splice(z, 1);
                            user[userindex].note[lk].noteInfo.push(ray)
                            localStorage.userInfo = JSON.stringify(user);

                        }
                    }
                }
            })
        }
    })
    editSave.classList.remove('ttnone')
    hideNote()
}


//DELETE NOTE
const editDelete = (indexbtn) => {
    user.filter((yy, index) => {
        let h = false
        if (yy.eMail == email.value) {
            h = true;
            user[index].note.filter((jj, indd) => {

                if (h) {

                    //let newArray = 
                    let ray = user[index].note[indd].noteInfo.filter((c, n) => indexbtn != n);
                    user[index].note[indd].noteInfo = ray
                    noteTexxtt2.innerHTML = "";
                    loadNoteTitle()
                    for (let k = 0; k < user[index].note[indd].noteInfo.length; k++) {
                        if (indexbtn == k) {
                            user[index].note[indd].noteInfo.splice(k, 1)
                            localStorage.userInfo = JSON.stringify(user);

                            //console.log(c.noteTitle)

                        }
                    }

                }

            })


        }
    })



}

let editBtn

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





