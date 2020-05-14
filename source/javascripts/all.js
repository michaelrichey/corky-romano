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
    answer: "forest temple",
  },
  {
    question: "Which member of musical duo They Might Be Giants plays guitar?",
    answer: "john flansburgh",
  },
  {
    question: "What cereal company is best known for licensed character cereals like Batman, Ghostbusters, Barbie, Cabbage Patch Kids, WWF, and Nintendo (and they were also a subsidiary of pet food company Purina)?",
    answer: "ralston",
  },
  {
    question: "What Microsoft console is sometimes affectionately called 'The Dreamcast 2' because of its large number of Sega exclusives that were originally meant for the Dreamcast?",
    answer: "xbox",
  },
  {
    question: "What Teddy Grahams spin-off cookie was superior to Dunkaroos, but is not getting a revival is 2020 for God knows what reason?",
    answer: "dizzy grizzlies",
  }
]

$.each(questioninfo, function (index, item) {

  let number = index + 1

  let {
    question,
    answer
  } = item

  let container = $('.question-and-answer').eq(index)
  let form = container.find('form')
  let header = container.find('h2')
  let inputText = container.find('input[type="text"]')
  let button = container.find('input[type="submit"]')
  let message = container.find('.message')

  header.text(`Question ${number}`)

  $(`<p>${question}</p>`).insertAfter(header)

  form.on('submit', function (e) {
    e.preventDefault();
    let typedAnswer = e.target.elements[0].value;
    $('#answers').append(`<p>Answer to question ${number}: ${typedAnswer}</p>`);

    if (typedAnswer.toLowerCase() == answer.toLowerCase()) {
      answers.push(typedAnswer);
      message.append(`<p>You got it right!</p>`);

      button.prop('disabled', true);
    } else {
      message.append(`<p>You got it wrong. Try again.</p>`)
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
