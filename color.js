var numSquares = 625;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var easybtnsqr = document.getElementsByClassName('square');
var mediumBtn = document.querySelector("#mediumBtn");
var score = 0;
var container = document.getElementById('container');
var ilksayfa = document.getElementById('ilksayfa');
var duration = 5;
var colors = generateRandomColors(numSquares);
for(var i = 0; i < numSquares; i++){
      var SQ = document.createElement("div");
      SQ.className = "square";
      container.appendChild(SQ);
  }
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbCode = document.getElementById("rgbCode");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("#pickColor");
var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");



easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  mediumBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 81;
//  var SQ = document.createElement("div");
//  for(var i = 1; i < numSquares; i++){
//      var SQ = document.createElement("div");
//      SQ.className = "square";
//      container.appendChild(SQ);
//  }
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
      square[i].style.width = '7%';
      square[i].style.paddingBottom = '7%';
      square[i].style.margin = '1.6%';
      container.style.maxWidth = '600px';
    } else {
      square[i].style.display = "none";
    }
  }
  
});

mediumBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.remove("selected");
  mediumBtn.classList.add("selected");
  numSquares = 256;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
      square[i].style.display = "block";
      square[i].style.width = '4%';
      square[i].style.paddingBottom = '4%';
      square[i].style.margin = '1.1%';
      container.style.maxWidth = '550px';
    } else {
      square[i].style.display = "none";
    }
  }
});


hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  mediumBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 625;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
      square[i].style.background = colors[i];
      square[i].style.display = "block";
      square[i].style.width = '3%';
      square[i].style.paddingBottom = '3%';
      square[i].style.margin = '0.5%';
      container.style.maxWidth = '37%';
  }
});

resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  this.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
  h1.style.background = pickedColor;
})

rgbCode.textContent = pickedColor;

startButton.addEventListener("click",function(duration){
    ilksayfa.style.display = 'none';
    h1.style.background = pickedColor;
    var timer = 60, minutes, seconds;
    setInterval(function () {
        --timer;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display = document.getElementById("time");
        display.textContent = minutes + ":" + seconds;

        if(timer == -1){
            window.location.reload(true);
            window.alert("Total Score : " + score.toString());
        }
        }, 1000);
})



for(var i = 0; i < square.length; i++) {
  square[i].style.background = colors[i];
  square[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      score += 1;  
      messageDisplay.textContent = "Your Score: " + score.toString();
      this.style.background = "#232323";
      colors = generateRandomColors(numSquares);
      pickedColor = pickColor();
      rgbCode.textContent = pickedColor;
      h1.style.background = pickedColor;
      for (var i = 0; i < square.length; i++) {
        square[i].style.background = colors[i];
      }
//      resetButton.textContent = "Play Again ?";
//      changeColors(clickedColor);
//      h1.style.background = clickedColor;
    }else{
//      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

function changeColors(color){
for (var i = 0; i < square.length; i++) {
    square[i].style.background = color;
}

}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
var r = Math.floor(Math.random() * 256)
var g = Math.floor(Math.random() * 256)
var b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
}
