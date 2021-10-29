// returns errors of inputs if there is any
export const validationErrors = (fields) => {
    const errors = {}

    const similarFields = ['title', 'description', 'demo', 'code']
    similarFields.forEach(field => {
        if(fields[field]) {
            if(fields[field].touched && !fields[field].value.length) {
                errors[field] = 'This field is required.'
            }
        }
    })

    if(fields.preview) {
        if(fields.preview.touched && !fields.preview.value) {
            errors.preview = 'A screenshot from project is required.'
        }
    }

    if(fields.tech) {
        if(fields.tech.touched && fields.tech.value.some(value => value.length === 0)) {
            errors.tech = 'Tech stack used for project is required.'
        }
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