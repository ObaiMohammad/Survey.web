
let survey = {
  id: "",
  name: "", // You can set the name later when needed
  questions: [], // Array to store survey questions
};



// surveyNameInput.addEventListener('input', addQuestion () )

function addQuestionToSurvey() {
  const questions = document.querySelectorAll(".question")
  for (let i = 0; i < questions.length ; i++){

    console.log(JSON.stringify(questions[i]))
  }
  // let questionObject = {
  //
  //   questionType:question.querySelector(".questionType").value,
  //   id : survey.questions.length + 1,
  //   questionBody :questionDiv.querySelector(".questionBody").value,
  //   choices: []
  // };
  // survey.questions.push(questionObject);
}


function formattedSurvey(questions) {
  const surveyNameInput = document.getElementById('surveyTitle');
  survey.name = surveyNameInput.value;
  console.log(survey.name)
  return {id: 1,
          name: survey.name,
          questions: questions};
}

function submitSurvey() {
  let questions =  logUserInput()

  survey = formattedSurvey(questions);

  const apiUrl = 'http://localhost:8989/Surveys';

  // Send the data to the API using the fetch API
  fetch(apiUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(survey)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('API Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function logUserInput() {
  const questionsInput = document.querySelectorAll(".question")
  let questionArray = [];

  for (let i = 0; i < questionsInput.length ; i++){
    const questionDiv = questionsInput[i];

    // Select the question body input element
    const questionBodyInput = questionDiv.querySelector("input[name='questionBody']");

    // Select the select (dropdown) element
    const selectElement = questionDiv.querySelector("select");

    // Select the option elements within the select
    const options = selectElement.querySelectorAll("option");

    // Select the input elements for choices
    const choiceInputs = questionDiv.querySelectorAll("input[name='choices']");

    // Log the user's input
    console.log("Question Body:", questionBodyInput.value);
    console.log("Selected Option:", selectElement.value);

    options.forEach(option => {
      if (option.selected) {
        console.log("Selected Option Text:", option.textContent);
      }
    });

    let choices = [];
    choiceInputs.forEach((input, index) => {
      console.log(`Choice ${index + 1}:`, input.value);
      choices.push(input.value)
    });

    let question = {
      id : i,
      questionType :  selectElement.value,
      questionBody :questionBodyInput.value,
      choices: choices
    }
    questionArray.push(question);
  }
  // Select the question div
  return questionArray;
}

// You can call this function when needed, such as when the user submits the form
