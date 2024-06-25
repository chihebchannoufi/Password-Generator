const lowercaseLetters = "azertyuiopqsdfghjklmwxcvbn";
const uppercaseLettres = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const number = "0123456789";
const symbols = "!@#$%^&*()-=_+[]{}|;:'\",.<>?/\\`~ ";

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("number");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generateBtn.addEventListener("click", function(){
    const length = lengthEl.value;
    let characters="";
    let password ="";
    
    if( lowercaseEl.checked){
        characters +=lowercaseLetters;
    }
    if(uppercaseEl.checked){
        characters +=uppercaseLettres;
    }
    if(numberEl.checked){
        characters +=number;
    }
    if(symbolsEl.checked){
        characters +=symbols;
    }
    for(let i =0; i< length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        passwordEl.value=password;
    }



});


