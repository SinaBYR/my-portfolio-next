import React from "react";
import { validationErrors } from ".";
import { FormData } from "./types";

// set touched from false to true.
// THIS GENERIC NEEDS REFACTORING.
export function setTouched(
  data: FormData,
  e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement, Element>
) {
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
export function setValues(
  data: FormData,
  e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>
) {
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
export function setErrors(
  data: FormData,
  e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement, Element>
) {
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