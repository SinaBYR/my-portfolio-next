import classes from './Dashboard.module.css';
import { Header } from './Header/Header';
import { Projects } from './Projects/Projects';
import { Route, Switch } from 'react-router';
import { Create } from './Create/Create';
import { Edit } from './Edit/Edit';

const Dashboard = () => {
    return (
        <div className={classes.Dashboard}>
            <div className={classes.DashboardWrapper}>
                <Header />
                <Switch>
                    <Route path="/create" component={Create}/>
                    <Route path="/:projectID" component={Edit}/>
                    <Route path="/" component={Projects}/>
                </Switch>
            </div>
        </div>
    )
}

export { Dashboard }