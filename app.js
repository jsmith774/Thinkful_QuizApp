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
      question: 'All of the following are famous lines from Jerry Maguire, but which is most likely to be uttered by Thinkful graduates with their amazing new skill set?',
      answers: [
        'You had me at "hello"',
        'Show me the money!',
        'Towel? Nah, I air dry.',
        'You complete me.'
      ],
      correctAnswer: 'Show me the money!',
      thumbNail: 'images/jerryMacguireThumb.jpg',
      youTube: 'https://youtu.be/FFrag8ll85w?t=76'
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
      youTube: 'https://youtu.be/-7Sow81yi24?t=107'
    },
    {
      question: 'Not knowing this answer would be “Inconceivable”. There are many famous lines from “The Princess Bride including, “I am ______________. You killed my father. Prepare to die”',
      answers: [
        'John Rambo',
        'Inigo Montoya',
        'Monty Python',
        'Engelbert Humperdinck'
      ],
      correctAnswer: 'Inigo Montoya',
      thumbNail:'images/thePrincessBrideThumb.jpg',
      youTube:'https://youtu.be/I73sP93-0xA?t=36'
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
      youTube: 'https://youtu.be/gA8LV37QwxA?t=7'
    },
    {
      question: 'In the musical Hamilton, No one else was...?',
      answers: [
        'as smart as me and never could be.',
        'at the bar, so I ordered 2 drinks and kept myself company.',
        'able to match the kind of raw talent he possessed.',
        'in the room where it happens.'
      ],
      correctAnswer: 'in the room where it happens.',
      thumbNail: 'images/hamiltonThumb.jpg',
      youTube: 'https://youtu.be/BQjGGrKRL8o'
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
      youTube: 'https://youtu.be/umj0gu5nEGs?t=51'
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
      youTube: 'https://youtu.be/f-77xulkB_U?t=53'
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
      youTube: 'https://youtu.be/fCy4yhiJw4g?t=193'
    },
    {
      question: 'You’re killing me, Smalls” is a famous one-liner from which movie?',
      answers: [
        'Notorious',
        'Bad Santa',
        'Straight outta Compton',
        'The Sandlot'
      ],
      correctAnswer: 'The Sandlot',
      thumbNail: 'images/sandlotThumb.jpg',
      youTube: 'https://youtu.be/hxJPJ6JY0Pk'
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
      youTube: 'https://youtu.be/wvcDT02a1Ec?t=51'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/*This function is to be run on document load to start application processing */
function main() {
  console.log(JSON.stringify(store));

  //Display introView on inital document load
  //render(getIntroViewHtml());
  /** Example of how to load other views NOT IN THIS main() !!! In event handler functions only */
  //render(getQuestionViewHtml());
  //render(getFeedbackViewHtml());
  //render(getResultsViewHtml());
}


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates


//@todo refactor these into a single getView(view) method and use switch/case to call appropriate getXHtmlString method
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
  //@todo: replace with string template literal
  const htmlString = getResultsHtmlString();
  return htmlString;
}

function startNewGame() {
  //init values - question index, correct/incorrect counts
  render(getQuestionViewHtml());
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render(html) {
  $('main').html(html);
  console.log($('main'));
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

/*** handle click of 'Start' button on IntroView
 * startNewGame();
 **/

/*** handle click of 'Submit' on QuestionView
 * Check answer and determine if correct/incorrect.  
 * Update correct/incorrect count
 * increment question index
 * Render feedback view
 */

/*** handle click of 'Next' on FeedbackView
 * if more questions render Question view, else render Results view
 */

/*** handle click of 'Play Again' on ResultsView 
 * startNewGame();
*/



/*********************************************/
//Run main() on load
$(main);


/******* These functions simply return html string template literals */
function getIntroHtmlString() {
  //@todo: replace with string template literal
  return `
    <section class="center">
      <!--Description of quiz-->
      <h2 class="item border">Welcome to the movie quiz! Here, your knowledge of various movie trivia and quotes will be tested. Good Luck!!</h2>
      <!--Button-->
      <button class="item" type="submit">START!</button>
    </section>`;
}

function getQuestionHtmlString() {
  //@todo: replace hardcoded values with template ${variable} values as needed
  return `
    <div id="question">
      Question text goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit felis vehicula, consectetur mi eu, congue lorem. Suspendisse imperdiet vel nisl quis fringilla. Pellentesque libero elit, bibendum non velit.
    </div>
    <div id="form-group">
      <form>
        <p>Please select your answer from the following:</p>
        <input type="radio" id="optionA" name="guess" value="A">
        <label for="optionA">Some choice</label><br>
        <input type="radio" id="optionB" name="guess" value="B">
        <label for="optionB">Second choice</label><br>  
        <input type="radio" id="optionC" name="guess" value="C">
        <label for="optionC">Another choice</label><br>
        <input type="radio" id="optionD" name="guess" value="D">
        <label for="optionD">Last choice</label><br><br>
        <!--<input type="submit" value="Submit">-->
      </form>
      <button>Submit</button>
    </div>
    <div id="progressResults">
      <div>Question 1 of 10</div>
      <div>Correct: 0</div>
      <div>Incorrect: 0</div>
    </div>`;
}

function getFeedbackHtmlString() {
  //@todo replace hardcoded values with template ${variable} values as needed
  return `
    <div id="question">
      Question text goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit felis vehicula, consectetur mi eu, congue lorem. Suspendisse imperdiet vel nisl quis fringilla. Pellentesque libero elit, bibendum non velit.
    </div>
    <div id="result">
      Your answer was:
      <!--<span class="correctAnswer">CORRECT</span>-->
          <!-- OR -->
      <span class="incorrectAnswer">INCORRECT</span>
    </div>
    <div id="answerBlock">
      The correct answer is:
      <div id="answer">
        Lorem Ipsum Dolor
      </div>
      <div id="commentary">
        <p></p>A text explanation of the answer and/or additional information about the movie goes here. 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor dolor arcu, eu dictum lectus consectetur sed. Aenean tempus sed erat et eleifend. Suspendisse venenatis blandit finibus. Duis pellentesque mauris vestibulum, gravida mauris aliquet, eleifend ipsum. Vestibulum odio massa, elementum sit amet nisi vitae, sodales lobortis nunc. Praesent efficitur ultricies purus id commodo. Duis fringilla, purus vitae tempor ultrices, libero mi convallis mauris, et aliquam augue nunc vitae sapien. Sed suscipit convallis ipsum, vitae suscipit tortor venenatis a. Donec et rutrum nulla, sed tincidunt orci. In hac habitasse platea dictumst.</p>
        <p>Mauris viverra sollicitudin ligula, at ornare neque facilisis id. Nullam lacinia varius posuere. Ut risus erat, mollis nec dui pulvinar, ultrices sodales sem. Proin lacinia nisi velit. Vivamus ex tellus, venenatis sit amet gravida eu, interdum ut lorem. Cras nec rutrum tortor, sit amet rutrum erat. Mauris porta odio ut massa fringilla posuere. Donec dolor dui, luctus non sapien eget, lacinia pellentesque ipsum. Nam interdum tellus vitae augue sagittis fringilla. Aenean sed tortor eget eros rutrum elementum tempor at lacus. Nam a nibh ligula. Ut imperdiet libero sed sollicitudin faucibus. Duis tincidunt neque eu ipsum rutrum, id dignissim risus rhoncus. Duis non lacus purus.</p>  
      </div>
    </div>
    <div id="movieClip">
      <h2>Sample Clip</h2>
      <div id="newTabNotice">
        Clicking the thumbnail below will open a youtube clip of this video in a new tab
      </div>
      <a href="https://youtu.be/BQjGGrKRL8o" target="_blank"><img src="images/hamiltonThumb.jpg" alt="movie screen capture image thumbnail"></a>
    </div>
    <div>
      <button>Next</button>
    </div>`;
}

function getResultsHtmlString() {
  //@todo: replace with string template literal
  return `
    <section class="center">    
      <article class ="item border">
        <p>This is how well you did: #/#</p>
        <p>Response for how well you did could go here ¯\_(ツ)_/¯</p>
      </article>
      <!--Button-->
      <button class="item" type="submit">Play Again?</button>
    </section>`;
}
