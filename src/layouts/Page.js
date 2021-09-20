import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ListVinyls from '../pages/ListVinylsPage';
import VinylPage from '../pages/VinylPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/list-vinyls" component={ListVinyls} />
        <Route path="/vinyl/:id" component={VinylPage} />
      </Switch>
    </>
  );
}

export default Page;