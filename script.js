let Scissors = document.querySelector("#scissors");
let Paper = document.querySelector("#paper");
let Rock = document.querySelector("#rock");
let scrUser = document.querySelector("#scr1");
let scrComp = document.querySelector("#scr2");
let userScore = 0;
let compScore = 0;
let battleUserWinner = document.querySelector(".battle-main-2");
let battleCompWinner = document.querySelector(".battle-main-1");
let battledraw = document.querySelector(".battle-main-3");
let btlimg1 = document.querySelector("#btlimg1");
let btlimg2 = document.querySelector("#btlimg2");
let btlimg3 = document.querySelector("#btlimg3");
let btlimg4 = document.querySelector("#btlimg4");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let youwon = document.querySelector("#you-won");
let youlost = document.querySelector("#you-lost");
let user = document.querySelector("#btlimg1");
let comp = document.querySelector("#btlimg2");
let user2 = document.querySelector("#btlimg3");
let comp2 = document.querySelector("#btlimg4");
let draw = document.querySelector("#draw");


let rockFunc = () => {
    let choice = 0;
    gamefunc(choice);
}
let paperFunc = () => {
    let choice = 1;
    gamefunc(choice);
}
let scissorsFunc = () => {
    let choice = 2;
    gamefunc(choice);
}

let gamefunc = (choice) => {
    let compChoice = Math.floor(Math.random() * 3);  //0,1,2 are stored inside compChoice
    if (compChoice === choice) {
        console.log("Draw ho gyo")
        draw.classList.add("popup");
        battledraw.classList.add("popup");
        setTimeout(() => {
            draw.classList.remove("popup");
            battledraw.classList.remove("popup");
        },3000);
        //draw
    } else if (compChoice === 0) {
        
        if (choice === 1) {
            //winner user
            comp2.src = "rock.png";
            user2.src = "paper.png";
            btlimg3.classList.add("popup");
            btlimg4.classList.add("popup");
            battleUserWinner.classList.add("popup");
            userScore++;
            scrUser.innerText = userScore;
            youwon.classList.add("popup");
            setTimeout(() => {
            console.log("checked");
            btlimg3.classList.remove("popup");
            btlimg4.classList.remove("popup");
            battleUserWinner.classList.remove("popup");
            youwon.classList.remove("popup");
            },6000);            
        } else {
            //winner comp
            comp.src = "rock.png";
            user.src = "scissors.png";
            btlimg1.classList.add("popup");
            btlimg2.classList.add("popup");
            battleCompWinner.classList.add("popup");
            compScore++;
            scrComp.innerText = compScore;
            youlost.classList.add("popup");
            setTimeout(() => {
            btlimg1.classList.remove("popup");
            btlimg2.classList.remove("popup");
            battleCompWinner.classList.remove("popup");
            youlost.classList.remove("popup");
            },6000);
        }
    } else if (compChoice === 1) {
        if (choice === 0) {
            //winner comp
            comp.src = "paper.png";
            user.src = "rock.png";
            btlimg1.classList.add("popup");
            btlimg2.classList.add("popup");
            battleCompWinner.classList.add("popup");
            compScore++;
            scrComp.innerText = compScore;
            youlost.classList.add("popup");
            setTimeout(() => {
            btlimg1.classList.remove("popup");
            btlimg2.classList.remove("popup");
            battleCompWinner.classList.remove("popup");
            youlost.classList.remove("popup");
            },6000);
        } else {
            //winner user
            comp2.src = "paper.png";
            user2.src = "scissors.png";
            btlimg3.classList.add("popup");
            btlimg4.classList.add("popup");
            battleUserWinner.classList.add("popup");
            userScore++;
            scrUser.innerText = userScore;
            console.log(userScore);
            youwon.classList.add("popup");
            setTimeout(() => {
            console.log("checked");
            btlimg3.classList.remove("popup");
            btlimg4.classList.remove("popup");
            battleUserWinner.classList.remove("popup");
            youwon.classList.remove("popup");
            },6000); 
        }
    } else {
        if (choice === 0) {
            //winner user
            comp2.src = "scissors.png";
            user2.src = "rock.png";
            btlimg3.classList.add("popup");
            btlimg4.classList.add("popup");
            battleUserWinner.classList.add("popup");
            userScore++;
            scrUser.innerText = userScore;
            youwon.classList.add("popup");
            setTimeout(() => {
            btlimg3.classList.remove("popup");
            btlimg4.classList.remove("popup");
            battleUserWinner.classList.remove("popup");
            youwon.classList.remove("popup");
            },6000); 
        } else {
            //winner comp
            comp.src = "scissors.png";
            user.src = "paper.png";
            btlimg1.classList.add("popup");
            btlimg2.classList.add("popup");
            battleCompWinner.classList.add("popup");
            compScore++;
            scrComp.innerText = compScore;
            youlost.classList.add("popup");
            setTimeout(() => {
            btlimg1.classList.remove("popup");
            btlimg2.classList.remove("popup");
            battleCompWinner.classList.remove("popup");
            youlost.classList.remove("popup");
            },6000);
        }
    }
}

Rock.addEventListener("click", rockFunc);
Paper.addEventListener("click", paperFunc);
Scissors.addEventListener("click",scissorsFunc);



// animations of winning


user.src = "paper.png";
