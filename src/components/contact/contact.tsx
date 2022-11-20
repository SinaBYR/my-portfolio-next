import classes from './contact.module.scss';
import { useState } from 'react';
import { Button } from '../Utilities';
import { useFormik } from 'formik';
import { validationSchema } from './validation-schema';

export function Contact() {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    fullname: '',
    email: '',
    message: ''
  };

  const { values, errors, isValid, submitCount, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues,
    onSubmit: (values, _helpers) => {
      console.log(values);
    },
    validationSchema
  });

  return (
    <section className={classes.contact}>
      <div className={classes.header}>
        <h2>Get in touch</h2>
        <p>Send me a message and I'll get back to you as soon as possible.</p>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            // style={{borderColor: formData.fullname.error && 'red'}}
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullname}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            // style={{borderColor: formData.message.error && 'red'}}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            />
        </div>
        <Button type="submit" disabled={!isValid} mode="primary">Send</Button>
      </form>
    </section>
  )
}