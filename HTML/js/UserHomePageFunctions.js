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
      let  editButton = document.createElement("button");
      editButton.className = "button";
      editButton.textContent = "Edit"

      let removeButton =  document.createElement("button");
      removeButton.className = "cancelButton";
      removeButton.textContent = "Remove"

      action.appendChild(editButton);
      action.appendChild(removeButton);

      surveyDetails.appendChild(surveyTitle);
      surveyDetails.appendChild(surveyDescription);
      surveyItems.appendChild(surveyDetails);
      surveyItems.appendChild(action);
      cart.appendChild(surveyItems);
    });

  });
