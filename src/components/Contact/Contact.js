import { useState } from 'react';
import classes from './Contact.module.css';

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
                    <input type="text" name="name" id="name" value="" autoComplete="off"/>
                    <label>Email</label>
                    <input type="email" name="email" id="email" value="" autoComplete="off"/>
                    <label>Message</label>
                    <input type="text" name="message" id="message" value="" autoComplete="off"/>
                </form>
            </div>
        </section>
    )
}

export { Contact }