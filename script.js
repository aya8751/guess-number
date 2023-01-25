const number = document.querySelector('.number');
const submitBtn = document.querySelector('.submit');
const result = document.querySelector('.result');
const remainNumber = document.querySelector('.remain-number');
const gameBox = document.querySelector('.game-box');

let count = 2;
const surpriseNum = Math.round(Math.random() * 10);
console.log("surpriseNum: ",surpriseNum);

submitBtn.addEventListener("click", function(){
    result.classList.remove("hidden");

    if(count >= 0 && (Number(number.value) === surpriseNum)){
        result.innerHTML = "Well Done :)";
        disable();
    } else if(count != 0){
        result.innerHTML = "Try Again :]";
        remainNumber.innerHTML = remainNumber.innerHTML - 1;
        count--;
    }else{
        result.innerHTML = "Game Over :]";
        remainNumber.innerHTML = remainNumber.innerHTML - 1;
        disable();
        gameBox.style.border = "2px solid #FF0000";
    }
})

function disable(){
    number.value = "";
    number.classList.add('disable');
    submitBtn.classList.add('disable');
}
