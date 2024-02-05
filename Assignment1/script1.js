function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var location = document.getElementById('location').value;
    var nationality = document.getElementById('nationality').value;
    var department = document.getElementById('department').value;
    var password = document.getElementById('password').value;

    if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(dob) || isEmpty(email) ||
        isEmpty(age) || isEmpty(gender) || isEmpty(location) || isEmpty(nationality) ||
        isEmpty(department) || isEmpty(password)) {
        alert('All fields must be filled out');
    } else if (!isValidEmail(email)) {
        alert('Invalid email address');
    } else if (!isValidDateOfBirth(dob)) {
        alert('Invalid date of birth');
    } else {
        alert('Form submitted successfully');
        
         document.getElementById('registrationForm').submit();
    }
}

function isValidDateOfBirth(dateOfBirth) {
    var currentDate = new Date();
    var enteredDate = new Date(dateOfBirth);

    return enteredDate <= currentDate;
}

function isEmpty(value) {
    return value.trim() === '';
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
