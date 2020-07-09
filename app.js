/* eslint-env jquery */
/* eslint-disable no-console */
'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'All of the following are famous lines from "Jerry Maguire", but which is most likely to be uttered by Thinkful graduates with their amazing new skill set?',
      answers: [
        'You had me at "hello"',
        'Show me the money!',
        'Towel? Nah, I air dry.',
        'You complete me.'
      ],
      correctAnswer: 'Show me the money!',
      thumbNail: 'images/jerryMacguireThumb.jpg',
      youTube: 'https://youtu.be/FFrag8ll85w?t=76',
      fact: 'Jerry Macguire'
    },
    {
      question: 'What was cancelled in this giant robot epic?',
      answers: [
        'The Nightmare!',
        'All Student Loans!',
        'The Apocalypse!',
        'The Invasion!'
      ],
      correctAnswer: 'The Apocalypse!',
      thumbNail: 'images/pacificRimThumb.jpg',
      youTube: 'https://youtu.be/-7Sow81yi24?t=107',
      fact: 'Pacific Rim'
    },
    {
      question: 'Not knowing this answer would be “Inconceivable”. There are many famous lines from “The Princess Bride" including, “I am ______________. You killed my father. Prepare to die”',
      answers: [
        'John Rambo',
        'Inigo Montoya',
        'Monty Python',
        'Engelbert Humperdinck'
      ],
      correctAnswer: 'Inigo Montoya',
      thumbNail:'images/thePrincessBrideThumb.jpg',
      youTube:'https://youtu.be/I73sP93-0xA?t=36',
      fact: 'The Princess Bride'
    },
    {
      question: 'How many meals are mentioned by Pippin when talking to Aragorn after the Hobbits stopped briefly?',
      answers: [
        'Seven',
        'Five',
        'Nine',
        'Elevensies'
      ],
      correctAnswer: 'Seven',
      thumbNail: 'images/lordOfTheRingsThumb.jpg',
      youTube: 'https://youtu.be/gA8LV37QwxA?t=7',
      fact: 'Lord of The Rings: Fellowship of the Ring'
    },
    {
      question: 'In the musical "Hamilton", No one else was...?',
      answers: [
        'as smart as me and never could be.',
        'at the bar, so I ordered 2 drinks and kept myself company.',
        'able to match the kind of raw talent he possessed.',
        'in the room where it happens.'
      ],
      correctAnswer: 'in the room where it happens.',
      thumbNail: 'images/hamiltonThumb.jpg',
      youTube: 'https://youtu.be/BQjGGrKRL8o',
      fact: 'Hamilton: The Musical'
    },
    {
      question: 'What dance would one be describing if they began with, “It’s just a jump to the left, and then a step to the right. With your hands on your hips, you bring your knees in tight…”?',
      answers: [
        'The Time Warp',
        'The Tulsa Two-Step',
        'The Swift Shuffle',
        'The Jitterbug'
      ],
      correctAnswer: 'The Time Warp',
      thumbNail: 'images/theRockyHorrorPictureShowThumb.jpg',
      youTube: 'https://youtu.be/umj0gu5nEGs?t=51',
      fact: 'The Rocky Horror Picture SHow'
    },
    {
      question: 'What movie is this quote from when screamed by an eccentric scientist: "1.21 GIGAWATTS!!!!"',
      answers: [
        'Back to the Future',
        'Short Circuit',
        'RoboCop',
        'Star Wars'
      ],
      correctAnswer: 'Back to the Future',
      thumbNail: 'images/backToTheFutureThumb.jpg',
      youTube: 'https://youtu.be/f-77xulkB_U?t=53',
      fact: 'Back to the Future'
    },
    {
      question: 'What movie is this quote from after a "perfect" parking job: "LIKE A GLOVE!!!"?',
      answers: [
        'The Fast and The Furious',
        'Cinderella',
        'Ace Ventura: When Nature Calls',
        'Gone in Sixty Seconds'
      ],
      correctAnswer: 'Ace Ventura: When Nature Calls',
      thumbNail: 'images/aceVenturaThumb.jpg',
      youTube: 'https://youtu.be/fCy4yhiJw4g?t=193',
      fact:'Ace Ventura: When Nature Calls'
    },
    {
      question: '"You’re killing me, Smalls” is a famous one-liner from which movie?',
      answers: [
        'Notorious',
        'Bad Santa',
        'Straight outta Compton',
        'The Sandlot'
      ],
      correctAnswer: 'The Sandlot',
      thumbNail: 'images/sandlotThumb.jpg',
      youTube: 'https://youtu.be/hxJPJ6JY0Pk',
      fact:'The Sandlot'
    },
    {
      question: 'What movie is this quote from after they nozzed it all up: "So, unless we intend to do this job in Reno, we\'re in Barney.......Barney Rubble........TROUBLE!"?',
      answers: [
        'The Italian Job',
        'The Score',
        'Ocean\'s Eleven',
        'Logan Lucky'
      ],
      correctAnswer: 'Ocean\'s Eleven',
      thumbNail: 'images/oceansElevenThumb.jpg',
      youTube: 'https://youtu.be/wvcDT02a1Ec?t=51',
      fact:'Ocean\'s Elven'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

let correct = true;
let answerStatusClass = '';
let answerStatus = '';

/*This function is to be run on document load to start application processing */
function main() {

  /**********  EVENT HANDLER FUNCTIONS **********/

  //QuestionView 'submitAnswer' button event handler
  $('body').on('click','#submitAnswer',event => {
    correct = checkAnswer();

    if(correct) {
      store.score++;
      answerStatusClass = 'correctAnswer';
      answerStatus = 'CORRECT';
    } else {
      answerStatusClass = 'incorrectAnswer';
      answerStatus = 'INCORRECT';
    }

    store.questionNumber++;

    render(getFeedbackViewHtml());
  });

  //FeedbackView 'next' button event handler
  $('body').on('click','#continueQuiz', event=> {
    if(store.questionNumber < store.questions.length) {
      //continue to next question
      render(getQuestionViewHtml());
    } else {
      //quiz is over, go to ResultsView
      render(getResultsViewHtml()); 
    }
  });

  //Intro/Results "start quiz" button event handler
  $('body').on('click','#startQuiz', event => {
    store.score = 0;
    store.questionNumber = 0;
    render(getQuestionViewHtml());
  });


  //enable submit button on question after an answer is selected (disabled initally to prevent skipping without answering)
  $('body').on('click','input', event => {
    $('button').removeAttr('disabled');
  });



  /********* RENDER INTIAL PAGE INTRO VIEW **************/
  //Display introView on inital document load
  render(getIntroViewHtml());
}

function checkAnswer() {
  const selectedAnswer = $('input[name=guess]:checked', '#answerOptions').val();
  const correctAnswer = store.questions[store.questionNumber].correctAnswer;
  
  return selectedAnswer === correctAnswer;
}


/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

//NOTE: these could be refactored into a single getView(view) method and use switch/case on view parm to call appropriate getXHtmlString method or merged with the 'get{VIEW}HtmlString()' methods
function getIntroViewHtml() {
  const htmlString = getIntroHtmlString();
  return htmlString;
}

function getQuestionViewHtml() {
  const htmlString = getQuestionHtmlString();
  return htmlString;
}

function getFeedbackViewHtml() {
  const htmlString = getFeedbackHtmlString();
  return htmlString;
}

function getResultsViewHtml() {
  const htmlString = getResultsHtmlString();
  return htmlString;
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render(html) {
  $('main').html(html);
}



/******* These functions return html string template literals ******/
function getIntroHtmlString() {
  return `
    <section class="center">
      <!--Description of quiz-->
      <h2 class="item border">Welcome to the movie quiz! Here, your knowledge of various movie trivia and quotes will be tested. Good Luck!!</h2>
      <!--Button-->
      <button id="startQuiz" class="item" type="submit">START!</button>
    </section>`;
}

function getQuestionHtmlString() {
  const currQ = store.questions[store.questionNumber];
  const currQNum = store.questionNumber; //zero based index, add one for human count

  return `
    <div id="question">
      ${currQ.question}
    </div>
    <div id="form-group">
      <form id="answerOptions">
        <p>Please select your answer from the following:</p>
        <input type="radio" id="optionA" name="guess" value="${currQ.answers[0]}">
        <label for="optionA">${currQ.answers[0]}</label><br>
        <input type="radio" id="optionB" name="guess" value="${currQ.answers[1]}">
        <label for="optionB">${currQ.answers[1]}</label><br>  
        <input type="radio" id="optionC" name="guess" value="${currQ.answers[2]}">
        <label for="optionC">${currQ.answers[2]}</label><br>
        <input type="radio" id="optionD" name="guess" value="${currQ.answers[3]}">
        <label for="optionD">${currQ.answers[3]}</label><br><br>
      </form>
      <button id="submitAnswer" disabled>Submit</button>
    </div>
    <div id="progressResults">
      <div>Question ${currQNum+1} of ${store.questions.length}</div>
      <div>Correct: ${store.score}</div>
      <div>Incorrect: ${currQNum - store.score}</div>
    </div>`;
}

function getFeedbackHtmlString() {
  const currQ = store.questions[store.questionNumber-1]; //questionNumber index advanced to next question
  const youtube = currQ.youTube;
  const thumb = currQ.thumbNail;

  return `
    <div id="question">
      ${currQ.question}
    </div>
    <div id="result">
      Your answer was:
      <span class="${answerStatusClass}">${answerStatus}</span>
    </div>
    <div id="answerBlock">
      The correct answer is:
      <div id="answer">
        ${currQ.correctAnswer}
      </div>
      <div id="commentary">
        ${currQ.fact}
      </div>
    </div>
    <div id="movieClip">
      <h2>Sample Clip</h2>
      <div id="newTabNotice">
        Clicking the thumbnail below will open a youtube clip of this video in a new tab
      </div>
      <a href="${youtube}" target="_blank"><img src="${thumb}" alt="movie screen capture image thumbnail"></a>
    </div>
    <div>
      <button id="continueQuiz">Next</button>
    </div>`;
}

function getResultsHtmlString() {
  return `
    <section class="center">    
      <article class ="item border">
        <p> ¯\_(ツ)_/¯ </p>
        <p>How well did you do?</p>
        <p>You got ${store.score} out of ${store.questions.length} correct</p>
      </article>
      <!--Button-->
      <button id="startQuiz" class="item" type="submit">Play Again?</button>
    </section>`;
}


/*********************************************/
//Run main() on load
$(main);