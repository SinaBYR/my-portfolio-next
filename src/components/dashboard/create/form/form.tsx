import classes from './form.module.scss';
import { Button } from '../../../utilities';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '@tinymce/tinymce-react';
import { TechTags } from './techTags/techTags';
import { SelectRepo } from './selectRepo/selectRepo';
import { UploadScreenshots } from './uploadScreenshots/uploadScreenshots';
import { fetchJson } from '../../../../lib/fetchJson';

export function Form() {
  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      title: '',
      demo_url: '',
      repo: '',
      description: '',
      screenshots: [],
      technologies: [],
      thumbnail: ''
    },
    onSubmit: async (values, _helpers) => {
      const formData = new FormData();
      Object.keys(values).forEach(field => {
        if(field === 'technologies') {
          return values.technologies.forEach(t => formData.append('technologies[]', t.text));
        }

        if(field === 'screenshots') {
          return values.screenshots.forEach(ss => formData.append('screenshots[]', ss));
        }

        formData.append(field, values[field]);
      });

      const res = await fetchJson('/api/projects', {
        method: 'POST',
        body: formData
      })

      console.log(res)
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <button>Click</button>
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
          <TechTags values={values} setFieldValue={setFieldValue}/>
        </div>
        <div>
          <label htmlFor="repo">Repository</label>
          <SelectRepo setFieldValue={setFieldValue}/>
        </div>
        {/* <div>
          <label htmlFor="description">Description</label>
          <Editor
            init={{
              height: 500,
              menubar: false,
              content_css: 'dark',
              toolbar: 'undo redo | h2 h3 h4 | bold italic bullist numlist outdent indent removeformat',
            }}
            onChange={(_evt, editor) => setFieldValue('description', editor.getContent())}
          />
        </div> */}
      </div>
      <UploadScreenshots
        screenshots={values.screenshots}
        thumbnail={values.thumbnail}
        handleChange={handleChange}
        setFieldValue={setFieldValue}/>

      {/* <input type="file" name="" id="" onChange={e => {
        console.log(e.target.files);
      }}/> */}
      <div className={classes.controls}>
        <Button variant="simple-alt" type="submit">Create</Button>
      </div>
      <ToastContainer
        hideProgressBar
        autoClose={false}
        position="bottom-center"
        theme="dark"
        toastStyle={{fontSize: '15px', textAlign: 'center'}}
        />
    </form>
  )
}