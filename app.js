// const { object } = require("prop-types");

const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

const noticeMsg = document.querySelector(".notice");
const closeButton = document.querySelector("#clos");

const lucky = document.querySelector(".lucky-img");
const unLucky = document.querySelector(".unlucky-img");

closeButton.addEventListener("click", close);

function close() {
    console.log("click");
    noticeMsg.style.display = "none";
}



function compareValues(sum, luckyNumber) {
    // hide();

    if (sum % luckyNumber === 0) {
        outputBox.innerText = "You are a lucky person!!!🤩";

        var img = document.createElement('img');
        img.src = "happy-dog.jpg";
        document.querySelector('#output-box').appendChild(img);

    } else {
        outputBox.innerText = "Oops you are not lucky 🙃 but you will make your own luck😉!!!";

        var img = document.createElement('img');
        img.src = "sad-dog.jpg";
        document.querySelector('#output-box').appendChild(img);

    }
}



checkNumberButton.addEventListener("click", check)
// console.log(dateOfBirth.value, luckyNumber.value);



function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));

    }
    return sum;
}

function check() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && dob) {
        compareValues(sum, luckyNumber.value)
    } else {
        outputBox.innerText = "please enter both the fields";
    }

}

// function hide() {
//     // outputBox.style.display = "none";
//     unLucky.style.display = "none";
//         lucky.style.display = "none";
// }