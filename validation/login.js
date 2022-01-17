const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email can not be empty, please provide an email.'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password can not be empty, please provide a password with at least 6 characters.';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}