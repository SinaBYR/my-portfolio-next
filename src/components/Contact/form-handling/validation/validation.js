import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
})

export const validationErrors = ({ email, message }) => {
    const errors = {}

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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