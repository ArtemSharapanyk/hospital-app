const validate = (expression, bad, good) => {
    if(expression){
        bad();
    }else{
        good();
    }
};

export const DiagnoseValidation = (value, bad, good) => {
    validate(
        value.length < 4,
        bad,
        good
    )
};

export const BaseValidation =  (value, bad, good, index) => {
    validate(
        value.length < index,
        bad,
        good
    )
};

export const ToothValidation = (value, bad, good) => {
    validate(
        value.length < 1 || isNaN(value),
        bad,
        good
    )
};

export const phoneNumberValidation = (value, bad, good) => {
    validate(
        value.length < 5,
        bad,
        good
    )
};

export const dataValidation = (value, bad, good) => {
    validate(
        value.length < 5,
        bad,
        good
    )
};

export const priceValidation = (value, bad, good) => {
    validate(
        value.length < 1,
        bad,
        good
    )
};


