import classes from './Form.module.css';
import { useState } from 'react';
import { PrimaryButton } from '../../Utilities';


const Form = ({ create, loading }) => {
    const [techNum, setTechNum] = useState(1)
    const [formData, setFormData] = useState({
        title: '',
        preview: null,
        demo: '',
        code: '',
        desc: '',
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
        // I add an empty string to the formData.tech array to make newly added tech input a controlled input.
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

    const submitFormHandler = e => {
        e.preventDefault()
        create(formData)
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
        <form className={classes.Form} onSubmit={submitFormHandler}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={onChangeHandler}/>
            <label htmlFor="demo">Demo Link</label>
            <input type="text" id="demo" name="demo" value={formData.demo} onChange={onChangeHandler}/>
            <label htmlFor="code">Code Link</label>
            <input type="text" id="code" name="code" value={formData.code} onChange={onChangeHandler}/>
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" value={formData.desc} onChange={onChangeHandler}></textarea>
            <label htmlFor="preview">Preview</label>
            <input type="file" name="preview" id="preview" accept="image/png, image/jpeg" onChange={onChangeHandler}/>
            <div className={classes.Technologies}>{techElements}</div>
            <div className={classes.ButtonsWrapper}>
                <PrimaryButton type="button" onClick={addInputHandler}>Add Tech</PrimaryButton>
                <PrimaryButton type="button" onClick={deleteInputHandler}>Delete Tech</PrimaryButton>
                <PrimaryButton type="submit" disabled={loading} onClick={submitFormHandler}>{loading ? 'Loading...' : 'Submit'}</PrimaryButton>
            </div>
        </form>
    )
}

export { Form }