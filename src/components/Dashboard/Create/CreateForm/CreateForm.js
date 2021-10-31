import classes from './CreateForm.module.css';
import { useState } from 'react';
import { ConfirmButton, ErrorMessage, PrimaryButton } from '../../../Utilities';
import { Input } from '../../Input/Input';
import { ScaleLoader } from 'react-spinners'
import { setValues, isValid } from './handlers';

const CreateForm = ({ submit, loading, error}) => {
    const [formData,setFormData] = useState({
        title: '',
        preview: null,
        demo: '',
        code: '',
        description: '',
        tech: ['']
    })
    const addInputHandler = () => {
        // I add an empty string to the formData.tech to turn newly added tech input into a controlled input.
        const newTechArray = [...formData.tech]
        newTechArray.push('')
        setFormData({
            ...formData,
            tech: newTechArray
        })
    }
    const deleteInputHandler = () => {
        if(formData.tech.length < 2) {
            return
        }

        const newTechArray = [...formData.tech]
        newTechArray.pop()

        setFormData({
            ...formData,
            tech: newTechArray
        })
    }
    const onChangeHandler = e => {
        setFormData(setValues(formData, e))
    }
    const onSubmitHandler = e => {
        e.preventDefault()

        const data = new FormData()
        Object.keys(formData).forEach(field => {
            if(field === 'tech') {
                return formData[field].forEach(value => {
                    data.append('tech[]', value)
                })
            }

            data.append(field, formData[field])
        })

        if(!isValid(formData)) {
            return
        }

        submit(data)
    }

    let techElements = formData.tech.map((_, i) => {
        return (
            <Input
                key={i}
                type="text"
                label={"Tech " + (i + 1)}
                name="tech"
                id={i}
                value={formData.tech[i]}
                onChange={onChangeHandler}
            />
        )
    })

    return (
        <div className={classes.CreateForm}>
            <form className={classes.Form} onSubmit={onSubmitHandler}>
                {error && <ErrorMessage>{error.message}</ErrorMessage>}
                <Input
                    key="title"
                    type="text"
                    label="Title"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={onChangeHandler}
                    />
                <Input
                    key="demo"
                    type="text"
                    label="Demo Link"
                    id="demo"
                    name="demo"
                    value={formData.demo}
                    onChange={onChangeHandler}
                    />
                <Input
                    key="code"
                    type="text"
                    label="Code Link"
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={onChangeHandler}
                    />
                <Input
                    key="description"
                    type="textarea"
                    label="Description"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={onChangeHandler}
                    />
                <Input
                    key="preview"
                    type="file"
                    label="Preview"
                    name="preview"
                    id="preview"
                    accept="image/png, image/jpeg"
                    onChange={onChangeHandler}
                    />
                {
                    formData.preview
                    ?
                    <img
                        className={classes.Preview}
                        src={URL.createObjectURL(formData.preview)}
                        alt="upload-preview" />
                    :
                    null
                }
                
                <div className={classes.Technologies}>{techElements}</div>
                <div className={classes.ButtonsWrapper}>
                    <PrimaryButton type="button" onClick={addInputHandler}>Add Tech</PrimaryButton>
                    <PrimaryButton type="button" onClick={deleteInputHandler}>Delete Tech</PrimaryButton>
                    <ConfirmButton type="submit" onClick={onSubmitHandler} disabled={loading || !isValid(formData)}>
                        {
                            loading
                            ?
                            <ScaleLoader color="#eeeeee" height="10px" radius="2px"/>
                            :
                            'Create'
                        }
                    </ConfirmButton>
                </div>
            </form>
        </div>
    )
}

export { CreateForm }