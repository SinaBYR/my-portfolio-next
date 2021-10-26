import classes from './Form.module.css';
import { useState } from 'react';
import { ErrorMessage, PrimaryButton } from '../../Utilities';
import { setTouched, setValues, setErrors, isValid } from './form-data';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Form = ({ submit, loading, error }) => {
    const [techNum, setTechNum] = useState(1)
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
        }
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

    const onChangeHandler = e => {
        setFormData(setValues(formData, e))
    }

    const onFocusHandler = e => {
        setFormData(setTouched(formData, e))
    }

    const onBlurHandler = e => {
        setFormData(setErrors(formData, e))
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

        if(!isValid(formData)) {
            return
        }

        submit(data)
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
            {error && <div className={classes.Error}>{error.message}</div>}
            <label htmlFor="title">Title</label>
            <ErrorMessage>{formData.title.error}</ErrorMessage>
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
            <ErrorMessage>{formData.demo.error}</ErrorMessage>
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
            <ErrorMessage>{formData.code.error}</ErrorMessage>
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
            <ErrorMessage>{formData.description.error}</ErrorMessage>
            <textarea
                name="description"
                id="description"
                value={formData.description.value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                ></textarea>
            <label htmlFor="preview">Preview</label>
            <ErrorMessage>{formData.preview.error}</ErrorMessage>
            <input
                type="file"
                name="preview"
                resize="off"
                id="preview"
                accept="image/png, image/jpeg"
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                />
            {
                formData.preview.value
                ?
                <img
                    className={classes.Preview}
                    src={URL.createObjectURL(formData.preview.value)}
                    alt="upload-preview" />
                :
                null
            }
            
            <ErrorMessage>{formData.tech.error}</ErrorMessage>
            <div className={classes.Technologies}>{techElements}</div>
            <div className={classes.ButtonsWrapper}>
                <PrimaryButton type="button" onClick={addInputHandler}>Add Tech</PrimaryButton>
                <PrimaryButton type="button" onClick={deleteInputHandler}>Delete Tech</PrimaryButton>
                <PrimaryButton type="submit" onClick={onSubmitHandler} disabled={loading}>
                    {
                        loading
                        ?
                        <ScaleLoader color="#eeeeee" height="10px" radius="2px"/>
                        :
                        'Submit'
                    }
                </PrimaryButton>
            </div>
        </form>
    )
}

export { Form }