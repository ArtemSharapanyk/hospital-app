export const DiagnoseValidation = (value, bad, good) => {
    if(value.length < 4){
        bad()
    }else{
        good()
    }
};

export const BaseValidation =  (value, bad, good, index) => {
    if(value.length < index){
        bad()
    }else{
        good()
    }
};

export const ToothValidation = (value, bad, good) => {
    if(value.length < 1 || isNaN(value)){
        bad()
    }else{
        good()
    }
};

export const phoneNumberValidation = (value, bad, good) => {
    if(value.length < 5){
        bad()
    }else{
        good()
    }
};

export const dataValidation = (value, bad, good) => {
    if(value.length < 5){
        bad()
    }else{
        good();
    }
};

export const priceValidation = (value, bad, good) => {
    if(value.length < 1){
        bad()
    }else{
        good()
    }
};


