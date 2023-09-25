

function addQuestion() {

   let question = document.createElement("div");
  question.className = 'question';


   let questionBody = creatQuestionBody()
   let questionType =  creatQuestionTypeDropdown()
   let questionChoices = creatQuestionChoices(questionType)
   let removeQuestion = creatRemoveButton(question)


   question.appendChild(questionBody);
   question.appendChild(questionType);
   question.appendChild(removeQuestion);
   question.appendChild(questionChoices);



   const questionsContainer = document.getElementById('questionsContainer');

// Append the select element to the questionsContainer
   questionsContainer.appendChild(question);
   return question;
}


function creatQuestionBody() {
  let questionBody = document.createElement("input")
  // Set the input element's type, id, name, and value attributes
  questionBody.type = 'text';
  questionBody.id = 'questionBody';
  questionBody.name = 'questionBody';
  questionBody.placeholder = "question";
  return questionBody;
}

function creatQuestionTypeDropdown() {
  let selectQuestionType = document.createElement("select");

// Create the first option element
  const option1 = document.createElement('option');
  option1.value = 'MULTIPLE_CHOICE'; // Set the value attribute if needed
  option1.text = 'Multi choice question';

// Create the second option element
  const option2 = document.createElement('option');
  option2.value = 'OPEN_TEXT'; // Set the value attribute if needed
  option2.text = 'Open text question';

// Add the option elements to the select element
  selectQuestionType.appendChild(option1);
  selectQuestionType.appendChild(option2);

  return selectQuestionType;
}


function creatQuestionChoices(questionType) {
    if (questionType.value === "MULTIPLE_CHOICE") {
      return creatQuestionOptions()

    }else {
      const option =  document.createElement("p")
      const node = document.createTextNode("This is new.");
      option.appendChild(node);
      return option;
    }


}

function creatQuestionOptions() {

  const optionContainer = document.createElement("div");
  const optionButton = document.createElement("button");
  optionButton.type = "button";
  optionButton.textContent = "Add Option";

  optionContainer.appendChild(optionButton);
  optionButton.onclick = function() {
    const optionInput = document.createElement("input");
    optionInput.type = "text";
    optionInput.name = "choices";
    optionInput.placeholder = "Enter option";
    let removeQuestion = creatRemoveButton(optionInput);
    optionContainer.appendChild(optionInput);
    optionContainer.appendChild(removeQuestion);
  };

  return optionContainer;
}



function creatRemoveButton(element) {
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "btn"
  const iconElement = document.createElement("i");
  iconElement.className = "fa fa-trash"; // Font Awesome class for the trash icon

// Append the icon element to the button
  removeButton.appendChild(iconElement);
  removeButton.appendChild(document.createElement("br"))

  removeButton.onclick = function() {
    element.remove();
    removeButton.remove();
  };
  return removeButton;
}


