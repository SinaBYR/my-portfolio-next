import classes from './contact.module.scss';
import { useState } from 'react';
import { Button } from '../Utilities';
import { setTouched, setErrors, setValues, isValid } from './form-data';
import { FormData } from './form-data/types';
// import ScaleLoader from 'react-spinners/ScaleLoader';

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullname: {
      value: '',
      error: null,
      touched: false
    },
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
  });

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
    <section className={classes.contact}>
      <div className={classes.header}>
        <h2>Get in touch</h2>
        <p>Send me a message and I'll get back to you as soon as possible.</p>
      </div>
      <form className={classes.form} onSubmit={sendData}>
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            // style={{borderColor: formData.fullname.error && 'red'}}
            autoComplete="off"
            onChange={e => setFormData(setValues(formData, e))}
            onFocus={e => setFormData(setTouched(formData, e))}
            onBlur={e => setFormData(setErrors(formData, e))}
            />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            // style={{borderColor: formData.email.error && 'red'}}
            autoComplete="off"
            onChange={e => setFormData(setValues(formData, e))}
            onFocus={e => setFormData(setTouched(formData, e))}
            onBlur={e => setFormData(setErrors(formData, e))}
            />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            // style={{borderColor: formData.message.error && 'red'}}
            onChange={e => setFormData(setValues(formData, e))}
            onFocus={e => setFormData(setTouched(formData, e))}
            onBlur={e => setFormData(setErrors(formData, e))}
            />
        </div>
        <Button type="submit" disabled={loading} mode="primary">Send</Button>
      </form>
    </section>
  )
}