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
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
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
  render(getIntroViewHtml());
  /** Example of how to load other views NOT IN THIS main() !!! In event handler functions only */
  //render(getQuestionViewHtml());
  //render(getFeedbackViewHtml());
  //render(getResultsViewHtml());
}

function render(html) {
  $('main').html(html);
  console.log($('main'));
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
  const htmlString = `<h3>TEMP: Results View HTML Placeholder</h3>${Date.now()}`;
  return htmlString;
}



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

$(main);


/******* These functions simply return html string template literals */
function getIntroHtmlString() {
  //@todo: replace with string template literal
  return `<h3>TEMP Intro View HTML</h3>
    <div>Div 1</div>
    <div>Placeholder Div2</div>
    ${Date.now()}`;
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
  return `<h3>TEMP Results View HTML</h3>
    <div>Div 1</div>
    <div>Placeholder Div2</div>
    ${Date.now()}`;
}
