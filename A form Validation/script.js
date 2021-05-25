const form = document.getElementById('form');
const Username = document.getElementById('Username');
const Email = document.getElementById('Email');
const Paswword = document.getElementById('Password');
const Password2 = document.getElementById('Password2');

//Error function
function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = "formcontrol error";
    const small = formcontrol.querySelector('small');
    small.innerText = message;

}
//Success function
function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = "formcontrol success";
}

//Check for Email

function CheckEmail(Email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
}

//Check the fields mentioned
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, input.id + ' is required');
        } else {
            showSuccess(input);
        }
    });
}
//check Input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, input.id + ' must be atleast ' + min + ' characters');
    } else if (input.value.length > max) {
        showError(input, input.id + ' must have maximum of ' + max + ' characters')
    } else {
        showSuccess(input);
    }

}

//check Passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value != input2.value) {
        showError(input2, "Passwords Don't Match");
    } else {
        showSuccess(input2);
    }

}


//EventListener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([Username, Email, Password, Password2]);
    checkLength(Username, 3, 15);
    checkLength(Email, 6, 25);
    checkPasswordsMatch(Password, Password2);
});