import classes from './login.module.scss';
import { useFormik } from 'formik';
import { Button } from '../utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchJson } from '../../lib/fetchJson';
import { useUser } from '../../lib/useUser';
import { User } from '../../types/types';

interface LoginFormInitialValues {
  username: string;
  passphrase: string;
}

export function Login() {
  const { mutateUser } = useUser({
    redirectTo: '/dashboard',
    redirectIfFound: true
  });
  const { values, handleSubmit, handleChange, handleBlur } = useFormik<LoginFormInitialValues>({
    initialValues: {
      username: '',
      passphrase: ''
    },
    onSubmit: (values, _helpers) => {
      loginHandler(values);
    }
  })

  async function loginHandler(values: LoginFormInitialValues) {
    if(!values.username || !values.passphrase) {
      return toast('Both fields are required.')
    }

    try {
      const result = await fetchJson<User>('/api/login', {
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST'
      });

      mutateUser(result, false);
    } catch(err) {
      if(err.response.status === 401) {
        return toast.error('Username or passphrase is incorrect.')
      }

      toast.error(err.message);
    }
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