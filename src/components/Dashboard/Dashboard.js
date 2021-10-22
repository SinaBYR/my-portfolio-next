import { useState } from 'react';
import classes from './Dashboard.module.css';
import { Form } from './Form/Form';
import axios from '../../axios/axios';
import { Header } from './Header/Header';
import { Projects } from './Projects/Projects';

const Dashboard = () => {
    const [loading, setLoading] = useState(false)
    const create = async formData => {
        const form = new FormData()
        form.append('title', formData.title)
        form.append('desc', formData.desc)
        form.append('demo', formData.demo)
        form.append('code', formData.code)
        form.append('tech', formData.tech)
        form.append('preview', formData.preview)
        const response = await axios.post('/projects', form)
        const data = await response.data;
        console.log(data)
    }

    return (
        <div className={classes.Dashboard}>
            <div className={classes.DashboardWrapper}>
                <Header />
                <Projects />
                {/* <Form create={create} loading={loading}/> */}
            </div>
        </div>
    )
}

export { Dashboard }