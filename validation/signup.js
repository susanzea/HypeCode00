const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSignupInput(data) {
    let errors = {};
    
    data.first_name = validText(data.first_name) ? data.first_name : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password: '';
    data.password2 = validText(data.password2) ? data.password2: '';
 
    if (!Validator.isLength(data.first_name, { min: 2, max:16 })) {
        errors.first_name = ' First name must be between 2 and 16 characters long';
    }

    if (Validator.isEmpty(data.first_name)) {
        errors.first_name = 'First name is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email can not be empty, please supply an email'
    }

    if (!Validator.isLength(data.password, {min: 6, max: 16})) {
        errors.password = 'Password must be at least 6 characters'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password can not be empty, please supply a password of at least 6 characters'
    }
    
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Password can not be empty, please supply a password of at least 6 characters'
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };

};