import classes from './form.module.scss';
import { Button } from '../../../utilities';
import { useFormik } from 'formik';
import AsyncSelect from 'react-select/async';
import { fetchJson } from '../../../../lib/fetchJson';

export function Form() {
  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      title: '',
      demo_url: '',
      repo: '',
      screenshots: [],
      technologies: []
    },
    onSubmit: (values, _helpers) => {
      console.log(values)
    }
  })

  function filterOptions(inputValue: string, options: any[]) {
    return options.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
  }

  async function loadOptions(inputValue: string) {
    try {
      const repos: any[] = await fetchJson('https://api.github.com/users/sinabyr/repos?sort=created');
      const options = repos.map(r => {
        return {
          value: r.name,
          label: r.name
        }
      })
      return filterOptions(inputValue, options);
    } catch(err) {

    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <button>click</button>
      <div className={classes.inputs}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="demo_url">Demo URL</label>
          <input
            type="text"
            id="demo_url"
            name="demo_url"
            onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="technologies">Technologies</label>
          <input type="text" id="technologies" name="technologies" onKeyDown={e => {
            if(!e.currentTarget.value) return;
            if(e.key === 'Enter') {
              const techList = [...values.technologies];
              techList.push(e.currentTarget.value);
              setFieldValue('technologies', techList);
              e.currentTarget.value = '';
              // to prevent form from submitting.
              e.preventDefault();
            }
          }}/>
          {values.technologies.map(t => <span>{t} </span>)}
        </div>
        <div>
          <label htmlFor="repo">Repository</label>
          <AsyncSelect
            name="repo"
            id="repo"
            onChange={(e: any) => setFieldValue('repo', e.value)}
            styles={{
              singleValue: baseStyles => ({
                ...baseStyles,
                color: '#f4f4f4',
              }),
              input: baseStyles => ({
                ...baseStyles,
                color: '#f4f4f4',
              }),
              control: baseStyles => ({
                ...baseStyles,
                backgroundColor: '#1a1d1d',
                paddingBottom: '3px',
                marginBottom: '1rem',
                border: '1px solid #020303',
              }),
              option: baseStyles => ({
                ...baseStyles,
                color: '#1a1d1d'
              }),
            }}
            loadOptions={loadOptions}
            defaultOptions/>
        </div>
      </div>

      <div className={classes.controls}>
        <Button variant="simple-alt" type="submit">Create</Button>
      </div>
    </form>
  )
}