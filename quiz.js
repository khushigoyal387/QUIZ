// const questions = ['2+2','2*2*2-8','3+3+3','4*4/4'];
// const questionDiv = document.querySelector(".question");
// // getRandomValue()
// const uniqueValues = [];
// function getRandomValue(){
//     let randomValue = Math.floor(Math.random()* questions.length);
//     if(uniqueValues.includes(randomValue))return getRandomValue();
//     else{
//         uniqueValues.push(randomValue);
//         return randomValue;
//     }
// }

// const questions = ['2+2','2*2*2-8','3+3+3','4*4/4'];

// const main = document.querySelector(".question");
// const blank = [];
// let move = [0];
// main.innerHTML=questions[getRandomValue()];
// question.addEventListner("click",()=>
// {
//     start= setInterval(printno,1000);
// })
// function getRandomValue(){
//     let randomValue = Math.floor(Math.random()*questions.length);
//     if(
//         blank.includes(randomValue)) return getRandomValue();
//         else{
//             if(move===questions.length){
//                 clearInterval(start);
//             }else{

//             blank.push(randomValue)
//             return randomValue;
//             move++;
//         }
//     }
// }

const questions = ['2+2', '2*2*2-8', '3+3+3', '4*4/4'];

const main = document.querySelector(".question");
const blank = [];
let start;

main.innerHTML = questions[getRandomValue()];

    start = setInterval(printNextQuestion, 3000); 


function printNextQuestion() {
    if (blank.length === questions.length) {
        clearInterval(start);
    } else {
        main.innerHTML = questions[getRandomValue()]
        // blank++;
    }
}

function getRandomValue() {
    let randomValue = Math.floor(Math.random() * questions.length);
    if (blank.includes(randomValue)) {
        return getRandomValue();
    } else {
        blank.push(randomValue);
        return randomValue;
    }
}
