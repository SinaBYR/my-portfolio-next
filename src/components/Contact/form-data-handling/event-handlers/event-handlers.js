import { validationErrors } from "..";

// set touched from false to true
export const setTouched = (data, e) => {
    const field = e.target.name;
    return {
        ...data,
        [field]: {
            ...data[field],
            touched: true,
        }
    }
}

// set inputs values
export const setValues = (data, e) => {
    const field = e.target.name;
    return {
        ...data,
        [field]: {
            ...data[field],
            value: e.target.value
        }
    }
}

// set inputs errors
export const setErrors = (data, e) => {
    const field = e.target.name;
    const errors = validationErrors(data);
    return {
        ...data,
        [field]: {
            ...data[field],
            error: errors[field]
        }
    }
}