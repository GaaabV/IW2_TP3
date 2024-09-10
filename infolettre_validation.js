const infolettre = document.getElementById('infolettre');
const email = document.querySelector('.email');

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const newsletterForm = () => {

    let noError = true;
    const emailValue = email.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
        noError = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        noError = false;
    } else {
        setSuccess(email);
    }

    return noError;
};
