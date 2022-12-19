import classes from './form.module.scss';
import { Button } from '../../../utilities';
import { useFormik } from 'formik';
import AsyncSelect from 'react-select/async';
import { fetchJson } from '../../../../lib/fetchJson';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '@tinymce/tinymce-react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

export function Form() {
  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      title: '',
      demo_url: '',
      repo: '',
      description: '',
      screenshots: [],
      technologies: []
    },
    onSubmit: (values, _helpers) => {
      console.log(values)
    }
  });

  // update tech list on drop event.
  function handleDrop(droppedItem: DropResult) {
    if (!droppedItem.destination) return;

    const updatedList = [...values.technologies];
    const reorderedItem = updatedList.splice(droppedItem.source.index, 1)[0];
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setFieldValue('technologies', updatedList);
  };

  // repository selection search-box
  function filterOptions(inputValue: string, options: any[]) {
    return options.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  // fetch github repositories.
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
        toast.error(err.message);
    }
  };

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
              menu: baseStyles => ({
                ...baseStyles,
                zIndex: 2
              })
            }}
            loadOptions={loadOptions}
            defaultOptions/>
        </div>
        {!!values.technologies.length &&
        <DragDropContext onDragEnd={handleDrop} >
          <Droppable droppableId="tech-list-droppable" direction="horizontal">
            {provided => (
              <div
                className={classes.techList}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {values.technologies.map((t, index) => (
                  <Draggable key={t + index} draggableId={t + index} index={index}>
                    {provided => (
                      <span
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >{t}</span>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>}
        <div>
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
        </div>
      </div>
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