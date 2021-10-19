import { useState } from 'react';
import { PrimaryButton } from '../Utilities';
import classes from './CreateProject.module.css';

const CreateProject = () => {
    const [techNum, setTechNum] = useState(1)
    const [formData, setFormData] = useState({
        title: '',
        demo: '',
        code: '',
        desc: '',
        tech: []
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

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const addInputHandler = () => {
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

        console.log(formData)
    }

    let techElements = Array.from(new Array(techNum)).map((num, i) => {
        return (
            <div key={i}>
                <label htmlFor="tech">Tech {i + 1}</label>
                <input type="text" name="tech" id={i} onChange={onChangeHandler}/>
           </div>
        )
    })

    return (
        <div className={classes.CreateProject}>
            <div className={classes.CreateProjectWrapper}>
                <h2>Create Project</h2>
                <form className={classes.Form}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={onChangeHandler}/>
                    <label htmlFor="demo">Demo Link</label>
                    <input type="text" id="demo" name="demo" value={formData.demo} onChange={onChangeHandler}/>
                    <label htmlFor="code">Code Link</label>
                    <input type="text" id="code" name="code" value={formData.code} onChange={onChangeHandler}/>
                    <label htmlFor="desc">Description</label>
                    <textarea name="desc" id="desc" value={formData.desc} onChange={onChangeHandler}/>
                    <div className={classes.Technologies}>{techElements}</div>
                    <div className={classes.ButtonsWrapper}>
                        <PrimaryButton type="button" onClick={addInputHandler}>Add Tech</PrimaryButton>
                        <PrimaryButton type="button" onClick={deleteInputHandler}>Delete Tech</PrimaryButton>
                        <PrimaryButton type="button" onClick={submitFormHandler}>Submit</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { CreateProject }