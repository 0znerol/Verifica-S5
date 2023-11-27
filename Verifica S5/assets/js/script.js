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
  interval();
};
//todo

function interval() {
  setInterval(function () {
    number = Math.floor(Math.random() * 1957);
    // console.log(g);

    //other code
    if (number != 1 && g[number].style.display === "block") {
      console.log(number);
      console.log(g[number]);

      if (g[number].style.opacity === "0") {
        g[number].style.opacity = "1";
        g[number].style.transitionDuration = "200ms";
      } else {
        g[number].style.opacity = "0";
        g[number].style.transitionDuration = "200ms";
      }
    }
  }, 1);
}
