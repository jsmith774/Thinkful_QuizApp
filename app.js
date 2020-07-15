/* eslint-env jquery */
/* eslint-disable no-console */

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
      fact: 'Much of the inspiration for Jerry as a sports agent came from Leigh Steinberg, a real-life agent who served as a consultant on the film. You can see him in the movie as the man who introduces Jerry to Troy Aikman (a real-life Steinberg client). He\'d have had a bigger role in the movie, playing Jerry\'s brother, who gives an unflattering toast at Jerry\'s bachelor party, but he didn\'t want to come off as a villain. "To this day, I may be the only actor who ever talked his way out of a scene with Tom Cruise," he claims.'
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
      fact: 'Most of the film’s special effects were computer-generated, but not everything was digital. For the robot cockpit scenes, del Toro had his team build the interior of a full-scale Jaeger head. The finished product stood four stories tall and weighed 20 tons. And like a Tilt-A-Whirl from hell, it was designed to rock around violently on its platform via a network of hydraulics. Once inside, the actors were forced to don 40-pound suits of armor. Then the crew strapped their feet into an apparatus that Charlie Hunnam has compared to a high-resistance elliptical machine.'
    },
    {
      question: 'Not knowing this answer would be “Inconceivable”. There are many famous lines from “The Princess Bride" including, “My name is ______________. You killed my father. Prepare to die”',
      answers: [
        'John Rambo',
        'Inigo Montoya',
        'Monty Python',
        'Engelbert Humperdinck'
      ],
      correctAnswer: 'Inigo Montoya',
      thumbNail: 'images/thePrincessBrideThumb.jpg',
      youTube: 'https://youtu.be/I73sP93-0xA?t=36',
      fact: 'When author William Goldman was first mounting a film adaptation of his novel The Princess Bride in the ‘70s, his top choice for the role of Fezzik was always André the Giant. However, Goldman was struggling to get the famed wrestler to even read for the part. Meanwhile, a then-unknown Arnold Schwarzenegger was eager to play the character. Goldman considered casting him, but by the time the movie actually went into production over a decade later, Schwarzenegger had become one of the biggest movie stars in the world and The Princess Bride’s producers couldn’t afford him, so they got André the Giant for the part after all.'
    },
    {
      question: 'What meal were the hobbits stopping for when initially traveling with Aragorn?',
      answers: [
        'Second Breakfast',
        'Dinner',
        'Supper',
        'Elevenses'
      ],
      correctAnswer: 'Second Breakfast',
      thumbNail: 'images/lordOfTheRingsThumb.jpg',
      youTube: 'https://youtu.be/gA8LV37QwxA?t=7',
      fact: 'When pitching the film to various studios, Peter Jackson and Fran Walsh presented a screenplay for two movies, believing that no studio would ever greenlight a trilogy. At first, only Miramax showed interest, but with the caveat that the screenplay be further cut to fit the entire "LOTR" story into one movie. As a last ditch attempt, Jackson pitched the film to New Line, who asked for the screenplay to be turned into a trilogy.'
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
      fact: '"Hamilton" began life as "The Hamilton Mixtape," and initially creator Lin-Manuel Miranda thought it might just be a concept album, like "Tommy." The Mixtape\'s public debut came in 2009 at a White House Poetry Jam in front of President Barack and Michelle Obama.  Miranda performed "Alexander Hamilton," and got a standing ovation from the first couple.'
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
      fact: 'What would eventually become The Rocky Horror Show, and later The Rocky Horror Picture Show, began as a way for Richard O’Brien “to spend winter evenings” when he wasn’t working as an actor. O’Brien poured his love of science fiction and horror films into the initial Rocky Horror songs, and eventually he showed the material to director Jim Sharman while they were working on a play together. Sharman took a liking to it, and convinced London’s Royal Court theater to give him a few weeks in the venue’s tiny Upstairs theater to stage a production. It played for only a few dozen people a night, but eventually grew a following. Not bad for something that started as the equivalent “doing the crossword puzzle” for O’Brien.'
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
      fact: 'The producers wanted Michael J. Fox in the role of Marty McFly, but he was committed to filming Family Ties. So, they had to go with the next best option, Eric Stoltz.\nHowever, Stoltz ended up immediately becoming a problem on set, annoying his cast and crew with his commitment to method acting, and not getting along with co-star Thomas F. Wilson. They also believed his acting style was too dark for the lighthearted character of Marty McFly.'
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
      fact: 'According to Jeff Daniels, Jim Carrey had explained to him the reasons why he didn\'t like the sequel much. He disliked the whole "Ace is afraid of bats" angle, as he found it to be cheap, and even fought with the director about changing the script so that Ace was merely allergic to bats. Carrey was also very nervous about the film\'s depiction of the native characters, and that people might take offense to them. He\'s even surprised the film hasn\'t been outright banned.'
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
      fact: 'Ham Porter\'s famous line, "You\'re killing me, Smalls," is a paraphrase of the famous quote, "They\'re killing me out there, Whitey," spoken by Denver Broncos coach Lou Saban. The line was also paraphrased the previous year in another baseball-themed film, A League of Their Own(1992).'
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
      fact: 'Don Cheadle is uncredited despite having a major role. This is due to a dispute over his billing. Cheadle wanted above the title billing alongside George Clooney, Matt Damon, and Brad Pitt. When he was refused, he refused to be credited at all. Cheadle received above the title billing in Ocean\'s Twelve (2004) and Ocean\'s Thirteen (2007).'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  correct: true,
  answerStatusClass: '',
  answerStatus: ''
};



/*This function is to be run on document load to start application processing */
function main() {

  /**********  EVENT HANDLER FUNCTIONS IN MAIN  **********/
  submitAnswer();
  nextQuestionOnFeedback();
  startQuiz();
  enableSubmitButton();

  /********* RENDER INTIAL PAGE INTRO VIEW **************/
  //Display introView on inital document load
  render(getIntroViewHtml());
}

function checkAnswer() {
  const selectedAnswer = $('input[name=guess]:checked', '#answerOptions').val();
  const correctAnswer = store.questions[store.questionNumber].correctAnswer;

  return selectedAnswer === correctAnswer;
}

/**********  EVENT HANDLER FUNCTIONS **********/

//QuestionView 'submitAnswer' button event handler
function submitAnswer() {

  $('body').on('click', '#submitAnswer', event => {
    store.correct = checkAnswer();

    if (store.correct) {
      store.score++;
      store.answerStatusClass = 'correctAnswer';
      store.answerStatus = 'CORRECT';
    } else {
      store.answerStatusClass = 'incorrectAnswer';
      store.answerStatus = 'INCORRECT';
    }

    store.questionNumber++;

    render(getFeedbackViewHtml());
  });
}

//FeedbackView 'next' button event handler
function nextQuestionOnFeedback() {
  $('body').on('click', '#continueQuiz', event => {
    if (store.questionNumber < store.questions.length) {
      //continue to next question
      render(getQuestionViewHtml());
    } else {
      //quiz is over, go to ResultsView
      render(getResultsViewHtml());
    }
  });
}

//Intro/Results "start quiz" button event handler
function startQuiz() {  
  $('body').on('click', '#startQuiz', event => {
    store.score = 0;
    store.questionNumber = 0;
    render(getQuestionViewHtml());
  });
}

//enable submit button on question after an answer is selected (disabled initally to prevent skipping without answering)
function enableSubmitButton() {
  $('body').on('click', 'input', event => {
    $('button').removeAttr('disabled');
  });
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
    <section id="question">
      ${currQ.question}
    </section>
    <section id="form-group">
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
    </section>
    <section id="progressResults">
      <section>Question ${currQNum + 1} of ${store.questions.length}</section>
      <section>Correct: ${store.score}</section>
      <section>Incorrect: ${currQNum - store.score}</section>
    </section>`;
}

function getFeedbackHtmlString() {
  const currQ = store.questions[store.questionNumber - 1]; //questionNumber index advanced to next question
  const youtube = currQ.youTube;
  const thumb = currQ.thumbNail;

  return `
    <section id="question">
      ${currQ.question}
    </section>
    <section id="result">
      Your answer was:
      <span class="${store.answerStatusClass}">${store.answerStatus}</span>
    </section>
    <section id="answerBlock">
      The correct answer is:
      <section id="answer">
        ${currQ.correctAnswer}
      </section>
      <article class ="border" id="commentary">
        <p>Fun Fact:</p>
        ${currQ.fact}
      </article>
    </section>
    <section id="movieClip">
      <h2>Sample Clip</h2>
      <section id="newTabNotice">
        Clicking the thumbnail below will open a youtube clip of this video in a new tab
      </section>
      <a href="${youtube}" target="_blank"><img src="${thumb}" alt="movie screen capture image thumbnail"></a>
    </section>
    <section>
      <button id="continueQuiz">Next</button>
    </section>`;
}

function getResultsHtmlString() {
  let result = '';
  switch (store.score) {
  case 10:
    result = 'images/perfect.jpg';
    break;
  case 9:
  case 8:
  case 7:
  case 6:
  case 5:
    result = 'images/wellDone.jpg';
    break;
  case 4:
  case 3:
  case 2:
  case 1:
    result = 'images/youTried.jpg';
    break;
  case 0:
    result = 'images/tryAgain.jpg';
    break;
  }

  return `
    <section class="center">    
      <article class ="item border">
        <p> ¯\\_(ツ)_/¯ </p>
        <p>How well did you do?</p>
        <p>You got ${store.score} out of ${store.questions.length} correct!</p>
        <img src="${result}" alt="result feedback">
      </article>
      <!--Button-->
      <button id="startQuiz" class="item" type="submit">Play Again?</button>
    </section>`;
}


/*********************************************/
//Run main() on load
$(main);