'use strict'
const mainPage = document.querySelector('.mainPage');

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

mainPage.classList.remove('mainPageNone');

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

let saveContactBtn = () => {
    createNewContact.classList.add('createNewContactNone');
}
//EVENT
let eventBtn = () => showEventPage();

//NOTE
let notesBtn = () => showNotePage();

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