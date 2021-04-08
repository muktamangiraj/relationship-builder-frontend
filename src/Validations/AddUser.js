const validator = require("validator");
const isEmpty = require("is-empty");


//For unit validation

const userValidator = data =>{
    let errors = {};

    if (validator.isEmpty(data.Name)) {
        errors.Name = "Name is required";
    }

    if (validator.isEmpty(data.Relation)) {
        errors.Relation = "Relation is required";
    }

    if(validator.isEmpty(data.With)){
        errors.With = "With name is required"
    }

    return { errors, isValid: isEmpty(errors) };

}
module.exports = userValidator;
