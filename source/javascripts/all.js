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
    question: "What is the first temple you have to beat as Adult Link in The Legend of Zelda: Ocarina of Time?",
    hint: "Not The Great Deku Tree",
    answer: "forest temple"
  },
  {
    question: "Which member of musical duo They Might Be Giants plays guitar?",
    answer: "john flansburgh",
    hint: "Not John Linnel"
  },
  {
    question: "What cereal company is best known for licensed character cereals like Batman, Ghostbusters, Barbie, Cabbage Patch Kids, WWF, and Nintendo (and they were also a subsidiary of pet food company Purina)?",
    answer: "ralston",
    hint: "Not Quaker"
  },
  {
    question: "What Microsoft console is sometimes affectionately called 'The Dreamcast 2' because of its large number of Sega exclusives that were originally meant for the Dreamcast?",
    answer: "xbox",
    hint: "Not Microsoft Bob"
  },
  {
    question: "What Teddy Grahams spin-off cookie was superior to Dunkaroos, but is not getting a revival is 2020 for God knows what reason?",
    answer: "dizzy grizzlies",
    hint: "Not Gummi Bears"
  }
]

function createQuestion(question, number, hint) {
  return `
    <div class="question-and-answer">
      <h2>Question ${number}</h2>
      <p>${question}</p>
      <form>
        <input type="text" placeholder="${hint}"/>
        <input type="submit"/> 
      </form>
      <div class="message"></div>
    </div>`;
}

function answerHandler(number, answer, e) {
  e.preventDefault();
  const form = $(e.target);
  const button = form.find('input[type="submit"]');
  const message = form.parent().find('.message');
  let typedAnswer = e.target.elements[0].value;
  $('#answers').append(`<p>Answer to question ${number}: ${typedAnswer}</p>`);

  if (typedAnswer.toLowerCase() == answer.toLowerCase()) {
    answers.push(typedAnswer);
    message.append(`<p>You got it right!</p>`);
    button.prop('disabled', true);
  } else {
    message.append(`<p>You got it wrong. Try again.</p>`)
  }
}

//creates the markup
function setupQuestion(index, item) {
  const number = index + 1;
  const {
    question,
    answer,
    hint,
  } = item

  const questionMarkup = createQuestion(question, number, hint);
  const questionElement = $('#questions').append(questionMarkup);
  $('.question-and-answer').eq(index).find('form').on('submit', function (e) {
    answerHandler(number, answer, e);
  });
}

function main() {
  //go through each question in questioninfo 
  // and setup the markup and submit for each
  $.each(questioninfo, setupQuestion);
}

$('document').ready(function () {
  main();
});
