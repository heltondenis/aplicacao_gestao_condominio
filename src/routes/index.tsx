import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Apartaments from '../pages/Apartaments';
import Residents from '../pages/Residents';
import EditApartament from '../pages/Apartaments/Edit-apartaments';
import EditResident from '../pages/Residents/Edit-residents';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/apartaments" component={Apartaments} />
        <Route path="/residents/:id" component={Residents} />
        <Route path="/edit-resident/:id" component={EditResident} />
        <Route path="/edit-apartament/:id/:number/:block" component={EditApartament} />
    </Switch>
)

export default Routes;