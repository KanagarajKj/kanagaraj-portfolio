'use strict';

const menuBtn = document.getElementById('menu_btn')
const menuList = document.getElementById('menu')
const btn = document.getElementById('btn')
const navLink = document.querySelectorAll('.nav_link')
const form = document.getElementById('form')
const userName = document.getElementById('username')
const email =document.getElementById('email')
const messageBox = document.getElementById('message')
const remainingChar = document.querySelector('small');


btn.addEventListener('click',() => {
    menuList.classList.toggle('view')
    btn.classList.toggle('active')   
})

navLink.forEach(nav => nav.addEventListener('click',()=>{
    menu.classList.remove('view');
    btn.classList.remove('active');  
}))


let counter = 1;

setInterval(() => {
    document.getElementById('radio'  + counter).checked = true;
    counter++;

    if(counter > 9){
    counter = 1;
    }

},9000)

form.addEventListener('submit',(e)=>{
e.preventDefault();

checkRequired(arrElement);
checkEmail(email);
});


// Show Error Message
const showError =  function(input,message){
    let formControl = input.parentElement;
    formControl.classList = 'form_control error';
    let span = formControl.querySelector('span');
    span.innerText = message;
}

// Show Sucess Message
const showSucess = function(input,message){
    let formControl = input.parentElement;
    formControl.classList = 'form_control sucess';
    let span = formControl.querySelector('span');
    span.innerText = message;
}



let arrElement = [userName, email,message];

let checkRequired = function (arrElement) {
  arrElement.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${input.name} is must enter`);
    } else {
      showSucess(input, 'sucess');
    }
  });
};

//  Check Email Id
const checkEmail = function(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value).toLowerCase().trim())){
        showSucess(input,'Sucess');
    } else {
        showError(input,'Enter valid Email Id');
    }
}


// TextArea
const maxChar = 300;
messageBox.addEventListener('input',() => {
    const remaining = maxChar - messageBox.value.length;
    remainingChar.textContent = `${remaining} characters remaining`;
    let color = remaining < maxChar * 0.1 ? 'red' : null;
    remainingChar.style.color = color;
});
