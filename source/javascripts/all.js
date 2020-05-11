//= require_tree .

console.log("log me log");

document.querySelector("#menu").addEventListener("click", function (e) {
  document.querySelector("#menu-grid-1").innerHTML = "";

  document.querySelector("#menu-grid-1").innerHTML =
    '<div class="show-clippy"><p>It looks like you\'re trying to click a link. Would you like help?</p><img src="../images/clippy.gif"></div>';
});

// for quiz

let answers = []

let questioninfo = [
  {
    id: "#quiz1",
    number: "1"
  },
  {
    id: "#quiz2",
    question: "What is your favorite food?",
    answer: "mcdonalds",
    number: "2"
  },
  {
    id: "#quiz3",
    number: "3"
  },
  {
    id: "#quiz4",
    number: "4"
  },
  {
    id: "#quiz5",
    number: "5"
  }
]

questioninfo.forEach(function (item) {
  document.querySelector(item.id).addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements[0].value)
    answers.push(e.target.elements[0].value)

    let answer1 = document.createElement('p')
    answer1.textContent = `Answer to question ${item.number}: ${e.target.elements[0].value}`
    document.querySelector("#answers").appendChild(answer1)
  })

})