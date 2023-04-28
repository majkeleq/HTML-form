//Find forms <div>
const divForms = document.getElementById('forms');


/*
let firstNameLabel = document.createElement("p");
firstNameLabel.setAttribute("class", "card-label");
firstNameLabel.appendChild(document.createTextNode("First name"));

let firstName = document.createElement("p");
firstName.setAttribute("class", "card-first-name");
firstName.appendChild(document.createTextNode(JSON.parse(localStorage.getItem("form")).firstName));

divElement.appendChild(firstNameLabel);
divElement.appendChild(firstName);
divForms.appendChild(divElement);
*/
if (localStorage.getItem('forms').length > 0) {
    JSON.parse(localStorage.getItem("forms")).forEach((singleForm, index) => {
        addDiv(singleForm, index);
    })

    function addDiv(singleForm, index) {
        //Create form <div>
        const divElement = document.createElement('div');
        divElement.setAttribute('class', 'card');
        divElement.setAttribute('id', 'card' + index);

        addParagraph(singleForm, "firstName", "card-first-name", 'First name', divElement);
        addParagraph(singleForm, "lastName", 'card-last-name', 'Last name', divElement);
        addParagraph(singleForm, "email", 'card-email', 'Email', divElement);
        addParagraph(singleForm, "phone", 'card-phone', 'Last name', divElement);
        addParagraph(singleForm, "company", 'card-company', 'Company', divElement);
        addParagraph(singleForm, "address", 'card-address', 'Address', divElement);

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'submit');
        deleteButton.setAttribute('class', 'delete-button');
        deleteButton.appendChild(document.createTextNode("Delete"));
        divElement.appendChild(deleteButton);
        deleteButton.addEventListener('click', function () {
            console.log(JSON.parse(localStorage.getItem("forms"))[index]);
            let forms = JSON.parse(localStorage.getItem('forms'));
            forms.splice(index, 1);
            localStorage.setItem('forms', JSON.stringify(forms));
            location.reload();
        });
        divForms.appendChild(divElement);
    }

}

function addParagraph(singleForm, att, className, labelText, divElement) {

    let label = document.createElement("p");
    label.setAttribute('class', 'card-label');
    label.appendChild(document.createTextNode(labelText));

    let paragraph = document.createElement("p");
    //paragraph.appendChild(document.createTextNode(JSON.parse(localStorage.getItem("form"))[att]))
    paragraph.appendChild(document.createTextNode(singleForm[att]));
    paragraph.setAttribute("class", className);
    divElement.appendChild(label);
    divElement.appendChild(paragraph);
}


console.log(JSON.parse(localStorage.getItem("forms")));
console.log(localStorage.getItem("forms").length);
console.log(JSON.parse(localStorage.getItem("forms"))[0]);