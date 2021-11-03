import React from 'react';
import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainContainer, ErrorContainer, ReportContainer } from '../containers';

const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path='/' component={MainContainer} exact />
        <Route path='/error' component={ErrorContainer} exact />
        <Route path='/report' component={ReportContainer} exact />
      </Switch>
    </>
  );
};

export default MainRouter;
