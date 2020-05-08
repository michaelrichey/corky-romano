//= require_tree .

console.log("log me log");

document.querySelector("#menu").addEventListener("click", function (e) {
  document.querySelector("#menu-grid-1").innerHTML = "";

  document.querySelector("#menu-grid-1").innerHTML =
    '<div class="show-clippy"><p>It looks like you\'re trying to click a link. Would you like help?</p><img src="../images/clippy.gif"></div>';
});

// for quiz

document.querySelector('#quiz').addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(e.target.elements[0].value)
})
/*
document.querySelector('#quizbutton').addEventListener('click', function (e) {
  e.preventDefault()
  console.log(e)

})
*/