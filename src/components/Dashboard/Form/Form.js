import classes from './Form.module.css';
import { useState } from 'react';
import { PrimaryButton } from '../../Utilities';

const Form = ({ submit, loading, error }) => {
    const [techNum, setTechNum] = useState(1)
    const [imagePreview, setImagePreview] = useState(null)
    const [formData, setFormData] = useState({
        title: '',
        preview: null,
        demo: '',
        code: '',
        description: '',
        tech: ['']
    })
    
    const onChangeHandler = e => {
        if(e.target.name === 'tech') {
            const newTech = [...formData.tech]
            newTech[e.target.id] = e.target.value
            return setFormData({
                ...formData,
                tech: newTech
            })
        }

        if(e.target.name === 'preview') {
            if(e.target.files.length) {
                const url = URL.createObjectURL(e.target.files[0])
                setImagePreview(url)
            }

            return setFormData({
                ...formData,
                preview: e.target.files[0]
            })
        }


        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const addInputHandler = () => {
        // I add an empty string to the formData.tech array to turn newly added tech input into a controlled input.
        const newTechArray = [...formData.tech]
        newTechArray.push('')
        setFormData({
            ...formData,
            tech: newTechArray
        })
        setTechNum(techNum + 1)
    }

    const deleteInputHandler = () => {
        if(techNum < 2) {
            return
        }

        const newTechArray = [...formData.tech]
        newTechArray.pop()

        setFormData({
            ...formData,
            tech: newTechArray
        })
        setTechNum(techNum - 1)
    }

    const onSubmitHandler = e => {
        e.preventDefault()

        const data = new FormData()
        data.append('title', formData.title)
        data.append('description', formData.description)
        data.append('demo', formData.demo)
        data.append('code', formData.code)
        data.append('tech', formData.tech)
        data.append('preview', formData.preview)

        submit(data)
        if(!error) {
            setFormData({
                title: '',
                preview: null,
                demo: '',
                code: '',
                description: '',
                tech: ['']
            })
        }
    }

    let techElements = Array.from(new Array(techNum)).map((num, i) => {
        return (
            <div key={i}>
                <label htmlFor="tech">Tech {i + 1}</label>
                <input type="text" name="tech" id={i} onChange={onChangeHandler} value={formData.tech[i]}/>
           </div>
        )
    })

    return (
        <form className={classes.Form} onSubmit={onSubmitHandler}>
            {/* {error && <div className={classes.Error}>{error}</div>} */}
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={onChangeHandler} required/>
            <label htmlFor="demo">Demo Link</label>
            <input type="text" id="demo" name="demo" value={formData.demo} onChange={onChangeHandler}/>
            <label htmlFor="code">Code Link</label>
            <input type="text" id="code" name="code" value={formData.code} onChange={onChangeHandler}/>
            <label htmlFor="description">descriptionription</label>
            <textarea name="description" id="description" value={formData.description} onChange={onChangeHandler}></textarea>
            <label htmlFor="preview">Preview</label>
            <input type="file" name="preview" id="preview" accept="image/png, image/jpeg" onChange={onChangeHandler}/>
            {
                imagePreview ? <img className={classes.Preview} src={imagePreview} alt="upload-preview" /> : null
            }
            <div className={classes.Technologies}>{techElements}</div>
            <div className={classes.ButtonsWrapper}>
                <PrimaryButton type="button" onClick={addInputHandler}>Add Tech</PrimaryButton>
                <PrimaryButton type="button" onClick={deleteInputHandler}>Delete Tech</PrimaryButton>
                <PrimaryButton type="submit" disabled={loading} onClick={onSubmitHandler}>{loading ? 'Loading...' : 'Submit'}</PrimaryButton>
            </div>
        </form>
    )
}

export { Form }