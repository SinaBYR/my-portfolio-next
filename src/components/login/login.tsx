import { useFormik } from 'formik';
import { Button } from '../utilities';
import classes from './login.module.scss';

export function Login() {
  const { values, submitForm, handleChange, handleBlur } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: (values, _helpers) => {

    }
  })

  return (
    <div className={classes.login}>
      <h2>Login Page</h2>
      <form className={classes.form} onSubmit={submitForm}>
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
            name="password"
            id="password"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            />
        </div>
        <div className={classes.loginButton}>
          <Button>Sign in</Button>
        </div>
      </form>
    </div>
  )
}