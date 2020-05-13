import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Apartaments from '../pages/Apartaments';
import Residents from '../pages/Residents';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/apartaments" component={Apartaments} />
        <Route path="/residents/:id" component={Residents} />
    </Switch>
)

export default Routes;