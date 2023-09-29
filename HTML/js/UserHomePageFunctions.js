const jsonData = {
  "surveys": [
    {
      "id": 1,
      "title": "survey1",
      "description": "This is the description of Survey 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "title": "survey2",
      "description": "This is the description of Survey 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
};

function creatSurveyTable(){
  let cart = document.getElementById("cart")
  jsonData.surveys.forEach((survey) => {
    let surveyItems = document.createElement("div");
    surveyItems.className = "survey-items";

    let surveyDetails = document.createElement("div");
    surveyDetails.className = "survey-details";

    let surveyTitle = document.createElement("h3");
    surveyTitle.className = "title";
    surveyTitle.textContent = survey.title;

    let surveyDescription = document.createElement("div");
    surveyDescription.className = "survey-description";
    let descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = survey.description;

    surveyDescription.appendChild(descriptionSpan);

    let action = document.createElement("div");
    action.className = "actions";
    let  editButton = document.createElement("button");
    editButton.className = "button";

    let removeButton =  document.createElement("button");
    removeButton.className = "cancelButton";

    action.appendChild(editButton);
    action.appendChild(removeButton);

    surveyDetails.appendChild(surveyTitle);
    surveyDetails.appendChild(surveyDescription);
    surveyDetails.appendChild(action);
    surveyItems.appendChild(surveyDetails);
    cart.appendChild(surveyItems);
  });

    return cart;
}
