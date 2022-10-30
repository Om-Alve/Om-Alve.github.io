//For form validation
function validate() {
    let x = document.forms['form']['name'].value;
    let y = document.forms['form']['email'].value;
    let z = document.forms['form']['Message'].value;
    if (x == "") {
        alert('Name must be filled out');
        return false;
    }
    if (y == "") {
        alert('Email must be filled out');
        return false;
    }
    if (z == "") {
        alert('The message must be filled out');
        return false;
    }
    alert('Your message has been sent.');
    return true;
}

