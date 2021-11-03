import { useState } from 'react';
import classes from './Contact.module.css';
import { PrimaryButton } from '../Utilities/Buttons/PrimaryButton/PrimaryButton';
import { setTouched, setErrors, setValues, isValid } from './form-data-handling';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Contact = () => {
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
        e.preventDefault();

        if(!isValid(formData)) {
            return false
        }
        setLoading(true)
        setTimeout(() => {
            console.log(formData);
            setLoading(false)
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
                    <PrimaryButton type="submit" disabled={loading}>
                        {loading ? <ScaleLoader color="#eeeeee" height="10px" radius="2px"/> : 'Send'}
                    </PrimaryButton>
                </form>
            </div>
        </section>
    )
}

export { Contact }