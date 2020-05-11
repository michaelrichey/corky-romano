//= require_tree .

console.log("log me log");

document.querySelector("#menu").addEventListener("click", function (e) {
  document.querySelector("#menu-grid-1").innerHTML = "";

  document.querySelector("#menu-grid-1").innerHTML =
    '<div class="show-clippy"><p>It looks like you\'re trying to click a link. Would you like help?</p><img src="../images/clippy.gif"></div>';
});

// for quiz

let answers = [
  {
    a1: "asdf",
    a2: "asdf",
    a3: "asdf",
    a4: "asdf",
    a5: "asdf",
  }
]

document.querySelector('#quiz').addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(e.target.elements[0].value)
  answers[0].a1 = e.target.elements[0].value

  console.log('this is ' + answers[0].a1)


})
/*
document.querySelector('#quizbutton').addEventListener('click', function (e) {
  e.preventDefault()
  console.log(e)

})
*/