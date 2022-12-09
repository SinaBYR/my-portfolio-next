import classes from './login.module.scss';
import Router from 'next/router';
import { useFormik } from 'formik';
import { Button } from '../utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LoginFormInitialValues {
  username: string;
  passphrase: string;
}

export function Login() {
  const { values, handleSubmit, handleChange, handleBlur } = useFormik<LoginFormInitialValues>({
    initialValues: {
      username: '',
      passphrase: ''
    },
    onSubmit: async (values, _helpers) => {
      try {
        await loginHandler(values);
      } catch(err) {
        console.log(err);
      }
    }
  })

  async function loginHandler(values: LoginFormInitialValues) {
    if(!values.username || !values.passphrase) {
      return toast('Both fields are required.')
    }

    const response = await fetch('/api/login', {
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST'
    });

    const result = await response.json();
    
    if(!response.ok) {
      return toast(result.message);
    }

    Router.push('/dashboard');
  }

  return (
    <div className={classes.login}>
      <h2>Login Page</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="passphrase"
            id="passphrase"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passphrase}
            />
        </div>
        <div className={classes.loginButton}>
          <Button type="submit">Sign in</Button>
        </div>
      </form>
      <ToastContainer
        hideProgressBar
        position="top-center"
        theme="dark"
        toastStyle={{fontSize: '15px', textAlign: 'center'}}/>
    </div>
  )
}