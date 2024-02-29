function validations ({name, image, height, weight, life_span, temperament}) {
    const onlyLetters = /^[A-Za-zÁáÉéÍíÓóÚúÑñ]+$/;
    const url = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const imageurl = /\.(jpg|jpeg|png|gif)$/i;
    const inputParameters = /^\d+-\d+$/;

    const errors = {};

    console.log(errors);

    if(name.length < 3) errors.name = 'The name must contain at least 3 characters.'
    if(name.length > 20) errors.name = 'The name must contain a maximum of 15 characters.'
    if (!onlyLetters.test(name)) errors.name = "The field 'name' only accepts letters";

    if (!url.test(image) || !imageurl.test(image)) errors.image = 'Must provide a valid URL image';

    if(!inputParameters.test(height)) {
        errors.height = 'The format must be 00-00'
    }

    if(validateNumbers(height)) {
        errors.height = 'The first value should be less than the second value.'
    }

    if(!inputParameters.test(weight)) {
        errors.weight = 'The format must be 00-00'
    }
    if(validateNumbers(weight)) {
        errors.weight = 'The first value should be less than the second value.'
    }

    if(!inputParameters.test(life_span)) {
        errors.life_span = 'The format must be 00-00'
    }
    if(validateNumbers(life_span)) {
        errors.life_span = 'The first value should be less than the second value.'
    }

    if(temperament.length < 1) errors.temperament = 'There must be at least 1 temperament'
    
    return errors;
}

const validateNumbers = (value) => {
    const valueSplit = value.split('-');

    if (valueSplit.length == 2) {
        const first = parseInt(valueSplit[0]);
        const second = parseInt(valueSplit[1]);

        return first > second;
    }

    return true;
}

export default validations;
