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
    questionid: '#question1',
    answerid: "#answer1",
    message: "#message1",
    question: "What is the first temple you have to beat as Adult Link in The Legend of Zelda: Ocarina of Time?",
    answer: "forest temple",
    number: "1"
  },
  {
    questionid: '#question2',
    answerid: "#answer2",
    message: "#message2",
    question: "Which member of musical duo They Might Be Giants plays guitar?",
    answer: "john flansburgh",
    number: "2"
  },
  {
    questionid: '#question3',
    answerid: "#answer3",
    message: "#message3",
    question: "What cereal company is best known for licensed character cereals like Batman, Ghostbusters, Barbie, Cabbage Patch Kids, WWF, and Nintendo (and they were also a subsidiary of pet food company Purina)?",
    answer: "ralston",
    number: "3"
  },
  {
    questionid: '#question4',
    answerid: "#answer4",
    message: "#message4",
    question: "What Microsoft console is sometimes affectionately called 'The Dreamcast 2' because of its large number of Sega exclusives that were originally meant for the Dreamcast?",
    answer: "xbox",
    number: "4"
  },
  {
    questionid: '#question5',
    answerid: "#answer5",
    message: "#message5",
    question: "What Teddy Grahams spin-off cookie was superior to Dunkaroos, but is not getting a revival is 2020 for God knows what reason?",
    answer: "dizzy grizzlies",
    number: "5"
  }
]

questioninfo.forEach(function (item) {
  let question = document.createElement('p')
  question.textContent = item.question
  document.querySelector(item.questionid).appendChild(question)


  document.querySelector(item.answerid).addEventListener('submit', function (e) {
    e.preventDefault()
    typedAnswer = e.target.elements[0].value
    console.log(typedAnswer)

    let answer1 = document.createElement('p')
    answer1.textContent = `Answer to question ${item.number}: ${e.target.elements[0].value}`
    document.querySelector("#answers").appendChild(answer1)


    let makeMessage = document.createElement('p')

    if (typedAnswer.toLowerCase() == item.answer.toLowerCase()) {
      answers.push(typedAnswer)
      console.log('correct!')
      makeMessage.textContent = 'You got it right!'
      document.querySelector(item.message).appendChild(makeMessage)
    } else {
      console.log('incorrect!')
      makeMessage.textContent = 'You got it WRONG!!'
      document.querySelector(item.message).appendChild(makeMessage)
    }
  })

})