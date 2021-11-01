import React from 'react';
import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainContainer } from '../containers';

const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path='/' component={MainContainer} exact />
      </Switch>
    </>
  );
};

export default MainRouter;
