
//Automatically change user name in Hero Section
function replaceName(){
    const name = prompt("Hi! What's your name?", "");
    document.getElementById("name").innerHTML = name
}

replaceName()

//Validate Form
function validateForm(){
    const formName = document.getElementById('form-name').value.trim();
    const formDateOfBirth = document.getElementById('form-date-of-birth').value.trim();
    const formGenderMale = document.getElementById('form-gender-male').checked;
    const formGenderFemale = document.getElementById('form-gender-female').checked;
    const formMessage = document.getElementById('form-message').value.trim();

    //Current Time Automatically add when submit button cliked
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();
    document.getElementById('current-time').innerHTML = formattedTime;

    if (formName != '' ){
        document.getElementById('name-output').innerHTML = formName;
    } else {
        alert('Please enter your name');
        return false;
    }

    if (formDateOfBirth != '' ){
        document.getElementById('date-of-birth-output').innerHTML = formDateOfBirth;
    } else {
        alert('Please enter your date of birth.');
        return false;
    }

    if (formGenderMale || formGenderFemale){
        const gender = formGenderMale ? 'Male' : 'Female';
        document.getElementById('gender-output').innerHTML = gender;
    } else {
        alert('Please select your gender');
        return false;
    }

    if(formMessage != '' ){
        document.getElementById('message-output').innerHTML = formMessage;
    } else {
        alert('Please enter a message');
        return false;
    }

    return true;
}




