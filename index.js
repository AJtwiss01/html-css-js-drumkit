const handleClickBinded = (e) => {
  let allButtons = document.querySelectorAll(".drum");
  console.log(allButtons);
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", (e) => {
      console.log(` clicked ${e.target.classList[0]}`);
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
    });
  }
};

window.onload = function () {
  handleClickBinded();
};
