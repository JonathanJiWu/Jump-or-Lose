let char = document.getElementById("char");
let block = document.getElementById("block");
function jump() {
  if (char.classList != "animate") {
    char.classList.add("animate");
  }
  setTimeout(function () {
    char.classList.remove("animate");
  }, 500);
}
function myFunction() {
  setTimeout(function () {
    alert("Hello");
  }, 3000);
}
let checkDead = setInterval(() => {
  var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    let lost = prompt("You Lose!", "Try Again");
    if (lost == "Try Again") {
      location.reload();
    }
  }
}, 10);
