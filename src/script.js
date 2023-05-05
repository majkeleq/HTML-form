//Assigning inputs to variables
let submit = document.getElementById("submit-button")
let inputs = document.querySelectorAll('input');
//Assigning values from localStorage to inputs
initFields();
//Adding listeners to overwrite localStorage from inputs
addInputListeners()
submit.addEventListener("click", function () {
    let form = {
        firstName: inputs[0].value,
        lastName: inputs[1].value,
        email: inputs[2].value,
        phone: inputs[3].value,
        company: inputs[4].value,
        address: inputs[5].value
    };
    //create empty array
    let forms = [];

    ///CLEAR localStorage.forms
    //localStorage.setItem("forms", forms);
    //
    //
    //push current form at the beginning
    forms.push(form);
    //if localStorage forms exists and isn't empty add rest of forms, else push only current form
    if (localStorage.getItem("forms") != null && localStorage.getItem("forms").length !== 0) {
        forms.push(...JSON.parse(localStorage.getItem("forms")));
    }
    localStorage.setItem("forms", JSON.stringify(forms));
    console.log(localStorage.getItem("forms"));

    inputs.forEach(input => {
        localStorage.removeItem(input.id);
        input.value = "";
    })
});

function initFields() {

    inputs.forEach(input => {
        input.value = localStorage.getItem(input.id);
    })
}

function addInputListeners() {
    inputs.forEach(input => {
        input.addEventListener('keyup', function () {
            localStorage.setItem(input.id, input.value);
        });
    });
}