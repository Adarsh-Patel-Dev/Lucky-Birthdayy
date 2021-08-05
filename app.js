const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

const lucky = document.querySelector(".lucky-img");
const unLucky = document.querySelector(".unlucky-img");

function compareValues(sum, luckyNumber){
    
    if(sum%luckyNumber===0){
        outputBox.innerText = "You are a lucky person!!!🤩";

        // document.getElementsByClassName(".lucky-img").style.display = "block";
        // document.getElementsByClassName(".unlucky-img").style.display = "none";
        
         lucky.style.display = "block";
         unLucky.style.display = "none";

    }else{
        outputBox.innerText = "Oops you are unlucky!!!🙃";

        // document.getElementsByClassName(".unlucky-img").style.display = "block";
        // document.getElementsByClassName(".lucky-img").style.display = "none";
        
        unLucky.style.display = "block";
        lucky.style.display = "none";
}
}



checkNumberButton.addEventListener("click", check)
    // console.log(dateOfBirth.value, luckyNumber.value);
    


function calculateSum(dob){
        dob = dob.replaceAll("-", "");
        let  sum = 0;
        for (let index = 0; index < dob.length; index++) {
            sum = sum + Number(dob.charAt(index));
            
        }
        return sum;
    }

function check(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum&&dob) {
        compareValues(sum, luckyNumber.value)
    }else{
        outputBox.innerText = "please enter both the fields";
    }
    
}

function hide() {
    // outputBox.style.display = "none";
    unLucky.style.display = "none";
        lucky.style.display = "none";
}