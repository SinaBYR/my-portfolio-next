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

// set inputs values & errors
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