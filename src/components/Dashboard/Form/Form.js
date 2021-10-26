import classes from './Form.module.css';
import { useState } from 'react';
import { PrimaryButton } from '../../Utilities';
import { setTouched, setValues, setErrors } from './form-data';

const Form = ({ submit, loading, error }) => {
    const [techNum, setTechNum] = useState(1)
    // const [imagePreview, setImagePreview] = useState(null)
    const [formData, setFormData] = useState({
        title: {
            value: '',
            error: null,
            touched: false
        },
        preview: {
            value: null,
            error: null,
            touched: false
        },
        demo: {
            value: '',
            error: null,
            touched: false
        },
        code: {
            value: '',
            error: null,
            touched: false
        },
        description: {
            value: '',
            error: null,
            touched: false
        },
        tech: {
            value: [''],
            error: null,
            touched: false
        },
        imagePreview: null
    })

    const addInputHandler = () => {
        // I add an empty string to the formData.tech array to turn newly added tech input into a controlled input.
        const newTechArray = [...formData.tech.value]
        newTechArray.push('')
        setFormData({
            ...formData,
            tech: {
                ...formData.tech,
                value: newTechArray
            }
        })
        setTechNum(techNum + 1)
    }

    const deleteInputHandler = () => {
        if(techNum < 2) {
            return
        }

        const newTechArray = [...formData.tech.value]
        newTechArray.pop()

        setFormData({
            ...formData,
            tech: {
                ...formData.tech,
                value: newTechArray
            }
        })
        setTechNum(techNum - 1)
    }

    const onSubmitHandler = e => {
        e.preventDefault()

        const data = new FormData()
        data.append('title', formData.title.value)
        data.append('description', formData.description.value)
        data.append('demo', formData.demo.value)
        data.append('code', formData.code.value)
        data.append('tech', formData.tech.value)
        data.append('preview', formData.preview.value)

        // submit(data)
        console.log(formData)
        // if(!error) {
        //     setFormData({
        //         title: '',
        //         preview: null,
        //         demo: '',
        //         code: '',
        //         description: '',
        //         tech: ['']
        //     })
        // }
    }

    const onChangeHandler = e => {
        setFormData(setValues(formData, e))
    }

    const onFocusHandler = e => {
        setFormData(setTouched(formData, e))
    }
    
    const onBlurHandler = e => {
        setFormData(setErrors(formData, e))
    }

    let techElements = Array.from(new Array(techNum)).map((num, i) => {
        return (
            <div key={i}>
                <label htmlFor="tech">Tech {i + 1}</label>
                <input
                    type="text"
                    name="tech"
                    id={i}
                    value={formData.tech.value[i]}
                    onChange={onChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    />
           </div>
        )
    })

    return (
        <form className={classes.Form} onSubmit={onSubmitHandler}>
            {error && <div className={classes.Error}>{error}</div>}
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title.value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                />
            <label htmlFor="demo">Demo Link</label>
            <input
                type="text"
                id="demo"
                name="demo"
                value={formData.demo.value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                />
            <label htmlFor="code">Code Link</label>
            <input
                type="text"
                id="code"
                name="code"
                value={formData.code.value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                />
            <label htmlFor="description">Description</label>
            <textarea
                name="description"
                id="description"
                value={formData.description.value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                ></textarea>
            <label htmlFor="preview">Preview</label>
            <input
                type="file"
                name="preview"
                id="preview"
                accept="image/png, image/jpeg"
                // value={formData.preview.value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                />
            {
                formData.imagePreview ? <img className={classes.Preview} src={formData.imagePreview} alt="upload-preview" /> : null
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