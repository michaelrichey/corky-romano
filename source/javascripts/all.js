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
    buttonid: "#button1",
    question: "What is the first temple you have to beat as Adult Link in The Legend of Zelda: Ocarina of Time?",
    answer: "forest temple",
    number: "1"
  },
  {
    questionid: '#question2',
    answerid: "#answer2",
    message: "#message2",
    buttonid: "#button2",
    question: "Which member of musical duo They Might Be Giants plays guitar?",
    answer: "john flansburgh",
    number: "2"
  },
  {
    questionid: '#question3',
    answerid: "#answer3",
    message: "#message3",
    buttonid: "#button3",
    question: "What cereal company is best known for licensed character cereals like Batman, Ghostbusters, Barbie, Cabbage Patch Kids, WWF, and Nintendo (and they were also a subsidiary of pet food company Purina)?",
    answer: "ralston",
    number: "3"
  },
  {
    questionid: '#question4',
    answerid: "#answer4",
    message: "#message4",
    buttonid: "#button4",
    question: "What Microsoft console is sometimes affectionately called 'The Dreamcast 2' because of its large number of Sega exclusives that were originally meant for the Dreamcast?",
    answer: "xbox",
    number: "4"
  },
  {
    questionid: '#question5',
    answerid: "#answer5",
    message: "#message5",
    buttonid: "#button5",
    question: "What Teddy Grahams spin-off cookie was superior to Dunkaroos, but is not getting a revival is 2020 for God knows what reason?",
    answer: "dizzy grizzlies",
    number: "5"
  }
]

$.each(questioninfo, function (index, item) {

  $(item.questionid).append(`<p>${item.question}</p>`)

  $(item.answerid).on('submit', function (e) {
    e.preventDefault()
    let typedAnswer = e.target.elements[0].value
    $('#answers').append(`<p>Answer to question ${item.number}: ${typedAnswer}</p>`)

    if (typedAnswer.toLowerCase() == item.answer.toLowerCase()) {
      answers.push(typedAnswer)
      $(item.message).append(`<p>You got it right!</p>`)

      document.querySelector(item.buttonid).disabled = true
    } else {
      $(item.message).append(`<p>You got it wrong. Try again.</p>`)
    }
  })
})

/*
  // const formElement = $(item.id);
  // formElement.on('submit', function (e) {
  //   e.preventDefault()
  //   console.log(e.target.elements[0].value)
  //   answers.push(e.target.elements[0].value)

  //   let answer1 = document.createElement('p')
  //   answer1.textContent = `Answer to question ${item.number}: ${e.target.elements[0].value}`
  //   document.querySelector("#answers").appendChild(answer1)
  // })
  $(item.id).on('submit', (e) => e.preventDefault());
  $(`${item.id} input[type="submit"]`)
    .click((e) => {
      $(e.target).toggleClass('btn-submitted');
      $('<div>You did it</div>').addClass('foo').insertAfter($(e.target));
    })

})
*/