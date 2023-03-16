let score = document.getElementById("selection");
let element = "";

document.addEventListener("click", (e) => {
  element = e.target;
  if(element.className == "btn") {
    score.innerHTML = element.innerText;
  }
})

function change() {
  if(score.innerHTML != "") {
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("thanks").style.visibility = "visible";
  } else {
    alert("Please make your choice");
  }
}
