import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Sidebar from '../sidebar/Sidebar';
import Account from '../../../pages/users/information/Information';
import Shipping from '../../../pages/users/shipping/Shipping';
import Payments from '../payments/Payments';
import Orders from '../orders/Orders';

const UserRoutes = () => {
  return (
    <Switch>
      <Route path='/user:id' exact>
        <div className='columns'>
          <Sidebar/>
          <Account/>
        </div>
        </Route>
        <Route path='/user:id/user-information'>
          <div className='columns'>
            <Sidebar/>
            <Account/>
          </div>
        </Route>
        <Route path='/user:id/shipping-information'>
          <div className='columns'>
            <Sidebar/>
            <Shipping/>
          </div>
        </Route>
      <Route path='/user:id/payment-information'>
        <div className='columns'>
          <Sidebar/>
          <Payments/>
        </div>
      </Route>
      <Route path='/user:id/orders'>
        <div className='columns'>
          <Sidebar />
          <Orders />
        </div>
      </Route>
      </Switch>
  );
};

export default UserRoutes
