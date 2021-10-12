import { useState } from 'react';
import classes from './Contact.module.css';
import { SocialIcon } from 'react-social-icons';
import { PrimaryButton } from '../Utilities/Buttons/PrimaryButton/PrimaryButton';

const Contact = props => {

    const [formData, setFormData] = useState({
        name: {
            value: '',
            error: null,
            
        },
        email: {
            value: '',
            error: null
        },
        message: {
            value: '',
            error: null
        }
    });

    const validate = () => {
        
    }

    return (
        <section className={classes.Contact}>
            <div className={classes.ContactWrapper}>
                <h2>Get in touch</h2>
                <form className={classes.Form}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" autoComplete="off"/>
                    <label>Email</label>
                    <input type="email" name="email" id="email" autoComplete="off"/>
                    <label>Message</label>
                    <textarea name="message" id="message" />
                    <PrimaryButton type="submit">Send</PrimaryButton>
                </form>
            </div>
        </section>
    )
}

export { Contact }