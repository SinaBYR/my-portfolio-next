import { useState } from 'react';
import classes from './Contact.module.css';
import { PrimaryButton } from '../Utilities/Buttons/PrimaryButton/PrimaryButton';
import { setValuesAndErrors, setTouched, setErrors, setValues } from './form-handling';
import ScaleLoader from 'react-spinners/ScaleLoader';
import PulseLoader from 'react-spinners/PulseLoader';
import { isValid } from './form-handling/validation/validation';

const Contact = props => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: {
            value: '',
            error: null,
            touched: false
        },
        message: {
            value: '',
            error: null,
            touched: false
        }
    })

    const onChangeHandler = e => {
        setFormData(setValues(formData, e))
    }

    const onFocusHandler = e => {
        setFormData(setTouched(formData, e))
    }
    
    const onBlurHandler = e => {
        setFormData(setErrors(formData, e))
    }

    const sendData = (e) => {
        setLoading(true)
        e.preventDefault();
        setTimeout(() => {
            setLoading(false)
            if(isValid(formData)) {
                console.log('Okay')
            }
            console.log(formData);
        }, 2000)
    }

    return (
        <section className={classes.Contact}>
            <div className={classes.ContactWrapper}>
                <h2>Contact Me</h2>
                <form className={classes.Form} onSubmit={sendData}>
                    <label>Email</label>
                    <p className={classes.ErrorMessage}>{formData.email.error}</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        style={{borderColor: formData.email.error && 'red'}}
                        autoComplete="off"
                        onChange={onChangeHandler}
                        onFocus={onFocusHandler}
                        onBlur={onBlurHandler}
                        />
                    <label>Message</label>
                    <p className={classes.ErrorMessage}>{formData.message.error}</p>
                    <textarea
                        name="message"
                        id="message"
                        style={{borderColor: formData.message.error && 'red'}}
                        onChange={onChangeHandler}
                        onFocus={onFocusHandler}
                        onBlur={onBlurHandler}
                        />
                    <PrimaryButton type="submit">{loading ? <ScaleLoader color="#eeeeee" height="10px" radius="2px"/> : 'Send'}</PrimaryButton>
                </form>
            </div>
        </section>
    )
}

export { Contact }