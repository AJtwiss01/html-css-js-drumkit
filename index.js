const handleClickBinded = (e) => {
  console.log("handle click ran ");
  console.log(this);

  let allButtons = document.querySelectorAll("button");
  document.addEventListener("click", (e) => {
    console.log(` clicked ${e.classList}`);
  });
  console.log(allButtons);

  for (let i = 0; i < allButtons.length; i++) {
    console.log(allButtons[i].classList[0]);
  }
};

window.onload = function () {
  handleClickBinded();
};
