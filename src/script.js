//Assigning inputs to variables
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let company = document.getElementById("company");
let address = document.getElementById("address");
let submit = document.getElementById("submit-button")

//Assigning values from localStorage to inputs
initFields();

//Adding listeners to overwrite localStorage from inputs
firstName.addEventListener("keyup", function () {
    localStorage.setItem("first-name", JSON.stringify({firstName: document.getElementById("first-name").value}));
});
lastName.addEventListener("keyup", function () {
    localStorage.setItem("last-name", JSON.stringify({lastName: document.getElementById("last-name").value}));
});
email.addEventListener("keyup", function () {
    localStorage.setItem("email", JSON.stringify({email: document.getElementById("email").value}));
});
phone.addEventListener("keyup", function () {
    localStorage.setItem("phone", JSON.stringify({phone: document.getElementById("phone").value}));
});
company.addEventListener("keyup", function () {
    localStorage.setItem("company", JSON.stringify({company: document.getElementById("company").value}));
});
address.addEventListener("keyup", function () {
    localStorage.setItem("address", JSON.stringify({address: document.getElementById("address").value}));
});
submit.addEventListener("click", function () {
    let form = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        company: document.getElementById("company").value,
        address: document.getElementById("address").value
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

    localStorage.removeItem('first-name');
    localStorage.removeItem('last-name');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    localStorage.removeItem('company');
    localStorage.removeItem('address');
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    })
});

function initFields() {
    if (localStorage.getItem("first-name") != null) {
        firstName.value = JSON.parse(localStorage.getItem("first-name")).firstName;
    }
    if (localStorage.getItem("last-name") != null) {
        lastName.value = JSON.parse(localStorage.getItem("last-name")).lastName;
    }
    if (localStorage.getItem("email") != null) {
        email.value = JSON.parse(localStorage.getItem("email")).email;
    }
    if (localStorage.getItem("phone") != null) {
        phone.value = JSON.parse(localStorage.getItem("phone")).phone;
    }
    if (localStorage.getItem("company") != null) {
        company.value = JSON.parse(localStorage.getItem("company")).company;
    }
    if (localStorage.getItem("address") != null) {
        address.value = JSON.parse(localStorage.getItem("address")).address;
    }
}