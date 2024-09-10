const form = document.getElementById('form');
const newsletter = document.getElementById('newsletter-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const email = document.querySelector('.email');
const adress = document.getElementById('street-address');
const country = document.getElementById('country');
const city = document.getElementById('city');
const province = document.getElementById('province');
const postalCode = document.getElementById('postal-code');

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
}

const isValidpostalCode = postalCode => {
    const re = /^[A-Z]\d[A-Z] \d[A-Z]\d$/;
    return re.test(postalCode);
};

const validateForm = () => {

    let noError = true;
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const adressValue = adress.value.trim();
    const cityValue = city.value.trim();
    const provinceValue = province.value.trim();
    const postalCodeValue = postalCode.value.trim();

    if(firstNameValue === '') {
        setError(firstName, 'First name is required');
        noError = false;
    } else {
        setSuccess(firstName);
    }

    if(lastNameValue === '') {
        setError(lastName, 'Last name is required');
        noError = false;
    } else {
        setSuccess(lastName);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        noError = false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 characters.');
        noError = false;
    } else {
        setSuccess(password);
    }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
        noError = false;
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords do not match");
        noError = false;
    } else {
        setSuccess(confirmPassword);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        noError = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        noError = false;
    } else {
        setSuccess(email);
    }

    if(countryValue === '') {
        setError(country, 'Country is required');
        noError = false;
    } else {
        setSuccess(country);
    }

    if(adressValue === '') {
        setError(adress, 'Address is required');
        noError = false;
    } else {
        setSuccess(adress);
    }

    if(cityValue === '') {
        setError(city, 'City is required');
        noError = false;
    } else {
        setSuccess(city);
    }

    if(provinceValue === '') {
        setError(province, 'Province is required');
        noError = false;
    } else {
        setSuccess(province);
    }

    if(postalCodeValue === '') {
        setError(postalCode, 'Postal code is required');
        noError = false;
    } else if (!isValidpostalCode(postalCodeValue)) {
        setError(postalCode, 'Provide a valid postal code');
        noError = false;
    } else {
        setSuccess(postalCode);
    }

    return noError;
};
