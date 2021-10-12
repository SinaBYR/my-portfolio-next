// returns errors of inputs if there is any
export const validationErrors = ({ email, message }) => {
    const errors = {}

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.touched && !emailRegex.test(email.value)) {
        errors.email = 'Email address is invalid.'
    }

    if(email.touched && !email.value.length) {
        errors.email = 'This field is required.'
    }

    if(message.touched && !message.value.length) {
        errors.message = 'This field is required.'
        console.log(errors)
    }

    return errors
}

// returns true if validation is passed, returns false if not
export const isValid = (data) => {
    const isValid = Object.keys(data).every(inputName => {
        return data[inputName].touched && !data[inputName].error
    })
    return isValid
}