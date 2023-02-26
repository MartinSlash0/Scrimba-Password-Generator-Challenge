const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","^","&","*"];

//  *70

function generate() {
    let passwordOneEl = document.getElementById("password-one");
    let passwordTwoEl = document.getElementById("password-two");

    passwordOneEl.textContent = "";
    passwordTwoEl.textContent = "";

    for(let i = 1; i <= 15; i++) {
        let randomIndex = Math.floor(Math.random()*70);
        passwordOneEl.textContent += characters[randomIndex];
    }

    for(let i = 1; i <=15; i++) {
        let randomIndex = Math.floor(Math.random()*70);
        passwordTwoEl.textContent += characters[randomIndex];
    }
}

function passOneCopy() {
    let passOneToCopy = document.getElementById("password-one").textContent;
    
    if(passOneToCopy !== ""){    
        alert("Password copied on clipboard.");
        navigator.clipboard.writeText(passOneToCopy)
    } else {
        alert("There is no password to copy.")
    }
}

function passTwoCopy() {
    let passTwoToCopy = document.getElementById("password-two").textContent;
    
    if(passTwoToCopy !== "") {
        alert("Password copied on clipboard.");
        navigator.clipboard.writeText(passTwoToCopy)
    } else {
        alert("There is no password to copy.")
    }
}