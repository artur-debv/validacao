function isValidEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexEmail.test(email);
}

// Exemplo de uso
const email = 'foobar@gmail.com';
const isEmailValid = isValidEmail(email);
console.log(isEmailValid); // true ou false
