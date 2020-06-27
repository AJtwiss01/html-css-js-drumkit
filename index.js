const andimatiionFunction = (key) => {
  console.log("key coming in " + key);
  linkedButton = document.querySelector(`.${key}`);
  linkedButton.classList.add("pressed");

  setTimeout(() => {
    linkedButton.classList.remove("pressed");
  }, 1000);
};

const handleClickBinded = (e) => {
  let allButtons = document.querySelectorAll(".drum");
  for (let i = 0; i < allButtons.length; i++) {
    document.addEventListener("keydown", (e) => {
      console.log(` keydown ${e.key}`);
      switch (e.key) {
        case "a":
          // code block
          let keyA = new Audio(`./sounds/tom-2.mp3`);
          keyA.play();
          andimatiionFunction("a");
          break;
        case "w":
          // code block
          let KeyW = new Audio(`./sounds/tom-1.mp3`);
          KeyW.play();
          andimatiionFunction("w");

          break;
        case "s":
          // code block
          let keyS = new Audio(`./sounds/tom-3.mp3`);
          keyS.play();
          andimatiionFunction("s");

          break;
        case "d":
          // code block
          let KeyD = new Audio(`./sounds/tom-4.mp3`);
          KeyD.play();
          andimatiionFunction("d");

          break;
        case "j":
          // code block
          let keyJ = new Audio(`./sounds/crash.mp3`);
          keyJ.play();
          andimatiionFunction("j");

          break;
        case "k":
          // code block
          let KeyK = new Audio(`./sounds/kick-bass.mp3`);
          KeyK.play();
          andimatiionFunction("k");

          break;
        case "l":
          // code block
          let KeyL = new Audio(`./sounds/snare.mp3`);
          KeyL.play();
          andimatiionFunction("l");
          break;
        default:
          console.log("different key was pressed");
      }
    });
    allButtons[i].addEventListener("click", (e) => {
      console.log(e.target);
      console.log(` clicked ${e.target.classList[2]}`);
      let pathToAudio = e.target.classList[2];
      let audio = new Audio(`./sounds/${pathToAudio}.mp3`);
      audio.play();
      andimatiionFunction(e.target.classList[0]);
    });
  }
};

window.onload = () => {
  handleClickBinded();
};
