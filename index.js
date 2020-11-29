document.querySelector("#name").addEventListener("blur", nameChange);
document.querySelector("#zipcode").addEventListener("blur", zipcodeChange);
document.querySelector("#email").addEventListener("blur", emailChange);
document.querySelector("#phone").addEventListener("blur", phoneChange);

function nameChange(e) {
    let inputVal = e.target.value;
    let pattern = /^[a-zA-Z]\w+/
    if (inputVal.length >= 2 && inputVal.length <= 8 && pattern.test(inputVal)) {
        e.target.classList.remove("is-invalid")
    } else {
        e.target.classList.add("is-invalid")
    }
}

function zipcodeChange(e) {
    let inputVal = e.target.value;
    let pattern = /^[\d]{5}(-[0-9]{4})?$/
    if (pattern.test(inputVal)) {
        e.target.classList.remove("is-invalid")
    } else {
        e.target.classList.add("is-invalid")
    }
}

function emailChange(e) {
    let inputVal = e.target.value;
    let pattern = /^[a-z][a-z0-9]+@[a-z]+.[a-z]{2,5}$/
    if (pattern.test(inputVal)) {
        e.target.classList.remove("is-invalid")
    } else {
        e.target.classList.add("is-invalid")
    }
}

function phoneChange(e) {
    let inputVal = e.target.value;
    let pattern = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
    if (pattern.test(inputVal)) {
        e.target.classList.remove("is-invalid")
    } else {
        e.target.classList.add("is-invalid")
    }
}