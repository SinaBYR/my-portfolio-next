import { useState } from 'react';
import { SecondaryButton } from '../Utilities';
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

    const addInputHandler = () => {
        setTechNum(techNum + 1)
    }

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

    const deleteInputHanlder = e => {

    }

    let techElements = Array.from(new Array(techNum)).map((num, i) => {
        return (
            <div key={i}>
                <div className={classes.Label}>
                    {/* <label htmlFor="tech">Tech {i + 1}</label> */}
                    <span className={classes.Remove}>remove</span>
                </div>
                <input type="text" name="tech" id={i} onChange={onChangeHandler}/>
           </div>
        )
    })

    console.log(techElements)

    return (
        <div className={classes.CreateProject}>
            <div className={classes.CreateProjectWrapper}>
                <h2>Create Project</h2>
                <form className={classes.Form}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" onChange={onChangeHandler}/>
                    <label htmlFor="demo">Demo Link</label>
                    <input type="text" id="demo" name="demo" onChange={onChangeHandler}/>
                    <label htmlFor="code">Code Link</label>
                    <input type="text" id="code" name="code" onChange={onChangeHandler}/>
                    <label htmlFor="desc">Description</label>
                    <textarea name="desc" id="desc" onChange={onChangeHandler}/>
                    <div className={classes.Technologies}>
                        {techElements}
                    </div>
                        <div className={classes.Buttons}>
                            <SecondaryButton type="button" onClick={addInputHandler}>Add Tech</SecondaryButton>
                            <SecondaryButton type="button" onClick={deleteInputHanlder}>Delete Tech</SecondaryButton>
                        </div>
                </form>
            </div>
            <button onClick={() => console.log(formData)}>Send Data</button>
        </div>
    )
}

export { CreateProject }