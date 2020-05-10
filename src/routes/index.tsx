import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Apartaments from '../pages/Apartaments';
import Residents from '../pages/Residents';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/apartaments" component={Apartaments} />
        <Route path="/residents" component={Residents} />
    </Switch>
)

export default Routes;