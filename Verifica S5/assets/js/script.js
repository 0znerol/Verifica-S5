let header = document.getElementsByTagName("header");
let getStarted = document.getElementById("getStarted");
let g = document.getElementsByTagName("g");

window.onload = function () {
  // console.log(header[0]);
  addEventListener("scroll", (event) => {
    let position = window.scrollY;
    console.log(position);
    if (position > 410) {
      header[0].style.backgroundColor = "white";
      header[0].style.transitionDuration = "500ms";
      getStarted.style.backgroundColor = "#1a8917";
    } else {
      header[0].style.backgroundColor = "#ffc017";
      getStarted.style.backgroundColor = "black";
    }
  });

  mCycle();
};
//todo
let mCycle = () => {
  while (i < 100) {
    setInterval(function () {
      for (i = 0; i < 100; i++) {
        let rand;
        rand = Math.floor(Math.random() * 100);
        console.log(rand);
        i++;
      }
    }, 1000);
    break;
  }
};
