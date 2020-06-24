const handleClickBinded = (e) => {
  let allButtons = document.querySelectorAll(".drum");
  for (let i = 0; i < allButtons.length; i++) {
    document.addEventListener("keydown", (e) => {
      console.log(` keydown ${e.code}`);
      switch (e.code) {
        case "KeyA":
          // code block
          let keyA = new Audio(`./sounds/tom-2.mp3`);
          keyA.play();
          break;
        case "KeyW":
          // code block
          let KeyW = new Audio(`./sounds/tom-1.mp3`);
          KeyW.play();
          break;
        case "KeyS":
          // code block
          let keyS = new Audio(`./sounds/tom-3.mp3`);
          keyS.play();
          break;
        case "KeyD":
          // code block
          let KeyD = new Audio(`./sounds/tom-4.mp3`);
          KeyD.play();
          break;
        case "KeyJ":
          // code block
          let keyJ = new Audio(`./sounds/crash.mp3`);
          keyJ.play();
          break;
        case "KeyK":
          // code block
          let KeyK = new Audio(`./sounds/kick-bassk.mp3`);
          KeyK.play();
          break;
        case "KeyL":
          // code block
          let KeyL = new Audio(`./sounds/snare.mp3`);
          KeyL.play();
          break;
        default:
          console.log("different key was pressed");
      }
    });
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
