import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import CreateAccount from '../pages/CreateAccount';
import RecoveryPassword from '../pages/RecoveryPassword';
import MyAccount from '../pages/MyAccount'
import NewPassword from '../pages/NewPassword'
import Orders from '../pages/Orders'
import '../styles/global.css'
import Checkout from '../pages/Checkout';
import SendEmail from '../pages/SendEmail';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {

  const initialState = useInitialState();
  return (
    <AppContext.Provider value={ initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/recovery-password" component={RecoveryPassword} />
            <Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/new-password" component={NewPassword} />
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/signup" component={CreateAccount} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route path="*" component={NotFound} />

          </Switch>
        </Layout>

      </BrowserRouter>

    </AppContext.Provider>


  );
}

export default App;