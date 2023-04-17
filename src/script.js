const formInputs = document.querySelectorAll("input");
formInputs.forEach( function (currentValue) {
    //Check if input value is in localStorage - if yes, override its value on page
    if (localStorage.getItem(currentValue.name) != null) {
        currentValue.value = localStorage.getItem(currentValue.name);
    }
    //Update localStorage if user inputs sth
    currentValue.addEventListener("input", function () {
        localStorage.setItem(currentValue.name, currentValue.value);
    });
});