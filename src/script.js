const formInputs = document.querySelectorAll("input");
formInputs.forEach( function (currentValue) {
    if (localStorage.getItem(currentValue.name) != null) {
        currentValue.value = localStorage.getItem(currentValue.name);
    }
    currentValue.addEventListener("input", function () {
        localStorage.setItem(currentValue.name, currentValue.value);
    });
});
