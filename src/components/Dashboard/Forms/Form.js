import classes from './Form.module.css';
import { useState } from 'react';
import { ErrorMessage, PrimaryButton } from '../../Utilities';
import { setTouched, setValues, setErrors, isValid } from './form-data';
import ScaleLoader from 'react-spinners/ScaleLoader';
// import { useEffect } from 'react';
import { Input } from './Input/Input';

const Form = ({ initialData, submit, loading, error }) => {
    const [techNum, setTechNum] = useState(1)
    const [formData, setFormData] = useState({
        title: {
            value: '',
            error: null,
            touched: false
        },
        preview: {
            value: '',
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
        // When I want to post or patch form data to the server, I simply create a FormData instance and then
        // append formData state values to this FormData instance one by one. This approach is fine because express 
        // expects multipart/form-data.
        // I use multer behind the scenes in web api to handle form body and form files.
        // When this component first mounts, formData.preview.value is set to a Binary type file.
        // If I were to change preview file, then I would need to set formData.preview.file to a File type file.
        // If I didn't want to change preview file, then I refuse to append formData.preview.value (which still is a Binary type file) to the FormData instance.
        if(formData.preview.value?.type.includes('image')) {
            data.append('preview', formData.preview.value)
        }
        formData.tech.value.forEach(value => {
            data.append('tech[]', value)
        })
        console.log(formData)
        console.log(isValid(formData))
        if(!isValid(formData)) {
            return
        }
        
        // submit(data)
    }

    // useEffect(() => {
    //     if(initialData && Object.keys(initialData).length) {
    //         const fields = ['title', 'description', 'code', 'demo', 'preview', 'tech']
    //         const newFormData = {...formData}
    //         fields.forEach(field => {
    //             newFormData[field] = {
    //                 ...newFormData[field],
    //                 touched: true,
    //                 value: initialData[field]
    //             }
    //         })
    //         setFormData(newFormData)
    //         setTechNum(initialData.tech?.length)
    //     }
    // }, [initialData])

    // console.log(formData)

    let techElements = Array.from(new Array(techNum)).map((num, i) => {
        return (
            <Input
                key={i}
                type="text"
                label={"Tech " + (i + 1)}
                name="tech"
                id={i}
                value={formData.tech.value && formData.tech.value[i]}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />
        )
    })

    return (
        <form className={classes.Form} onSubmit={onSubmitHandler}>
            {error && <div className={classes.Error}>{error.message}</div>}
            <Input
                key="title"
                type="text"
                label="Title"
                name="title"
                id="title"
                value={formData.title.value}
                error={formData.title.error}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                />
            <Input
                key="demo"
                type="text"
                label="Demo Link"
                id="demo"
                name="demo"
                value={formData.demo.value}
                error={formData.demo.error}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                />
            <Input
                key="code"
                type="text"
                label="Code Link"
                id="code"
                name="code"
                value={formData.code.value}
                error={formData.code.error}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                />
            <Input
                key="description"
                type="textarea"
                label="Description"
                name="description"
                id="description"
                value={formData.description.value}
                error={formData.description.error}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                />
            <Input
                key="preview"
                type="file"
                label="Preview"
                name="preview"
                id="preview"
                accept="image/png, image/jpeg"
                error={formData.preview.error}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                />
            {/* {
                formData.preview.value
                ?
                <img
                    className={classes.Preview}
                    src={"data:image/jpg;base64," + formData.preview.value.data.toString()}
                    alt="upload-preview" />
                :
                null
            } */}
            
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
                        initialData ? 'Update' : 'Create'
                    }
                </PrimaryButton>
            </div>
        </form>
    )
}

export { Form }