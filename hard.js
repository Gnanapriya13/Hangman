let  s = ["tornado", "photosynthesis", "cuneiform", "pasteur", "permutation"];
let a = Math.floor(Math.random() * s.length);
let word = s[a];

let dis = [];
for (let i = 0; i < word.length; i++) {
  dis.push("_");
}

let container = document.getElementById("container");
let page1 = document.getElementById("page1");
let mes = document.getElementById("mes");
let ok = document.getElementById("ok");
let answer = document.getElementById("answer");
let submit = document.getElementById("submit");
let over = document.getElementById("over");
let sorry = document.getElementById("sorry");
let outter = document.getElementById("outter");
let images = document.getElementById("images");
let playagain = document.getElementById("playagain");


let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");
let image6 = document.getElementById("image6");
let image7 = document.getElementById("image7");
let image8 = document.getElementById("image8");
let image9 = document.getElementById("image9");
var music=new Audio("sounds/music.mp3");

ok.onclick = function () {
 
  music.play();
  container.style.display = "block";
  page1.style.display = "none";
  image1.style.display="block";
  images.style.display="flex";
 

  if (word === "tornado") {
    mes.textContent = `A rare weather phenomenon.`;
  } if (word === "photosynthesis") {
    mes.textContent = `A scientific process.`;
  } if (word === "cuneiform") {
    mes.textContent = `A type of ancient script.`;
  } if (word === "pasteur") {
    mes.textContent = `A famous scientist.`;
  } if(word==="permutation"){
    mes.textContent = `A term in mathematics.`;
  }

  answer.textContent = dis.join(" ");
};
let mistake = 0;
submit.onclick = function () {
  let input = document.getElementById("input").value;

  // Check if the input is a valid letter
  if (input.match(/[a-zA-Z]/) && input.length === 1) {
    input = input.toLowerCase();
    let count = 0;
    

    for (let i = 0; i < word.length; i++) {
      if (word[i] === input && dis[i] === "_") {
        dis[i] = input;
        count++;
      }
    }

    if (count === 0) {
      mistake++;
    }

    if(mistake===1){
      image1.style.display="none";
      image2.style.display="block";

      images.style.backgroundColor="rgba(215, 152, 133, 0.97)";
    }
    if(mistake===2){
        image2.style.display="none";
        image3.style.display="block";

        images.style.backgroundColor="rgb(243, 125, 104)"
      }
      if(mistake===3){
        image3.style.display="none";
        image4.style.display="block";

        images.style.backgroundColor="rgb(247, 116, 95)"
      }
      if(mistake===4){
        image4.style.display="none";
        image5.style.display="block";

        images.style.backgroundColor="rgb(237, 66, 66)"
      }
      if(mistake===5){
        image5.style.display="none";
        image6.style.display="block";

        images.style.backgroundColor="rgb(250, 49, 49)"
      }
      if(mistake===6){
        
        image6.style.display="none";
        image7.style.display="block";

         images.style.backgroundColor="rgb(244, 33, 33)"
      }
      if(mistake===7){
        image7.style.display="none";
        image8.style.display="block";

        images.style.backgroundColor="rgb(188, 7, 7)"
      }
      if(mistake===8){
        image8.style.display="none";
        image9.style.display="block";

        images.style.backgroundColor="rgba(113, 5, 5, 0.78)"
      }
            if(mistake==9){
              container.style.display = "none";
              image9.style.display="none";
              images.style.display="none";
              outter.style.display="block";
              var audio=new Audio("sounds/lose.wav");
              audio.play();
              music.muted=true;
              sorry.textContent="Game Over! You've run out of chances.";
            }
      
    

    answer.textContent = dis.join(" ");

    if (!dis.includes("_")) {
        container.style.display = "none";
        image9.style.display="none";
        images.style.display="none";
        outter.style.display="block";
        var audio=new Audio("sounds/winning.mp3");
        audio.play();
        music.muted=true;
      sorry.textContent=`Congratulations! You've guessed the word: ${word}`;
      sorry.style.color="greenyellow";
      
      return;
    }

    // Clear input field after submitting
    document.getElementById("input").value = "";
  } else {
    alert("Please enter a valid letter.");
  }
}
;
