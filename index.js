const handleClickBinded = (e) => {
  let allButtons = document.querySelectorAll(".drum");
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", (e) => {
      console.log(` clicked ${e.target.classList[2]}`);
      let pathToAudio = e.target.classList[2];
      let audio = new Audio(`./sounds/${pathToAudio}.mp3`);
      audio.play();
    });
  }
};

window.onload = () => {
  handleClickBinded();
};
