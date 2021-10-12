import { useState } from 'react';
import classes from './Contact.module.css';
import { PrimaryButton } from '../Utilities/Buttons/PrimaryButton/PrimaryButton';
import { setValuesAndErrors, setTouched, setErrors, setValues } from './form-handling';

const Contact = props => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        // name: {
        //     value: '',
        //     error: null,
        //     touched: false
        // },
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
        }, 2000)
        console.log(formData);
    }

    console.log(formData)

    return (
        <section className={classes.Contact}>
            <div className={classes.ContactWrapper}>
                {/* <h2>Get in touch</h2> */}
                <h2>Contact Me</h2>
                <form className={classes.Form} onSubmit={sendData}>
                    {/* <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" autoComplete="off" onChange={onChangeHandler}/> */}
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
                    <PrimaryButton type="submit">{loading ? 'Loading...' : 'Send'}</PrimaryButton>
                </form>
            </div>
        </section>
    )
}

export { Contact }