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
            user[ct].contact.map((ci, cd) => {

                tbd.innerHTML += `<td>${user[ct].contact[cd].contactFirstName}</td>
                    <td>${user[ct].contact[cd].contactLastName}</td>
                   <td>${user[ct].contact[cd].contactPhoneNumber}</td>
                      <td>${user[ct].contact[cd].contactEmailAd}</td>
                       <td><button class= "editbtn" onclick="editContact(${cd})"> <span class="material-icons">edit_pen</span></button></td>
                       <td><button onclick="deleteContactBtn(${cd})"><span class="material-icons">delete_outline</span></button>`

            })

            tbd.innerHTML += `</tr > `
        }
    }
}

//====EVENT======
let loadEventPage = () => {

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
                 <span class="date">${items.eventTime}</span>
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
            if (email.value == user[i].eMail && password.value == user[i].passWord) {
                check = true;
                nameUser.innerHTML = user[i].firstName
                First_Name(user[i].firstName);
                Last_Name(`@${user[i].lastName}`);
                break

            }

        }

        if (check == true) {
            signPage.classList.add('signInNone');
            mainPage.classList.remove('mainPageNone');

        }
        else {
            validation.innerHTML = 'Invalid Email or Password';
            document.getElementById('validation').style.color = '#dc3545'
        }
    }
    else {
        // alert('Complete the above information')
        validation.innerHTML = 'Complete the above information';
        document.getElementById('validation').style.color = '#dc3545'
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
const editContactBtnn = document.querySelector('.editContactBtnEdit');


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

//CONTACT

let contactBtn = () => {
    // saveContact();
    showContactPage();
    var edit = document.querySelectorAll('.editbtn');
    user.map((ui, ud) => {
        if (ui.eMail == email.value) {
            nameUserCon.innerHTML = `${ui.firstName}!`;
            console.log(ui.contact == "")

            if (ui.contact == "") {
                pPreviewContact.innerHTML = `NO CONTACT AVAILLABLE,<br>CREATE NEW CONTACT.`
            } else {
                pPreviewContact.innerHTML = '';
            }


        }
    })


}


//Shows what to be edited
let editContact = (indexbtn) => {
    console.log(indexbtn)
    let showSaveEditBtn = document.querySelector('.editContactBtnEDit')
    createNewContact.classList.remove('createNewContactNone');
    newContext.innerHTML = `Edit your contact`;
    saveNewContactBtn.classList.remove('saveContactBtnNone')
    user.filter((it, id) => {
        if (it.eMail == email.value) {
            for (let t = 0; t < user[id].contact.length; t++) {
                if (indexbtn == t) {
                    contactFirstName.value = user[id].contact[t].contactFirstName;
                    contactLastName.value = user[id].contact[t].contactLastName;
                    contactPhone.value = user[id].contact[t].contactPhoneNumber;
                    contactEmail.value = user[id].contact[t].contactEmailAd;
                    if (indexbtn == t) {
                        user[id].contact.splice(t, 1);
                        localStorage.userInfo = JSON.stringify(user);
                    }
                }
            }

        }
    })
    tbd.innerHTML = ""
}



let saveditBtn = (saveEditIndexBtn) => {
    console.log(saveEditIndexBtn);
}



//DELETE CONTACT
let deleteContactBtn = (delindexbtn) => {
    user.filter((ui, ud) => {
        if (ui.eMail == email.value) {
            let del = user[ud].contact.filter((ci, cd) => delindexbtn != cd);
            user[ud].contact = del
            tbd.innerHTML = "";
            saveContact();
            localStorage.userInfo = JSON.stringify(user)
        }
    })
}


let addContactBtn = () => {
    createNewContact.classList.remove('createNewContactNone');
    newContext.innerHTML = `Create New Conatact`
    saveNewContactBtn.classList.remove('saveContactBtnNone');
    tbd.innerHTML = "";
    tbd1.innerHTML = "";
    contactFirstName.value = '';
    contactLastName.value = '';
    contactPhone.value = '';
    contactEmail.value = ''
}


//it saves the contact when the input are filled up and it gets displayed in the table;

let saveContactBtn = () => {
    var contactInfo = {
        contactFirstName: contactFirstName.value,
        contactLastName: contactLastName.value,
        contactPhoneNumber: contactPhone.value,
        contactEmailAd: contactEmail.value,


    }
    let h = false;
    if (contactFirstName.value == '' || contactPhone.value == '') {
        conValidation.innerHTML = 'Looks like you forgot something'
    } else {
        conValidation.innerHTML = '';
        createNewContact.classList.add('createNewContactNone');
        user.filter((ui, ud) => {
            if (email.value == ui.eMail) {
                pPreviewContact.innerHTML = '';
                ui.contact.push(contactInfo);
                localStorage.userInfo = JSON.stringify(user)

            }

        })
    }

    tbd1.innerHTML += `<tr>`
    user.filter((uii, udd) => {
        if (email.value == uii.eMail) {
            uii.contact.filter((ci, cd) => {
                tbd1.innerHTML += `<td>${ci.contactFirstName}</td>
                <td>${ci.contactLastName}</td>
                 <td>${ci.contactPhoneNumber}</td>
                 <td>${ci.contactEmailAd}</td>
                 <td><button onclick="editContact1(${cd})"><span class="material-icons">edit_pen</span></button></td>
                 <td><button onclick="delContact(${cd})"><span class="material-icons">delete_outline</span></button></td>`
                tbd1.innerHTML += `</tr>`;
            })
        }

    })

    contactFirstName.value = '';
    contactLastName.value = '';
    contactPhone.value = '';
    contactEmail.value = ''
    console.log(tbd1.innerHTML)
}
//it edits  when doing it for the first time
let editContact1 = (editIndex) => {
    createNewContact.classList.remove('createNewContactNone');
    user.filter((ui, ud) => {
        if (ui.eMail == email.value) {
            for (let i = 0; i < user[ud].contact.length; i++) {
                if (editIndex == i) {
                    contactFirstName.value = user[ud].contact[i].contactFirstName;
                    contactLastName.value = user[ud].contact[i].contactLastName;
                    contactPhone.value = user[ud].contact[i].contactPhoneNumber;
                    contactEmail.value = user[ud].contact[i].contactEmailAd;
                    if (editIndex == i) {
                        user[ud].contact.splice(i, 1)
                        localStorage.userInfo = JSON.stringify(user)
                    }
                }

            }
        }

    })
    tbd1.innerHTML = "";

}

//it delete when doing for the first time
let delContact = (delIndex) => {
    if (confirm('Are you sure you want to delete ?')) {
        user.filter((ui, ud) => {
            if (ui.eMail == email.value) {
                let x = user[ud].contact.filter((ci, cd) => delIndex != cd);
                user[ud].contact = x;
                tbd1.innerHTML = "";
                localStorage.userInfo = JSON.stringify(user)
                saveContactBtn()
                if (ui.contact == '') {
                    pPreviewContact.innerHTML = `NO CONTACT AVAILLABLE,<br>CREATE NEW CONTACT.`;
                } else {
                    pPreviewContact.innerHTML = ``
                }
            }
        })

    }

}

let contactBackBtn = () => {
    conValidation.innerHTML = '';

    createNewContact.classList.add('createNewContactNone');
    saveNewContactBtn.classList.remove('saveContactBtnNone')
    var contactInfo = {
        contactFirstName: contactFirstName.value,
        contactLastName: contactLastName.value,
        contactPhoneNumber: contactPhone.value,
        contactEmailAd: contactEmail.value,


    }
    let h = false;
    if (contactFirstName.value == '' || contactPhone.value == '') {
        console.log('new')
    } else {
        createNewContact.classList.add('createNewContactNone');

        user.filter((ui, ud) => {
            if (email.value == ui.eMail) {
                ui.contact.push(contactInfo);
                localStorage.userInfo = JSON.stringify(user)

            }

        })
    }
    tbd1.innerHTML += `<tr>`
    user.filter((uii, udd) => {
        if (email.value == uii.eMail) {
            uii.contact.filter((ci, cd) => {
                tbd1.innerHTML += `<td>${ci.contactFirstName}</td>
                <td>${ci.contactLastName}</td>
                 <td>${ci.contactPhoneNumber}</td>
                 <td>${ci.contactEmailAd}</td>
                 <td><button onclick="editContact1(${cd})"><span class="material-icons">edit_pen</span></button></td>
                 <td><button onclick="delContact(${cd})"><span class="material-icons">delete_outline</span></button></td>`
                tbd1.innerHTML += `</tr>`;
            })
        }

    })
    contactFirstName.value = '';
    contactLastName.value = '';
    contactPhone.value = '';
    contactEmail.value = ''
}

//EVENT
let eventBtn = () => {
    showEventPage()
    user.map((ui, ud) => {
        if (ui.eMail == email.value) {
            nameUserEvent.innerHTML = `${ui.firstName}!`
            if (ui.event == "") {
                pPreviewE.innerHTML = `NO EVENT AVAILABLE,<br>CREATE NEW EVENT.`
            }
        }
    })


}

let addEvent = () => {
    eventList.classList.remove('eventListNone')
    loadEvent.innerHTML = "";
    eventHouseing.innerHTML = "";
}
let exitEvent = () => {
    eventList.classList.add('eventListNone')
    eventTitleInput.value = '';
    eventDate.value = '';
}

let saveEvent = () => {
    eventList.classList.add('eventListNone');

    let storeEvent = { eventName: eventTitleInput.value, eventDate: eventDate.value, eventTime: eventTime.value }
    user.map((i, id) => {
        if (i.eMail == email.value) {
            if (eventTitleInput.value == "") {
                console.log('looks that you forgot something');
            } else {
                pPreviewE.innerHTML = "";
                i.event.push(storeEvent)
                localStorage.userInfo = JSON.stringify(user)

            }

        }
    })
    user.filter((ui, ud) => {
        if (ui.eMail == email.value) {
            ui.event.filter((ci, cd) => {
                loadEvent.innerHTML += `<div class="event" id = "eventhouse">
                <div>
                     <button class="but1">
                       <span class="material-icons">star</span>
                       </button>
                 <span class="subName">${ci.eventName}</span>
                </div>
               <div>
                 <span class="date">${ci.eventDate}</span>
               </div >
               <div>
                 <span class="time">${ci.eventTime}</span>
               </div >
               <div>
                <button onclick="eventEditBtnn(${cd})" style="width: 30px;">
               <span class="material-icons ps-2">edit_pen</span>
                </button>
              <button onclick="eventDeleteBtnn(${cd})">
               <span class="material-icons">delete_outline</span>
               </button>
              </div>
     </div >
     </div>`
            })
        }
    })
    eventTitleInput.value = ""
    eventDate.value = ""
    eventTime.value = ""
}

//it edits the event made immediately on the page
let eventEditBtnn = (eventEditBtnnIndex) => {
    eventList.classList.remove('eventListNone');
    user.filter((ui, ud) => {
        if (ui.eMail == email.value) {
            for (let i = 0; i < user[ud].event.length; i++) {
                if (eventEditBtnnIndex == i) {
                    eventTitleInput.value = user[ud].event[i].eventName;
                    eventDate.value = user[ud].event[i].eventDate;
                    eventTime.value = user[ud].event[i].eventTime;
                    if (eventEditBtnnIndex == i) {
                        user[ud].event.splice(i, 1);
                        localStorage.userInfo = JSON.stringify(user)
                    }
                }
            }
        }
    })
    loadEvent.innerHTML = "";

}
//It deletes the event made immediately on the page
let eventDeleteBtnn = (eventDeleteBtnIndex) => {
    if (confirm('Are you sure you want to delete')) {
        user.filter((ui, ud) => {
            if (ui.eMail == email.value) {
                let X = user[ud].event.filter((ci, cd) => eventDeleteBtnIndex != cd);
                user[ud].event = X;
                loadEvent.innerHTML = "";
                saveEvent()
                localStorage.userInfo = JSON.stringify(user);
                if (ui.event == '') {
                    pPreviewE.innerHTML = `NO EVENT AVAILABLE,<br>CREATE NEW EVENT.`;
                } else {
                    pPreviewE.innerHTML = ``
                }
            }
        })
    }

}


//it deletes the saved event made on the onload of the page
let eventDelete = (eventDeleteIndex) => {
    let h = false;
    user.filter((ui, ud) => {
        if (ui.eMail == email.value) {
            h = true;
            if (h) {
                let userEvent = user[ud].event.filter((ei, ed) => eventDeleteIndex != ed);
                user[ud].event = userEvent;
                eventHouseing.innerHTML = "";
                loadEventPage();
                for (let i = 0; i < user[ud].event.length; i++) {
                    if (eventDeleteIndex == i) {
                        user[ud].event.splice(i, 1);
                        localStorage.userInfo = JSON.stringify(user)
                    }
                }
            }
        }


    })

}

//====================================================
//NOTE
let notesBtn = () => {

    showNotePage()
    notetext2.classList.remove('noteTexxtt2None');
    user.map((ui, ud) => {
        if (ui.eMail == email.value) {
            nameUserEvent.innerHTML = `${ui.firstName}!`
            ui.note.map((ni, nd) => {
                if (ni.noteInfo == "") {
                    pPreviewNote.innerHTML = `NO NOTE AVAILABLE,<br>CREATE NEW NOTE.`
                } else {
                    pPreviewNote.innerHTML = "";
                }
            })
        }
    })



}



const showNote = () => {
    noteTitle.classList.remove('noteTitleNone');
    note.classList.remove('noteNone');


}

const hideNote = () => {
    noteTitle.classList.add('noteTitleNone');
    note.classList.add('noteNone');

}

let pNote = document.querySelector('#pPreviewNote');
let saveNoteBtn = () => {

    let note_TitleName = noteTitleName.value;
    let note_Pad = notePad.value;
    let h = false
    // let pPreviewNotte = document.querySelector('#pPreviewNote');
    // let pPost = pPreviewNote.innerHTML
    let noteDocument = { noteTitle: note_TitleName, noteContent: note_Pad }
    hideNote();
    user.map((uitems, uindex) => {
        if (uitems.eMail == email.value) {
            let h = true
            user[uindex].note.map((ui, ud) => {
                if (h) {
                    if (noteTitleName.value == "" || notePad.value == "") {
                        console.log('undefined')
                    } else {
                        // pPreviewNotte.textContent = "";
                        user[uindex].note[ud].noteInfo.push(noteDocument)
                        localStorage.userInfo = JSON.stringify(user)
                        pNote.textContent = ""
                    }
                    user[uindex].note[ud].noteInfo.map((uii, uid) => {
                        notetext2.classList.remove('noteTexxtt2None');
                        noteTexxtt2.innerHTML += `<h3>${uii.noteTitle}</h3> <p>${uii.noteContent}</p><div>
                            <button class="notebtnn" onclick="editNoteBtnn(${uid})">
                           <span class="material-icons">edit_pen</span>
                            </button>
                          <button class="notebtnn" onclick="noteDeleteBtnn (${uid})">
                           <span class="material-icons">delete_outline</span>
                           </button><hr>`

                    })
                }
            })
        }

    })



    noteTitleName.value = ""
    notePad.value = ""

}

let writenote = () => {
    previewNote.innerHTML = "";
    noteTitleBoardHouse.classList.add('nottileboardhouseNon')
    notetext2.classList.add('noteTexxtt2None');
    noteTexxtt2.innerHTML = ""
    showNote();

}

let goback = () => {
    hideNote()
    let note_TitleName = noteTitleName.value;
    let note_Pad = notePad.value;
    let h = false
    let noteDocument = { noteTitle: note_TitleName, noteContent: note_Pad }
    user.map((uitems, uindex) => {
        if (uitems.eMail == email.value) {
            let h = true
            user[uindex].note.map((ui, ud) => {
                if (h) {
                    if (noteTitleName.value == "" || notePad.value == "") {
                        console.log('undefined')
                    } else {
                        user[uindex].note[ud].noteInfo.push(noteDocument)
                        localStorage.userInfo = JSON.stringify(user)
                    }
                    user[uindex].note[ud].noteInfo.map((uii, uid) => {
                        notetext2.classList.remove('noteTexxtt2None');
                        noteTexxtt2.innerHTML += `<h3>${uii.noteTitle}</h3> <p>${uii.noteContent}</p><div>
                            <button onclick="editNoteBtnn(${uid})">
                           <span class="material-icons">edit_pen</span>
                            </button>
                          <button onclick="noteDeleteBtnn(${uid})">
                           <span class="material-icons">delete_outline</span>
                           </button><hr>`

                    })
                }
            })
        }

    })



}
//it edits and deletes the note made immediately
let editNoteBtnn = (editNoteBtnnIndex) => {
    noteTexxtt2.innerHTML = ""
    user.filter((ui, ud) => {
        if (ui.eMail == email.value) {
            user[ud].note.filter((ni, nd) => {
                for (let i = 0; i < user[ud].note[nd].noteInfo.length; i++) {
                    if (editNoteBtnnIndex == i) {
                        noteTitleName.value = user[ud].note[nd].noteInfo[i].noteTitle;
                        notePad.value = user[ud].note[nd].noteInfo[i].noteContent
                        showNote();
                        notetext2.classList.add('noteTexxtt2None');

                        if (editNoteBtnnIndex == i) {
                            user[ud].note[nd].noteInfo.splice(i, 1)
                            localStorage.userInfo = JSON.stringify(user)
                        }
                    }
                }
            })
        }
    })
}

let ppNote = document.getElementById('yyy');
let noteDeleteBtnn = (delNoteBtnnIndex) => {
    const previewNotte = document.querySelector('.pPreviewNote');
    if (confirm('Are you sure you wnat to delete')) {
        user.filter((ui, ud) => {
            if (ui.eMail == email.value) {
                user[ud].note.filter((ni, nd) => {
                    let x = user[ud].note[nd].noteInfo.filter((nii, nid) => delNoteBtnnIndex != nid);
                    user[ud].note[nd].noteInfo = x;
                    noteTexxtt2.innerHTML = "";
                    saveNoteBtn();
                    localStorage.userInfo = JSON.stringify(user)
                    if (user[ud].note[nd].noteInfo == "") {
                        ppNote.innerHTML = `NO NOTE AVAILABLE, <br>CREATE NEW NOTE.`
                    }


                })
            }
        })
    }
}

//It loads up the note for you for editing on the onload of the page
const editNote = (editIndex) => {
    let note_TitleName = noteTitleName.value;
    let note_Pad = notePad.value;
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
    console.log(saveEditIndex)
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

                    user[index].note[indd].noteInfo.splice([0], 1);
                    localStorage.userInfo = JSON.stringify(user)


                }

            })


        }
    })



}



//SETTINGS
const settingsBtn = () => {
    settingsPage.classList.remove('settingpageNone');
    notePage.classList.add('notesNone');
    mainPage.classList.add('mainPageNone');
    contactPage.classList.add('contactPageNone');
    eventPage.classList.add('eventPageNone');
}


// let editProfileBtn = () => {
//     editProfile.classList.remove('editprofileNone')
// }

// let delProfileBtn = () => {
//     delProfile.classList.remove('delprofileNone')
// }
// let saveEditProfileBtn = () => {
//     editProfile.classList.add('editprofileNone')
// }
// let saveDelProfileBtn = () => {
//     window.location.href = 'signup.html';
// }





