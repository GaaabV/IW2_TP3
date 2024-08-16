const form = document.getElementById('form');
const email = document.getElementById('email');

const validateForm = () => {

    let noError = true;
    const emailValue = email.value.trim();
}

if (emailValue === '') {
    setError(email, 'Email is required');
    noError = false;
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
    noError = false;
}
else {
    setSuccess(email);
}