document.addEventListener("DOMContentLoaded", function (){


  const jsonData = {
    "surveys": [
      {
        "id": 3,
        "title": "survey3",
        "description": "This is the description of Survey 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        "id": 4,
        "title": "survey4",
        "description": "This is the description of Survey 4. Lorem ipsum dolor sit amet."
      }
    ]
  };

    let cart = document.getElementById("cart")
    jsonData.surveys.forEach((survey) => {
      let surveyItems = document.createElement("div");
      surveyItems.className = "survey-item";

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


      let editButton = addEditButton(survey.id);
      let removeButton = addRemoveButton(survey.id);



      action.appendChild(editButton);
      action.appendChild(removeButton);

      surveyDetails.appendChild(surveyTitle);
      surveyDetails.appendChild(surveyDescription);
      surveyItems.appendChild(surveyDetails);
      surveyItems.appendChild(action);
      cart.appendChild(surveyItems);
    });

  });


function addEditButton(id){
  let  editButton = document.createElement("button");
  editButton.id = "edit-button"
  editButton.className = "button";
  editButton.textContent = "Edit"
  editButton.dataset.surveyId = id;
// Add an event listener to the "Edit" button
  editButton.addEventListener("click", function() {
    // For demonstration purposes, we'll display an alert when the button is clicked
    console.log("Edit button clicked! Survey ID: " + id);
  });
  return editButton;
}
function addRemoveButton(id){
  let removeButton =  document.createElement("button");
  removeButton.id = "remove-button"
  removeButton.className = "cancelButton";
  removeButton.textContent = "Remove"
  removeButton.dataset.surveyId = id;

// Add an event listener to the "Edit" button
  removeButton.addEventListener("click", function() {
    // For demonstration purposes, we'll display an alert when the button is clicked
    console.log("Edit button clicked! Survey ID: " + id);
  });
  return removeButton;
}
